// import react from "react";
import logo from "./bestmexlogo.png";
// import style from "./style.css";

function Footer() {
  return (
    <footer className="foot-control text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          {/* <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f" />
          </a> */}
          {/* <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-twitter" />
          </a> */}
          {/* <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-google" />
          </a> */}
          {/* <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram" />
          </a> */}
          {/* <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-github" />
          </a> */}
        </section>
        {/* <section className>
          <form action>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example2">
                    Email address
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section> */}
        <section className="mb-4">
          <a className="text-white" href="/">
            <img src={logo} alt={logo} />
          </a>
        </section>
        {/* <section className> */}
        {/* <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div> */}
        {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0"> */}
        {/* <h5 className="text-uppercase">Links</h5> */}
        {/* <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul> */}
        {/* </div> */}
        {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div> */}
        {/* </div> */}
        {/* </section> */}
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white" href="/">
          {" "}
          BestMexSD.com
        </a>
      </div>
    </footer>
  );
}
export default Footer;
