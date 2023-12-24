import {useState} from 'react';

const useCounter = (initial) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const mensaje = () => {
       
    }

   

    return {count,increment,decrement,mensaje};
};

export default useCounter;