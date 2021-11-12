import { useState, useEffect, Dispatch, SetStateAction } from "react"; 

type Response<T> = [
  T, 
  Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: any): Response<T> {
  const [ estado, setEstado ] = useState(() => {
    const storageValue = localStorage.getItem(key);
    
    if(storageValue){
      return JSON.parse(storageValue)
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(estado));
  }, [key, estado])

  return [estado, setEstado];
}

export default usePersistedState;