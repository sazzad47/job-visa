import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import SaveIcon from "@mui/icons-material/Save";
import { postData } from "../../../utils/fetchData";
import { imageUpload } from "../../../utils/imageUpload";
import { countries } from "../../data";
import { useState } from "react";
import FileUpload from "react-material-file-upload";

const JobCreate = () => {
  const initialState = { title: "", country: "", salary: "", file: "" };
  const [data, setData] = useState(initialState);
  const { title, country, salary, file } = data;
  const [files, setFiles] = useState([]);
  const selectedFile = files[0];

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let media;
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    if (selectedFile) media = await imageUpload([selectedFile]);

    const res = await postData(
      "jobs",
      {
        ...data,
        file: media[0],
      },
      auth.token
    );

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            multiline
            name="title"
            value={title}
            label="Title"
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              fullWidth
              name="country"
              value={country}
              onChange={handleChangeInput}
            >
              {countries.map((item, i) => (
                <MenuItem key={i} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            multiline
            type="number"
            name="salary"
            value={salary}
            label="Average Salary(USD)"
            onChange={handleChangeInput}
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
        <SaveIcon /> Save
      </Button>
    </form>
  );
};
export default JobCreate;
