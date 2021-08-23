import styled from 'styled-components'
import Calculator from './components/Calculator'
import Header from './components/Header'
import "antd/dist/antd.css"

const StyledApp = styled.div`
  background-color: #e5e5e5;
  min-height: calc(100vh - 40px);
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;

`


function App() {
  return (
    <StyledApp>
      <div>
        <Header />
        <Calculator />
      </div>
    </StyledApp>
  );
}

export default App;
