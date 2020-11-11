export const getAuthToken = () => localStorage.getItem('AUTH_TOKEN')
export const setAuthToken = (token: string) =>
	localStorage.setItem('AUTH_TOKEN', token)

export const getThemeMode = () =>
	JSON.parse(localStorage.getItem('isLightTheme') || 'null')
export const toggleThemeMode = () => {
	const themeMode = getThemeMode()
	if (themeMode === null) {
		localStorage.setItem('isLightTheme', 'false')
	} else {
		localStorage.setItem('isLightTheme', (!themeMode).toString())
	}
}
