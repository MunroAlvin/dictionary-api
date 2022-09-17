import React, {useEffect, useState} from "react";

function DictionaryAPI(){

    let [words, setWords] = useState()

    useEffect(()=>{
        fetch("https://thesaurusapi.fly.dev/dictionary").then(res => {
            if(res.ok && res.status === 200){
                return res.json();
            }
            
        })
        .then(data => {setWords(data);})
        // .then(data => {console.log(data);})
        .catch(err => {console.log(err);})
    }, []);

    return(
        <div>
            {words.objects.map(word =>{
                return(
                    <ul>
                        <li key={word.id}>
                        {word.synonyms.map(synonym => {
                            return <li>
                                {synonym}
                            </li>
                        })}
                        </li>
                    </ul>
                ); 

            }

            )}
            {/* <h1>{console.log(words.objects[0].synonyms)}</h1> */}

        </div>
    );
}

export default DictionaryAPI;