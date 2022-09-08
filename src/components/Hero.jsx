import React, { useEffect, useRef } from "react";
import {init} from 'ityped';


export default function Hero() {

  const textRef = useRef();
  console.log(textRef);

  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay: 1500,
      backSpeed: 60,
      strings:["Web Developer", "Competitive Coder"]
    })
  },[])

  return (
    <div className="mt-16 md:mt-0 sm:mt-0 ml-0">
      <div className="flex flex-col my-8 text-center md:text-left">
        <h1 className="font-bold leading-none">
          <p className="mb-0"> Hello World! My name is </p><br />
          {" "}
          <span className="text-4xl mt-0 ml-1 bg-gradient-to-br from-emerald-600 to-green-400 text-transparent bg-clip-text ">
            Amit Kumar
          </span>
          <p className="text-xl ml-1"><span ref={textRef}></span></p>
        </h1>
        <p className="text-base font-light mt-3">
          I develop awesome things that live on the <br />
          internet and on your phone.
        </p>
      </div>
    </div>
  );
}
