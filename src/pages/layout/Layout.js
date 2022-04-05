import './Layout.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import User from '../user/User';
import Dashboard from '../dashboard/Dashboard';

const Layout = ({ page }) => {
    if(page === '/' || page === 'login') {
        return (
            <div className='layout layout-login'>
                <Screen screen={ page } />
            </div>
        );
    } else {
        return (
            <div className='layout'>
                <Header classHeader="header" />
                <main className='main-layout'>
                    <Screen screen={ page } />
                </main>
                <Footer classFooter="footer" />  
            </div>
        );
    }
    
}

const Screen = ({ screen }) => {
    switch (screen) {
        case 'home':
            return <Home />;
        case 'login':
            return <Login />
        case 'user':
            return <User />
        case 'dashboard':
            return <Dashboard />
        default:
            return <Login />;
    }
}

export default Layout;