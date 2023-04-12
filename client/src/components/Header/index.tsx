import * as S from './style';

const Header = () => {
    return (
        <>
          <S.HeaderContainer>
            <S.LogoText>EPL Table</S.LogoText>
            <S.CategoryContainer>
                <S.Categories>
                  <S.LinkStyle to="/">About</S.LinkStyle>
                </S.Categories>
                <S.Categories>
                  <S.LinkStyle to="/rank">Ranking</S.LinkStyle>
                </S.Categories>
                <S.Categories>
                  <S.LinkStyle to="/top-scorer">Top Scorer</S.LinkStyle>
                </S.Categories>
            </S.CategoryContainer>
          </S.HeaderContainer>
        </>
    )
}

export default Header;