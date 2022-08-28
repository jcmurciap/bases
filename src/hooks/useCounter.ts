import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1, initState= 0}) => {

    const [counter, setCounter] = useState(initState);
    const elementToAnimate = useRef<any>(null);

    //Evita que cada renderizado se compile
    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prevState => Math.min(prevState+1, maxCount));
    }

    useLayoutEffect(() => {
        // "counterElement" se vuelve opcional, de la linea 7
        if(!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, {y:-10, duration:0.2, ease:'ease.out'})
                  .to(elementToAnimate.current, {y:0, duration:1, ease:'bounce.out'})
                  .pause();
    }, [])

    useEffect(() => {
        tl.current.play(0)
    }, [counter])

    return {
        elementToAnimate,
        handleClick,
        counter
    }
}