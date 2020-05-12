import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword( email, password);
			this.setState({email:'',password:''});
		}
		catch(e) {
			console.log(e);
		}

		this.setState( { email: '',password: '' });
	}

	handleChange = event => {
		const { value,name } = event.target;
		this.setState( {[name]: value});
	}

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account.</h2>
				<span>Sign in Page</span>

				<form onSubmit={this.handleSubmit}>
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
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton type='button'
							onClick={ signInWithGoogle }
							isGoogleSignIn>With Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;