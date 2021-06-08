import React from 'react';

function ProductLoading(Component) {
	return function ProductLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Oczekiwanie na załadowanie danych...
			</p>
		);
	};
}
export default ProductLoading;