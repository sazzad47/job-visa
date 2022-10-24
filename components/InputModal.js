import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InputModal({
  handleInput,
  showOther,
  name,
  label,
  placeholder,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputField = React.useRef(null);
  const value = inputField?.current?.value;

  const handleSubmit = () => {
    if (!value) return;
    showOther(false);
    handleClose();
  };
  return (
    <div>
      <FormControlLabel
        onClick={handleOpen}
        control={<Radio />}
        label="Other"
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <input
              className="custom-input"
              ref={inputField}
              name={name}
              onChange={handleInput}
              required
              fullWidth
              label={label}
              placeholder={placeholder}
              variant="outlined"
            />
            <Grid className="d-flex justify-content-between mt-4">
              <Button variant="contained" onClick={handleSubmit}>
                submit
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                close
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
