import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const FETCH_CATEGORIES = gql`
	query ($slug: String!) {
		category(slug: $slug) {
			category
			animals {
				slug
				title
				image
			}
		}
	}
`;

function CategoryPage() {
	const { slug } = useParams();

	const { loading, error, data } = useQuery(FETCH_CATEGORIES, {
		variables: {
			slug,
		},
	});

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong...</div>;

	console.log(data);

	return (
		<div className="py-5">
			<Container>
				<h1 className="text-capitalize">
					{}
					<CardDisplay animals={[]} />
				</h1>
			</Container>
		</div>
	);
}

export default CategoryPage;
