import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import ShippingsNavTab from "../components/tabs/ShippingsNavTab";
import ShippingsTab from "../components/tabs/ShippingsTab";
import ProductosTab from "../components/tabs/ProductosTab"
const ShippingsId = () => {
    const [currentRowInShippingsTab, setCurrentRowInShippingsTab] = useState(0);
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("ENVIOS");
    const [currentSubTab, setCurrentSubTab] = useState("ENVIOS");

    const handlePrincipalTabChange = (event, newValue) => {
        setCurrentTabInPrincipalTab(newValue);
    };

    const handleSubTabChange = (event, newValue) => {
        setCurrentSubTab(newValue);
    };

    return (
        <Box>
        {/* FIC: llamada intrinsica (props) */}
        <ShippingsNavTab
            setCurrentRowInShippingsTab={currentRowInShippingsTab}
            setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab}
           // setBusinessTabInPrincipalTabIsSelected={setBusinessTabInPrincipalTabIsSelected}
        />        
        {/* FIC: si en el tap principal esta seleccionado es el tab de ENTREGAS
        manda llamar la pagina que va dentro del tab de Institutos. */}
        {currentSubTab == "ENVIOS" && <ShippingsTab />}
        {/* FIC: si en el tap principal esta seleccionado el tab de NEGOCIOS
        manda llamar la pagina que va dentro del tab de Business. */}
    </Box>
    );
};

export default ShippingsId;
