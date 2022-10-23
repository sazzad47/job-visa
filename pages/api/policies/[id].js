import connectDB from "../../../utils/connectDB";
import Page from "../../../models/policyModel";
import auth from "../../../middleware/auth";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await updatePage(req, res);
      break;
  }
};

const updatePage = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin")
      return res.status(400).json({ err: "Authentication is not valid." });
    const { id } = req.query;
    const { title, shortDescription, body } = req.body;

    await Page.findOneAndUpdate(
      { index: id },
      {
        title,
        shortDescription,
        body,
      }
    );
    res.json({ msg: "Success! Page updated" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
