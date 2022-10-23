import { Button } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useRecordContext } from "react-admin";
import { savePDF } from "@progress/kendo-react-pdf";

const GeneratePDFButton = ({ title }) => {
  const record = useRecordContext();
  if (!record) return null;
  const generatePDF = () => {
    let element = document.getElementById("exportToPDF");
    savePDF(element, {
      pageSize: "A4",
      margin: 40,
      title: `Job Application No ${record.index}`,
      fileName: `${title} Application No ${record.index}`,
    });
  };

  return (
    <Button color="primary" onClick={generatePDF}>
      <TextSnippetIcon className="me-2" sx={{ fontSize: "0.9rem" }} /> Generate
      PDF
    </Button>
  );
};

export default GeneratePDFButton;
