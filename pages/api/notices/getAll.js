import connectDB from "../../../utils/connectDB";
import Notices from "../../../models/noticeModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getNotices(req, res);
      break;
  }
};

const getNotices = async (req, res) => {
  try {
    const data = await Notices.find({ done: false });

    res.json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
