
import React,{useState} from 'react';

const Card = ({ title, image, content, author,progress,completed,button }) => {
  const [complete,setComplete] = useState(false);
  function completeCourse() {
    setComplete(prev=>prev=!prev)
  }
  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt="Card" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text" style={{color:'#585852'}}>{`Course By ${author}`}</p>
        {button && (
          <button className='gm-btn gb-shutter' onClick={completeCourse}>
            {complete ? 'Completed' : 'Not Complete'}
          </button>
        )}
      <div>
        {progress && 
          <progress value={progress} max='100'/>
        }
      </div>
      </div>
    </div>
  );
};

export default Card;
