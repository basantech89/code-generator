import * as React from 'react'

type TDefaultValueFunction = () => string

export function useLocalStorageState(
	key: string,
	defaultValue: string | boolean | number | TDefaultValueFunction,
	{ serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
	const [state, setState] = React.useState(() => {
		const valueInLocalStorage = window.localStorage.getItem(key)
		if (valueInLocalStorage) {
			return deserialize(valueInLocalStorage)
		}
		return typeof defaultValue === 'function' ? defaultValue() : defaultValue
	})

	const prevKeyRef = React.useRef(key)

	React.useEffect(() => {
		const prevKey = prevKeyRef.current
		if (prevKey !== key) {
			window.localStorage.removeItem(prevKey)
		}
		prevKeyRef.current = key
		window.localStorage.setItem(key, serialize(state))
	}, [key, state, serialize])

	return [state, setState]
}

export const getAuthToken = () => localStorage.getItem('AUTH_TOKEN')
export const setAuthToken = (token: string) =>
	localStorage.setItem('AUTH_TOKEN', token)
