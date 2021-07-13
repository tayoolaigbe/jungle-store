import React from 'react';
import './MainHero.css';
import animals from '../../assets/images';
import { Container } from 'reactstrap';
import { useQuery, gql } from '@apollo/client';

function MainHero() {
	const { loading, error, data } = useQuery(gql`
		{
			mainCards {
				title
				image
			}
		}
	`);
	console.log(data);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong...</div>;

	return (
		<div className="MainHero">
			<Container>
				<div className="header-container">
					<h2>
						Find your <br /> new four-legged <br /> best friend
					</h2>
					<img src={animals.rhino} />
				</div>
				<div className="cards-container">
					{data.mainCards.map(card => {
						return (
							<div className="card" key={animals[card.image]}>
								<h3>{card.title}</h3>
								<img
									src={animals[card.image]}
									style={{ width: '100%' }}
									alt=""
								/>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}

export default MainHero;
