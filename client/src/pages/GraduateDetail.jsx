import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./graduateDetail.css"

export const GraduateDetail = () => {
  const { fullName } = useParams();
  const [graduate, setGraduate] = useState(null);

  useEffect(() => {
    const fetchGraduateDetail = async () => {
      try {
        console.log(`Fetching graduate details for: ${fullName}`);
        const response = await axios.get(`http://localhost:8800/graduate/${encodeURIComponent(fullName)}`);
        console.log('Response:', response.data);
        setGraduate(response.data);
      } catch (error) {
        console.error('Error fetching graduate detail:', error);
      }
    };
  
    fetchGraduateDetail();
  }, [fullName]);
  

  
  return (
    <div>
      {graduate && (
        <div className='detail_container'>
            <div className='pic_name'>
              <img className="user-avatar" src={graduate.avatar_url} alt="Avatar" />
              <h2>{graduate.full_name}</h2>
            </div>
            <div className='about'>
                <h2>About</h2>
                <p>{graduate.about_me}</p>
                <h2>Skills</h2>
                <p>{graduate.skills}</p>
            </div>
        </div>
      )}
    </div>
  );
};

