// @flow
import {CART_EVENTS} from 'constants/cart';

export type CartState = {
	total: string
};

type AddToCartData = {
	subtotal: string
}

type AddToCartAction = {
	data: AddToCartData,
	type: typeof CART_EVENTS.ADD
}

type UnknownCartAction = {
	type: typeof CART_EVENTS.UNKNOWN
}

export type CartAction =
	| AddToCartAction
	| UnknownCartAction;
