import Header from '../../../components/Header/index'
import * as S from "./style";
import banner from '../../../assets/svgs/banner.svg';
import NewsLists from '../../../components/News/premier/index'

const News = () => {
  return (
    <S.Container>
      <Header />
      <S.BannerImage src={banner} alt="배너" />
      <S.NewsContainer>
        <NewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default News;
