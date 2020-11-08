import React from 'react'
import { Container } from '@material-ui/core'
// import Footer from 'src/components/Footer'
import Header from '../../components/Header'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<Container>{children as React.ReactChild}</Container>
			{/*<Footer />*/}
		</>
	)
}

export default Layout
