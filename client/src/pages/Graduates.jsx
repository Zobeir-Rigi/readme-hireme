import { useEffect, useState } from "react"
import axios from 'axios'
import { useUser } from '../UserContext';

import  "./graduates.css"
import portfolioBag from"../Pics/portfolio-bag.svg"


import { Link } from "react-router-dom"

export const Graduates = ()=>{
    const [graduates, setGraduates] = useState([])
    const { userData } = useUser();

    useEffect(()=>{
        const fetchAllGraduates = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/graduates")
                // console.log(res)
                setGraduates(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllGraduates()
    },[])
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
                                <a  href={graduate.linkedin_link} target="_blank"> <i  className="icon fa-brands fa-linkedin-in"></i> </a>
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