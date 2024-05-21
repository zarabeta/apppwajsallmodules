//FIC: React
import React, { useEffect, useState } from "react";
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, Button, IconButton, Dialog, darken } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import ProductosData from "../../../../../db/ecommerce/json/products/ProductosData"
//FIC: DB
// import { GetAllSubdoc } from "../../services/remote/get/GetAllInfoAd";
//import { GetEnviosId } from "../../services/remote/get/GetEnviosId";

//FEAK: MODALS
//import ProductosModal from "../ProductosModal";

//REDUX
import { useSelector } from "react-redux";
//import { SET_SELECTED_SHIPPING_DATA } from "../../../redux/slices/shippingsSlice";

//FIC: Columns Table Definition.
const ProductosColumns = [
    {
      accessorKey: "IdProdServOK",
      header: "Producto id",
      size: 30, //small column
    },
    {
      accessorKey: "DesProdServ",
      header: "Descripcion",
      size: 30, //small column
    },
    {
      accessorKey: "DesPresenta",
      header: "Presentacion",
      size: 150, //small column
    },
    {
      accessorKey: "CantidadPed",
      header: "Cantidad pedida",
      size: 50, //small column
    },
    {
      accessorKey: "CantidadEnt",
      header: "Cantidad entregada",
      size: 30, //small column
    },
  ];

  //FIC: Table - FrontEnd.
  const ProductosTable = ({}) => {

    //Con redux sacar la data que se envió del otro archivo (EnviosTable.jsx)
    // console.log(selectedShippingData);

    //Solicitud GET con los datos que hicimos clic en l
    /*
    useEffect(() => {
      async function fetchData() {
        try {
          const AllProductosData = await GetEnviosId(instituto, negocio, entrega, domicilio);
          setProductosData(AllProductosData.productos);
          setLoadingTable(false);
        } catch (error) {
          console.error("Error al obtener los productos en useEffect de ProductosTable:", error);
        }
      }
      fetchData();
    }, [triggerReloadTable]);*/
    
    //RECARGA DE TABLA
    const reloadTableData = () => {
      setTriggerReloadTable(!triggerReloadTable);
    };

    return (
        <Box>
          <Box>
            <MaterialReactTable
              columns={ProductosColumns}
              data={ProductosData}
              initialState={{ density: "compact", showGlobalFilter: true }}
              muiTableBodyRowProps={({ row }) => ({
                onClick: () => {
                  setSelectedRowIndex(row.original); //row.original hace referencia al objeto de datos original asociado con la fila
                  console.log("DATOS AAA", row.original);
                  setEditData(row.original); //Poner la data en el useState 
                  setSelectedRowIndex(row.id); //row.id se asigna automaticamente por react-table a cada fila
                },
                sx: {
                  //cursor: loadingTable ? "not-allowed" : "pointer",
                  //backgroundColor:
                 // selectedRowIndex === row.id ? darken("#EFF999", 0.01) : "inherit", //Para pintar de color la fila que coincida con row.id
                },
              })}
              renderTopToolbarCustomActions={({ table }) => (
                  <>
                    {/* ------- ACTIONS TOOLBAR INIT ------ */}
                    <Stack direction="row" sx={{ m: 1 }}>
                      <Box>
                        <Tooltip title="Agregar">
                          <IconButton 
                          onClick={() => {
                            setProductosShowModal(true);
                            setIsEditMode(false);
                            setEditData(null);
                            setIsDeleteMode(false);
                            }}>
                            <AddCircleIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Editar">
                          <IconButton
                          onClick={() => {
                            setProductosShowModal(true);
                            setIsEditMode(true);
                            setIsDeleteMode(false);
                          }}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton
                          onClick={() => {
                            setProductosShowModal(true);
                            setIsEditMode(false);
                            setIsDeleteMode(true);
                          }}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Detalles ">
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Recargar tabla">
                          <IconButton
                            onClick={() => {
                              reloadTableData(); //Para recargar la tabla
                            }}
                          >
                            <RefreshIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Stack>
                    {/* ------- ACTIONS TOOLBAR END ------ */}
                  </>
                )}
            />
          </Box>

          {/* M O D A L E S */}   

        </Box>
      );
  };

export default ProductosTable;