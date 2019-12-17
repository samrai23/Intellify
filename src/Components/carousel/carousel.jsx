// import React from 'react'
// import User from './user.png'
//
// function Carousel()
// {
//   return(
//           <div id="quote-carousel" class="carousel slide" data-ride="carousel" data-interval="2000">
//              <div class="carousel-inner text-center">
//
//                <div class="carousel-item active bg-primary">
//                  <img src={User} alt="user" width="20px"/>
//                    <blockquote class="blockquote text-white">
//                      <p class="mb-4">"Mortal as I am, I know that I am born for a day, but when I follow the serried multitude
//                       of the stars in their circular course, my feet no longer touch
//                      the earth; I ascend to Zeus himself to feast me on ambrosia, the food of the gods."</p>
//                    </blockquote>
//                    <h5 class="text-light font-weight-bold mb-5 text-align-right">— Ptolemy, Astronomer</h5>
//                </div>
//
//                <div class="carousel-item">
//                  <img src={User} alt="user" width="20px"/>
//                    <blockquote class="blockquote text-white">
//                      <p class="mb-4">"The strongest affection and utmost zeal should, I think, promote the studies concerned with the most beautiful objects
//                      . This is the discipline that deals withthe universe's divine revolutions, the stars' motions, sizes, distances,
//                       risings and settings . . . for what is more beautiful than heaven?"</p>
//                    </blockquote>
//                    <h5 class="text-light font-weight-bold mb-5 text-align-right">— Nicolaus Copernicus, Astronomer</h5>
//                </div>
//
//                <div class="carousel-item">
//                  <img src={User} alt="user" width="34px"/>
//                    <blockquote class="blockquote text-white">
//                      <p class="mb-4">"Astronomy is useful because it raises us above ourselves; it is useful because it is grand; …. It shows us how small is man's body, how great his mind, since his intelligence can embrace the whole of this dazzling immensity, where his body is only an obscure point, and enjoy its silent harmony."</p>
//                    </blockquote>
//                    <h5 class="text-light font-weight-bold mb-5 text-align-right">— Henri Poincaré, Physicist</h5>
//                </div>
//
//                      <a class="carousel-control-prev" href="#quote-carousel" role="button" data-slide="previous">
//                         <span class="carousel-control-prev-icon"></span></a>
//                      <a class="carousel-control-next" href="#quote-carousel" role="button" data-slide="next">
//                         <span class="carousel-control-next-icon"></span></a>
//
//     </div>
//     </div>
//
//   )
//
// }
//
// export default Carousel;






import React from "react";
import User from './user.png'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Moon from './moon.jpg'

const CarouselPage = () => {
  return (
    <MDBContainer className="w-100 h-75">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner  className="content-center">
          <MDBCarouselItem  itemId="1" className="justify-content-center bg-primary">
            <MDBView  className="justify-content-center bg-primary">
              <img
                className="w-75 justify-content-center"
                src={Moon}
                alt="First slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive text-light">Teacher</h3>
            <p class="justify-center text-light">Helps you organise your classes<br/>and keep students up-to-date</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className="justify-content-center bg-danger">
            <MDBView className="justify-content-center bg-danger">
              <img
                className="w-75 justify-content-center"
                src={Moon}
                alt="Second slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive text-light">Parents</h3>
            <p class="justify-center text-light">Track your child's classes<br/>and be up-to-date</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="justify-content-center bg-warning">
            <MDBView className="justify-content-center bg-warning">
              <img
                className="w-75 justify-content-center"
                src={Moon}
                alt="Third slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive text-light">Students</h3>
            <p class="justify-center text-light">Get timely updates on your classes<br/>and the resources provided in class</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>

  );
}

export default CarouselPage;
