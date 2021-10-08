import styled from 'styled-components';
import Icon from '@components/atoms/icons/icon';

const NeumorBox = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 2rem;
  background: linear-gradient(#fffcff, #fdf5ff, #ffffff);
  box-shadow:  0.3rem 0.3rem 1.6rem #b8b8b8,
              -0.3rem -0.3rem 1.6rem #FFFFFF;
  margin: 5rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background: #ffffff;
    box-shadow: inset -1rem -1rem 5rem #d9d9d9,
            inset 1rem 1rem 5rem #ffffff;
  }
`

const NeumorSquareButton = (prop: {item: string}) => {
  const {item} = prop;

  return (
    <>
      <NeumorBox>
        <Icon item={item} />
      </NeumorBox>
    </>
  )
}

export default NeumorSquareButton;
