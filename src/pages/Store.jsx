import React from "react";
import Header from "../store components/header/Header";
import Home from "../store components/home/Home";
import { Box } from "@mui/material";

function Store() {
    return (
        <div>
            <Header />
            <Box style={{ marginTop: 55 }}>
                <Home />
            </Box>
        </div>
    )
}

export default Store;