import { Box } from '@mui/material';
import Activity from '../Activity/Activity';
import CustomerFeedback from '../FeedBack/FeedBack';
import NetProfit from '../NetProfit/NetProfit';
import RecentOrders from '../Orders/Orders';
import SideNavbar from '../SideNavBar/SideNavbar';
import TopNavbar from '../TopNavBar/TopNavBar';

const Dashboard = () => {
  return (
    <Box display="flex" height="100vh">
      <SideNavbar />
      <Box flex="1" display="flex" flexDirection="column">
        <TopNavbar />
        <Box p={2} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 8"><Activity /></Box>
          <Box gridColumn="span 4"><NetProfit /></Box>
          <Box gridColumn="span 8"><RecentOrders /></Box>
          <Box gridColumn="span 4"><CustomerFeedback /></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
