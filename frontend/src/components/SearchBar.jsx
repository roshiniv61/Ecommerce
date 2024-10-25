// import React, { useContext } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { ShopContext } from '../context/ShopContext';


// const SearchBar = () => {

//     const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  
//      const handelSubmit = () =>{
//         console.log(search)

//      }
//     return (
//         <form onSubmit={handelSubmit}>
//         <div className='search-bar-wrapper lg:block hidden'>
           
//             <div className="relative ">                
//                 <input type="text" 
//                 value={search} 
//                 onChange={()=>setSearch(e.target.value)} 
//                 placeholder='Search products' />
//                 <FontAwesomeIcon icon={faSearch} className='absolute top-[16px] left-[20px]' />
//             </div>
//             {/* <div className='lg:block hidden'> */}
//                 <button type="submit" className='search-button text-regular-normal'>
//                     Search
//                 </button>
//             {/* </div> */}
           
//         </div>
//         </form>

//     )
// }

// export default SearchBar

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
    const { search, setSearch } = useContext(ShopContext); 

    const handleChange = (e) => {
        setSearch(e.target.value); // Update the search state
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        console.log('Search value on submit:', search); // Check what value is being logged
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='search-bar-wrapper lg:block hidden'>
                <div className="relative">
                    <input
                        value={search} // Default to empty string to avoid undefined value
                        onChange={handleChange}
                        placeholder='Search products'
                        type="text"
                    />
                    <FontAwesomeIcon icon={faSearch} className='absolute top-[16px] left-[20px]' />
                </div>
                <button type="submit" className='search-button text-regular-normal'>
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchBar;

