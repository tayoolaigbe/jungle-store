import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const FETCH_ANIMALS = gql`
	{
		animals {
			image
			id
			price
			slug
			title
		}
	}
`;

function LandingPage() {
	const { loading, error, data } = useQuery(FETCH_ANIMALS);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong...</div>;
	console.log(data);

	return (
		<div>
			<MainHero />
			<CategoryDisplay />
			<CardDisplay animals={data.animals} />
		</div>
	);
}

export default LandingPage;
