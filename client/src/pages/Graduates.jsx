import { useEffect, useState } from "react"
import axios from 'axios'

export const Graduates = ()=>{
    const [graduates, setGraduates] = useState([])

    useEffect(()=>{
        const fetchAllGraduates = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/graduates")
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllGraduates()
    },[])
    return(
        <div>
            All Graduates cards
        </div>
    )
}