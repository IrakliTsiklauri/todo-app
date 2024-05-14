import React from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import styled from "styled-components";

const HeaderSection = ({ isDark, setIsDark }) => {
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
  );
};

export default HeaderSection;

const Head = styled.div`
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  color: #fff;

  h1 {
    font-size: 40px;

    @media (max-width: 570px) {
      font-size: 25px;
    }
  }

  @media (max-width: 570px) {
    width: 327px;
    margin-bottom: 10px;
  }
`;

const ModeBtn = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
