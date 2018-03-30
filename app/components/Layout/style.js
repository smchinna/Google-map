import styled from 'styled-components';

const Layout = styled.div`
  top: 0px;
  bottom: 0px;
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
`;
const MyLocation = styled.div`
  height: 40vh;
  width: 100%;
  padding-bottom: 5%;
`;

const Header = styled.div`
  height: 8vh;
  background-color: #71d4a3;
  margin-bottom: 2%;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
`; 

export { Layout, MyLocation, Header };