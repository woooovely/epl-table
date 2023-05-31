import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer>
        <S.LogoText onClick={() => navigate("/")}>EPL Table</S.LogoText>
        <S.CategoryContainer>
          <S.Categories>
            <S.LinkStyle to="/">홈</S.LinkStyle>
          </S.Categories>
          <S.Categories>
            <S.LinkStyle to="/pl/rank">팀 순위</S.LinkStyle>
          </S.Categories>
          <S.Categories>
            <S.LinkStyle to="/pl/scorer">득점왕 순위</S.LinkStyle>
          </S.Categories>
          <S.Categories>
            <S.LinkStyle to="/pl/news">해외축구 소식</S.LinkStyle>
          </S.Categories>
        </S.CategoryContainer>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
