import img from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <main>
      <header className="header-home">
        <view className="container">
          <view className="row d-flex justify-content-center ">
            <div className="col-md-12 image">
              <img src={img} alt="img" />
            </div>
          </view>
          <view className="row mt-3">
            <div className="col-md-12 text-uppercase mb-1 fs-1 fw-bolder text-center text-light">
              <p>start Framework</p>
            </div>
          </view>
          <view className="row star ">
            <div className="col-md-4  text-center">
              <span className="font"></span>
            </div>
            <div className="col-md-4  text-center">
              <span className="">
                <i class="fa-regular fa-star text-light   "></i>
              </span>
            </div>
            <div className="col-md-4 text-center">
              <span className="font1"></span>
            </div>
          </view>
          <view className="row">
            <div className="col-md-12 text-center text-light">
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </view>
        </view>
      </header>
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
