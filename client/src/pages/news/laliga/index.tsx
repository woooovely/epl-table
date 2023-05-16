import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/laliga_banner.svg';
import LaligaNewsLists from '../../../components/News/laliga';

const LaligaNews = () => {
  return (
    <S.Container>
      <Header />
      <SubHeader
        title="해외축구 소식"
        premier="/pl/news"
        laliga="/laliga/news"
        serie="/serie/news"
      />
      <S.BannerImage src={banner} alt="배너" />
      <S.NewsContainer>
        <LaligaNewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default LaligaNews;
