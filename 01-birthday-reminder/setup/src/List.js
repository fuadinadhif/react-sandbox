import React from 'react';

const List = (persons) => {
	return (
		<>
			{persons.persons.map((person) => {
				const { id, name, age, image } = person;

				return (
					<article key={id} className="person">
						<img src={image} alt={`${name} profile`} />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
