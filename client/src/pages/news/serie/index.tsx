import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/serie_banner.svg'
import SerieNewsLists from '../../../components/News/serie';

const SerieNews = () => {
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
        <SerieNewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default SerieNews;
