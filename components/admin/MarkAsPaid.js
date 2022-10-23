import { Button } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { useNotify, useRecordContext } from "react-admin";
import { putData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
import { useContext } from "react";
const MarkAsPaid = ({ resource }) => {
  const notify = useNotify();
  const record = useRecordContext();
  if (!record) return null;
  const { state } = useContext(DataContext);
  const { auth } = state;
  const mark = () => {
    let id = record.id;

    putData(`${resource}/${id}?paid=true`, auth.token);
    notify("Marked as paid!", { type: "success" });
  };
  return (
    <Button color="primary" onClick={mark}>
      <PriceCheckIcon className="me-2" sx={{ fontSize: "0.9rem" }} /> Mark As
      Paid
    </Button>
  );
};

export default MarkAsPaid;
