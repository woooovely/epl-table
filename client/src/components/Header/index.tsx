import * as S from './style';

const Header = () => {
    return (
        <>
          <S.HeaderContainer>
            <S.LogoText>EPL Table</S.LogoText>
            <S.CategoryContainer>
                <S.Categories>
                  <S.LinkStyle to="/">홈</S.LinkStyle>
                </S.Categories>
                <S.Categories>
                  <S.LinkStyle to="/rank">팀 순위</S.LinkStyle>
                </S.Categories>
                <S.Categories>
                  <S.LinkStyle to="/top-scorer">득점왕 순위</S.LinkStyle>
                </S.Categories>
            </S.CategoryContainer>
          </S.HeaderContainer>
        </>
    )
}

export default Header;