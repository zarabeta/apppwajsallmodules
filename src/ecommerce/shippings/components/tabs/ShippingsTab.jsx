import { Box } from "@mui/material";
import ProductosTable from "../tables/ProductosTable";
import ShippingsTable from "../tables/ShippingsTable";
export default function ShippingsTab() {
    return (
 
      <Box>
            <h2>Shippings</h2>
            <ShippingsTable />
      </Box>
 
    );
}