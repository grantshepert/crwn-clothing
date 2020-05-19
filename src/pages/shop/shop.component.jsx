import React from 'react';
import { Route } from 'react-router-dom';
import { connect} from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import Collection from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {

	state = {
		loading: true
	}

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState( { loading:false } );
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} render={props =>
			(
				<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
			) } />
			<Route path={`${match.path}/:collectionId`} render={props =>
			(
				<CollectionWithSpinner isLoading={loading} {...props} />
			) } />
		</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});


export default connect(null,mapDispatchToProps)(ShopPage);
