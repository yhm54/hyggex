export default function Faq(props) {
    return (<div className='flex-col'>
        <div className='pb-10 pl-10 text-5xl font-black text-transparent bg-gradient-to-t from-blue-600 to-blue-800 bg-clip-text'>
            FAQ
        </div>
        {props.questions.map((e) => <div className='flex justify-between border-blue-600 rounded-xl border-2  p-3 w-2/3 m-5 items-center'><div className='font-semibold text-sm'>{e}</div><i className='pi pi-angle-down'></i></div>)}

    </div>);
}