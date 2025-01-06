import React, { useState } from "react";
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <div className="contact mt-5">
        <section className="container">
          <view className=" bg-header text-center ">
            <h1 className="text-uppercase mb-2 fs-1 fw-bolder">
              contact section
            </h1>
          </view>
          <view className="row star ">
            <div className="col-md-4  text-center">
              <span className="font bg-horzintal"></span>
            </div>
            <div className="col-md-4  text-center">
              <span className="">
                <i class="fa-regular fa-star bg-header"></i>
              </span>
            </div>
            <div className="col-md-4 text-center">
              <span className="font1 bg-horzintal"></span>
            </div>
          </view>
        </section>

        <section className="container contain ">
          <form>
            <label
              htmlFor="userName"
              className={`position-relative top-0 ${
                userName !== "" ? "show" : ""
              }`}
            >
              Username:
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter Username"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control mb-3 border-0 border-bottom py-3 position-relative"
            />

            <label
              htmlFor="userAge"
              className={`position-relative top-0 ${
                userAge !== "" ? "show" : ""
              }`}
            >
              User Age:
            </label>
            <input
              id="userAge"
              type="number"
              placeholder="Enter Age"
              name="userAge"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
              className="form-control mb-3 border-0 border-bottom py-3 position-relative"
            />

            <label
              htmlFor="userEmail"
              className={`position-relative top-0 ${
                userEmail !== "" ? "show" : ""
              }`}
            >
              Email:
            </label>
            <input
              id="userEmail"
              type="email"
              placeholder="Enter Email"
              name="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="form-control mb-3 border-0 border-bottom py-3 position-relative"
            />

            <label
              htmlFor="userPassword"
              className={`position-relative top-0 ${
                userPassword !== "" ? "show" : ""
              }`}
            >
              Password:
            </label>
            <input
              id="userPassword"
              type="password"
              placeholder="Enter Password"
              name="userPassword"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="form-control mb-3 border-0 border-bottom py-3 position-relative"
            />

            <button
              type="button"
              className={`btn color mt-4 ${isPressed ? "scale-in" : ""}`}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="bg-color mt-5  pt-5 contect">
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
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
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
      </div>
    </>
  );
}
