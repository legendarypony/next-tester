"use client"
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
const Main = styled.div`
position: relative;
display: flex;
justify-content: space-between;
height: 100vh;
width: 100vw;
overflow:hidden;
`;
const EllipseDiv = styled.div`position: absolute;
bottom: 0px;
left: -152px;
filter: blur(300px);
border-radius: 50%;
background-color: rgba(194, 40, 221, 0.3);
width: 701px;
height: 701px;
`;
const EllipseDiv1 = styled.div`
position: absolute;
top: -478px;
left: 100px;
filter: blur(300px);
border-radius: 50%;
background-color: rgba(194, 40, 221, 0.2);
width: 701px;
height: 701px;
`;
const EllipseDiv2 = styled.div`
position: absolute;
bottom: 0px;
right: 350px;
filter: blur(300px);
border-radius: 50%;
background-color: rgba(250, 0, 255, 0.2);
width: 701px;
height: 701px;
`;
const EllipseDiv3 = styled.div`position: absolute;
top: -458px;
right: 0px;
filter: blur(300px);
border-radius: 50%;
background-color: #460e50;
width: 701px;
height: 701px;
`;
export default function Home() {
  return (
    <Main>
      <EllipseDiv/>
      <EllipseDiv1/>
      <EllipseDiv2/>
      <EllipseDiv3/>
      <Sidebar/>
      <Content/>
    </Main>
  );
}
