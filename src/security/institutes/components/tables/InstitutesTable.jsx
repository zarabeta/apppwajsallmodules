
//FIC: Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box } from "@mui/material";
import { useState } from "react";
//FIC: DB
import InstitutesStaticData from '../../../../../db/security/json/institutes/InstitutesData';
import { useEffect } from 'react';

//FIC: Columns Table Definition.
const InstitutesColumns = [
    {
      accessorKey: "IdInstitutoOK",
      header: "ID OK",
      size: 30, //small column
    },
    {
      accessorKey: "IdInstitutoBK",
      header: "ID BK",
      size: 30, //small column
    },
    {
      accessorKey: "DesInstituto",
      header: "INSTITUTO",
      size: 150, //small columnz
    },
    {
      accessorKey: "Alias",
      header: "ALIAS",
      size: 50, //small column
    },
    {
      accessorKey: "Matriz",
      header: "MATRIZ",
      size: 30, //small column
    },
    {
      accessorKey: "IdTipoGiroOK",
      header: "GIRO",
      size: 150, //small column
    },
    {
      accessorKey: "IdInstitutoSupOK",
      header: "ID OK SUP",
      size: 30, //small column
    },
  ];
  
//FIC: Table - FrontEnd.


  const InstitutesTable = () => {

    const [data,setData] = useState({});
    useEffect(()=>{
      setData(InstitutesStaticData)
    },[]);

    console.log(data)
    return (
      <Box>
        <Box>
          <MaterialReactTable
          initialState={{ density: "compact", showGlobalFilter: true }}
          columns={InstitutesColumns}
          data={InstitutesStaticData}
          />
        </Box>
      </Box> 
    )
    
  };
  export default InstitutesTable;