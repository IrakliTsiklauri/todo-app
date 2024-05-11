import styled from "styled-components";
import mountainImg from "./images/bg-desktop-light.jpg";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

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
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Head isDark={isDark} toggleMode={toggleMode}>
        <h1>Todo App</h1>
        <ModeBtn isDark={isDark} onClick={toggleMode}>
          <img src={isDark ? `${sun}` : `${moon}`} alt="mode" />
        </ModeBtn>
      </Head>
      <MainSection>
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
            <List key={index} completed={task.completed}>
              <TaskCheckbox onClick={() => toggleTaskCompletion(index)}>
                {task.completed && <CheckIcon />}
              </TaskCheckbox>
              <TaskText completed={task.completed}>{task.text}</TaskText>
            </List>
          ))}
        </Ul>
        <Action>
          <ItemsQuantity>
            <p>5 items left</p>
          </ItemsQuantity>
          <ChooseTask>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </ChooseTask>
          <ClearTasks>
            <p>Clear Completed</p>
          </ClearTasks>
        </Action>
      </MainSection>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mountainImg});
  background-repeat: no-repeat;
  background-size: 100% 50%;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 540px;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

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
`

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 20px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgba(227, 228, 241, 1);
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 5px;
  width: 100%;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: 2px solid rgba(227, 228, 241, 1);
  font-size: 18px;
  line-height: 18px;
  padding: 20px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  /* opacity: ${(props) => (props.completed ? 0.6 : 1)}; */
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckIcon = styled.span`
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  border-radius: 50%;
`;

const TaskText = styled.span`
  opacity: ${(props) => (props.completed ? 0.6 : 1)};
  color: ${(props) =>
    props.completed ? "rgba(0, 0, 0, 0.6)" : "rgba(73, 76, 107, 1)"};
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border-top: 0.1px solid rgba(227, 228, 241, 1);
  padding: 20px;
  width: 540px;
`;

const ItemsQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    color: rgba(148, 149, 165, 1);

    &:hover {
      cursor: pointer;
    }
  }
`;

const ChooseTask = styled.div`
  display: flex;
  gap: 15px;

  p {
    font-size: 14px;
    color: rgba(148, 149, 165, 1);

    &:hover {
      cursor: pointer;
    }
  }
`;

const ClearTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    color: rgba(148, 149, 165, 1);

    &:hover {
      cursor: pointer;
    }
  }
`;
