import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBozdUncru_aazfTMhYFS6Tf66hDMbOZBA",
	authDomain: "crwn-db-5c264.firebaseapp.com",
	databaseURL: "https://crwn-db-5c264.firebaseio.com",
	projectId: "crwn-db-5c264",
	storageBucket: "crwn-db-5c264.appspot.com",
	messagingSenderId: "878363228716",
	appId: "1:878363228716:web:9a5e1c1d09811090292f89"
};

export const createUserProfileDocument = async( userAuth,additionalData ) => {
	if(!userAuth) {
		return;
	}
	
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName,email } = userAuth;
		const createDate = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createDate,
				...additionalData
			})
		}
		catch(e) {
			console.log(e);
		}
	}
	return userRef;
}

export const addCollectionAndDocuments = async( collectionKey, objectsToAdd ) => {
	return;
	const collectionRef = firestore.collection(collectionKey);
	console.log("REFFFFFF")
	console.log(collectionRef);

	const batch = firestore.batch();

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef,obj);
	});

	return await batch.commit();
	
}

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map( doc => {
		const {title,items} = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title: title,
			items
		}
	} );

	return transformedCollection.reduce((acc,col) => {
		acc[col.title.toLowerCase()] = col;
		return acc;
	},
	{});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;