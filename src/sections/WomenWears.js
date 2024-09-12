
const womanOne = './images/womanwear/woman1.jpg';
const womanTwo = './images/womanwear/woman2.jpg';




export default function WomenWears() {

return (
<div className="row container">

   <div className="col-6">
    
   <div class="card" >
  <img src={ womanOne } class="card-img-top" alt="image"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

    </div> 


<div className="col-6">

<div class="card" >
  <img src={ womanTwo } class="card-img-top" alt="img"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

</div>




</div>
)

}