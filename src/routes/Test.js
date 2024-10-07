import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { Card, Form, Button } from "react-bootstrap";
import Navbars from "../components/Navbars";
import styles from "../css/Test.module.css";

function Test() {
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions);

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문항 인덱스
  const [userResponses, setUserResponses] = useState(["", ""]); // 사용자의 답변 (최대 2개)
  const studentId = localStorage.getItem("student-id");

  const { responseData, error, isLoading, request } = useAxios({
    method: "POST",
    url: `api/students/${studentId}/questions/${currentIndex + 1}/answers/`,
    requestData: {
      student_id: studentId,
      answer1: userResponses[0],
      ...(questions[currentIndex].content.match(/_/g)?.length > 1 && {
        answer2: userResponses[1],
      }), // _가 2개 이상인 경우에만 answer2 추가
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    await submitResponse(); // 서버 전송 함수
    setUserResponses(["", ""]); // 입력 필드 초기화

    // 다음 문항으로 이동
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 모든 문항을 완료하면 결과 페이지로 이동
      navigate("/result");
    }
  };

  const submitResponse = async () => {
    console.log("작성 중");
    // 서버에 사용자의 답변 전송하는 API 호출

    request();
  };

  const handleInputChange = (index, value) => {
    const newResponses = [...userResponses];
    newResponses[index] = value;
    setUserResponses(newResponses);
  };

  return (
    <>
      <Navbars />
      <Card className={styles.guideCard}>
        <Card.Body>
          다음에 기술된 문항들은 뒷부분 또는 중간이 빠져있습니다. 각 문장을
          읽으면서 맨 먼저 떠오르는 생각이나 느낌을 빈칸에 기록하여 문장이
          되도록 완성하여 주십시오. 시간 제한은 없으나 가능한 한 빨리 기록하여
          주십시오.
        </Card.Body>
      </Card>
      <Card className={styles.sentenceCard}>
        <Card.Body>
          {questions.length > 0 ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>{questions[currentIndex].content}</Form.Label>
                {questions[currentIndex].content.match(/_/g)?.length === 1 ? (
                  <Form.Control
                    type="text"
                    value={userResponses[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    required
                  />
                ) : (
                  <>
                    <Form.Control
                      type="text"
                      value={userResponses[0]}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      required
                    />
                    <Form.Control
                      className={styles.secondInput}
                      type="text"
                      value={userResponses[1]}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      required
                    />
                  </>
                )}
              </Form.Group>
              <div className={styles.submitBtnBox}>
                <Button type="submit">제출하기</Button>
              </div>
            </Form>
          ) : (
            <p>문항이 없습니다.</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Test;
