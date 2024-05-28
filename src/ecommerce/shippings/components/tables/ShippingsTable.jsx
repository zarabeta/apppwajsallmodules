//FIC: DB
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, darken, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ShippingsStaticData from '../../../../../db/ecommerce/json/shippings/ShippingsData';
import { getEntregas } from '../../../../core/api/entregas';
import AddShippingsModal from "../modals/AddShippingsModal"

//FIC: Columns Table Definition.
const ShippingsColumns = [
  {
    accessorKey: "IdDomicilioOK",
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
  // get id from params route
  const { id } = useParams();

  ////////////modal
  const [AddShippingShowModal, setAddShippingShowModal] = useState(false);

  const handleUpdateShippingData = async () => {
    try {
      const updatedShippingsData = await getAllShippings();
      setShippingsData(updatedShippingsData);
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

  const [data, setData] = useState(ShippingsStaticData);

  useEffect(() => {
    const fetchShippingsData = async () => {
      const ShippingsData = await getEntregas();
      console.log("🚀 ~ fetchShippingsData ~ ShippingsData:", ShippingsData)
      setData((ShippingsData.find(item => item.IdEntregaOK === id).envios).map(_castDataToTableFormat));
    };

    fetchShippingsData();
  }, []);

  const _castDataToTableFormat = (data) => {
    return {
      ...data,
      Productos: data.productos.map(item => item.IdProdServOK).join(', '),
      Estatus: data.estatus.map(item => item.IdTipoEstatusOK).join(', ')
    }
  }

  return (
    <Box>
      <Box>
        <MaterialReactTable
          initialState={{ density: "compact", showGlobalFilter: true }}
          columns={ShippingsColumns}

          data={data}

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


      {/**MODALES */}
      <Dialog open={AddShippingShowModal}>
        <AddShippingsModal
          id={id}
          AddShippingShowModal={AddShippingShowModal}
          setAddShippingShowModal={setAddShippingShowModal}
          onUpdateShippingData={handleUpdateShippingData} //PARTE DE LA FUNCION handleUpdateShippingData
          isEditMode={isEditMode}
          isDeleteMode={isDeleteMode}
          row={isEditMode || isDeleteMode ? editData : null}  //Para que en ambos modales de eliminar y actualizar se ponga 
          //la info si es que hay datos
          onClose={() => {
            setAddShippingShowModal(false); //Cerrar la modal
            setIsEditMode(false); //Resetear el modo de edición
            setEditData(null); //Limpiar la data de edición
          }}
        />
      </Dialog>



    </Box>
  )

};
export default ShippingsTable;