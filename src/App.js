import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
  box-sizing: border-box;
  padding: 1em;
`;

function App() {
  return (
    <StyledApp>
      <div>투두리스트</div>
      <div>리스트 들어올자리</div>
    </StyledApp>
  );
}

export default App;
