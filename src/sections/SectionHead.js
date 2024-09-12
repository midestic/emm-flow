import { useState } from "react";
import MenWears from "./MenWears";
import WomenWears from "./WomenWears";
import KidsWears from "./KidWears";
import Shoes from "./Shoes";

const boy = './images/boy.jpg';

 
export default function SectionHead() {
    // men wears
    const [ manWear1 , setManWear1] = useState( <MenWears/> );
   const [ womenWear , setWomenwear ] = useState( <WomenWears/> )
   const [ kidsWear , setKidsWear ] = useState( <KidsWears/> )


   
    
return (

    <div className="wearSection container shadow p-3">

<div className="row menu">
 <div className="col-3 text-center active" onClick={()=> setManWear1( <MenWears/> )}> Men's Wears</div>
    <div className="col-3 text-center" onClick={()=> setManWear1( womenWear )  }>Women Wears</div>
    <div className="col-3 text-center" onClick={()=> setManWear1( kidsWear )}>Kids Wears</div>
    <div className="col-3 text-center" onClick={()=> setManWear1( <Shoes/> )}>Shoes</div>
</div>




<div>
{ manWear1 }
</div>
    


    </div>
)

}