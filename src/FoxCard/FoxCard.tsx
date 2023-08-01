import { useEffect, useState } from "react";
import styles from './FoxCard.module.css';

export default function DogsCard():JSX.Element{
    const[url, setUrl] = useState('');
    const serviceUrl:string='https://randomfox.ca/floof/?ref=apilist.fun';

    function setImageUrl():void{
        fetch(serviceUrl)
        .then((res:Response)=>res.json())
        .then((resultObj) =>{
            const image = resultObj.image;
            setUrl(image); 
        }
        
        );

    }

    useEffect(()=>{setImageUrl()},[]);


    return(
        <div className={styles.container}>
            <h2>Random image of fox</h2>
        <img className={styles.img} src={url} alt="Fox"></img>
        </div>
    )
}