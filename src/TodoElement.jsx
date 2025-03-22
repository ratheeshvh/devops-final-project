import { useState } from "react";
import PropTypes from "prop-types";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

const TodoElement = ({ taskText, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="TodoElement">
      <input
        type="checkbox"
        checked={isChecked}
        className="TaskCheck"
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="taskControls">
        <p className={isChecked ? "TaskText strikethrough" : "TaskText"}>
          {taskText}
        </p>
        <button className="transparent" onClick={onDelete}>
          <img src={deleteIcon} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

TodoElement.propTypes = {
  taskText: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoElement;
