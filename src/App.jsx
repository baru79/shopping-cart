import { Cart } from './components/Cart.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Products } from './components/Products.jsx';
import { IS_DEVELOPMENT } from './config.js';
import { CartProvider } from './context/cartContext.jsx';
import { useFilters } from './hooks/useFilters.js';

function App() {
	const { filteredProducts } = useFilters();

	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={filteredProducts} />
			{IS_DEVELOPMENT && <Footer />}
		</CartProvider>
	);
}

export default App;
