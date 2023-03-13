import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';
import './Filters.css';

export function Filters() {
	const { filters, setFilters } = useFilters();

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = event => {
		const { value } = event.target;
		setFilters(prevState => ({ ...prevState, minPrice: value }));
	};

	const handleChangeCategory = event => {
		const { value } = event.target;
		// Algo huele mal
		// Estamos pasando la funcion de actualizar el estado
		// nativa de React a un componente hijo
		setFilters(prevState => ({ ...prevState, category: value }));
	};

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Precio</label>
				<input
					type='range'
					id={minPriceFilterId}
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>
				<span>{filters.minPrice}</span>
			</div>
			<div>
				<label htmlFor={categoryFilterId}>Categoria</label>
				<select id={categoryFilterId} onChange={handleChangeCategory}>
					<option value='all'>Todas</option>
					<option value='laptops'>Laptops</option>
					<option value='smartphones'>Celulares</option>
				</select>
			</div>
		</section>
	);
}
