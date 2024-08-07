import { Avatar, Box, Divider, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import image from '../../src/Assests/il_300x300.5289415323_itcs.avif';

const feedbacks = [
  { name: 'Jenny Wilson', feedback: 'Great service!Great service!Great service!Great service!', rating: 5 },
  { name: 'Dianne Russell', feedback: 'Very satisfied.', rating: 4 },
  { name: 'Devon Lane', feedback: 'Could be better.', rating: 3 },
];

const CustomerFeedback: React.FC = () => {
  return (
    <Paper
      style={{
        padding: '16px',
        backgroundColor: '#444',
        color: 'white',
        height: '340px',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Customer Feedback
      </Typography>
      {feedbacks.map((feedback, index) => (
        <React.Fragment key={index}>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <Avatar alt={feedback.name} src={image} />
            <Box ml={2}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>{feedback.name}</Typography>
              <Rating value={feedback.rating} readOnly />
              <Typography variant="body2" color="textSecondary" >{feedback.feedback}</Typography>
            </Box>
          </Box>
          <Divider sx={{ width: '100%' }} />
        </React.Fragment>
      ))}
    </Paper>
  );
};

export default CustomerFeedback;
