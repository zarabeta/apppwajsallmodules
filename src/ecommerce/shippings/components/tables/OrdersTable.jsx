
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, Button, IconButton, Dialog } from "@mui/material";
import { useState } from "react";
//FIC: DB
import OrdersStaticData from '../../../../../db/ecommerce/json/orders/OrdersData';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
//FIC: Columns Table Definition.
const OrdersColumns = [
    {
      accessorKey: "IdInstitutoOK",
      header: "ID Institute",
      size: 30, //small column
    },
    {
      accessorKey: "IdNegocioOK",
      header: "ID Business",
      size: 30, //small column
    },
    {
      accessorKey: "IdEntregaOK",
      header: "Order ID",
      size: 150, //small columnz
    },
    {
      accessorKey: "IdEntregaBK",
      header: "Backup Delivery ID",
      size: 50, //small column
    },
    {
      accessorKey: "IdOrdenOK",
      header: "Delivery ID",
      size: 30, //small column
    },
  ];
  
//FIC: Table - FrontEnd.
 

  const OrdersTable = () => {

    const [data,setData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
      setData(OrdersStaticData)
    },[]);

    const handleRowClick = (row) => {
      const orderId = row.original.IdEntregaOK;
      navigate(`/shippings/${orderId}`);
    };
  
    return (
      <Box>
        <Box>
          <MaterialReactTable
          initialState={{ density: "compact", showGlobalFilter: true }}
          columns={OrdersColumns}
          data={OrdersStaticData}
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
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => handleRowClick(row),
            style: { cursor: 'pointer' }, // Change cursor to pointer on hover
          })}

          />
        </Box>
      </Box> 
    )
    
  };
  export default OrdersTable;