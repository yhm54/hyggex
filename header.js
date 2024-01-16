function Header() {
    const liClassList = "px-5 py-2 hover:cursor-pointer rounded-full hover:bg-sky-100";

    const loginClassList = " bg-gradient-to-br from-blue-800 to-blue-600 text-white font-bold rounded-full ";


    return (
        <div className="flex justify-between items-center">
            <img src="download.png" alt="logo" srcset=""></img>

            <div className="grow"></div>
        

            {/* <i className='pi pi-check'></i> */}

            <ul className='flex justify-between '>
                <li className={liClassList}>Home</li>
                {/* <HomeIcon /> */}
                <li className={liClassList}>Flashcard</li>
                <li className={liClassList}>Contact</li>
                <li className={liClassList}>FAQ</li>
                <li className={liClassList + loginClassList}>Login</li>
            </ul>

        </div>
    );
}

export default Header;