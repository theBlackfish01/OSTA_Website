import { Box } from '@mui/material';
import logo from '../assets/ostalogo.png'; // Adjust path as needed

export default function SitemarkIcon() {
    return (
        <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
                height: 21,
                width: 100,
                mr: 2,
                objectFit: 'contain'
            }}
        />
    );
}