import { ReactNode } from 'react';

interface Props {
  name: ReactNode;
}

const Header = ({name}: Props) => {
  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
    </>
  )
}

export default Header;