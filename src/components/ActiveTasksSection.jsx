import React from "react";
import styled from "styled-components";

const ActiveTasksSection = ({ isDark, filter, setFilter, completeCount }) => {
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <Action isDark={isDark}>
      <ItemsQuantity>
        <p>{`${completeCount}`} items left</p>
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
  );
};

export default ActiveTasksSection;

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
