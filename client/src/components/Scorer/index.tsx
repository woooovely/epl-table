import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style";
import { teamNameMap } from '../../constants/constants';
import { playerNameMap } from '../../constants/constants';

interface Scorer {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: string;
  };
  team: {
    id: number;
    name: string;
    crest: string;
  };
  goals: number;
}


const ScorerTable = () => {
  const [scorers, setScorers] = useState<Scorer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/premierleague/scorers";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { scorers } = response.data;
        setScorers(scorers);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(scorers);

  if (isLoading) {
    return <h2>로딩중...</h2>;
  }

  return (
    <div>
      <S.Table cellPadding={0} cellSpacing={0}>
        <S.Head>
          <S.TableTr>
            <S.TableTh>순위</S.TableTh>
            <S.TableTh>선수명</S.TableTh>
            <S.TableTh>소속팀</S.TableTh>
            <S.TableTh>득점 수</S.TableTh>
          </S.TableTr>
        </S.Head>
        <S.Body>
          {scorers.map((scorer: Scorer, index: number) => (
            <S.ListTr key={scorer.player.id}>
              <S.ListTd>{index + 1}</S.ListTd>
              <S.ListTd>{playerNameMap[scorer.player.name]}</S.ListTd>
              <S.ListTd>
                <div>
                  <S.TeamLogo src={scorer.team.crest} alt="팀 로고" />
                </div>
                <div>
                  <S.TeamName>{teamNameMap[scorer.team.name]}</S.TeamName>
                </div>
              </S.ListTd>
              <S.ListTd>{scorer.goals}</S.ListTd>
            </S.ListTr>
          ))}
        </S.Body>
      </S.Table>
    </div>
  );
};

export default ScorerTable;
