
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useUser } from '../UserContext';

import "./creategraduate.css"

export const CreateGraduate = () => {
  const { userData } = useUser();
  const [avatarUrl, setAvatarUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4uPEG5Y4tU72FHZiXnBLwgukPFaRIIv4LmnpzfTu08qqMRChd5yqhzb6tEvcfons9SE&usqp=CAU"); // Set the default avatar URL

  const [formData, setFormData] = useState({
    full_name: '',
    github_link: '',
    linkedIn_link: '',
    portfolio_link: '',
    role: '',
    about_me: '',
    skills: '',
    avatar_url: '', 

  });
  const [error,] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    if (userData && userData.avatar_url) {
      setAvatarUrl(userData.avatar_url);
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formDataWithAvatar = {
            ...formData,
            avatar_url: avatarUrl,
        };

        await axios.post('https://reedme.onrender.com/addgraduate', formDataWithAvatar);
      console.log('Graduate added successfully!');
      navigate("/graduates");
    } catch (error) {
      console.error('Error adding graduate:', error);
    }
  };

  return (
    <div className="main-container">
      <div>
        {userData && (
          <div className="userData">
            <img className="user-avatar" src={userData.avatar_url} alt="Avatar" />
            <span>{userData.name}</span>
            <p>Username: {userData.login}</p>
            <span>{userData.location}</span>

            {/* <p>bio:{userData.bio}</p> */}
          </div>
        )}
      </div>
        <form onSubmit={handleSubmit}>
        <h1>Add your card</h1>
          <label>
            Full Name:
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </label>

          <div className='link-group'>
              <label>
                GitHub Link:
                <input
                  type="text"
                  name="github_link"
                  value={formData.github_link}
                  onChange={handleChange}
                />
              </label>
              <label>
                LinkedIn Link:
                <input
                  type="text"
                  name="linkedIn_link"
                  value={formData.linkedIn_link}
                  onChange={handleChange}
                />
              </label>
              <label>
                Portfolio Link:
                <input
                  type="text"
                  name="portfolio_link"
                  value={formData.portfolio_link}
                  onChange={handleChange}
                />
              </label>
          </div>

          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </label>

          <label>
            About Me:
            <textarea
              name="about_me"
              value={formData.about_me}
              onChange={handleChange}
            />
          </label>

          <label>
            Skills:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>
               {/* Hidden input for avatar URL */}
               <input
                type="hidden"
                id="avatar_url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
            />

          <button type="submit">Submit</button>
          {error && "Something went wrong!"}
        </form>
    </div>
  );
};

