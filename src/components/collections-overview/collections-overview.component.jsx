import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collections-preview/collections-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';


const CollectionsOverview = ( { collections }) => (
	<div className="collections-overview">
		{
			collections.map( ({ id, ...other  }) => (
				<CollectionPreview key={id} {...other} />
			))
		}
	</div>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);