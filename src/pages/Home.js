
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SectionHead from "../sections/SectionHead";



// Image imports (make sure these paths are correct)
 const sneakers1 = './images/pair-trainers.png';
 const boy = './images/boy.jpg';
 const lady = './images/lady.png';
 const img1 = './images/img2.jpeg';

export default function Home() {
  return (
    <div className="home container">
      {/* Profile Section */}
      <div className="container">
        <div className="row">
          <div className="col-4 profileImgWrap">
            <img src={img1} alt="profile" className="img-fluid profileImg" />
          </div>
          <div className="col-8">
            <div className="row shadow p-3">
              <div className="col-12 border">
                <h1 className=" fs-3 text-center">
                  <b className="name">Elizabeth Olawuyi</b>
                </h1>
                <p className="welc text-center">Welcome to Mandem Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container marg searchBar">
        <form className="d-flex" role="search">
          <input
            className="form-control me-4 tran"
            type="search"
            placeholder="What are you looking for?"
            aria-label="Search"
          />
          <button className="tran2 width searchBtn" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      {/* Carousel and Best Selling Sneakers Section */}
      <div className="container margin  bg-secondary-subtle  carouselHeight">
        <div className="row g-0"> {/* g-0 removes gutters */}
          <div className="col-8 b">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide carContainer"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner border">
                <div className="carousel-item active">
                  <img src={sneakers1} className="d-block img-fluid" alt="shoe" />
                </div>
                <div className="carousel-item">
                  <img src={boy} className="d-block img-fluid " alt="cloth" />
                </div>
                <div className="carousel-item">
                  <img src={lady} className="d-block img-fluid" alt="wear" />
                </div>
              </div>
             
            </div>
          </div>

          <div className="col-4 b border">

            <div className="full-width-height m-0 p-0 bestSelling border">

              <h5 className=" text-center bss fw-bolder">Best Selling Sneakers</h5>

              <p className="text-center  bestSelling text-width">We are offering you the best sneakers purchase in Africa</p>



              <button className=" visitStore">  VISIT STORE </button>
            </div>

           

          </div>
        </div>
      </div>

  


    
       { <SectionHead/> }

    
    </div>
  );
}
