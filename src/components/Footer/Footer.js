import "./footer.scss";
import { FaInstagram, FaTelegram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <h3>Designed By</h3>
      <a href="mailto:Mahdisaadaat@gmail.com" target="_blank">
        MahdiSadat
      </a>
      <div className="socialMedia">
        <a href="https://instagram.com/Mahdisaadaat" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://t.me/mahdisaadaat" target="_blank">
          <FaTelegram />
        </a>
        <a
          href="https://ir.linkedin.com/in/mahdi-sadat-645466181?trk=people-guest_people_search-card"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
