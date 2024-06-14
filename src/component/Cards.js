import React from 'react'
import CardItem from './CardItem'
import img9 from '../images/img-9.jpg'
import img11 from '../images/img-11.jpg'
import img14 from '../images/img-14.jpg'
import img13 from '../images/img-13.jpg'
import img18 from '../images/img-18.jpg'
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/img-6.jpg'
import img7 from '../images/img-7.jpg'
import img16 from '../images/img-16.jpg'
import img15 from '../images/img-15.jpg'
import img17 from '../images/img-17.jpg'

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out these EPIC Destination</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src={img9} text="Explore the hidden waterfall deep inside the Amazon jungle" label="Adventure" path="/services" />
						<CardItem src={img11} text="Travel through Islands of country in Private Cruise " label="Luxury" path="/products" />
					</ul>
					<ul className="cards__items">
						<CardItem src={img14} text="Never Stop Exploring, Peace, Love, Adventure" label="Peace" path="/projects" />
						<CardItem src={img13} text="Finding solace and harmony in Kedarnath" label="Devotional" path="/services" />
						<CardItem src={img18} text="Explore best shopping, fine dining and sporting events " label="Trip" path="/services" />
					</ul>
					<ul className="cards__items">
						<CardItem src={img1} text="Explore the hidden waterfall deep inside the Amazon jungle" label="Adventure" path="/services" />
						<CardItem src={img2} text="Travel through Islands of country in Private Cruise " label="Luxury" path="/products" />
					</ul>
					<ul className="cards__items">
						<CardItem src={img3} text="Never Stop Exploring, Peace, Love, Adventure" label="Peace" path="/projects" />
						<CardItem src={img4} text="Finding solace and harmony in Kedarnath" label="Devotional" path="/services" />
						<CardItem src={img5} text="Explore best shopping, fine dining and sporting events " label="Trip" path="/services" />
					</ul>
					<ul className="cards__items">
						<CardItem src={img6} text="Explore the hidden waterfall deep inside the Amazon jungle" label="Adventure" path="/services" />
						<CardItem src={img7} text="Travel through Islands of country in Private Cruise " label="Luxury" path="/products" />
					</ul>
					<ul className="cards__items">
						<CardItem src={img16} text="Never Stop Exploring, Peace, Love, Adventure" label="Peace" path="/projects" />
						<CardItem src={img15} text="Finding solace and harmony in Kedarnath" label="Devotional" path="/services" />
						<CardItem src={img17} text="Explore best shopping, fine dining and sporting events " label="Trip" path="/services" />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
