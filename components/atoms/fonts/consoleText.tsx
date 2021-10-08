import styled from 'styled-components';

const StyledText = styled.p`
  color: black;
  background:rgba(0,0,0,0);
  margin-top: 0.5rem;
`

const ConsoleText = (prop: {text: string}) => {
  const {text} = prop
  return (
    <StyledText>
      { text }
    </StyledText>
  )
}

export default ConsoleText;
