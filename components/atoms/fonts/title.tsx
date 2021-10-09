import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  name: ReactNode;
}

const TitleHeading = styled.h1`
  font-family: 'Amatic SC', cursive;
  font-size: 6.5rem;
  color: #faf850;
`

const Title = ({name}: Props) => {
  return (
    <TitleHeading>{ name }</TitleHeading>
  )
}

export default Title;
