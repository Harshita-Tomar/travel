import React from 'react'
import { Button } from './Button'
import video1 from '../videos/video-1.mp4'

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src={video1} autoPlay loop muted />
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for ?</p>
			<div className="hero-btns">
				<Button className="btns" buttonSize='btn--large' buttonStyle='btn-outline'>GET STARTED</Button>
				<Button className="btns" buttonSize='btn--large' buttonStyle='btn-primary'>Watch Trailer &nbsp;
					<i className='far fa-play-circle' /></Button>
			</div>

		</div>
	)
}

export default HeroSection
