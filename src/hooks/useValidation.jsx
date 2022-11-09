import {useState, useEffect} from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isNumber, setNumber] = useState(false);
  const [isRU, setRU] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'isEmpty': 
              value ? setEmpty(false) : setEmpty(true);
            break;
          case 'isNumber':
            const num = /[0-9]/;
            num.test(value) ? setNumber(true) : setNumber(false);
            break;
          case 'isRU':
            const ru = /[а-яА-ЯЁё-і]/;
            ru.test(value) ? setRU(true) : setRU(false);
            break;
        }
      }
    }, [value]);

    useEffect(() => {
      if (isEmpty || isNumber || isRU) {
        setInputValid(false)
      } else {
        setInputValid(true)
      }
    }, [isEmpty, isNumber, isRU])
  
    return {
      isEmpty,
      isNumber,
      inputValid,
      isRU
    }
  }
  
export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
      setDirty(true)
  };

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}