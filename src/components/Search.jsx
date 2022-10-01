import React from 'react'


function Search({searchHandler,handleInput}) {

    return (
         <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a dog" 
                className="searchbox"
                onChange={handleInput}
                // onChange={handleInput}
                onKeyPress={searchHandler}
                
            />
         </section>
    )
}

export default Search