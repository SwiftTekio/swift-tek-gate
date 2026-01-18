import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import EcommercePlatform from './pages/services/EcommercePlatform';
import MarketingAutomation from './pages/services/MarketingAutomation';
import CloudHosting from './pages/services/CloudHosting';
import PointOfSale from './pages/services/PointOfSale';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "contact": Contact,
    "portfolio": Portfolio,
    "services/ecommerce": EcommercePlatform,
    "services/marketing": MarketingAutomation,
    "services/hosting": CloudHosting,
    "services/pos": PointOfSale,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};