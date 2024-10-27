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
                <th>코멘트</th>
                <th>진로 성숙도</th>
              </tr>
            </thead>
            <tbody>
              {responseData &&
                Object.entries(responseData).map(
                  ([category, [comments, maturity]], index) => (
                    <tr key={index}>
                      <td>{category}</td>
                      <td>
                        {comments.filter((comment) => comment !== null).length >
                        0 ? (
                          <ul>
                            {comments
                              .filter((comment) => comment !== null)
                              .map((comment, i) => (
                                <li key={i}>{comment}</li>
                              ))}
                          </ul>
                        ) : (
                          <span>코멘트가 없습니다</span>
                        )}
                      </td>
                      <td className={styles.progressBarBox}>
                        <CircularProgressbar
                          maxValue={3}
                          value={maturity.toFixed(2)}
                          text={maturity.toFixed(2)}
                        />
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Result;
