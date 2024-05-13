import styled from "styled-components";
import bgImageLight from "./images/bg-desktop-light.jpg";
import bgImageDark from "./images/bg-desktop-dark.jpg";
import { useState, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import TasksSection from "./components/TasksSection";
import ActiveTasksSection from "./components/ActiveTasksSection";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState("all");
  const [completeCount, setCompleteCount] = useState(0);

  useEffect(() => {
    const count = tasks.filter((task) => !task.completed).length;
    setCompleteCount(count);
  }, [tasks]);

  useEffect(() => {
    setFilter("all");
  }, []);

  return (
    <Container isDark={isDark}>
      <HeaderSection isDark={isDark} setIsDark={setIsDark} />
      <MainSection>
        <InputSection
          isDark={isDark}
          completeCount={completeCount}
          newTask={newTask}
          setNewTask={setNewTask}
          setCompleteCount={setCompleteCount}
          setTasks={setTasks}
          tasks={tasks}
        />

        <TasksSection
          isDark={isDark}
          filter={filter}
          completeCount={completeCount}
          setCompleteCount={setCompleteCount}
          tasks={tasks}
          setTasks={setTasks}
        />

        <ActiveTasksSection
        tasks={tasks}
        setTasks={setTasks}
          filter={filter}
          setFilter={setFilter}
          isDark={isDark}
          completeCount={completeCount}
        />
      </MainSection>
      <Text>
        <p>Drag and drop to reorder list</p>
      </Text>
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

const Text = styled.div`
  margin-top: 40px;
  color: rgba(148, 149, 165, 1);
  font-size: 14px;
`;
