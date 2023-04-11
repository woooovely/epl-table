import * as S from "./style";
import logo from "../assets/svgs/premier_league.svg";

const Introduce = () => {

  return (
    <S.Container>
      <S.IntroduceContainer>
        <S.Section>
          <S.TextContainer>
            <S.Text>
              잉글랜드
              <br />
              최고의 축구리그
              <br />
              프리미어리그에 빠져보세요.
            </S.Text>
          </S.TextContainer>
          <S.Right>
            <img src={logo} alt="프리미어리그 로고" />
          </S.Right>
        </S.Section>
        <S.Button>이동하기</S.Button>
      </S.IntroduceContainer>
    </S.Container>
  );
};

export default Introduce;
