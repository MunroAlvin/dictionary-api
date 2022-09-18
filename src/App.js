import React, {useState} from "react";
import DictionaryAPI from "./dictionaryAPI";
import PostWord from "./postWord";

function App() {
  const [typedWord, setTypedWord] = useState("");

  return (
    <div>
      <PostWord
        typedWord = {typedWord}
        setTypedWord = {setTypedWord}
      />
      <DictionaryAPI
        typedWord = {typedWord}
        setTypedWord = {setTypedWord}
      />
    </div>
  );
}

export default App;
