import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { Card, Table } from "react-bootstrap";
import Navbars from "../components/Navbars";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../css/Result.module.css";

function Result() {
  const studentId = localStorage.getItem("student-id");

  const { responseData, error, isLoading, request } = useAxios({
    method: "GET",
    url: `api/students/${studentId}/result/`,
  });

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Navbars />
      <Card className={styles.titleCard}>
        <Card.Body>검사 결과</Card.Body>
      </Card>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className={styles.resultBox}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>분류</th>
                <th>학생이 작성한 문장</th>
                <th>코멘트</th>
                <th>진로 성숙도</th>
              </tr>
            </thead>
            <tbody>
              {responseData &&
                Object.entries(responseData).map(
                  ([category, data], index) => {
                    const { student_sentences, comments, average_grade } = data;

                    return (
                      <tr key={index}>
                        {/* 카테고리 */}
                        <td>{category}</td>

                        {/* 완전한 문장 출력 */}
                        <td>
                          {student_sentences.length > 0 ? (
                            <ul>
                              {student_sentences.map((sentence, i) => (
                                <li key={i}>{sentence}</li>
                              ))}
                            </ul>
                          ) : (
                            <span>문장이 없습니다</span>
                          )}
                        </td>

                        {/* 코멘트 출력 */}
                        <td>
                          {comments.length > 0 ? (
                            <ul>
                              {comments.map((comment, i) => (
                                <li key={i}>{comment}</li>
                              ))}
                            </ul>
                          ) : (
                            <span>코멘트가 없습니다</span>
                          )}
                        </td>

                        {/* 진로 성숙도 시각화 */}
                        <td className={styles.progressBarBox}>
                          <CircularProgressbar
                            maxValue={3}
                            value={average_grade.toFixed(2)}
                            text={average_grade.toFixed(2)}
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Result;