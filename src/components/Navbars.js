import { Navbar } from "react-bootstrap";
import styles from "../css/Navbars.module.css";
import logo from "../images/logo.png";

function Navbars() {
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="/">
        <img className={styles.logo} src={logo} alt="로고 아이콘" />{" "}
        진로문장완성검사 진단 서비스
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navbars;
