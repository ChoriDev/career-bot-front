import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "../css/Login.module.css";
import logo from "../images/logo.png";

function Login() {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const handleLogin = () => {
    localStorage.setItem("student-id", studentId);
    goToHome();
  };

  // 닉네임, 비밀번호 유효성 검사
  const isValid = studentId !== "";

  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="로고" />
        <h1 className={styles.title}>
          진로문장완성검사 진단 서비스
          <br />
          커리어봇
        </h1>
        <Form className={styles.form}>
          <InputGroup>
            <InputGroup.Text>ID</InputGroup.Text>
            <Form.Control
              className={styles.formControl}
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              maxLength={9}
            />
          </InputGroup>
          <Button
            className={styles.submitBtn}
            type="submit"
            disabled={!isValid}
            onClick={handleLogin}
          >
            로그인
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
