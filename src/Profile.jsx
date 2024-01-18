import React from 'react';
import Card from './Card';
import img1 from './assets/card-img-1.jpg'
import img5 from './assets/card-img-5.jpg'


export default function Profile() {
	

	return (<div className='container'>
		<div className='home-bar'>
			<h2 className='home-header'>
				Your Courses...
			</h2>
			
		</div>
		<hr style={{marginTop:'0.8rem'}}/>
		<div className='card-container-2'>
		   <Card
        title="Introduction to React Native"
        image={img1}
        content="Learn the basics of React Native development and build your first mobile app."
        button={true}
        progress='50'
      />
      <Card
        title="Node.js Backend Development"
        image={img5}
        content="Learn to build scalable backend applications using Node.js."
        button={true}
        progress='70'
      />
			
		</div>
	</div>)
}