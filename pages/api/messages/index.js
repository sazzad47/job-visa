import connectDB from "../../../utils/connectDB";
import Messages from "../../../models/messageModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await postMessage(req, res);
      break;
    case "GET":
      await getMessages(req, res);
      break;
  }
};

const postMessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const newMessage = new Messages({
      name,
      phone,
      email,
      message,
    });
    await newMessage.save();
    res.json({ msg: "Thank you" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const filter = JSON.parse(req.query.query);
    const sort = JSON.parse(req.query.sort);
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);

    const data = await Messages.find({
      $and: [filter, { done: false }],
    })
      .skip(skip)
      .limit(limit)
      .sort(sort);
    const totalItem = await Messages.find({ done: false });

    res.setHeader("x-total-count", parseInt(totalItem.length)).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
