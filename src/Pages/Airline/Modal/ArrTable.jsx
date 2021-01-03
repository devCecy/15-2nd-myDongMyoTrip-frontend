import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const res = {
  regions: [
    {
      id: 1,
      name: "국내",
      airports: [
        { id: 1, name: "제주" },
        { id: 2, name: "부산" },
        { id: 3, name: "김포" },
        { id: 4, name: "청주" },
        { id: 5, name: "여수" },
        { id: 6, name: "광주" },
        { id: 7, name: "대구" },
        { id: 8, name: "양양" },
        { id: 9, name: "군산" },
        { id: 10, name: "울산" },
        { id: 11, name: "포항" },
        { id: 12, name: "인천" },
      ],
    },
    {
      id: 2,
      name: "아시아",
      airports: [
        { id: 1, name: "다낭" },
        { id: 2, name: "방콕" },
        { id: 3, name: "세부" },
        { id: 4, name: "대만/타오위안" },
        { id: 5, name: "코타키나발루" },
        { id: 6, name: "나트랑/캄란" },
        { id: 7, name: "싱가포르" },
        { id: 8, name: "팡라오" },
      ],
    },
    {
      id: 3,
      name: "중국",
      airports: [
        { id: 1, name: "북경" },
        { id: 2, name: "상해/푸동" },
        { id: 3, name: "청도" },
        { id: 4, name: "성도" },
      ],
    },
    {
      id: 4,
      name: "일본",
      airports: [
        { id: 1, name: "도쿄/나리타" },
        { id: 2, name: "도쿄/하네다" },
        { id: 3, name: "오사카/간사이" },
        { id: 4, name: "오키나와" },
        { id: 5, name: "후쿠오카" },
        { id: 6, name: "키타큐슈" },
        { id: 7, name: "나고야" },
        { id: 8, name: "삿포로/치토세" },
      ],
    },
    {
      id: 5,
      name: "미주",
      airports: [
        { id: 1, name: "로스엔젤레스" },
        { id: 2, name: "하와이/호놀룰루" },
        { id: 3, name: "뉴욕" },
        { id: 4, name: "토론토" },
        { id: 5, name: "벤쿠버" },
        { id: 6, name: "시카고/오헤어" },
        { id: 7, name: "샌프란시스코" },
        { id: 8, name: "라스베가스" },
      ],
    },
    {
      id: 6,
      name: "중남미",
      airports: [
        { id: 1, name: "상파울로" },
        { id: 2, name: "칸쿤" },
        { id: 3, name: "산티아고" },
        { id: 4, name: "하바나" },
      ],
    },
    {
      id: 7,
      name: "유럽",
      airports: [
        { id: 1, name: "블라디보스토크" },
        { id: 2, name: "파리" },
        { id: 3, name: "런던" },
        { id: 4, name: "로마" },
      ],
    },
    {
      id: 8,
      name: "대양주",
      airports: [
        { id: 1, name: "시드니" },
        { id: 2, name: "멜버른" },
        { id: 3, name: "괌" },
        { id: 4, name: "사이판" },
      ],
    },
    {
      id: 9,
      name: "중동",
      airports: [
        { id: 1, name: "아부다비" },
        { id: 2, name: "두바이" },
      ],
    },
    {
      id: 10,
      name: "아프리카",
      airports: [
        { id: 1, name: "나이로비" },
        { id: 2, name: "케이프타운" },
        { id: 3, name: "카이로" },
      ],
    },
  ],
};

const ArrTable = ({ cityValue, handleCityValue }) => {
  // const [arrDestinations, setArrDestinations] = useState(0);

  // useEffect(() => {
  //   getArrDestinations();
  // }, []);

  // const getArrDestinations = () => {
  //   fetch("/data/ArrivalTable.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setArrDestinations(res.regions);
  //     });
  // };

  return (
    <ArrTableWrapper>
      {res.regions.map((location, index) => {
        return (
          <Wrap key={index}>
            <Location>{location.name}</Location>
            <City>
              {location.airports.map((city, i) => {
                return <div onClick={handleCityValue}>{city.name}</div>;
              })}
            </City>
          </Wrap>
        );
      })}
    </ArrTableWrapper>
  );
};

export default withRouter(ArrTable);

const ArrTableWrapper = styled.div`
  width: 681px;
  height: 697px;
  display: flex;
  flex-direction: column;
  justify-self: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  width: 681px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.Color.grey[200]};
`;

const Location = styled.div`
  width: 84px;
  height: 20px;
  font-size: 14px;
  padding: 0 10px;
`;

const City = styled.div`
  width: 597px;
  display: flex;
  flex-flow: wrap;
  align-items: center;

  div {
    width: 149px;
    height: 49px;
    display: flex;
    padding: 16px 10px 10px 10px;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => theme.Color.grey[700]};
    cursor: pointer;
  }
`;