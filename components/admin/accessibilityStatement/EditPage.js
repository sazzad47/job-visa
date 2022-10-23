import { useEffect } from "react";
import { getData, putData } from "../../../utils/fetchData";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import SaveIcon from "@mui/icons-material/Save";
const EditPage = ({ pageName }) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await putData(
      `${pageName}/1`,
      {
        title,
        shortDescription,
        body,
      },
      auth.token
    );
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };
  useEffect(async () => {
    setLoading(true);
    const res = await getData(`${pageName}?index=1`);
    let title = res.data.title;
    let shortDescription = res.data.shortDescription;
    let body = res.data.body;
    setTitle(title);
    setShortDescription(shortDescription);
    setBody(body);
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {!loading ? (
        <div className="p-3">
          <form onSubmit={handleSubmit} className="mt-3">
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <label className="font-weight-bold"> Short Description </label>
                <EditorToolbar toolbarId={"t1"} />
                <ReactQuill
                  theme="snow"
                  value={shortDescription}
                  onChange={(value) => setShortDescription(value)}
                  placeholder={"Write something awesome..."}
                  modules={modules("t1")}
                  formats={formats}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <label className="font-weight-bold"> Body </label>
                <EditorToolbar toolbarId={"t2"} />
                <ReactQuill
                  theme="snow"
                  value={body}
                  onChange={(value) => setBody(value)}
                  placeholder={"Write something awesome..."}
                  modules={modules("t2")}
                  formats={formats}
                />
              </Grid>
            </Grid>
            <Button
              disabled={!body}
              style={{ margin: "2rem 0" }}
              variant="contained"
              type="submit"
            >
              <SaveIcon /> Save
            </Button>
          </form>
        </div>
      ) : (
        "Loading.."
      )}
    </React.Fragment>
  );
};

export default EditPage;
