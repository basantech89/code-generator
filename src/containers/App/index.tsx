import React from 'react'
import Layout from './Layout'
import Routes from './Routes'
import ErrorBoundary from '../../components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '../../store'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<Layout>
					<Routes />
				</Layout>
			</ErrorBoundary>
		</Provider>
	)
}

export default App
