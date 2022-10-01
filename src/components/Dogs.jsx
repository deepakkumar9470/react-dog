import React from 'react'
import Dog from './Dog'

const Dogs = ({dogs}) => {
    return (
        <section className="results">
             {
                 dogs?.map(itemresult=>(
                     <Dog 
                     key={itemresult.id} 
                     result = {itemresult}
                    
                     />
                 ))
             }
        </section>
    )
}

export default Dogs