export default function Options(props) {
    return (<div className='flex m-auto justify-center'>
        <div className='flex place-self-center'>
            {props.options.map((e, index) => <div id={index} className='border-blue-800 hover:cursor-pointer hover:bg-sky-100 button py-1 px-5 text-lg border-solid font-bold mx-2 text-slate-600' onClick={() => props.handleClick(index)}>{e}</div>)}
        </div>
    </div>);
}