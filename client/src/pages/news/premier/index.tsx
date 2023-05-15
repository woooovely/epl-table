import Header from "../../../components/Header/index";
import * as S from "./style";
import banner from "../../../assets/svgs/banner.svg";
import NewsLists from "../../../components/News/premier/index";
import SubHeader from "../../../components/SubHeader";

const PremierNews = () => {
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
        <NewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default PremierNews;
