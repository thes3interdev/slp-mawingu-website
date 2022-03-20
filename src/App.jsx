import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PageHome from './pages/PageHome';

/** configure the apollo client */
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://baas.s3.co.ke/graphql'
			: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div>
					<Routes>
						<Route path="/" element={<PageHome />} />
					</Routes>
				</div>
			</ApolloProvider>
		</Router>
	);
};

export default App;
