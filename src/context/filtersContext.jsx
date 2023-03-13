import { createContext, useState } from 'react';

// 1. Crear el contexto
// Este es el contexto que tenemos que consumir
export const FiltersContext = createContext();

// 2. Crear el provider, para proveer el contexto
// Este es el provider que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0,
	});
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}
