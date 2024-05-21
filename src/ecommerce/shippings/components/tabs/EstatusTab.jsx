import { Box } from "@mui/material";
import ProductosTable from "../tables/ProductosTable";
import EstatusTable from "../tables/EstatusTable";
export default function EstatusTab() {
  return (

    <Box>
      <h2>Estatus</h2>
      <EstatusTable />
    </Box>

  );
}