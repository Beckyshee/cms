import logo from '../assets/pcea-logo.jpg';

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