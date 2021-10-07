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

const Content = styled.div`
  width: 70%;
`

const Main = styled.main`
`

const Layout: FC<Prop> = ({ children }) => {
  return (
    <>
      <Common>
        <Content>
          <Header name={'welcome to mypage'} />
          <Main>{ children }</Main>
        </Content>
        <SideBar />
      </Common>
    </>
  )
}

export default Layout;
