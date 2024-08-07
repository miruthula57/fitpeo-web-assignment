import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';

const NetProfit = () => {
  const percentage = 70;

  return (
    <Paper style={{ padding: '26px', backgroundColor: '#444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Net Profit
        </Typography>
        <Typography variant="h3" style={{ color: 'limegreen' }}>$6759.25</Typography>
        <Typography variant="body2" style={{ color: 'lightgreen', display: 'flex', alignItems: 'center' }}>
          <ArrowDropUpIcon style={{ color: 'limegreen', fontSize: '18px' }} />
          3%
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" style={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          value={percentage}
          size={60}
          thickness={5}
          style={{ color: 'lightblue' }}
        />
        <Box
          position="absolute"
          top="30%"
          left="50%"
          style={{ transform: 'translate(-50%, -50%)', textAlign: 'center' }}
        >
          <Typography variant="caption" style={{ color: 'lightblue', fontWeight: 'bold' }}>
            {percentage}%
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" style={{ color: 'lightblue' }}>
            Net profit test text
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NetProfit;
