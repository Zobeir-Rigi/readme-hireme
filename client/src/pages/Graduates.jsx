import { useEffect, useState } from "react"
import axios from 'axios'
// import { useUser } from '../UserContext';

import  "./graduates.css"
import portfolioBag from"../Pics/portfolio-bag.svg"
import { Link } from "react-router-dom"

export const Graduates = ()=>{
    
    console.log(process.env.REACT_APP_TESTTT);

    const [graduates, setGraduates] = useState([])
    // const { userData } = useUser();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchAllGraduates = async ()=>{
            try{
                const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8800/graduates' : 'https://reedme.onrender.com/graduates'
                console.log(apiUrl)
                 const res = await axios.get(apiUrl);

                console.log("res",res)
                setGraduates(res.data)
                console.log("grad",graduates)
                setLoading(false);
            }catch(err){
                console.log(err)
                setError("Error loading data");
                setLoading(false);
            }
        }
        fetchAllGraduates()
    },[])
    if (loading) {
        return <p>Loading.... <br />Please wait ....</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    return(
        <div>
            <div className="allGraduates">
                    {
                    graduates.map(graduate =>(
                        <div className="graduate-card" key={graduate.full_name}>
                         <img className="user-avatar" src={graduate.avatar_url} alt="Avatar" />
                            <h2>{graduate.full_name}</h2>
                            <h3>{graduate.role}</h3>
                            <div className="icons-section">
                                <a href={graduate.linkedin_link} target="_blank"> <i  className="icon fa-brands fa-linkedin-in"></i> </a>
                                <a href={graduate.github_link} target="_blank"><i className="icon fa-brands fa-github"></i></a>
                                <a href={graduate.portfolio_link} target="_blank"><img  className="portfolioSvg icon" src= {portfolioBag} alt="" /></a>
                            </div>
                           <Link className="link" to={`/GraduateDetail/${encodeURIComponent(graduate.full_name)}`}> <h4>Detail</h4></Link>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}