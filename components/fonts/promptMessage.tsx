import styled from 'styled-components';

const StyledMessage = styled.div`
`
const Root = styled.span`
  color: pink;
`

const Pwd = styled.span`
  color: blue;
`

const PromptMessage = () => {
  return (
    <StyledMessage>
      <Root>shigehito naito's Page</Root>: <Pwd>shigehito7110.github.io</Pwd> (main)
    </StyledMessage>
  )
}

export default PromptMessage;