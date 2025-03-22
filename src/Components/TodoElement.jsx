
import { useState } from "react";
import PropTypes from "prop-types";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

const TodoElement = ({ taskText, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(taskText);

  const handleTextChange = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    } else if (event.key === "Escape") {
      setText(taskText);
      setIsEditing(false);
    }
  };

  return (
    <div className="TodoElement">
      <input
        type="checkbox"
        checked={isChecked}
        className="TaskCheck"
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="taskControls">
        {isEditing ? (
          <input
            className="TaskInput"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleTextChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <p className={isChecked ? "TaskText strikethrough" : "TaskText"}>
            {text}
          </p>
        )}
        <button className="transparent" onClick={() => setIsEditing(true)}>
          <img src={editIcon} alt="Edit" />
        </button>
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
