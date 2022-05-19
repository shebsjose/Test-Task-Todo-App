import { useSelector, useDispatch } from "react-redux";
import DeleteTodo from "./deleteTOdo";
import EditTodo from "./edit";
import LikeTodo from "./like";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todoList);
  return (
    <>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {todos.length > 0 ? (
                <table  className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 centre">
                    <tr>
                      <th  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Todo list</th>
                      <th  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody  className="bg-white divide-y divide-gray-200">
                    {todos.map((todo) => {
                      return (
                        <tr key={todo.taskId}>
                          <td  className="px-6 py-4 whitespace-nowrap">
                            {todo.task}
                          </td>
                          <td  className="px-6 py-4 whitespace-nowrap">
                            <DeleteTodo  deleteId={todo.taskId} /> 
                          </td>
                          <td  className="px-6 py-4 whitespace-nowrap">
                           <EditTodo updateId={todo.taskId} todo={todo} />
                          </td>
                          <td  className="px-6 py-4 whitespace-nowrap">
                            <LikeTodo todo={todo} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div
                  className="py-3 px-20 bg-blue-100 text-blue-900 text-sm rounded-md border border-blue-100 m"
                  role="alert"
                >
                  <strong>
                    {" "}
                    There is no data..! Please add new Todo {"😃"}.
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
