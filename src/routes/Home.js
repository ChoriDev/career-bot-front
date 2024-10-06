import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import Navbars from "../components/Navbars";
import styles from "../css/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const goToTest = () => {
    navigate(`/test`);
  };

  return (
    <>
      <Navbars />
      <Card className={styles.notice}>
        <Card.Header>
          검사를 시작하기 전에 유의사항을 꼼꼼히 읽어주세요.
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            1️⃣ 문항에 대해 정답이나 오답이 없으니 생각나는 댈 자연스럽게
            작성해주세요.
          </ListGroup.Item>
          <ListGroup.Item>
            2️⃣ 글짓기 시험이 아니므로, 문장의 좋고 나쯤을 걱정하지 않으셔도
            됩니다.
          </ListGroup.Item>
          <ListGroup.Item>
            3️⃣ 주어진 문항을 읽고 제일 먼저 떠오르는 생각이나 느낌을 써주세요.
          </ListGroup.Item>
          <ListGroup.Item>
            4️⃣ 시간 제한은 없으나 너무 오래 생각하지 말고 빠르게 작성해주세요.
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer className={styles.goToTestBtnBox}>
          <Button onClick={goToTest}>검사 시작하기</Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Home;
