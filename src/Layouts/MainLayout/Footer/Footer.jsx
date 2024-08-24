import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div class="footer__parents">
            <div class="parts">
              <h3>About</h3>
              <p>
                Development: Bernie Jenny, Monash University, Australia. Ideas,
                testing and icon: Nathaniel Vaughn Kelso, California.
              </p>
            </div>
            <div class="parts">
              <h3>Feedback</h3>
              <p>
                Color Oracle is a work in progress and will improve with time
                and your input. Please share your Color Oracle testimonial with
                us and send us an email.
              </p>
            </div>
            <div class="parts">
              <h3>Source</h3>
              <p>
                Color Oracle is open source, available on GitHub for Mac and
                Windows/Java.
              </p>
            </div>
          </div>
          <p class="last__p">
            © 2006–2018 by Bernie Jenny, Monash University, Melbourne,
            Australia. Last site update: 5 May 2018.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
