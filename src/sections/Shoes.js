
const shoeOne = './images/shoes/shoe1.jpg';
const shoeTwo = './images/shoes/shoe2.jpg';




export default function Shoes() {

return (
<div className="row container shadow p-3">

   <div className="col-6">
    
   <div class="card" >
  <img src={ shoeOne } class="card-img-top" alt="image"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

    </div> 


<div className="col-6">

<div class="card" >
  <img src={ shoeTwo } class="card-img-top" alt="img"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

</div>




</div>
)

}