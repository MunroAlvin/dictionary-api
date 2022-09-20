import React, {useEffect, useState} from "react";
var _ = require('lodash');

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
      {/* {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)} */}
    <div>
      {!error && !loading &&(data === null ? (<h3>Spelling mistake -{">"} {props.typedWord}</h3>):  
        (
          <div>
          <h3>Synonyms of {_.capitalize(props.typedWord)}:</h3>
            {data.map((object) => {
                return(
                  <div>
                      {/* <h3>Key: {object.key}</h3>
                      <h3>Pos: {object.pos}</h3>
                      <h3>Word:{object.word}</h3> */}
                      {object.synonyms.map((synonym) => {
                                            return(
                                                <ul>
                                                    <li>{synonym}</li>
                                                </ul>);})}
                  </div>);})}
             </div>))}
        </div>
    </div>
  );

}

export default DictionaryAPI;