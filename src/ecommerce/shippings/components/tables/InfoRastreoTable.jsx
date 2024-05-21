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
import ActRastreoData from "../../../../../db/ecommerce/json/shippings/InfoRastreoData"
//FIC: DB
// import { GetAllSubdoc } from "../../services/remote/get/GetAllInfoAd";
//import { GetEnviosId } from "../../services/remote/get/GetEnviosId";

//FEAK: MODALS
//import ActRastreoModal from "../ActRastreoModal";

//REDUX
import { useSelector } from "react-redux";
//import { SET_SELECTED_SHIPPING_DATA } from "../../../redux/slices/shippingsSlice";
import AddInfoRastreoModal from "../modals/AddInfoRastreoModal";
//FIC: Columns Table Definition.
const ActRastreoColumns = [
  {
    accessorKey: "NumeroGuia",
    header: "Numero de guia",
    size: 30, //small column
  },
  {
    accessorKey: "NombreRepartidor",
    header: "Repartidor",
    size: 30, //small column
  },
  {
    accessorKey: "Alias",
    header: "Alias",
    size: 150, //small column
  },
];

//FIC: Table - FrontEnd.
const ActRastreoTable = ({ }) => {

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


  ////////////modal
  const [AddInfoRastreoShowModal, setAddInfoRastreoShowModal] = useState(false);
  const handleUpdateInfoRastreoData = async () => {
    try {
      const updatedInfoRastreoData = await getAllInfoRastreo();
      setInfoRastreoData(updatedInfoRastreoData);
      console.log("DATA EN EL editData", editData); //Para saber que datos tiene almacenados editData
    } catch (error) {
      console.error("Error updating shipping data:", error);
    }
  };
  const [isEditMode, setIsEditMode] = useState(false); //Para determinar si la modal está en modo de edicion/agregar (true=editar || false=agregar)
  const [editData, setEditData] = useState(false);     //Para saber si hay que rellenar los textfield con datos en caso de estar en modo de edición
  const [isDeleteMode, setIsDeleteMode] = useState(false); //Para saber si está en modo de eliminación o no
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); //Para saber cual es la fila y pasarla para el color de la tabla
  /////////////////////////


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
                      onClick={() => setAddInfoRastreoShowModal(true)}>
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
      <Dialog open={AddInfoRastreoShowModal}>
        <AddInfoRastreoModal
          AddInfoRastreoShowModal={AddInfoRastreoShowModal}
          setAddInfoRastreoShowModal={setAddInfoRastreoShowModal}
          onUpdateInfoRastreoData={handleUpdateInfoRastreoData} //PARTE DE LA FUNCION handleUpdateInfoRastreoData
          isEditMode={isEditMode}
          isDeleteMode={isDeleteMode}
          row={isEditMode || isDeleteMode ? editData : null}  //Para que en ambos modales de eliminar y actualizar se ponga 
          //la info si es que hay datos
          onClose={() => {
            setAddInfoRastreoShowModal(false); //Cerrar la modal
            setIsEditMode(false); //Resetear el modo de edición
            setEditData(null); //Limpiar la data de edición
          }}
        />
      </Dialog>
    </Box>
  );
};

export default ActRastreoTable;