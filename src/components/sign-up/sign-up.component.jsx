import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		console.log('hi!');

		const {displayName,email,password,confirmPassword} = this.state;

		console.log(this.state);

		if( password !== confirmPassword ) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email,password);

			await createUserProfileDocument( user, {displayName} );

		}
		catch(e) {
			console.log(e);
		}
	}

	handleChange = event => {
		const { value,name } = event.target;
		this.setState( {[name]: value});
	}

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						value={this.state.displayName}
						handleChange={this.handleChange}
						required
						type="text"
						label="Display Name" />
					<FormInput
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
						type="email"
						label="Email" />	
					<FormInput
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						type="password"
						label="Password" />
					<FormInput
						name="confirmPassword"
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						required
						type="password"
						label="Confirm Password" />

					<div className='buttons'>
						<CustomButton type='submit'>Sign Up</CustomButton>
					</div>

				</form>

			</div>
		)
	}
}

export default SignUp;