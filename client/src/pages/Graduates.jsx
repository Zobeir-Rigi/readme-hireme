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
            <h1>Cyf Graduates</h1>
            <div className="allGraduates">
                    {
                    graduates.map(graduate =>(
                        <div className="graduate-card" key={graduate.full_name}>
                <img className="user-avatar" src={graduate.avatar_url} alt="Avatar" />
                            <h2>{graduate.full_name}</h2>
                            <h3>{graduate.role}</h3>
                            <div className="icons-section">
                                <i  className="icon fa-brands fa-linkedin-in"></i> 
                                <i className="icon fa-brands fa-github"></i>
                                <img  className="portfolioSvg icon" src= {portfolioBag} alt="" />
                            </div>
                           <Link className="link" to={`/graduate/${encodeURIComponent(graduate.full_name)}`}> <h4>Detail</h4></Link>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}