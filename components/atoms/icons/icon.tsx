import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDocker, faNode } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Icons: { [index: string]: {[index: string]: string | any}} = {
  github: {
    path: 'https://github.com/shigehito7110',
    component: faGithub
  },
  dockerhub: {
    path: 'https://hub.docker.com/u/shige7110',
    component: faDocker
  },
  pornhub: {
    path: '',
    component: faNode
  }
}

const IconStyle: {[index: string]: string} = {
  width: '8rem',
  height: '8rem',
  color: '#000000',
  backgroundColor: 'rgba(0,0,0,0)',
}

const StyledLink = styled.a`
  background: rgba(0,0,0,0);
`

const Icon = (prop: {item: string}) => {
  const {item} = prop;

  const { path, component } = Icons[item]

  return (
    <>
      <StyledLink
        href={path}
      >
        <FontAwesomeIcon icon={component} style={IconStyle}/>
        {/* {item} */}
      </StyledLink>
    </>
  )
}

export default Icon;