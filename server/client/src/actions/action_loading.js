import {
	LOADING,
	NOT_LOADING
} from './types';


export function loadingBegin() {
	return {
		type: LOADING
	}
}

export function loadingComplete() {
	return {
		type: NOT_LOADING
	}
}