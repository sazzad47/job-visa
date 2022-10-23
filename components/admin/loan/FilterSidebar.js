import { FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const FilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
    <CardContent>
      <FilterLiveSearch label="User ID" source="userId" />
      <FilterList label="Approval" icon={<CategoryIcon />}>
        <FilterListItem label="Pending" value={{ status: "pending" }} />
        <FilterListItem label="Approved" value={{ status: "approved" }} />
        <FilterListItem label="Declined" value={{ status: "declined" }} />
      </FilterList>
    </CardContent>
  </Card>
);
