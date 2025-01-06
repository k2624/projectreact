import React, { useState } from "react";
import poert1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // دالة لفتح الصورة في نافذة منبثقة
  const openImage = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  // دالة لإغلاق نافذة الصورة
  const closeImage = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div>
        <div className="text-center mt-5 pt-4">
          <h2 className="text-uppercase text-header-portfolio mb-3 fs-1 fw-bolder">
            portfolio Component
          </h2>
          <view className="row star mt-3">
            <div className="col-md-4">
              <span className="font bg-horzintal"></span>
            </div>
            <div className="col-md-4 text-center">
              <span className="">
                <i className="fa-regular fa-star bg-header"></i>
              </span>
            </div>
            <div className="col-md-4 text-center">
              <span className="font1 bg-horzintal"></span>
            </div>
          </view>
        </div>
        <div className="container mt-3">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-4"
              onClick={() => openImage(poert1)}
            >
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={poert1} className="rounded-3 w-100" alt="الصورة 1" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" onClick={() => openImage(port2)}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={port2} className="rounded-3 w-100" alt="الصورة 2" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" onClick={() => openImage(port3)}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={port3} className="rounded-3 w-100" alt="الصورة 3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row mt-1 g-5">
            <div
              className="col-md-6 col-lg-4"
              onClick={() => openImage(poert1)}
            >
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={poert1} className="rounded-3 w-100" alt="الصورة 1" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" onClick={() => openImage(port2)}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={port2} className="rounded-3 w-100" alt="الصورة 2" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" onClick={() => openImage(port3)}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={port3} className="rounded-3 w-100" alt="الصورة 3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
          onClick={closeImage}
        >
          <img
            src={currentImage}
            alt="Full screen"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <section className="bg-color mt-3 contect">
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
        <div className="bg-black p-3">
          <p className="text-center text-light">
            Copyright &copy;Your Website 2021
          </p>
        </div>
      </footer>
    </>
  );
}
