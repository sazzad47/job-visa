import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits({ title, number }) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {number}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today}
      </Typography>
      <div></div>
    </React.Fragment>
  );
}
