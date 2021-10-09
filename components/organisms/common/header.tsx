import { ReactNode } from 'react';
import styled from 'styled-components';
import Title from '@components/atoms/fonts/title';

interface Props {
  name: ReactNode;
}

const StyledHeader = styled.header`
  padding: 50px;
  background:rgba(0,0,0,0);

  @media(min-width: 500px) {
    padding: 50px;
    background:rgba(0,0,0,0);
    width: 100%;
  }
`

const Header = ({ name }: Props) => {
  return (
    <>
      <StyledHeader>
        <Title name={ name }/>
      </StyledHeader>
    </>
  )
}

export default Header;
