import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import './Payment.css';

const Payments = props => {
    return (
            <StripeCheckout 
                name="EmailMe"
                description="5$ for 5 email credits"
                amount={500}
                token={token => props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                panelLabel="Pay"
            >
                <button className="nav-items">
                    Add Credits
                </button>
            </StripeCheckout>
    );
}

export default connect(null, actions)(Payments);