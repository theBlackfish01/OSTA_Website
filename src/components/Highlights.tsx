import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Smart adaptability',
        description:
            'OSTA adjusts to market changes in real time, helping you stay on top of your investment strategy with ease.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Robust AI engine',
        description:
            'Powered by advanced neural networks, OSTA delivers reliable predictions designed for long-term success.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Intuitive dashboard',
        description:
            'Manage your portfolio effortlessly through a clean, user-friendly interface built for all experience levels.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Cutting-edge insights',
        description:
            'Leverage real-time sentiment analysis and market trends to make smarter, faster investment decisions.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Investor-focused support',
        description:
            'We’re here to help—OSTA provides responsive support and resources to guide you every step of the way.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Data-driven accuracy',
        description:
            'Our AI is trained on historical data and market behavior, delivering precise stock predictions you can trust.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={(theme) => ({
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: 'grey.900',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }),
            })}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" gutterBottom>
                        Highlights
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Explore why our product stands out: adaptability, durability,
                        user-friendly design, and innovation. Enjoy reliable customer support and
                        precision in every detail.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                    borderColor: 'hsla(220, 25%, 25%, 0.3)',
                                    backgroundColor: 'grey.800',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}