import React, {useEffect, useState} from "react";

function DictionaryAPI(props){

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
            "https://thesaurusapi.fly.dev/" + props.typedWord
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.objects);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false); 
      }
    }
    getData()
  }, [props.typedWord])


  console.log(data);

  return (
    <div>
      {loading && <div>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
    <div>
      {!error && (data === null ? (<span>Spelling mistake</span>):  
        (
          <div>
            <h3>Result:</h3>
            {data.map((object) => {
                return(
                  <div>
                      <h3>Key: {object.key}</h3>
                      <h3>Pos: {object.pos}</h3>
                      <h3>Word:{object.word}</h3>
                      <h3>Synonyms: {object.synonyms.map((synonym) => {
                                            return(
                                                <ul>
                                                    <li>{synonym}</li>
                                                </ul>
                                            );
                                        })}
                      </h3>
                  </div>);})}
             </div>))}
        </div>
    </div>
  );

}

export default DictionaryAPI;