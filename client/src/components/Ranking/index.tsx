import axios from "axios";
import { useEffect, useState } from "react";
import useTitle from "../../hook/title";
import * as S from "./style";

interface TeamData {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

interface Team {
  id: number;
  team: TeamData;
  crestUrl: string;
  position: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
}

export const teamNameMap: { [key: string]: string } = {
  "Arsenal FC": "아스날",
  "Manchester City FC": "맨체스터 시티",
  "Newcastle United FC": "뉴캐슬 유나이티드",
  "Manchester United FC": "맨체스터 유나이티드",
  "Tottenham Hotspur FC": "토트넘 홋스퍼",
  "Aston Villa FC": "아스톤 빌라",
  "Brighton & Hove Albion FC": "브라이튼 호브 알비온",
  "Liverpool FC": "리버풀",
  "Brentford FC": "브렌트포드",
  "Fulham FC": "풀럼",
  "Chelsea FC": "첼시",
  "Crystal Palace FC": "크리스탈 팰리스",
  "Wolverhampton Wanderers FC": "울버햄튼 원더러스",
  "West Ham United FC": "웨스트햄",
  "AFC Bournemouth": "본머스",
  "Leeds United FC": "리즈",
  "Everton FC": "에버튼",
  "Nottingham Forest FC": "노팅엄",
  "Leicester City FC": "레스터",
  "Southampton FC": "사우스햄튼",
};

const RankingLists = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("팀 순위 - EPL Table"));

  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/premierleague";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { standings } = response.data;
        const premierLeague = standings.find((s: any) => s.type === "TOTAL");
        const premierLeagueTable = premierLeague?.table;
        if (premierLeagueTable) {
          const convertedTable = premierLeagueTable.map((team: Team) => ({
            ...team,
            team: {
              ...team.team,
              name: teamNameMap[team.team.name] || team.team.name,
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
    return <h2>로딩중...</h2>;
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
            <S.TableTh>승점</S.TableTh>
          </S.TableTr>
        </S.Head>
        <S.Body>
          {teams.map((item: Team) => (
            <S.ListTr key={item.position}>
              <S.ListTd>
                <S.Rank>{item.position}</S.Rank>
              </S.ListTd>
              <S.ListTd>
                <S.TeamLogo src={item.team.crest} alt="팀 이미지" />
                <S.TeamName>{item.team.name}</S.TeamName>
              </S.ListTd>
              <S.ListTd>{item.playedGames}</S.ListTd>
              <S.ListTd>{item.won}</S.ListTd>
              <S.ListTd>{item.draw}</S.ListTd>
              <S.ListTd>{item.lost}</S.ListTd>
              <S.ListTd>{item.points}</S.ListTd>
            </S.ListTr>
          ))}
        </S.Body>
      </S.Table>
    </div>
  );
};

export default RankingLists;
