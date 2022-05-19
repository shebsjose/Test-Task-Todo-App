import { Fragment, useRef,cancelButtonRef } from "react";
import { useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react";
import {  useDispatch } from "react-redux";
import { addTodo, updateTodo} from '../redux/features/todoSlices'

const OpenModel = ({open, setOpen, isEditing, updateId, todo}) => {

    const dispatch = useDispatch();
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (todo && isEditing) {
          setDescription(todo.task);
        }
      }, []);

    const handleChange = (e) => {
        setDescription(e.target.value);
      };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (isEditing){
            console.log(updateId);
            dispatch(updateTodo({...todo, task:description}));
        }
        else {
            dispatch(addTodo(description));
        }
        setOpen(false);
    }
    return ( 
        <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h1"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {isEditing ? "Update Your Task" : "Create Your Task"}
                      </Dialog.Title>
                      <div className="mt-2">
                        <input
                          rows="3"
                          className="w-64 text-sm text-gray-500 outline-none"
                          placeholder="Please Add Your Task Here..."
                          onChange={handleChange}
                         name="description"
                          value={description}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm hover:bg-sky-700"
                    onClick={(event) => handleSubmit(event)
                    }
                  >
                    {isEditing ? "Update" : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
     );
}
 
export default OpenModel;