import { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { laligaPlayerNameMap, laligaTeamNameMap, nationMap } from "../../../constants/constants";

interface Scorer {
  player: {
    id: number;
    name: string;
    nationality: string;
  };
  team: {
    id: number;
    name: string;
    crest: string;
    website: string;
  };
  goals: number;
}

const LaligaScorerLists = () => {
  const [scorers, setScorers] = useState<Scorer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/laliga/scorer";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { scorers } = response.data;
        setScorers(scorers);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>불러오는중...</h2>;
  }

  console.log(scorers);

  return (
    <S.Table>
      <S.Head>
        <S.TableTr>
          <S.TableTh>순위</S.TableTh>
          <S.TableTh>선수명</S.TableTh>
          <S.TableTh>득점</S.TableTh>
          <S.TableTh>소속팀</S.TableTh>
          <S.TableTh>국적</S.TableTh>
        </S.TableTr>
      </S.Head>
      <S.Body>
        {scorers.map((item: Scorer, index: number) => (
          <S.ListTr key={item.player.id}>
            <S.ListTd>{index + 1}</S.ListTd>
            <S.ListTd>{laligaPlayerNameMap[item.player.name]}</S.ListTd>
            <S.ListTd>{item.goals}</S.ListTd>
            <S.ListTd>
                <S.TeamLogo src={item.team.crest} alt="팀 로고" />
                <S.TeamName>{laligaTeamNameMap[item.team.name]}</S.TeamName>
            </S.ListTd>
            <S.ListTd>{nationMap[item.player.nationality]}</S.ListTd>
          </S.ListTr>
        ))}
      </S.Body>
    </S.Table>
  );
};

export default LaligaScorerLists;
