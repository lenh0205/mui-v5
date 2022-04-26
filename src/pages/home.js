import { Box, CssBaseline, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material"
import Container from "@mui/material/Container"
import { useContext, useEffect, useState } from "react"
import CustomerCard from "../components/CustomerCard"
import CustomerContext from "../context/CustomerContext"
import InboxIcon from "@mui/icons-material/Inbox"
import { styled } from '@mui/system'

function Home() {
    const { customers } = useContext(CustomerContext)
    const MyDiv = styled('div')({
        backgroundColor: 'aliceblue',
        padding: 10,
        borderRadius: 15,
    })
    const MyTypography = styled(Typography)({
        backgroundColor: '#52a388',
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontSize: '20px'
    })
    return (
        <Container>
            <CssBaseline />
            <Typography variant="h3" gutterBottom align='center'>App to manage customers</Typography>
            <MyTypography>This is an app using MUI 5</MyTypography>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Drawer variant="permanent" anchor='left'> {/* permanent cố định vị trí cho nó */}
                        <List>
                            <ListItem component='a' href='/create'>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create new customer" />
                            </ListItem>
                        </List>
                    </Drawer>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container p={5} spacing={5}>
                        {customers && customers.map((customer) => (
                            <Grid item xs={4} key={customer.id}>
                                <MyDiv>
                                    <CustomerCard customer={customer} />
                                </MyDiv>
                            </Grid>))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
export default Home
// s/d Container thay vì div để nó tạo ra 1 số padding, margin

// ListItem giống như 1 đường link