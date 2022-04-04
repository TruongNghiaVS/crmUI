import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import './Layout.scss';

const Layout = ({ page }) => {
    return (
        <>
            <Header />
            <main className='main-layout'>
                <Screen screen={ page } />
            </main>
            <Footer />  
        </>
    );
}

const Screen = ({ screen }) => {
    switch (screen) {
        case 'home':
            return <Home />;
        case 'login':
            return <Login />
        default:
            return <Login />;
    }
}

export default Layout;