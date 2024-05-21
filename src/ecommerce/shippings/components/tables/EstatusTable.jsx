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
//FIC: DB
// import { GetAllSubdoc } from "../../services/remote/get/GetAllInfoAd";
//import { GetEnviosId } from "../../services/remote/get/GetEnviosId";

//FEAK: MODALS
//import EstatusModal from "../EstatusModal";

//REDUX
import { useSelector } from "react-redux";
//import { SET_SELECTED_SHIPPING_DATA } from "../../../redux/slices/shippingsSlice";

//FIC: Columns Table Definition.
const EstatusColumns = [
    {
      accessorKey: "IdTipoEstatusOK",
      header: "Tipo estatus",
      size: 30, //small column
    },
    {
      accessorKey: "Actual",
      header: "Current",
      size: 30, //small column
    },
    {
      accessorKey: "Observacion",
      header: "Observacion",
      size: 150, //small column
    },
    {
      accessorKey: "FechaReg",
      header: "Fecha registro",
      size: 50, //small column
    },
    {
      accessorKey: "UsuarioReg",
      header: "Registrado por",
      size: 30, //small column
    },
  ];

  //FIC: Table - FrontEnd.
  const EstatusTable = ({}) => {

    //FIC: controlar el estado del indicador (loading).
    const [loadingTable, setLoadingTable] = useState(true);
    //FIC: controlar el estado de la data de InfoAd.
    const [EstatusData, setEstatusData] = useState([]);
    //FIC: controlar el estado que muesta u oculta la modal de nuevo InfoAd.
    const [EstatusShowModal, setEstatusShowModal] = useState(false);
    
    const [isEditMode, setIsEditMode] = useState(false); //Para determinar si la modal está en modo de edicion/agregar (true=editar || false=agregar)
    const [editData, setEditData] = useState(false);//Para saber si hay que rellenar los textfield con datos en caso de estar en modo de edición
    const [isDeleteMode, setIsDeleteMode] = useState(false); //Para saber si está en modo de eliminación o no
    const [triggerReloadTable, setTriggerReloadTable] = useState(false); //Para hacer la recarga de la tabla
    const [selectedRowIndex, setSelectedRowIndex] = useState(null); //Para saber cual es la fila y pasarla para el color de la tabla

    //Con redux sacar la data que se envió del otro archivo (EnviosTable.jsx)
    const selectedShippingData = useSelector((state) => state.shippingsReducer.selectedShippingData);
    const selectedEnvioData = useSelector((state) => state.shippingsReducer.selectedEnvioData);
    // console.log(selectedShippingData);

    //Solicitud GET con los datos que hicimos clic en la tabla principal (selectedShippingData) y tabla de envios (selectedEnvioData)
    const instituto = selectedShippingData.IdInstitutoOK;
    const negocio = selectedShippingData.IdNegocioOK;
    const entrega = selectedShippingData.IdEntregaOK;
    const domicilio = selectedEnvioData.IdDomicilioOK;
    const orden = selectedShippingData.IdOrdenOK;
    /*
    useEffect(() => {
      async function fetchData() {
        try {
          const AllEstatusData = await GetEnviosId(instituto, negocio, entrega, domicilio);
          setEstatusData(AllEstatusData.productos);
          setLoadingTable(false);
        } catch (error) {
          console.error("Error al obtener los productos en useEffect de EstatusTable:", error);
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
              columns={EstatusColumns}
              data={EstatusData}
              state={{isLoading: loadingTable}}
              initialState={{ density: "compact", showGlobalFilter: true }}
              muiTableBodyRowProps={({ row }) => ({
                onClick: () => {
                  setSelectedRowIndex(row.original); //row.original hace referencia al objeto de datos original asociado con la fila
                  console.log("DATOS AAA", row.original);
                  setEditData(row.original); //Poner la data en el useState 
                  setSelectedRowIndex(row.id); //row.id se asigna automaticamente por react-table a cada fila
                },
                sx: {
                  cursor: loadingTable ? "not-allowed" : "pointer",
                  backgroundColor:
                  selectedRowIndex === row.id ? darken("#EFF999", 0.01) : "inherit", //Para pintar de color la fila que coincida con row.id
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
                            setEstatusShowModal(true);
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
                            setEstatusShowModal(true);
                            setIsEditMode(true);
                            setIsDeleteMode(false);
                          }}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton
                          onClick={() => {
                            setEstatusShowModal(true);
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
          <Dialog open={EstatusShowModal}>
            
          </Dialog>

        </Box>
      );
  };

export default EstatusTable;