import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsNavTab from "../components/tabs/ProductsNavTab";
import ProductosTab from "../components/tabs/ProductosTab";
import InfoRastreoTab from "../components/tabs/InfoRastreoTab";
import ActRastreoTab from "../components/tabs/ActRastreoTab";
import EstatusTab from "../components/tabs/EstatusTab";
import { Navigate } from "react-router-dom";
import OrdersTable from "../components/tables/OrdersTable";
import ShippingsTab from "../components/tabs/ShippingsTab";

const ProductosId = () => {
    const [currentRowInProductosTab, setCurrentRowInProductosTab] = useState(1);
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("PRODUCTOS");
    const [mainTab, setMainTab] = useState("SUBTABS");
    const [currentSubTab, setCurrentSubTab] = useState("PRODUCTOS");

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
                    <ProductsNavTab
                        setCurrentRowInProductosTab={setCurrentRowInProductosTab}
                        setCurrentNameTabInUserTab={setCurrentTabInPrincipalTab}
                    />
                    {currentSubTab === "SHIPPINGS" && (
                    <Box>
                    <Navigate to="/shippings" />
                    </Box>
                    )}
                    {currentSubTab === "PRODUCTOS" && <ProductosTab />}
                    {currentSubTab === "ESTATUS" && <EstatusTab />}
                    {currentSubTab === "INFORMACION RASTREO" && <InfoRastreoTab />}
                    {currentSubTab === "ACTUALIZACION RASTREO" && <ActRastreoTab />}
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

export default ProductosId;
