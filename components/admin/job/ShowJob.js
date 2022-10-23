import {
  FileField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  useRecordContext,
} from "react-admin";

import GeneratePDFButton from "./GeneratePDFButton";

const ApplicationTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return <span>{`Job No ${record.index}`}</span>;
};

const ApplicationActions = () => (
  <TopToolbar>
    <GeneratePDFButton title="Job" />
  </TopToolbar>
);

const ShowJob = (props) => (
  <>
    <Show
      {...props}
      title={<ApplicationTitle />}
      actions={<ApplicationActions />}
    >
      <SimpleShowLayout id="exportToPDF">
        <TextField label="Title" source="title" />
        <TextField label="Country" source="country" />
        <FileField source="file" title="PDF" />
      </SimpleShowLayout>
    </Show>
  </>
);

export default ShowJob;
