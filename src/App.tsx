import { Box, Container, CssBaseline, Grid } from '@mui/material';
import Activity from './Activity/Activity';
import CustomerFeedback from './FeedBack/FeedBack';
import NetProfit from './NetProfit/NetProfit';
import RecentOrders from './Orders/Orders';
import DataCard from './OverViewCards/DataCard';
import OverviewCards from './OverViewCards/OverViewCards';
import SideNavbar from './SideNavBar/SideNavbar';
import TopNavbar from './TopNavBar/TopNavBar';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box display="flex">
        <SideNavbar />
        <Box style={{ flexGrow: 1, padding: '16px', overflowY: 'auto' }}>
          <Box sx={{ mt: -3 }}>
            <TopNavbar />
          </Box>
          <Container>
            <h4>Dashboard</h4>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <OverviewCards />
              </Grid>
              <Grid item xs={12} md={4}>
                <NetProfit />
              </Grid>
              <Grid item xs={12} md={8}>
                <Activity />
              </Grid>
              <Grid item xs={12} md={4}>
                <DataCard />
              </Grid>
              <Grid item xs={12} md={8}>
                <RecentOrders />
              </Grid>
              <Grid item xs={4}>
                <CustomerFeedback />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default App;
