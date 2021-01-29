import React from 'react'
import containerStyles from './GriddleContainer.module.css' //importing CSS module

/*styling GriddleContainer component using a CSS module. A CSS Module is a CSS file 
that in which all class names and animation names are scoped locally. CSS allows me 
to write CSS normally but with a lot more safety. Gatsby automatically generates unique
class and animation names so you don't have to worry about selector name collisions. 

The Container will be wrapped around the HospitalBedGriddle component. The  
HospitalBedGriddle component will pass its elements to the Container. The Container 
has access to the GriddleContainer css module by way of 'containerStyles'. The css 
module is passed to the element as a class in the div. The elements from the 
HospitalBedGriddle will be passed to the Container function and the css will be 
applied accordingly.  


receive the props as children from teh 
*/

export default function Container ({children}) {
    return <div className={containerStyles.GriddleContainer.js}>{children}</div>
}