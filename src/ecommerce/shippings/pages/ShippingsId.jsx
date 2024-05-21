import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import ProductosTab from "../components/tabs/ProductosTab"
import ShippingsNavTab from "../components/tabs/ShippingsNavTab";
import ShippingsTab from "../components/tabs/ShippingsTab";

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

    useEffect(() => {
        setCurrentSubTab(currentTabInPrincipalTab);
    }, [currentTabInPrincipalTab]);

    return (
        <Box>
            {/* FIC: llamada intrinsica (props) */}
            <ShippingsNavTab
                setCurrentRowInShippingsTab={setCurrentRowInShippingsTab}
                setCurrentNameTabInUserTab={setCurrentTabInPrincipalTab}
            />
            {/* FIC: si en el tap principal esta seleccionado es el tab de ENTREGAS
        manda llamar la pagina que va dentro del tab de Institutos. */}
            {currentSubTab == "SHIPPINGS" && <ShippingsTab />}
            {currentSubTab == "PRODUCTOS" && <div>Productos</div>}
            {/* FIC: si en el tap principal esta seleccionado el tab de NEGOCIOS
        manda llamar la pagina que va dentro del tab de Business. */}
        </Box>
    );
};

export default ShippingsId;
