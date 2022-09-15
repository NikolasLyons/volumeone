import React, { useState } from 'react'
import classicMartini from '../assets/Images/classicMartini.jpg'
import blushinCosmo from '../assets/Images/blushinCosmo.jpg'
import mimosarita from '../assets/Images/mimosarita.jpg'
import tiffanyMimosa from '../assets/Images/tiffanyMimosa.jpg'
import cherryDropMartini from '../assets/Images/cherryDropMartini.jpg'
import hawiianCosmo from '../assets/Images/hawiianCosmo.jpg'
import peachWiskyCooler from '../assets/Images/peachWiskyCooler.jpg'
import sunsetCosmo from '../assets/Images/sunsetCosmo.jpg'



export default function Gallery() {

	const [specials] = useState([
		{ id: 1, name: "Classic Martini", img: classicMartini },
		{ id: 2, name: "Blushin Cosmo", img: blushinCosmo },
		{ id: 3, name: "Mimosarita", img: mimosarita },
		{ id: 4, name: "Tiffany Mimosa", img: tiffanyMimosa },
		{ id: 5, name: "Cherry Drop Martini", img: cherryDropMartini },
		{ id: 6, name: "Peach Whisky Cooler", img: peachWiskyCooler },
		{ id: 7, name: "Sunset Cosmo", img: sunsetCosmo },
		{ id: 8, name: "Hawaiian Cosmo", img: hawiianCosmo },
	])

	return (
		<div className='p-3'>
			<div className='text-center'>
				<h2>Gallery</h2>
			</div>
			<div className='onScroll'>
				{specials.map((specials) => (
					<div className="drink-cards col-3 rounded m-2 text-center" style={{ backgroundImage: `url(${specials.img})` }} key={specials.id} >
						<p>{specials.name}</p>

					</div>
				))}
			</div>

		</div>





	)
}

