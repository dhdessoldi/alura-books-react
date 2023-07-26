import Header from '../../components/Header'
import styled from 'styled-components'
import Search from '../../components/Search';
import { Outlet } from 'react-router-dom';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

export default function BasePage() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  )
}
