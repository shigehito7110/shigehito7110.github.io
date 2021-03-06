import Header from '@components/organisms/common/header';
import SideBar from '@components/organisms/common/sideBar';
import Footer from '@components/organisms/common/footer';
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
  width: 100%;
  
  @media(min-width: 770px) {
    width: 70%;
  }
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
        <Footer />
      </Common>
    </>
  )
}

export default Layout;
