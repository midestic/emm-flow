
const kidsOne = './images/kidwears/kids1.jpg';
const kidsTwo = './images/kidwears/kids2.jpg';




export default function KidsWears() {

return (
<div className="row container-fluid shadow p-3">

   <div className="col-6">
    
   <div class="card" >
  <img src={ kidsOne } class="card-img-top" alt="image"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

    </div> 


<div className="col-6">

<div class="card" >
  <img src={ kidsTwo } class="card-img-top" alt="img"/>
  <div class="card-body">
    <p class="card-text"><b>$300</b></p>
  </div>
</div>

</div>




</div>
)

}