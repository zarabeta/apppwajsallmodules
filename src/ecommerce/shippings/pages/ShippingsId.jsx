import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import ProductosTab from "../components/tabs/ProductosTab"
import ShippingsNavTab from "../components/tabs/ShippingsNavTab";
import ShippingsTab from "../components/tabs/ShippingsTab";
import InfoRastreoTab from "../components/tabs/InfoRastreoTab";
import ActRastreoTab from "../components/tabs/ActRastreoTab";
import EstatusTab from "../components/tabs/EstatusTab";


const ShippingsId = () => {
    const [currentRowInShippingsTab, setCurrentRowInShippingsTab] = useState(0);
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("SHIPPINGS");
    const [currentSubTab, setCurrentSubTab] = useState("SHIPPINGS");

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
            {currentSubTab == "SHIPPINGS" && <ShippingsTab/>}
            {currentSubTab == "PRODUCTOS" && <ProductosTab/>}
            {currentSubTab == "ESTATUS" && <EstatusTab/>}
            {currentSubTab == "INFORMACION RASTREO" && <InfoRastreoTab/>}
            {currentSubTab == "ACTUALIZACION RASTREO" && <ActRastreoTab/>}
            {/* FIC: si en el tap principal esta seleccionado el tab de NEGOCIOS
        manda llamar la pagina que va dentro del tab de Business. */}
        </Box>
    );
};

export default ShippingsId;
