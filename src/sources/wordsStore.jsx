import { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import Preloder from "../components/preloader/Preloader";

const StoreContext = createContext();

const WordsStore = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [words, setWords] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getWords()
    }, [])

    const getWords = () => {
        setLoading(true);
        fetch("https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words")
        .then(response => {
            if (response.ok) { //Проверяем что код ответа 200
                return response.json();
            } 
            throw new Error('Something went wrong ...');
            
        })
        .then(response => {
            setWords(response)
        })
        .catch((errors => setError(errors)))
        .finally(() => {
            setLoading(false)
        })
    }


    const editWord = (word) => {
        fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
        {
            method: 'POST',
            body: JSON.stringify(word),
        })
        .then(() => {
            getWords();
        })
        .catch((errors) => setError(errors));
    }

    const deleteWord = (id) => {
        fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
            method: 'POST',
        })
        .then(() => {
            getWords();
        })
        .catch((errors) => setError(errors))
    }

    const addWord = (word) => {
        fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
            method: 'POST',
            body: JSON.stringify(word)
        })
    }

    // if(isLoading){
    //     return <Preloder/>
    // }

    return(
        <StoreContext.Provider
            value={{words, isLoading, error, editWord, deleteWord, addWord}}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default WordsStore;