import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  name: ReactNode;
}

const StyledHeder = styled.header`
`

const Header = ({ name }: Props) => {
  return (
    <>
      <StyledHeder>
        <h1>{ name }</h1>
      </StyledHeder>
    </>
  )
}

export default Header;