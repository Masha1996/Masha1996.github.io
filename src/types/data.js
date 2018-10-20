// @flow
export type Category = {
	id?: number,
	title: string,
	type?: string,
	numberOfRestaurants?: number
};

export type City = {
	id: number,
	title: string
};

export type Dish = {
	numberOfRestaurants: number,
	title: string,
	type: string,
	cost?: string,
	description?: string,
	cost: string
}

export type Restaurant = {
	address?: string,
	city: number,
	delivery: number,
	deliveryMethod: Array<number>,
	distance: string,
	id: string,
	minOrder: number,
	open?: boolean,
	openingHours?: string,
	payment: Array<number>,
	title: string
};

export type Payment = {
	title: string,
	value: number
};

export type Delivery = {
	title: string,
	value: number
};
