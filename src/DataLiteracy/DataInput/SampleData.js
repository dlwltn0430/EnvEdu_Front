import classNames from "classnames";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDataPretreatmentStore } from "../store/dataPretreatmentStroe";

function SampleData() {
  const setDatas = useDataPretreatmentStore(state => state.setDatas);
  const [selected, setSelected] = useState(-1);
  const [data, setData] = useState([[]]);
  const navigate = useNavigate();
  const sampleDatas = {
    "지역별 장마 분석": [
      ["지역", "강수일수", "평균 강수량"],
      ["춘천", 9, 156.4],
      ["강릉", 6, 142.2],
      ["서울", 7, 165.3],
      ["인천", 8, 84.2],
      ["수원", 9, 123.7],
      ["대전", 11, 150.4],
      ["포항", 10, 203.7],
      ["대구", 13, 147.9],
      ["전주", 11, 220.4],
      ["울산", 10, 189.3],
    ],
    "23년 7월 농업지대 기상": [
      ["농업지대", "평균기온", "강수량", "일조시간"],
      ["태백고냉", 21.9, 181.9, 149.7],
      ["소백간산", 25.3, 675.6, 140],
      ["영남내륙산간", 24.6, 578.3, 137.8],
      ["중부내륙", 25.9, 505.3, 144.5],
      ["소백서부내륙", 26, 699.7, 138.6],
      ["노령동서내륙", 25.6, 570.2, 136.2],
      ["호남내륙", 25.6, 570.2, 136.2],
      ["영남내륙", 26, 477.5, 123.8],
      ["중서부평야", 25.7, 508.1, 157],
      ["남서해안", 25.6, 500.8, 104.9],
      ["남부해안", 25.2, 623.4, 113.6],
      ["동해안남부", 26.2, 235.6, 167.3],
    ],
    "2023년 8월 11일 도시별 기온": [
      ["도시", "기온"],
      ["서울", 22.7],
      ["강릉", 27.2],
      ["수원", 23.7],
      ["포항", 27.5],
      ["울산", 27.7],
      ["부산", 28.3],
      ["창원", 27.9],
      ["여수", 26.5],
      ["제주", 30.2],
      ["인천", 22.4],
    ],
    "2013년 수거한 해양쓰레기 무게 비율": [
      ["분류", "무게 %"],
      ["플라스틱류", 25.4],
      ["종이", 2.4],
      ["스티로폼", 30.5],
      ["나무", 20.4],
      ["금속", 1.9],
      ["의류 및 천", 1.8],
      ["유리", 1.8],
      ["고무", 4.0],
      ["의류 및 개인위생", 0.1],
      ["흡연/불꽃놀이", 0.3],
      ["외국기인", 0.3],
      ["기타", 2.1],
    ],
    "대중교통 기상상태별 이용인원": [
      ["지역", "맑은날", "강우", "강설"],
      ["서울", 3493041, 3376563, 2956729],
      ["부산", 827043, 761675, 628552],
      ["대구", 398102, 374781, 354555],
      ["인천", 582456, 549433, 497790],
      ["광주", 164801, 153363, 165855],
      ["대전", 192403, 177120, 190589],
      ["울산", 103108, 99450, 76561],
      ["세종", 26623, 25122, 24249],
      ["경기", 2339021, 2234957, 2006961],
      ["강원", 66742, 47988, 47599],
    ],
    "해양쓰레기 비율": [
      ["지역", "플라스틱", "스티로폼", "나무류"],
      ["강화 여차리", 10.1, 2.6, 28.1],
      ["안산 말부흥", 2.4, 0.7, 1.6],
      ["태안 백리포", 59.8, 15.6, 13.1],
      ["보령 석대도", 18.8, 5.7, 22.3],
      ["부안 변산", 8.8, 75.5, 34.9],
    ],
    "농업지대별 기상자료": [
      ["월", "강수량"],
      ["1월", 8.1],
      ["2월", 7.8],
      ["3월", 11.1],
      ["4월", 7.5],
      ["5월", 6.5],
      ["6월", 14.8],
      ["7월", 17.5],
      ["8월", 19.7],
      ["9월", 10.5],
      ["10월", 8.3],
      ["11월", 8.4],
      ["12월", 10.4],
    ],
    "오존주의보 발령 횟수": [
      ["연도", "도심지역", "서북지역", "동남지역"],
      [2016, 5, 4, 2],
      [2017, 4, 5, 5],
      [2018, 12, 8, 11],
      [2019, 6, 5, 3],
      [2020, 2, 8, 7],
      [2021, 5, 7, 4],
      [2022, 10, 8, 5],
    ],
  };

  const onClickBtn = (key, idx) => {
    setSelected(idx);
    setData(sampleDatas[key]);
  };
  const onClickNextBtn = () => {
    setDatas(data);
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/dataLiteracy/pretreatment");
  };

  return (
    <div className="sampleDataWrapper">
      <div className="sampleDataWrapper-grid">
        {Object.keys(sampleDatas).map((key, idx) => (
          <div
            key={key}
            onClick={() => onClickBtn(key, idx)}
            className={classNames("sampleData", {
              selected: selected === idx,
            })}
          >
            <div className="box">{`프로젝트 ${idx + 1}`}</div>
            <div>{key}</div>
          </div>
        ))}
      </div>
      {selected !== -1 && (
        <div className="sampleData-nextBtn">
          <Button onClick={onClickNextBtn}>다음</Button>
        </div>
      )}
    </div>
  );
}

export default SampleData;
