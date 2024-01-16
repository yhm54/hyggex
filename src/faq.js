import React, { useState } from "react";

export default function Faq(props) {

    const [expand, setExpand] = useState([false, false, false]);
    // const [, setExpand2] = useState(false);
    // const [, setExpand3] = useState(false);

    function handleClick(index) {
        switch (index) {
            case 0:
                setExpand([true, false, false]);
                break;

            case 1: setExpand([false, true, false]);
                break;

            case 2: setExpand([false, false, true]);

            
        }
        console.log(props.questions[index].answer);
        console.log(expand[index]==true);
        console.log(expand);
        // console.log(expand);
    }


    return (<div className='flex-col'>
        <div className='pb-10 pl-10 text-5xl font-black text-transparent bg-gradient-to-t from-blue-600 to-blue-800 bg-clip-text'>
            FAQ
        </div>
        {props.questions.map((e, index) => expand[index]==true?<div key={index} className="flex-col border-blue-600 rounded-xl border-2  p-3 w-2/3 m-5 items-cente"><div key={index} className='flex justify-between border-blue-600 rounded-xl  items-center'><div className='font-semibold text-sm'>{e.question}</div><i onClick={() => handleClick(index)} className='hover:cursor-pointer pi pi-angle-up'></i></div> <div>{e.answer}</div></div>:
        <div key={index} className='flex justify-between border-blue-600 rounded-xl border-2  p-3 w-2/3 m-5 items-center'><div className='font-semibold text-sm'>{e.question}</div><i onClick={() => handleClick(index)} className='hover:cursor-pointer pi pi-angle-down'></i></div>)}


    </div>);
}