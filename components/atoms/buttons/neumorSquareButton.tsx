import styled from 'styled-components';

const NeumorBox = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 2rem;
  background: linear-gradient(#fffcff, #fdf5ff, #ffffff);
  box-shadow:  0.3rem 0.3rem 1.6rem #b8b8b8,
              -0.3rem -0.3rem 1.6rem #FFFFFF;
  margin: 5rem auto 0 auto;
`

const NeumorSquareButton = () => {
  return (
    <NeumorBox>
    </NeumorBox>
  )
}

export default NeumorSquareButton;
