import React, {useState} from 'react';
import MadlibForm from './MadlibForm';

const Madlib = () => {
    
    // I want to check if the first letter of the word is a vowel, if vowel, use 'an' otherwise use 'a'.
    const isVowel = (letter) => {
        const vowels = ['a','e', 'i', 'o', 'u']
        return vowels.includes(letter) ? true : false;
    }

    const [madlib, setMadlib] = useState("");

    const resetMadlib = () => {
        setMadlib("");
    }

    return (
        <>
        <h1>Madlibs!</h1>
        {!madlib && <MadlibForm add={setMadlib}/>}
        <p>{madlib && `There was ${isVowel(madlib.color[0].toLowerCase()) ? 'an' : 'a'} ${madlib.color} ${madlib.noun} who loved ${isVowel(madlib.adjective[0].toLowerCase()) ? 'an' : 'a'} ${madlib.adjective} ${madlib.noun2}`}</p>
        {madlib  && <button onClick={resetMadlib}>Reset</button>}
        </>
    )
}

export default Madlib;