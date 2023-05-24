import Header from "../../../components/Header/index";
import * as S from "./style";
import banner from "../../../assets/svgs/banner.svg";
import NewsLists from "../../../components/News/premier/index";
import SubHeader from "../../../components/SubHeader";
import useTitle from '../../../hook/title';

const PremierNews = () => {
  const titleUpdater = useTitle('불러오는 중...')
  setTimeout(() => titleUpdater('프리미어리그 뉴스 - EPL Table'))

  return (
    <S.Container>
      <Header />
      <SubHeader
        title="프리미어리그 소식"
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
