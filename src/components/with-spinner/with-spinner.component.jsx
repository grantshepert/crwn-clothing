import React from 'react';

import { SpinnerContainer,SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
	const Spinner = ({ isLoading,...other }) => {
		return isLoading ?
		(
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		)
		:
		(
			<WrappedComponent {...other} />
		)
	}
	return Spinner;
}

// const WithSpinner = WrappedComponent => ({ isLoading,...other }) => {
// 	return isLoading ?
// 	(
// 		<SpinnerOverlay>
// 			<SpinnerContainer />
// 		</SpinnerOverlay>
// 	)
// 	:
// 	(
// 		<WrappedComponent {...other} />
// 	)
// }



export default WithSpinner;