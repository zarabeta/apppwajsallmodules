
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { useState } from "react";

//FIC: DB
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import {getEntregas} from '../../../../core/api/entregas';

import { Box, Stack, Tooltip, Button, IconButton, Dialog, darken } from "@mui/material";
import ShippingsStaticData from '../../../../../db/ecommerce/json/shippings/ShippingsData';
import { useEffect } from 'react';

//FIC: Columns Table Definition.
const ShippingsColumns = [
    {
      accessorKey: "IdEntregaOK",
      header: "Address ID",
      size: 30, //small column
    },
    {
      accessorKey: "IdPaqueteriaOK",
      header: "Courier ID",
      size: 30, //small column
    },
    {
      accessorKey: "IdTipoMetodoEnvio",
      header: "Metodo de envio",
      size: 150, //small columnz
    },
    {
      accessorKey: "CostoEnvio",
      header: "Costo",
      size: 50, //small column
    },
  ];
  
//FIC: Table - FrontEnd.


  const ShippingsTable = () => {

    const [data,setData] = useState({});
    useEffect(()=>{
      setData(getEntregas)
    },[]);

    console.log(getEntregas)
    return (
      <Box>
        <Box> 
          <MaterialReactTable
          initialState={{ density: "compact", showGlobalFilter: true }}
          columns={ShippingsColumns}
          data={getEntregas}
          renderTopToolbarCustomActions={({ table }) => (
            <>
              {/* ------- BARRA DE ACCIONES ------ */}
              <Stack direction="row" sx={{ m: 1 }}>
                <Box>
                  <Tooltip title="Agregar">
                    <IconButton 
                    onClick={() => setAddShippingShowModal(true)}>
                      <AddCircleIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Detalles ">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>
              {/* ------- BARRA DE ACCIONES FIN ------ */}
            </>
          )}
          />
        </Box>
      </Box> 
    )
    
  };
  export default ShippingsTable;