import { useEffect, useState } from "react";
import styles from './DogCard.module.css';

export default function DogsCard():JSX.Element{
    const[url, setUrl] = useState('');
    const serviceUrl:string='https://dog.ceo/api/breeds/image/random';

    function setImageUrl():void{
        fetch(serviceUrl)
        .then((res:Response)=>res.json())
        .then((resultObj) =>{
            const message = resultObj.message;
            setUrl(message); 
        }
        
        );

    }

    useEffect(()=>{setImageUrl()},[]);


    return(
        <div className={styles.container}>
            <h2>Random image of dog</h2>
        <img className={styles.img} src={url} alt="Dog"></img>
        </div>

    )
}