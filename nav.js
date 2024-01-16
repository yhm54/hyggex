import React from "react";

function Nav(props) {
    var color;
    return (<div className='px-10 gap-1 py- 5 flex items-center flex-wrap'>
        <i className="pi pi-home text-xl"></i>
        {props.arrNav.map(((e, index) => {
            (index == props.arrNav.length - 1) ? color = " text-blue-800 font-bold" : color = "font-semibold text-black";
            return <div className='flex gap-1 items-center focus:cursor-auto ' style={{ cursor: "pointer" }}><i className="pi pi-angle-right"></i><p className={'hover:bg-sky-50'+color}>{e}</p></div>
        }))}
        {/* <Home/> */}


    </div>);
}

export default Nav;