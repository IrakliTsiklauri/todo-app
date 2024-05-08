import styled from "styled-components";
import mountainImg from "./images/bg-desktop-light.jpg";
import moon from "./images/icon-moon.svg";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  console.log(tasks, newTask)

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
        <Ul>
          {tasks.map((task, index) => (
            <List key={index}>{task}</List>
          ))}
        </Ul>
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
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 15px;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const List = styled.li`
  list-style: none;
  border: 1px solid black;
  font-size: 18px;
  line-height: 18px;
  padding: 20px;
  width: 540px;
`;
