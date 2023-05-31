import axios from "axios";
import useTitle from "../../../hook/title";
import * as S from "./style";
import { useEffect, useState } from "react";
import { laligaTeamNameMap } from "../../../constants/constants";

interface TeamData {
  id: number;
  name: string;
  crestUrl: string;
}

interface Team {
  team: TeamData;
  position: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalDifference: number;
}

const LaligaRankLists = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("라리가 팀 순위 - EPL Table"));

  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/laliga/rank";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { standings } = response.data;
        const laliga = standings.find((s: any) => s.type === "TOTAL");
        const laligaTable = laliga?.table;
        if (laligaTable) {
          const convertedTable = laligaTable.map((team: Team) => ({
            ...team,
            team: {
              ...team.team,
              name: laligaTeamNameMap[team.team.name] || team.team.name,
            },
          }));
          setTeams(convertedTable);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [teams]);

  if (isLoading) {
    return <h2>불러오는중...</h2>;
  }

  console.log(teams);

  return (
    <div>
      <S.Table>
        <S.Head>
          <S.TableTr>
            <S.TableTh>순위</S.TableTh>
            <S.TableTh>클럽</S.TableTh>
            <S.TableTh>경기수</S.TableTh>
            <S.TableTh>승</S.TableTh>
            <S.TableTh>무</S.TableTh>
            <S.TableTh>패</S.TableTh>
            <S.TableTh>득실차</S.TableTh>
            <S.TableTh>승점</S.TableTh>
          </S.TableTr>
        </S.Head>
        <S.Body>
          {teams.map((item: Team) => (
            <S.ListTr key={item.team.id}>
              <S.ListTd>
                <S.Rank>{item.position}</S.Rank>
              </S.ListTd>
              <S.ListTd>
                <S.TeamLogo src={item.team.crestUrl} alt="팀 이미지" />
                <S.TeamName>{item.team.name}</S.TeamName>
              </S.ListTd>
              <S.ListTd>{item.playedGames}</S.ListTd>
              <S.ListTd>{item.won}</S.ListTd>
              <S.ListTd>{item.draw}</S.ListTd>
              <S.ListTd>{item.lost}</S.ListTd>
              <S.ListTd>{item.goalDifference}</S.ListTd>
              <S.ListTd>{item.points}</S.ListTd>
            </S.ListTr>
          ))}
        </S.Body>
      </S.Table>
      <br />
      <br />
    </div>
  );
};

export default LaligaRankLists;
