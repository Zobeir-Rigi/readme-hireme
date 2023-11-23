import landingPic from "../Pics/landingPicture.jpg"
import githubIcon from "../Pics/github-mark.svg"
import "./home.css"
import { Link } from "react-router-dom"
export const Home = () => {
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
                    <Link className="link" to="/graduates"><span>See Our Wonderfull Graduates</span></Link>
                </div>
                <div className="section-three">
                    <img className="githubSvg" src= {githubIcon} alt="" />
                    <span>Log In With Github</span>
                </div>
            </div>
        </div>

    );
    
} 