import { Paper, Typography } from '@mui/material';
import 'chart.js/auto';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Activity: React.FC = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <Paper style={{ padding: '8px', backgroundColor: '#333', color: 'white', height: '240px', width: '100%' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '16px' }}>
        Activity
      </Typography>
      <div style={{ height: 'calc(100% - 36px)', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </Paper>
  );
};

export default Activity;
