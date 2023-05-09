import * as S from "./style";
import banner from '../../../assets/svgs/banner.svg'
import Header from "../../../components/Header";
import RankingLists from "../../../components/Ranking/premier";
import SubHeader from '../../../components/SubHeader';

const TeamRank = () => {
  return (
    <div>
      <Header />
      <SubHeader title="팀 순위" />
      <S.BannerImage src={banner} alt="배너" />
      <S.Text>England Premier League</S.Text>
      <S.Stick />
      <S.TableContainer>
        <RankingLists />
      </S.TableContainer>
    </div>
  );
};

export default TeamRank;
