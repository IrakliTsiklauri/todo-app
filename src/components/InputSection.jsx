import React from "react";
import styled from "styled-components";

const InputSection = ({
  isDark,
  completeCount,
  newTask,
  setCompleteCount,
  setNewTask,
  tasks,
  setTasks,
}) => {
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

  return (
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
  );
};

export default InputSection;

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
