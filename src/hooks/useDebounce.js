import {useEffect, useState} from "react";

/*궁극적인 목표는 입력받는 즉시 api 호출을 하는 것이 아니라 입력값을 받고 일정시간이 지난 후,
* api 요청을 최소화 하기 위함이다.*/
export const useDebounce = (value, delay) =>{
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(()=>{
            setDebounceValue(value);
        },delay);
        return () => {
            /*value나 delay 변경 시 타이머 초기화*/
            clearTimeout(handler);
        }
    }, [value, delay]);
    return debounceValue;
}