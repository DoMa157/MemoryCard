import { useState } from "react";
import { useEffect } from "react";


export default function MemoryCard({query, onClick}){
    const [content, setContent] = useState({img: '', text: ''});
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://narutodb.xyz/api/character/search?name=${query}`, {mode: 'cors'});
            const data = await response.json();
            setContent({img: data.images[0], text: query});
        }
        fetchData();
    }, [query]);
    return (
        <div className="card" onClick = {onClick}>
            <img src = {content.img} alt = {content.text}/>
            <div className = "card-text">{content.text}</div>
        </div>
    );
}