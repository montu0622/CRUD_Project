import React, { useState } from "react";
import { addTask } from "../Services/services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ setShowForm, setDataLoaded }) => {
  const [task, setTask] = useState({ task: "", status: "pending" });
  const handleTask = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "task":
        setTask((prevData) => ({ ...prevData, task: value }));
        break;
        default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.task) {
      toast.error("please enter task", {
        autoClose: 1200,
        pauseOnHover: false,
      });
    } else {
      addTask(task)
        .then((res) => {
          setDataLoaded(false);
          toast.success("Task Added sucessfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1200,
            pauseOnHover: false,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something Went Wrong", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1200,
          });
        });
    }
  };

  return (
    <>
      <div className="form">
        <div className="form-box">
          <div class="wrapper">
            <form class="form-signin">
              <h2 class="form-signin-heading">Add Task</h2>
              <input
                type="text"
                class="form-control"
                name="task"
                placeholder="Add new ToDo..."
                onChange={(e) => handleTask(e)}
              />

              <div className="d-flex mt-4">
                <button
                  className="btn_secondary mr-2"
                  onClick={(e) => setShowForm(false)}
                >
                  Cancel
                </button>

                <button
                  class="btn_primary"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                    setShowForm(false);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;