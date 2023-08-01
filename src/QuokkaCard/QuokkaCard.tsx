import { useEffect, useState } from "react";
import styles from './QuokkaCard.module.css';

export default function DogsCard():JSX.Element{
    const[url, setUrl] = useState('');
    const serviceUrl:string= "https://quokka.pics/api/";

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
            <h2>Random image of quokka</h2>
        <img className={styles.img} src={url} alt="Quokka"></img>
        </div>
    )
}