import Logo from "./logo.png";
import Name from "./name.png";
import Add from './add.png';


export default function PublishedBy(props) {
    return (<div className='flex justify-between items-center'>
        <div className=' h-10  published-by flex items-center'>
            <img src={Logo} className='h-24 w-24'></img>
            <div className='flex-col'>
                <p>Published by</p>
                <img src={Name}></img>

            </div>

        </div>
        <div className='flex items-center gap-3'>
            <button onClick={props.createFlashcard}><img src={Add} className='h-10 w-10'></img></button>
            <p className='text-xl text-blue-700 font-bold '>Create Flashcard</p>
        </div>

    </div>);
}