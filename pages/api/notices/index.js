import connectDB from "../../../utils/connectDB";
import Notices from "../../../models/noticeModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createNotice(req, res);
      break;
    case "GET":
      await getNotices(req, res);
      break;
  }
};

const createNotice = async (req, res) => {
  try {
    const { title, file } = req.body;

    const newNotice = new Notices({
      title,
      file,
      dateOfPost: new Date().toISOString(),
    });
    await newNotice.save();
    res.json({ msg: "Notice saved successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getNotices = async (req, res) => {
  try {
    const filter = JSON.parse(req.query.query);
    const sort = JSON.parse(req.query.sort);
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const data = await Notices.find({
      $and: [filter, { done: false }],
    })
      .skip(skip)
      .limit(limit)
      .sort(sort);

    const totalItem = await Notices.find({ done: false });

    res.setHeader("x-total-count", parseInt(totalItem.length)).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
