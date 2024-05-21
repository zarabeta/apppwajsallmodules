import { Box } from "@mui/material";
import { useState } from "react";
import OrdersNavTab from "../components/tabs/OrdersNavTab";
import ShippingsTab from "../components/tabs/OrdersTab";
import OrdersTab from "../components/tabs/OrdersTab";
const Shippings = () => {
///////////////////ORDENES///////////////////
    //FIC: indicamos que al iniciar no hay ningun Instituto seleccionado.
    const [currentRowInShippingsTab, setCurrentRowInShippingsTab] = useState(0);
   
    //FIC: indicamos que el estado inicial del tab page principal por default sera ENTREGAS.
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("ENTREGAS");
   
    //const InstitutosAllData = useSelector((state) => state.institutesReducer);
    return (
        <Box>

            {/* FIC: llamada intrinsica (props) */}

            <OrdersNavTab
                setCurrentRowInShippingsTab={setCurrentRowInShippingsTab}
                setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab}
               // setBusinessTabInPrincipalTabIsSelected={setBusinessTabInPrincipalTabIsSelected}
            />
           
            {/* FIC: si en el tap principal esta seleccionado es el tab de ENTREGAS
            manda llamar la pagina que va dentro del tab de Institutos. */}
            {currentTabInPrincipalTab == "ORDENES" && <OrdersTab />}

            {/* FIC: si en el tap principal esta seleccionado el tab de NEGOCIOS
            manda llamar la pagina que va dentro del tab de Business. */}
            {currentTabInPrincipalTab == "ENTREGAS" && <OrdersTab />}   

        </Box>
    );
};

export default Shippings;
