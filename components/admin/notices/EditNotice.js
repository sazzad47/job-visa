import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  useRecordContext,
} from "react-admin";
import { DataContext } from "../../../store/GlobalState";
import { putData } from "../../../utils/fetchData";
import { countries } from "../../data";
import FileUpload from "react-material-file-upload";
import SaveIcon from "@mui/icons-material/Save";
import { imageUpload } from "../../../utils/imageUpload";
const ApplicationTitle = ({ setID, setTitle, setFile }) => {
  const record = useRecordContext();
  if (!record) return null;

  useEffect(() => {
    setID(record.id);
    setTitle(record.title);
    setFile(record.file);
  }, []);

  return <span>{`Application No ${record.index}`}</span>;
};

const EditNotice = (props) => {
  const [id, setID] = useState("");
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const selectedFile = files[0];
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const handleUpdate = async (e) => {
    e.preventDefault();

    let media;
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    console.log("state", file);
    if (selectedFile) media = await imageUpload([selectedFile]);

    const res = await putData(
      `notices/${id}`,
      {
        title,
        file: media[0],
      },
      auth.token
    );

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  return (
    <Edit
      title={
        <ApplicationTitle setID={setID} setTitle={setTitle} setFile={setFile} />
      }
      {...props}
    >
      <form onSubmit={handleUpdate} style={{ padding: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              multiline
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid className="mt-3">
          <FileUpload value={files} onChange={setFiles} />
        </Grid>
        <Button
          disabled={!selectedFile}
          style={{ marginTop: "1rem" }}
          variant="contained"
          type="submit"
        >
          <SaveIcon /> Update
        </Button>
      </form>
    </Edit>
  );
};

export default EditNotice;
