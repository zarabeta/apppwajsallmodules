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

import AddProductosModal from "../modals/AddProductosModal";
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
const ProductosTable = ({ }) => {

  //Con redux sacar la data que se envió del otro archivo (EnviosTable.jsx)
  // console.log(selectedProductoData);

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

  ////////////modal
  const [AddProductoShowModal, setAddProductoShowModal] = useState(false);
  const handleUpdateProductoData = async () => {
    try {
      const updatedProductosData = await getAllProductos();
      setProductosData(updatedProductosData);
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
                      onClick={() => setAddProductoShowModal(true)}>
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
      <Dialog open={AddProductoShowModal}>
        <AddProductosModal
          AddProductoShowModal={AddProductoShowModal}
          setAddProductoShowModal={setAddProductoShowModal}
          onUpdateProductoData={handleUpdateProductoData} //PARTE DE LA FUNCION handleUpdateProductoData
          isEditMode={isEditMode}
          isDeleteMode={isDeleteMode}
          row={isEditMode || isDeleteMode ? editData : null}  //Para que en ambos modales de eliminar y actualizar se ponga 
          //la info si es que hay datos
          onClose={() => {
            setAddProductoShowModal(false); //Cerrar la modal
            setIsEditMode(false); //Resetear el modo de edición
            setEditData(null); //Limpiar la data de edición
          }}
        />
      </Dialog>
    </Box>
  );
};

export default ProductosTable;