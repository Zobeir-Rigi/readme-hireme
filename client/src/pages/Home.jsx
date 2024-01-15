import landingPic from "../Pics/landingPicture.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../UserContext"

import "./home.css"

export const Home = () => {
    const [userName, setUserName] = useState(""); 
    const { setUserData } = useUser(); // Get setUserData from the context
    const [error, setError] = useState(false);
    
    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };


    const navigate = useNavigate();

        const handleSearch = () => {
            // Reset error state
            setError(false);
        
            // Fetch user data
            fetch(`https://api.github.com/users/${userName}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data); // Log the data here
                    setUserData(data); // Update user data in the context
                    navigate("/createGraduate");

                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        };
        
    return (
        <div className="landing-Container">
            <div className="firstSection">
                <img className="landingPic" src = {landingPic} alt="landingPic" />
                <p className="landingText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores 
                    ipsam nisi maxime, repellat amet repellendus soluta laborum dignissimos 
                    porro! Quis tempore libero repudiandae culpa ad architecto quam praesentium 
                    eius repellendus?
                    Lorem ipsum dolor sit amet</p>
            </div>
            <div className="bottom-section">
                <div className="section-two">
                    <Link className="link" to="/graduates"><span>🎓 Meet Our Talented Graduates 🌟</span></Link>
                </div>
                {/* <div className="section-three">
                    <img className="githubSvg" src= {githubIcon} alt="" />
                    <span>Log In With Github</span>
                </div> */}
            </div>
            <div className="user-container">
                <h3 className="home-heading"> Join the Graduates! Add yourself now.</h3>

                <div className="user-details">
                    <label htmlFor="username">Enter Your GitHub User Name</label>
                    <input
                        placeholder="Zobeir-Rigi"
                        className="form-input"
                        type="text"
                        id="username"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="search-button">
                    <button className="user-button" onClick={handleSearch}>
                        <span className="user-button-span">{"Let's go!"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};