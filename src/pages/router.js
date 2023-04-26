import Home01 from "./Home01";
import Home02 from "./Home02";
import Explore01 from './Explore01'
import Explore02 from './Explore02'
import Creator from './Creator'
import Item from './Item'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Authors from './Authors'
import ConnectWallet from './ConnectWallet'
import CreatePresale from './CreatePresale'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import CreateAirdrop from './CreateAirdrop'
import CreateLock from './CreateLock'
import RequestAudit from './RequestAudit'
import RequestKYC from './RequestKYC'
import ReportPresale from './ReportPresale'
import PreSale from "./PreSale";

const routes = [
    { path: '/', component: <Home01 />},
    { path: '/home-02', component: <Home02 />},
    { path: '/explore-01', component: <Explore01 />},
    { path: '/explore-02', component: <Explore02 />},
    { path: '/creator', component: <Creator />},
    { path: '/item', component: <Item />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/authors', component: <Authors />},
    { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-presale', component: <CreatePresale />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/contact', component: <Contact />},
    { path: '/create-airdrop', component: <CreateAirdrop />},
    { path: '/create-lock', component: <CreateLock />},
    { path: '/report-presale', component: <ReportPresale />},
    { path: '/request-audit', component: <RequestAudit />},
    { path: '/request-kyc', component: <RequestKYC />},
    { path: 'presales', component: <PreSale />},

]

export default routes;