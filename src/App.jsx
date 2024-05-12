import styled from "styled-components";
import bgImageLight from "./images/bg-desktop-light.jpg";
import bgImageDark from "./images/bg-desktop-dark.jpg";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState("all");
  const [completeCount, setCompleteCount] = useState(0);


  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  useEffect(() => {
    const count = tasks.filter(task => !task.completed).length;
    setCompleteCount(count);
  }, [tasks]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    setFilter("all");
  }, []);

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
      setCompleteCount(completeCount + 1); 
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    
    if (updatedTasks[index].completed) {
      setCompleteCount(completeCount - 1); 
    } else {
      setCompleteCount(completeCount + 1); 
    }
  };

  return (
    <Container isDark={isDark}>
      <Head isDark={isDark} toggleMode={toggleMode}>
        <h1>Todo App</h1>
        <ModeBtn isDark={isDark} onClick={toggleMode}>
          <img
            src={isDark ? `${sun}` : `${moon}`}
            alt={isDark ? "sun" : "moon"}
          />
        </ModeBtn>
      </Head>
      <MainSection>
        <Form isDark={isDark}>
          <input
            isDark={isDark}
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Create a new todo…"
          />
        </Form>
        <Ul>
          {filteredTasks.map((task, index) => (
            <List key={index} completed={task.completed} isDark={isDark}>
              <TaskCheckbox
                onClick={() => toggleTaskCompletion(index)}
                isDark={isDark}
              >
                {task.completed && <CheckIcon />}
              </TaskCheckbox>
              <TaskText completed={task.completed}>{task.text}</TaskText>
            </List>
          ))}
        </Ul>
        <Action isDark={isDark}>
          <ItemsQuantity>
            <p>{`${completeCount}` } items left</p>
          </ItemsQuantity>
          <ChooseTask>
            <p
              onClick={() => handleFilterChange("all")}
              className={filter === "all" ? "active" : ""}
            >
              All
            </p>
            <p
              onClick={() => handleFilterChange("active")}
              className={filter === "active" ? "active" : ""}
            >
              Active
            </p>
            <p
              onClick={() => handleFilterChange("completed")}
              className={filter === "completed" ? "active" : ""}
            >
              Completed
            </p>
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
  background-color: ${(props) =>
    props.isDark ? "hsl(235, 21%, 11%)" : "#fff"};
  background-image: url(${(props) =>
    props.isDark ? bgImageDark : bgImageLight});
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
  box-shadow: ${(props) => (props.isDark ? "" : "rgba(194, 195, 214, 0.5)")};
  /* box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5); */
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
`;

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
    border: ${(props) =>
      props.isDark ? "none" : "1px solid rgba(227, 228, 241, 1)"};
    background-color: ${(props) =>
      props.isDark ? "rgba(37, 39, 61, 1)" : "#fff"};
    color: ${(props) =>
      props.isDark ? "rgba(200, 203, 231, 1)" : "rgba(73, 76, 107, 1)"};
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
  border-bottom: ${(props) =>
    props.isDark
      ? "2px solid rgba(57, 58, 75, 1)"
      : "2px solid rgba(227, 228, 241, 1)"};
  font-size: 18px;
  line-height: 18px;
  padding: 20px;
  width: 100%;
  background-color: ${(props) =>
    props.isDark ? "rgba(37, 39, 61, 1)" : "#fff"};
  overflow: hidden;
  /* opacity: ${(props) => (props.completed ? 0.6 : 1)}; */
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) =>
    props.isDark ? "1px solid #43476e" : "1px solid #dfdfe6"};
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
  color: ${(props) => (props.isDark ? "rgba(200, 203, 231, 1)" : "#71748f")};
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: ${(props) =>
    props.isDark
      ? "1px solid rgba(57, 58, 75, 1)"
      : "1px solid rgba(227, 228, 241, 1)"}; //rgba(227, 228, 241, 1)
  padding: 20px;
  width: 540px;
  background-color: ${(props) =>
    props.isDark ? "rgba(37, 39, 61, 1)" : "#fff"};
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

  p.active {
  font-weight: bold;
  color: rgba(58, 124, 253, 1); 
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
