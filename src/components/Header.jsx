import styled from 'styled-components'


const StyledHeader = styled.div`
h1 {
    text-align: center;
    color: #636363;
    padding: 5px;
    text-transform: uppercase;
  }
  img {
    width: 300px;
    margin: 0 auto;
    display: block;
    border-radius: 20px;
  }
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>Calculate your cigarette consumption</h1>
            <img alt="no smoking" src={process.env.PUBLIC_URL + '/smoking.jpg'} />
        </StyledHeader>
    )
}

export default Header