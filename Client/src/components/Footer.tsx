import logo from '../assets/pcea-logo.jpg';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>FOOTER COMPONET</h3>
      <div className="footer-logo">
        <img src={logo} alt="logo" className="logo" />
        <div className="heading">
          <h3>PCEA</h3>
          <h3>RURINGU CHURCH</h3>
        </div>
      </div>

      <div className="contactus">
        <div className="header">CONTACT US</div>
        <div className="contact-details">
          <div className="contact-">
            <FaPhone />
            <p>07123456789</p>
          </div>
          <div className="contact-">
            <IoMdMail />
            <p>pcearuringu@gmail.com</p>
          </div>
          <div className="contact-">
            <MdLocationOn />
            <p>Ruringu skuta opp waka</p>
          </div>
          <div className="contact-">
            <p>Office Hours</p>
            <p>9:00am - 5:00pm Monday - Saturday</p>
          </div>
          items
        </div>
      </div>

      <div className="givings">
        <div className="givings-details">
          <div className="header">
            <h3>GIVE</h3>
          </div>
          <div className="details">
            <p>Mpesa: 303030</p>
            <p>AccountName: Tithe, Offering,ThanksGiving</p>
            <p>Bank: 235654666</p>
            <p>Branch: Nyeri</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer