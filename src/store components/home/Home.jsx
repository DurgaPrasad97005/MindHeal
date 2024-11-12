import StoreNavBar from "./StoreNavBar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "styled-components";

const Component = styled(Box)`
    padding: 10px 0;
    background: #f2f2f2;
`

const Home = () => {
    return ( 
        <>
            <StoreNavBar />
            <Component>
                <Banner />
            </Component>
        </>
     );
}
 
export default Home;