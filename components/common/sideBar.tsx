import styled from 'styled-components';
import NeumorSquareButton from '@components/buttons/neumorSquareButton';

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
        items.map((id) => {
          return (
            <NeumorSquareButton key={id}/>
          )
        })
      }
    </Bar>
  )
}

export default SideBar;