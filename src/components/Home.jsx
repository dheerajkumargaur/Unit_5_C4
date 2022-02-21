import {Link} from "react-router-dom"
import {useEffect} from "react"



export const Home = () =>{
    // useEffect(()=>{
    //     console.log("Here")
    //     },[])

    return <div>
            <Link to = "/"><div>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Image" /></div>
                <input style ={{height: "20px" , width :"300px" , borderRadius:"10px", paddingLeft:"15px"}} className = "search-box" type="text" placeholder="Search" />
               
               </Link>  
     </div>
}
