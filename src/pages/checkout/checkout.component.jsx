import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems,total}) => {

	console.log("TT: " + total);

	return (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Total</span>
			</div>
		</div>
		{
		cartItems.length ?
			cartItems.map( cartItem => (
				<CheckoutItem cartItem={cartItem} key={cartItem.id} />
			)) 
		:
		<span className='empty-message'>Your cart is empty.</span>
		}
		<div className='total'>
			<span> TOTAL: £{total}</span>
		</div>
		<StripeCheckoutButton price={total} />

		<div className="test-warning">
			<p>VISA: 4242 4242 4242 4242</p>
			<p>DEBIT: 4000056655665556</p>
			<p>AMEX: 378282246310005</p>
		</div>
	</div>

	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);