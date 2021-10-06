import Header from '@components/common/header';
import SideBar from '@components/common/sideBar';
import { FC } from 'react';
import styled from 'styled-components';

interface Prop {}

const Common = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Layout: FC<Prop> = ({ children }) => {
  return (
    <>
      <Common>
        <Header name={'welcome to mypage'}/>
        <SideBar />
        { children }
      </Common>
    </>
  )
}

export default Layout;
