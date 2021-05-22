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
                    <li><a href="/auth/google" className="nav-item">Login With Google</a></li>
                );
            default:
                return <>
                    <div className="payments imp"><Payments/></div>
                    <li className="nav-item">Credits: {props.auth.credits}</li>
                    <li><a href="/api/logout" className="nav-item">Logout</a></li>
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