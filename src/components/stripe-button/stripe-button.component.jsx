import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {

	const priceInCents = (price*100);
	const publishableKey = 'pk_test_zjCBEk9h7U1Fp0oGHIMV3BfP005zOLrg89';

	console.log("TOTAL IS: " + price);
	console.log("IN C: " + priceInCents);

	const onToken = token => {
		console.log("STRIKPE TOKEN")
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is £${price}`}
			amount={priceInCents}
			currency="GBP"
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;