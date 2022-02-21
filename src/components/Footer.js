
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube,faFacebookF,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
  import "./Footer.css";

const element = <FontAwesomeIcon icon={faFacebookF} />
const element2 = <FontAwesomeIcon icon={faTwitter} />
const element3 = <FontAwesomeIcon icon={faYoutube} />
const element4 = <FontAwesomeIcon icon={faInstagram} />

function Footer(){
    return(
        <div className="footer">
            <nav>
                <ul>
                    <a href='https://www.facebook.com/'>
                    <li>{element}</li>
                    </a>
                    <a href='https://twitter.com/i/flow/login'>
                    <li>{element2}</li>
                    </a>
                    <a href='https://www.youtube.com/'>
                    <li>{element3}</li>
                    </a>
                    <a href='https://www.instagram.com/'>
                    <li>{element4}</li>
                    </a>
                </ul>
            </nav>
          
            <h4>Copyright &copy; Full CRUD APP 2022 Nooraldeen</h4>
        </div>
    );
}

export default Footer;