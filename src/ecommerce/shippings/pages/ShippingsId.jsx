import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import ProductosTab from "../components/tabs/ProductosTab"
import ShippingsNavTab from "../components/tabs/ShippingsNavTab";
import ShippingsTab from "../components/tabs/ShippingsTab";
import InfoRastreoTab from "../components/tabs/InfoRastreoTab";
import ActRastreoTab from "../components/tabs/ActRastreoTab";
import EstatusTab from "../components/tabs/EstatusTab";
import { Navigate } from "react-router-dom";
import OrdersTable from "../components/tables/OrdersTable";

const ShippingsId = () => {
    const [currentRowInShippingsTab, setCurrentRowInShippingsTab] = useState(0);
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("SHIPPINGS");
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
        <Box sx={{ border: (theme) => `1px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
            <Tabs
                value={mainTab}
                variant={"fullWidth"}
                onChange={handleMainTabChange}
            >
                <Tab label="ORDENES" value="SUBTABS2" />
                <Tab label="ENTREGAS" value="SUBTABS" />
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
                    {currentSubTab == "PRODUCTOS" && <ProductosTab />}
                    {currentSubTab == "ESTATUS" && <EstatusTab />}
                    {currentSubTab == "INFORMACION RASTREO" && <InfoRastreoTab />}
                    {currentSubTab == "ACTUALIZACION RASTREO" && <ActRastreoTab />}
                    {/* FIC: si en el tap principal esta seleccionado el tab de NEGOCIOS
            manda llamar la pagina que va dentro del tab de Business. */}
                </Box>
            )}

            {mainTab === "SUBTABS2" && (
                <Box>
                    <Navigate to="/shippings" />
                </Box>


            )}
        </Box>

    );
};

export default ShippingsId;
