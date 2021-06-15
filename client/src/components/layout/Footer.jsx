const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid text-muted text-center">
        <div className="row">
          <div className="col-sm-4">
            {" "}
            <h4>
              <b>About</b>
            </h4>
            <div className="row">
              <p>TechnoMart</p>
            </div>
            <div className="row">
              <p>Contact Us</p>
            </div>
            <div className="row">
              <p>Phone</p>
            </div>
            <div className="row">
              <p>Location</p>
            </div>
          </div>
          <div className="col-sm-4">
            {" "}
            <h4>
              <b>Information</b>
            </h4>
            <div className="row">
              <p>Privacy Policy</p>
            </div>
            <div className="row">
              <p>Frequently Asked Questions</p>
            </div>
            <div className="row">
              <p>Return and Exchange</p>
            </div>
            <div className="row">
              <p>More</p>
            </div>
          </div>
          <div className="col-sm-4">
            {" "}
            <h4>
              <b>Follow Us</b>
            </h4>
            <div className="row mb-4">
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className="row mb-4">
              <i className="fab fa-twitter-square"></i>
            </div>
            <div className="row mb-4">
              <i className="fab fa-instagram-square"></i>
            </div>
            <div className="row mb-4">
              <i className="fab fa-linkedin-square"></i>
            </div>
          </div>
        </div>
        <span className="text-muted">
          Copyright © 2021 TechnoMart. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
