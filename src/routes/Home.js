import { useState } from "react";
import { Button } from "react-bootstrap";
import Navbars from "../components/Navbars";
import useAxios from "../hooks/useAxios";

function Home() {
  const [questions, setQuestions] = useState(null);

  const {responseData, error, isLoading, request} = useAxios({
    method: "POST",
    url: `api/result/`,
  })

  const fetchQuestions = () => {
    request()
  }

  return (
    <>
      <Navbars />
      <div>
        <p>검사를 시작하시겠습니까?</p>
        <Button onClick={fetchQuestions}>시작하기</Button>
      </div>
    </>
  );
}

export default Home;