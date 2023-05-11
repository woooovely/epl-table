import * as S from "./style";
import banner from "../../../assets/svgs/banner.svg";
import Header from "../../../components/Header";
import PLRankLists from "../../../components/Ranking/premier";
import SubHeader from "../../../components/SubHeader";

const PremierRank = () => {
  return (
    <div>
      <Header />
      <SubHeader
        title="프리미어리그 팀순위"
        premier="/pl/rank"
        laliga="/laliga/rank"
        serie="/serie/rank"
      />
      <S.BannerImage src={banner} alt="배너" />
      <S.Text>잉글랜드 프리미어리그</S.Text>
      <S.Stick />
      <S.TableContainer>
        <PLRankLists />
      </S.TableContainer>
    </div>
  );
};

export default PremierRank;
