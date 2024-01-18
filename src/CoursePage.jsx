import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import call from './apiCall';
import img1 from './assets/card-img-1.jpg'
import img2 from './assets/card-img-2.jpg'
import img3 from './assets/card-img-3.jpg'
import img4 from './assets/card-img-4.jpg'
import img5 from './assets/card-img-5.jpg'



export default function CoursePage({courses}) {
   const imageArr = [img1,img2,img3,img4,img5];
   const {id} = useParams();
   const course = courses.find((p) => p.id === parseInt(id))

	return (courses && (<div className='container'>
		
		<div className="course-container">
		<img src={imageArr[id-1]} className='img-container'/>
      <h1 className="course-title">{course.name}</h1>
      <p className="instructor">{course.instructor}</p>
      <p className="description">
        {course.description}
      </p>
      <div className="course-details">
        <p className="detail-item">{`Enrollment Status: ${course.enrollmentStatus}`}</p>
        <p className="detail-item">{`Course Duration: ${course.duration}`}</p>
        <p className="detail-item">{`Schedule: ${course.schedule}`}</p>
        <p className="detail-item">{`Location: ${course.location}`}</p>
        <p className="detail-item">Prerequisites:</p>
        {course && course.prerequisites.map((entry,i)=><li className='list' key={i}>{entry}</li>)}
        <details className="syllabus-details">
          <summary className="syllabus-summary">Syllabus</summary>
          {course && course.syllabus.map((entry,i)=>
          	<li className='list' key={i}>{entry.topic}</li>
         )}
        </details>
      </div>
    </div>
	</div>))
}