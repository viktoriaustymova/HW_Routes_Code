import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import FoxCard from "../FoxCard/FoxCard";
import QuokkaCard from "../QuokkaCard/QuokkaCard";
import DogCard from "../DogCard/DogCard";



export default function MyApp():JSX.Element {
    return(
        <Routes>
            <Route path="/" element = {<Layout />}  >
                <Route path="FoxCard" element ={<FoxCard />} />    
                <Route path="QuokkaCard" element ={<QuokkaCard />} />  
                <Route path="DogCard" element ={<DogCard />} />  
                    
            </Route>
        </Routes>
    )
}