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
import ActRastreoData from "../../../../../db/ecommerce/json/shippings/ActRastreoData"
//FIC: DB
// import { GetAllSubdoc } from "../../services/remote/get/GetAllInfoAd";
//import { GetEnviosId } from "../../services/remote/get/GetEnviosId";

//FEAK: MODALS
//import ActRastreoModal from "../ActRastreoModal";

//REDUX
import { useSelector } from "react-redux";
//import { SET_SELECTED_SHIPPING_DATA } from "../../../redux/slices/shippingsSlice";

//FIC: Columns Table Definition.
const ActRastreoColumns = [
    {
      accessorKey: "Ubicacion",
      header: "Ubicacion",
      size: 30, //small column
    },
    {
      accessorKey: "DesUbicacion",
      header: "Descripcion",
      size: 30, //small column
    },
    {
      accessorKey: "Referencias",
      header: "Referencias",
      size: 150, //small column
    },
    {
      accessorKey: "Observacion",
      header: "Observacion",
      size: 150, //small column
    },
    {
      accessorKey: "FechaReg",
      header: "Fecha de Registro",
      size: 150, //small column
    },
    {
      accessorKey: "UsuarioReg",
      header: "Registrado por",
      size: 150, //small column
    }
  ];

  //FIC: Table - FrontEnd.
  const ActRastreoTable = ({}) => {

    //Con redux sacar la data que se envió del otro archivo (EnviosTable.jsx)
    // console.log(selectedShippingData);

    //Solicitud GET con los datos que hicimos clic en l
    /*
    useEffect(() => {
      async function fetchData() {
        try {
          const AllActRastreoData = await GetEnviosId(instituto, negocio, entrega, domicilio);
          setActRastreoData(AllActRastreoData.productos);
          setLoadingTable(false);
        } catch (error) {
          console.error("Error al obtener los productos en useEffect de ActRastreoTable:", error);
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
              columns={ActRastreoColumns}
              data={ActRastreoData}
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
                            setActRastreoShowModal(true);
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
                            setActRastreoShowModal(true);
                            setIsEditMode(true);
                            setIsDeleteMode(false);
                          }}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton
                          onClick={() => {
                            setActRastreoShowModal(true);
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

export default ActRastreoTable;