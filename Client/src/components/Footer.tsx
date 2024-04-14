import logo from '../assets/pcea-logo.jpg';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-cards">
        {/* <h3>FOOTER COMPONET</h3> */}
        <div className="footer-logo">
          <img src={logo} alt="logo" className="logo" />
          <div className="heading">
            <h3>PCEA</h3>
            <h3>RURINGU CHURCH</h3>
          </div>
        </div>

        <div className="services">
          <div className="services-header">
            <h3>SERVICES</h3>
          </div>
          <div className="services-details">
            <p>Early Riser: 7:00am - 9:00am</p>
            <p>English Service: 9:00am - 11:00am</p>
            <p>Youth & Teens Service: 9:00am - 11:00am</p>
            <p>Children Ministry: 9:00am -11:00am</p>
            <p>Kikuyu Service: 11:00am - 1:00pm</p>
          </div>
        </div>

        <div className="contactus">
          <div className="header">
            <h3>CONTACT US</h3>
          </div>
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
              <p>
                9:00am - 5:00pm <br />
                Monday - Saturday
              </p>
            </div>
            items
          </div>
        </div>

        <div className="givings">
            <div className="giving-header">
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