import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import OpenModel from "./openModel";

const EditTodo = ({updateId, todo}) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setOpen(!open);
    setIsEditing(true);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ paddingLeft: "15px", marginTop: "1px", cursor: "pointer" }}
        onClick={() => handleEdit()}
      />
      {open && (
        <OpenModel
          setOpen={setOpen}
          open={open}
          isEditing={isEditing}
          updateId={updateId}
          todo={todo}
        />
      )}
    </>
  );
};

export default EditTodo;