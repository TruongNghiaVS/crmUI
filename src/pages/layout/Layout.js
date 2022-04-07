import './Layout.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import User from '../user/User';
import Dashboard from '../dashboard/Dashboard';
import FollowUp from '../followUp/FollowUp';

const Layout = (props) => {
    if(props.page === '/' || props.page === 'login') {
        return (
            <div className='layout layout-login'>
                <Screen screen={ props.page } />
            </div>
        );
    } else {
        return (
            <div className='layout'>
                <Header classHeader="header" />
                <main className='main-layout'>
                    <Screen screen={ props.page } />
                </main>
                <Footer classFooter="footer" />  
            </div>
        );
    }
    
}

const Screen = (props) => {
    switch (props.screen) {
        case 'home':
            return <Home />;
        case 'login':
            return <Login />
        case 'user':
            return <User />
        case 'dashboard':
            return <Dashboard />
        case 'follow-up':
            return <FollowUp />
        default:
            return <Login />;
    }
}

export default Layout;