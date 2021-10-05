import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  name: ReactNode;
}

const TitleHeading = styled.h1`
  font-family: 'Palette Mosaic', cursive;
  font-size: 4rem;
  color: #faf850;
  text-shadow:0 5px 5px #000000;
`

const Title = ({name}: Props) => {
  return (
    <TitleHeading>{ name }</TitleHeading>
  )
}

export default Title;
