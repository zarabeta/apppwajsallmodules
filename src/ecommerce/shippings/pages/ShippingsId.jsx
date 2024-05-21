import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import ProductosTab from "../components/tabs/ProductosTab"
import ShippingsNavTab from "../components/tabs/ShippingsNavTab";
import ShippingsTab from "../components/tabs/ShippingsTab";

const ShippingsId = () => {
    const [currentRowInShippingsTab, setCurrentRowInShippingsTab] = useState(0);
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("ENVIOS");
    // const [currentSubTab, setCurrentSubTab] = useState("ENVIOS");
    const [mainTab, setMainTab] = useState("SUBTABS");
    const [currentSubTab, setCurrentSubTab] = useState("SHIPPINGS");

    const handleMainTabChange = (event, newValue) => {
        setMainTab(newValue);
    };

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
            <Tabs value={mainTab} onChange={handleMainTabChange}>
                <Tab label="Subtabs" value="SUBTABS" />
                <Tab label="Subtabs2" value="SUBTABS2" />
                {/* Add more main tabs as needed */}
            </Tabs>

            {mainTab === "SUBTABS" && (
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
            )}

            {mainTab === "SUBTABS2" && (
                <Box>
                    <ProductosTab />
                </Box>
            )}
        </Box>

    );
};

export default ShippingsId;
