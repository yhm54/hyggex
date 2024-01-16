import FullS from './fullscreen.png';
import Hint from './Vector.png';


export default function Content(props){
    return (<div className='flex justify-center w-full'>
        <div className='flex-col w-2/4'>
            <div className=' relative bg-gradient-to-tr from-blue-500 to-blue-800 w-full m-auto rounded-3xl h-80'>
                <div className='flex justify-between mx-5'>
                    <img src={Hint} className='h-7 w-5 absolute top-5 left-5'></img>

                    <i className='pi pi-volume-up text-white absolute top-5 text-2xl right-5 '></i>
                </div>
                <p className=" left-2/4 text-3xl absolute text-white -translate-x-1/2 -translate-y-1/2 top-2/4">9 + 6 + 7x - 2x - 3</p>
            </div>
            <div className='h-4'></div>
            <div className=' flex items-center justify-around'>
                <i className='pi pi-refresh text-blue-800 text-3xl pt-1' ></i>
                <div className='flex items-center justify-around '><div className=' bg-gradient-to-t from-blue-700 to-blue-900 p-2 rounded-full w-10 aspect-square flex justify-center items-center'><i className='pi pi-chevron-left text-white bg-inherit text-xl pt-1'></i></div>
                    <div className='text-2xl px-8'>1/10</div>
                    <div className='rounded-full bg-gradient-to-t from-blue-700 to-blue-900  w-10 aspect-square flex justify-center items-center p-2'><i className='pi pi-chevron-right text-white bg-inherit text-xl pt-1'></i></div></div>
                {/* <i className='pi pi-full-screen text-blue-800 text-xl'></i> */}
                {/* <Fullscreen /> */}
                <img className='h-10 w-10' src={FullS}></img>


            </div>
        </div>
    </div>);
}