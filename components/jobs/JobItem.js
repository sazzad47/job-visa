import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import Link from "next/link";
import DownloadPDF from "../DownloadPDF";

const JobItem = ({ item }) => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          className="job-post-container"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid className="d-flex justify-content-between">
              <Typography gutterBottom variant="h5" component="h2">
                Job ID: {item.index}
              </Typography>
              <DownloadPDF url={item.file} />
            </Grid>
            <Typography>
              {new Date(item.createdAt).toLocaleDateString()}
            </Typography>
            <Typography>{item.title}</Typography>
            <Grid className="d-flex mt-2">
              <Grid className="me-2">
                <PaymentsIcon color="primary" />
              </Grid>
              <Typography> Average Salary: ${item.salary} </Typography>
            </Grid>
            <Grid className="d-flex mt-2">
              <Grid className="me-2">
                <LocationOnIcon color="primary" />
              </Grid>
              <Typography> Country: {item.country} </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Link href="/apply/jobs">
              <Button size="small">Apply</Button>
            </Link>
            <Button size="small">
              <a style={{ textDecoration: "none" }} href={`${item.file}`}>
                View
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default JobItem;
