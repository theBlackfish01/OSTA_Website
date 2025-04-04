import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
        <CssBaseline enableColorScheme />

        <AppAppBar />
        <Hero />
        <div>
        <Divider />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <FAQ />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
        </div>
        </AppTheme>
    );
}