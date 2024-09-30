import Navbars from "../components/Navbars";
import { Table, Form } from "react-bootstrap";

function Test() {
  return (
    <>
      <Navbars />
      <div>
        다음에 기술된 문항들은 뒷부분 또는 중간이 빠져있습니다. 각 문장을
        읽으면서 맨 먼저 떠오르는 생각이나 느낌을 빈칸에 기록하여 문장이 되도록
        완성하여 주십시오. 시간 제한은 없으나 가능한 한 빨리 기록하여 주십시오.
        만약 문장을 읽고 생각이나 느낌이 떠오르지 않을 때는 다른 문장을 먼저
        완성하셔도 됩니다.
      </div>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>1</td>
            <td>내가 가장 싫어하는 활동은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>내가 생각하기에 나는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>내가 생각하는 나의 능력은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>내가 가장 잘하는 것은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>10년 뒤 내가 되고 싶은 사람은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>친한 사람들은 나를</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>내가 삶에서 가장 중요한 것은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>나의 장점은</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>이고, 단점은</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>이다.</td>
          </tr>
          <tr>
            <td>9</td>
            <td>내가 좋아하는 활동은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>부모님은 나를</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>나는 친구들과 이야기할 때</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>다른 사람들과 의견이 다를 때</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>나에게 있어 친구는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>나는 부모님과 이야기할 때</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>친구들과 사이좋게 지내려면 나는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>나는 많은 사람과 함께 있을 때</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>내가 가고 싶은 학교에 대해 알아보려면</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              내가 고등학교(대학교)를 선택할 때 가장 중요하게 생각하는 것은
            </td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>중학교(고등학교) 졸업 후 내가 가고 싶은 학교는</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>. 그 이유는</td>
            <td colSpan={2}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>내가 공부를 하는 이유는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>내가 가치 있게 생각하는 직업은</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>. 그 이유는</td>
            <td colSpan={2}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>직업을 선택할 때 내가 가장 중요하게 생각하는 것은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>내가 생각하기에 미래에 유망한 직업은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>미래사회에 필요한 능력은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>내가 원하는 직업을 갖기 위해 필요한 자격은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>가장 기억에 남는 직업체험활동은</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>. 그 이유는</td>
            <td colSpan={2}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>27</td>
            <td>나는 모르는 직업이 있으면</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td>고등학교(대학교) 진학을 위해 준비하고 있는 것은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>내가 하고 싶은 직업은</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td>내가 하고 싶은 직업을 갖기 위해 나는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>31</td>
            <td>진로에 관하여 부모님과 의견이 다를 때, 나는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>진로를 결정하기 위해 나는</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>33</td>
            <td>나는 진로에 대해 고민이 있을 때</td>
            <td colSpan={4}>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>34</td>
            <td>내가 지금 하고 있는 진로고민은</td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>그 고민을 해결하는 방법은</td>
            <td colSpan={2}>
              <Form.Control type="text" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Test;
