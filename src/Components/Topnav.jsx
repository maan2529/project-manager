import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Topnav = () => {

    const [handleInput, setHandleInput] = useState('');
    const [search, setSearch] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const profiles = useSelector((state) => state.UserData.data);
    let distinct_categoryy = profiles.reduce((acc, cv) => [...acc, cv.location], [])
    distinct_categoryy = [...new Set(distinct_categoryy)]

    const handleInputFun = (e) => {
        let tempStr = e.target.value;
        setHandleInput(tempStr);
        let filterData = (tempStr.length) > 0 && profiles.filter((data, index) => (data.name.slice(0, tempStr.length)).toUpperCase() === tempStr.toUpperCase())
        console.log(filterData)
        setSearch(filterData)

    }
    const getSearch = async () => {
        try {
            const res = await instance.get(`search/multi?query=${handleInput}`)
            setSearch(res.data.results);

        } catch (err) {
            console.log("Error is ", err)
        }
    }


    return (
        <>

            <div className='fixed  md:justify-start pl-[5%] top-0 w-full h-[10vh]   flex justify-center items-center z-[2] bg-white drop-shadow-md '>
                <div className='flex  justify-between py-[5px] w-[46vw] rounded-full bg-tansparent px-4 bg-zinc-300 min-w-20'>
                    <i className="ri-search-2-line text-xl text-black w-[5%] shrink-0"></i>
                    <input
                        type="text"
                        value={handleInput}
                        className='py-1 pl-4   w-[90%] outline-none  text-zinc-900 text-sm shrink-1'
                        placeholder='Search anything'
                        onChange={(e) => handleInputFun(e)}
                    />
                    {handleInput.length !== 0 && <i
                        onClick={(e) => {
                            setHandleInput('')

                        }}
                        className="ri-close-fill text-xl w-[5%] text-black shrink-0"></i>}


                </div>
                <div className='hidden md:flex absolute right-6 flex gap-4'>
                    
                    <Link to={'/admin'} className="px-4 py-1 bg-purple-600 rounded-full text-white font-md ">Administrator</Link>
                </div>
                {/* <div className='md:hidden absolute right-6'>
                    <button className='text-black text-2xl'><i className='ri-menu-line'></i></button>
                </div> */}
                {/* ------------- */}

                <div className='absolute top-[90%] bg-zinc-500 w-[40vw] size-auto max-h-[50vh] overflow-auto rounded-md'>

                    {search.length > 0 && search.map((data, index) => <Link
                        key={index}
                        to={`/user/${data.name}`}
                        className=' font-semibold bg-zinc-400 hover:bg-zinc-500 text-zinc-600 text-sm duration-800 hover:text-black px-[3vw] p-3 w-[100%] flex flex-row justify-start items-center border-b-1 border-zinc-500 rounded-md ' >


                        <span className='pl-2 flex items-center gap-3'>

                            {data.name}</span>
                    </Link>)}


                </div>
                <div className="md:hidden absolute right-10 ml-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-black text-2xl"
                    >
                        <i className="ri-menu-line"></i>
                    </button>
                </div>
            

            {isSidebarOpen && (
                <div className="fixed top-0 left-0 h-full w-25 bg-white shadow-md z-50 transform transition-transform duration-300 bg-gray-50">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-2xl text-black"
                        >
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <Link
                            to="/admin"
                            onClick={() => setIsSidebarOpen(false)}
                            className="py-2  text-gray-800 hover:text-blue-600"
                        >
                            Administrator
                        </Link>


                    </div>
                </div>
            )}
        </div >
        </>
    );
}

export default Topnav;