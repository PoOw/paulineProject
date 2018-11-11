import styled from 'styled-components';

const StyledLoader = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const buttonStyle = {
  margin: 'auto',
  marginTop: '2em',
  width: '100%',
}

export const StyledAnswers = styled.div`
  margin-left: 30%;
  margin-right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export default StyledLoader;
