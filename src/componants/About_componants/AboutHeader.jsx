import React from "react";

export default function AboutHeader() {
  return (
    <main>
      <div className="about-header bg">
        <div className="text-center text-white mt-5 pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder mt-5">
            About Component
          </h2>
          <view className="row star mt-3">
            <div className="col-md-4  text-center">
              <span className="font "></span>
            </div>
            <div className="col-md-4  text-center">
              <span className="">
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className="col-md-4 text-center">
              <span className="font1 "></span>
            </div>
          </view>
        </div>

        <div className="container text-white">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-color contect">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h2>About Me</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
              <h2>AROUND THE WEB</h2>
              <ul className=" list-unstyled d-flex justify-content-center gap-2">
                <li>
                  <i class="fa-brands border fa-facebook "></i>
                </li>
                <li>
                  <i class="fa-brands border fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands border fa-linkedin"></i>
                </li>
                <li>
                  <i class="fa-solid border fa-globe"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className=" bg-black p-3">
          <p className="text-center text-light">
            Copyright &copy;Your Website 2021
          </p>
        </div>
      </footer>
    </main>
  );
}
/*
import React from "react";

export default function AboutHeader() {
  return (
    <>
      { <div className="about mt-5 bg d-flex flex-column align-items-center justify-content-center">
        <div className="text-center text-white mt-5 pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder mt-5">
            About Component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>

        <div className="container text-white">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div> }
    </>
  );
}*/
