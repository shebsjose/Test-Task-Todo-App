import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {  useDispatch } from "react-redux";
import { deleteTodo } from "../redux/features/todoSlices";

const DeleteTodo = ({deleteId}) => {
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are You Sure, You want to delete")) {
      dispatch(deleteTodo(deleteId))
    } 
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      style={{ paddingRight: "15px", marginTop: "15px", cursor: "pointer" }}
      onClick={handleDelete}
    />
  );
};

export default DeleteTodo;