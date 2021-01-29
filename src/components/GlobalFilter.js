import React from 'react'

/*component will receive 2 props that I am destructuring filter, setFilter. 
filter is the value of the text input and setFilter is the corresponding setter 
function.  

returning a span tag. the text will be Search. the value in the input element will 
be equal to filter or an empty string. onChange will call the setFilter function 
passing in the input value.  

*/

export const GlobalFilter = ({filter, setFilter}) =>{
    return(
        <span>
            Search:{' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}