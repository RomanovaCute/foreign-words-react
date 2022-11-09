import { createContext, useState, useEffect } from 'react';
import Error  from './components/error/Error'

export const WordsContext = createContext();

export const WordsProvider = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setLoading(true);
        fetch('http://itgirlschool.justmakeit.ru/api/words')
          .then(response => response.json())
          .then((json) => {
            setList(json);
          })
          .catch(() => {
              setError(true);
          })
          .finally(() => {
            setLoading(false);
          })
      }, []);
  

    return (
      <WordsContext.Provider value={{list, setList, isLoading, error}}>
        { error &&
          <Error />
        }
        { !error &&
          props.children
        }
      </WordsContext.Provider>
    )
  }