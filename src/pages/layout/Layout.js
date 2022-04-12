import './Layout.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import User from '../user/User';
import Dashboard from '../dashboard/Dashboard';
import FollowUp from '../followUp/FollowUp';
import React, { useState, useEffect } from 'react'

const Layout = (props) => {
    const [heightLayout, setHeightLayout] = useState(0);
    const [heightMain, setHeightMain] = useState(0);

    useEffect(() => {
        if(props.page !== '/' || props.page !== '/login') {
            setHeightMain(heightLayout.clientHeight - 130);
        }
    }, [props.page, heightLayout.clientHeight])

    if(props.page === '/' || props.page === '/login') {
        return (
            <div ref={(height) => { setHeightLayout(height) }} id="layout" className='layout layout-login'>
                <Screen screen={ props.page } />
            </div>
        );
    } else {
        return (
            <div ref={(height) => { setHeightLayout(height) }} className="layout">
                <Header classHeader="header" />
                <main style={{maxHeight: heightMain+'px'}} className='main-layout'>
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