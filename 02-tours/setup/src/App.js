import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchedData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setTours(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.dir(error);
		}
	};

	const removeTour = (id) => {
		const result = tours.filter((tour) => tour.id !== id);
		setTours(result);
	};

	useEffect(() => {
		fetchedData();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button
						className="btn"
						onClick={() => {
							setIsLoading(true);
							fetchedData();
						}}
					>
						refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<>
			<main>
				<Tours tours={tours} removeTour={removeTour} />
			</main>
		</>
	);
}

export default App;
