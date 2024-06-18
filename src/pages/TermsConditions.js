import Header from "../components/Header";
import Collection from "../components/Collection";
import Usage from "../components/Usage";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <Header />
      <section className="conditions-intro">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="information">
        <div className="lilylamb-kids-we">
          LilyLamb Kids ("we," "us," or "our") values your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you use our website, products, and services.
        </div>
        <Collection />
        <Usage />
        <div className="information-rows">
          <b className="data-security">
            <ol className="data-security1">
              <li>Data Security</li>
            </ol>
          </b>
          <div className="we-take-reasonable">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission or storage can be guaranteed to be
            completely secure. Please use caution when sharing personal
            information online.
          </div>
        </div>
        <div className="information-rows1">
          <b className="third-party-services">
            <ol className="third-party-services1">
              <li>Third-Party Services</li>
            </ol>
          </b>
          <div className="we-may-use">
            We may use third-party service providers to assist us in delivering
            our services. These providers may have access to your information
            for specific purposes, but they are obligated to maintain the
            confidentiality and security of your data.
          </div>
        </div>
        <div className="information-rows2">
          <h1 className="cookies-and-tracking-container">
            <ol className="cookies-and-tracking-technolog">
              <li>Cookies and Tracking Technologies</li>
            </ol>
          </h1>
          <div className="we-use-cookies">
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our website. You can
            manage your cookie preferences through your browser settings.
          </div>
        </div>
        <div className="information-rows3">
          <b className="your-choices">
            <ol className="your-choices1">
              <li>Your Choices</li>
            </ol>
          </b>
          <div className="you-have-the">
            You have the right to access, update, or delete your personal
            information. You can also unsubscribe from marketing communications
            at any time. To exercise these rights or for any privacy-related
            inquiries, please contact us at LilyLamb Kids.
          </div>
        </div>
        <div className="information-rows4">
          <h1 className="changes-to-this-container">
            <ol className="changes-to-this-privacy-policy">
              <li>Changes to this Privacy Policy</li>
            </ol>
          </h1>
          <div className="we-may-update">
            We may update this Privacy Policy to reflect changes in our data
            practices. Any updates will be posted on this page with an updated
            effective date. Please review this Privacy Policy periodically to
            stay informed about our privacy practices.
          </div>
        </div>
        <div className="information-rows5">
          <b className="contact-us">
            <ol className="contact-us1">
              <li>Contact Us</li>
            </ol>
          </b>
          <div className="if-you-have-container">
            <p className="if-you-have">
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="by-using-our">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <FooterTop />
        <FooterBottom />
        <div className="bottom-divider">
          <div className="bottom-divider-child" />
        </div>
        <div className="copyright-social">
          <div className="copyright">
            <div className="giftsite-all-rights">
              2024 Giftsite. All Rights Reserved.
            </div>
          </div>
          <div className="social-icons-footer">
            <img
              className="paypal-icon"
              loading="lazy"
              alt=""
              src="/paypal.svg"
            />
            <img
              className="dash-dash-icon"
              loading="lazy"
              alt=""
              src="/dashdash.svg"
            />
            <img
              className="blogger-icon"
              loading="lazy"
              alt=""
              src="/blogger.svg"
            />
            <img
              className="instagram-icon"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="facebook-icon"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <input className="youtube" type="checkbox" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;
