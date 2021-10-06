import { ReactNode } from 'react';
import styled from 'styled-components';
import Title from '@components/fonts/title';

interface Props {
  name: ReactNode;
}

const StyledHeader = styled.header`
  width: 60%;
  padding: 50px;
  background:rgba(0,0,0,0);
  height: 100%;
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
