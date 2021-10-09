import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 2rem;
  text-align: center;
  align-items: center;
  padding: 2rem 0;
`

const StyledText = styled.p`
  font-size: 1.2rem;
`

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledText>shigehito@page</StyledText>
      </StyledFooter>
    </>
  )
}

export default Footer;
