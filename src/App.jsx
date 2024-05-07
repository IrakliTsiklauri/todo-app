import styled from "styled-components";
import mountainImg from "./images/bg-desktop-light.jpg";
import moon from "./images/icon-moon.svg";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <Container>
      <MainSection>
        <Head>
          <h1>Todo App</h1>
          <img src={moon} alt="moon" />
        </Head>

        <Form>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Create a new todo…"
          />
        </Form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </MainSection>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mountainImg});
  background-repeat: no-repeat;
  background-size: 100% 30%;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 540px;
`;

const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  margin-bottom: 40px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    width: 100%;
    padding: 15px;
  }
`;
