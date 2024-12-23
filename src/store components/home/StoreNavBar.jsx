import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";
import styled from "styled-components";

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    // font-weight: bold;
`

const StoreNavBar = () => {
    return ( 
        <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt="nav" style={{ width: 65 }} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
     );
}
 
export default StoreNavBar;