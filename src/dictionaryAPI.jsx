import React, {useEffect, useState} from "react";

// const API_URL = "https://thesaurusapi.fly.dev/hello";

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
        setData( addInto => [actualData]);
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

  return (
    <div className="App">
      <h3>Result:</h3>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      { !error &&  (
        console.log(data)
      )}

        {/* {data && data.map((res) => {
            return(
                <div>
                    {res.objects.map((resOBJ) => {
                        return(
                            <div>
                                <h3>Key: {resOBJ.key}</h3>
                                <h3>Pos: {resOBJ.pos}</h3>
                                <h3>Word: {resOBJ.word}</h3>
                                <h3>Synonyms: {resOBJ.synonyms.map((synonym) => {
                                    return(
                                        <ul>
                                            <li>{synonym}</li>
                                        </ul>
                                    );
                                })}</h3>
                            </div>
                        );
                    })}
                </div>
            );
        })} */}
      
    </div>
  );

}

export default DictionaryAPI;