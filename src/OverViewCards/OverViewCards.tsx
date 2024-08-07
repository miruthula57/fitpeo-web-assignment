import { AttachMoney, BarChart, People, ShoppingCart } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Paper, Typography } from '@mui/material';

const OverviewCards = () => {
    const cards = [
        { icon: <ShoppingCart style={{ color: '#87CEEB' }} />, label: 'Total Orders', value: 75, additionalValue: 80, arrowPosition: 'top', valueColor: 'green', boxShadowColor: 'rgba(0, 0, 255, 0.3)' },
        { icon: <AttachMoney style={{ color: '#98FB98' }} />, label: 'Total Revenue', value: '$12k', additionalValue: '$13k', arrowPosition: 'bottom', valueColor: 'red', boxShadowColor: 'rgba(0, 255, 0, 0.3)' },
        { icon: <People style={{ color: '#F08080' }} />, label: 'Total Customers', value: 70, additionalValue: 75, arrowPosition: 'top', valueColor: 'green', boxShadowColor: 'rgba(255, 0, 0, 0.3)' },
        { icon: <BarChart style={{ color: 'pink' }} />, label: 'Total Sales', value: 5, additionalValue: 6, arrowPosition: 'bottom', valueColor: 'red', boxShadowColor: 'rgba(255, 192, 203, 0.3)' },
    ];

    return (
        <Box display="flex" justifyContent="space-between">
            {cards.map((card, index) => (
                <Paper key={index} style={{ padding: '8px', backgroundColor: '#444', color: 'white', flex: 1, margin: '0 8px', position: 'relative' }}>
                    <Box display="flex" alignItems="center" mb={2} justifyContent="center">
                        <Box
                            style={{
                                padding: '6px',
                                boxShadow: `0 4px 6px ${card.boxShadowColor}`,
                                marginRight: '16px',
                                backgroundColor: card.boxShadowColor
                            }}
                        >
                            {card.icon}
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="body2" align="center">{card.label}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" style={{ marginRight: '8px' }}>{card.value}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            {
                                card.valueColor === 'red' ? <ArrowDropDownIcon style={{ color: 'red', marginRight: '4px' }} /> : <ArrowDropUpIcon style={{ color: 'green', marginRight: '4px' }} />
                            }
                            <Typography variant="h6" style={{ color: card.valueColor }}>{card.additionalValue}</Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default OverviewCards;
