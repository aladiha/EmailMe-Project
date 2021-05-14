import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Payments from '../payments/Payment'
import './header.css';


const Header = (props) => {

    const renderContent = () => {
        switch(props.auth){
            case null:
                return;
            case false:
                return (
                    <div><a href="/auth/google" className="nav-item">Login With Google</a></div>
                );
            default:
                return <>
                    <div className="payments imp"><Payments/></div>
                    <div className="nav-item">Credits: {props.auth.credits}</div>
                    <div><a href="/api/logout" className="nav-item">Logout</a></div>
                </>;
        }
    };

    return (<div className="header">
        <Link 
            to={props.auth ? '/surveys' : '/'} 
            className="logo"
        >
            EmailMe
        </Link>
        <div className="navigation-bar">
            {renderContent()}
        </div>
    </div>);
}

const mapStateToProps = ({auth}) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);