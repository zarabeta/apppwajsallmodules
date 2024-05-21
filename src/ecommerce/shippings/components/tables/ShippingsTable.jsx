
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box } from "@mui/material";
import { useState } from "react";
//FIC: DB
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
      setData(ShippingsStaticData)
    },[]);

    console.log(data)
    return (
      <Box>
        <Box>
          <MaterialReactTable
          initialState={{ density: "compact", showGlobalFilter: true }}
          columns={ShippingsColumns}
          data={ShippingsStaticData}
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