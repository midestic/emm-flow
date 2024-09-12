import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import { Outlet } from "react-router-dom";


export default function RootLayout() {
   
   return(
<div className="navbar container">



<nav class="navbar fixed-bottom bg-body-tertiary border">
  <div class="container-fluid">
    
    <div className="row container-fluid">
        <div className="col"></div>

        <div className=" col-sm-12 col-lg-12 fl">

     <h1><FontAwesomeIcon icon={faHouse} /></h1>   
     <h1> <FontAwesomeIcon icon={faHeart}/></h1>  
     <h1> <FontAwesomeIcon icon={faBagShopping} /></h1>  
      <h1><FontAwesomeIcon icon={faUser} /></h1>  

        </div>

        <div className="col"></div>

    </div>



  </div>
</nav>

<Outlet/>

</div>

   )

  
}