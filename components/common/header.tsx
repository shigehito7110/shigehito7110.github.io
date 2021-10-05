import { ReactNode } from 'react';
import styled from 'styled-components';
import Title from '@components/fonts/title';

interface Props {
  name: ReactNode;
}

const StyledHeder = styled.header`
  margin: 3rem auto;
`

const Header = ({ name }: Props) => {
  return (
    <>
      <StyledHeder>
        <Title name={ name }/>
      </StyledHeder>
    </>
  )
}

export default Header;