
const manOne = './images/manwear/man1.jpg';
const manTwo = './images/manwear/man2.jpg';


export default function MenWears() {

return (
<div className="row container shadow p-3">

   <div className="col-6">
    
   <div class="card" >
  <img src={ manOne } class="card-img-top" alt="image"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

    </div> 


<div className="col-6">

<div class="card" >
  <img src={ manTwo } class="card-img-top" alt="img"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

</div>




</div>
)

}