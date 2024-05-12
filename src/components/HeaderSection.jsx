import React from 'react'
import moon from "../images/icon-moon.svg"
import sun from "../images/icon-sun.svg"
import styled from 'styled-components'

const HeaderSection = ({isDark, setIsDark}) => {

    const toggleMode = () => {
        setIsDark((prevMode) => !prevMode);
      };

  return (
    <Head isDark={isDark} toggleMode={toggleMode}>
    <h1>Todo App</h1>
    <ModeBtn isDark={isDark} onClick={toggleMode}>
      <img
        src={isDark ? `${sun}` : `${moon}`}
        alt={isDark ? "sun" : "moon"}
      />
    </ModeBtn>
  </Head>
  )
}

export default HeaderSection

const Head = styled.div`
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  color: #fff;
`;

const ModeBtn = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;