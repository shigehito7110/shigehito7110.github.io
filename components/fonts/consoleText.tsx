import styled from 'styled-components';
import { ReactNode } from 'react';

interface Prop {
  text: ReactNode
}

const StyledText = styled.p`
  color: black;
  background:rgba(0,0,0,0);
`

const ConsoleText = ({text}: Prop) => {
  return (
    <StyledText>
      { text }
    </StyledText>
  )
}

export default ConsoleText;
