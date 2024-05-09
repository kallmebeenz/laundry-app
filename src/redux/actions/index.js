// Import all action type constants from the specified file
import * as actionType from "../actionTypes";
import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "../actionTypes"

import db, { auth, provider, storage } from "../../config/firebase.js";

export function setLoading(status) {
	return {
		type: SET_LOADING_STATUS,
		status: status,
	};
}

export function getArticles(payload, id) {
	return {
		type: GET_ARTICLES,
		payload: payload,
		id: id,
	};
}



export function postArticleAPI(payload) {
	return (dispatch) => {
		
				
				 if (payload.image === "" && payload.video === "") {
			dispatch(setLoading(true));
			db.collection("articles").add({
				
				video: "",
				sharedImg: "",
				description: payload.description,
			});
			dispatch(setLoading(false));
		}
	};
}


export function getArticlesAPI() {
	return (dispatch) => {
		dispatch(setLoading(true));
		let payload;
		let id;
		db.collection("articles")
			.orderBy("actor.date", "desc")
			.onSnapshot((snapshot) => {
				payload = snapshot.docs.map((doc) => doc.data());
				id = snapshot.docs.map((doc) => doc.id);
				dispatch(getArticles(payload, id));
			});
		dispatch(setLoading(false));
	};
}

export function updateArticleAPI(payload) {
	return (dispatch) => {
		db.collection("articles").doc(payload.id).update(payload.update);
	};
}



// Define an action creator function addToCart that takes an 'item' as a parameter
export const addToCart = (item) => {
  // Return an action object with a type of ADD_TO_CART and a payload containing the 'item'
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      item,
    },  
  };
};

// Define an action creator function removeFromCart that takes an 'id' as a parameter
export const removeFromCart = (id) => {
  // Return an action object with a type of REMOVE_FROM_CART and a payload containing the 'id'
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

// Define an action creator function emptyCart
export const emptyCart = () => {
  // Return an action object with a type of EMPTY_CART
  return {
    type: actionType.EMPTY_CART,
  };
};

// Define an action creator function setUser that takes a 'user' as a parameter
export const setUser = (user) => {
  // Return an action object with a type of SET_USER and a payload containing the 'user'
  return {
    type: actionType.SET_USER,
    payload: {
      user,
    },
  };
};

// Define an action creator function addOrder that takes an 'order' as a parameter
export const addOrder = (order) => {
  // Return an action object with a type of ADD_ORDER and a payload containing the 'order'
  return {
    type: actionType.ADD_ORDER,
    payload: {
      order
    },
  };
};

// Define an action creator function updateUserOrders that takes an 'orders' array as a parameter
export const updateUserOrders = (orders) => {
  // Return an action object with a type of UPDATE_USER_ORDERS and a payload containing the 'orders' array
  return {
    type: actionType.UPDATE_USER_ORDERS,
    payload: {
      orders
    },
  }
}
  
export const setDeliveryDetails = (details) => ({
  type: 'SET_DELIVERY_DETAILS',
  payload: details
});

// Define an action creator function deleteUserOrders
export const deleteUserOrders = () => {
  // Return an action object with a type of DELETE_USER_ORDERS
  return {
    type: actionType.DELETE_USER_ORDERS,
  }

}
