import connectDB from "../../../utils/connectDB";
import Jobs from "../../../models/jobModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getJobs(req, res);
      break;
  }
};

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);
    if (queryObj.country !== "all")
      this.query.find({ country: queryObj.country });
    if (queryObj.title !== "all")
      this.query.find({ title: { $regex: queryObj.title } });
    this.query.find();
    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join("");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("createdAt");
    }
    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const getJobs = async (req, res) => {
  try {
    const features = new APIfeatures(Jobs.find(), req.query)
      .filtering()
      .sorting()
      .paginating();
    const data = await features.query;
    console.log("jossss", req.query);
    res.json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
