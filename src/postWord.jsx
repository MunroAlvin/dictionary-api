import React, {useState} from "react";

function PostWord (props){

    const [typingWord, setTypingWord] = useState();

    function clickHandler(event){
        // console.log("clicked");
        props.setTypedWord(typingWord);
        setTypingWord("");
        event.preventDefault();
    }

    function changeHandler(event){

        let {value} = event.target
        // console.log(value);
       setTypingWord(value);
    }

    return(
        <div>
            <h2>Synonym Finder </h2>
            <input 
                onChange={changeHandler}
                value={typingWord}
                placeholder="Write a word..."
                />
            <button onClick={clickHandler}>Find</button>
        </div>
    );
}

export default PostWord;