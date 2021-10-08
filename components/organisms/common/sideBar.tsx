import styled from 'styled-components';
import NeumorSquareButton from '@components/molecules/buttons/neumorSquareButton';

const Bar = styled.div`
  display:flex;
  flex-flow: column;
  margin 0 auto;
`

const items = [
  'github',
  'dockerhub',
  'pornhub'
]

const SideBar = () => {
  return (
    <Bar>
      {
        items.map((item, id) => {
          return (
            <NeumorSquareButton key={id} item={item}/>
          )
        })
      }
    </Bar>
  )
}

export default SideBar;