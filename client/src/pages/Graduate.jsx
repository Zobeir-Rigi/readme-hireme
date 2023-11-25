import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Graduate = () => {
  const { fullName } = useParams();
  const [graduate, setGraduate] = useState(null);

  useEffect(() => {
    const fetchGraduateDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/graduate/${fullName}`);
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
        <div>
          <img className="user-avatar" src={graduate.avatar_url} alt="Avatar" />
          <h2>{graduate.full_name}</h2>
            <div>
                <h2>About</h2>
                <p>{graduate.about_me}</p>
            </div>
            <h2>Skills</h2>
          <p>{graduate.skills}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

