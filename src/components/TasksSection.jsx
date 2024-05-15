import React from "react";
import styled from "styled-components";

const TasksSection = ({
  isDark,
  tasks,
  setTasks,
  filter,
  setCompleteCount,
  completeCount,
}) => {
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

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    const updatedTasks = [...tasks];

    const [removedTask] = updatedTasks.splice(sourceIndex, 1);
    updatedTasks.splice(targetIndex, 0, removedTask);

    setTasks(updatedTasks);
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
    <Ul>
      {filteredTasks.map((task, index) => (
        <List
          key={index}
          completed={task.completed}
          isDark={isDark}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          <TaskCheckbox onClick={() => toggleTaskCompletion(index)} isDark={isDark}>
            {task.completed && <CheckIcon />}
          </TaskCheckbox>
          <TaskText completed={task.completed}>{task.text}</TaskText>
        </List>
      ))}
    </Ul>
  );
};

export default TasksSection;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 5px;
  width: 100%;

  @media (max-width: 570px) {
    width: 327px;
  }
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
  background-color: ${(props) => (props.isDark ? "rgba(37, 39, 61, 1)" : "#fff")};
  overflow: hidden;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  cursor: pointer;

  @media (max-width: 570px) {
    padding: 10px;
  }
`;

const TaskCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) => (props.isDark ? "1px solid #43476e" : "1px solid #dfdfe6")};
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

  @media (max-width: 570px) {
    font-size: 12px;
  }
`;
