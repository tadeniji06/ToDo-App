import React, { useState } from "react";
import Button from "../Components/Button";
import { Toaster, toast } from "sonner";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const postTask = () => {
    if (/^\d+$/.test(task)) {
      toast.warning("Task cannot be a number");
    } else if (task === "") {
      toast.warning("Task cannot be empty");
    } else if (task.trim() !== "") {
      setTasks([...tasks, task]);
      toast.success("Task Added Successfully");
      setTask(""); // Clear the input after adding the task
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );
    toast.success("task deleted successfully");
    setTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='flex gap-[40px]'>
        <div className='w-[250px] h-[30px] border border-x-black border-y-black'>
          <input
            className='w-full h-full border-none outline-none'
            type='text'
            placeholder='Search tasks...'
            value={search}
            onChange={handleSearch}
          />
        </div>
        <Button title={"Search Tasks"} />
      </div>
      <div className='mt-[50px]'>
        <h1>New Task: {task}</h1>
        <div className='flex w-[250px] h-[30px] border border-x-black border-y-black'>
          <input
            className='outline-none'
            type='text'
            placeholder='Create a New Task'
            value={task}
            onChange={addTask}
          />
        </div>
        <div className='ml-[280px] mt-[-35px]'>
          <Button title={"Add Task"} onClick={postTask} />
        </div>

        <ul className=''>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <li className='' key={index}>
                {task}
                <div className=''>
                  <Button
                    onClick={() => deleteTask(index)}
                    title={"Delete Task"}
                  />
                </div>
              </li>
            ))
          ) : (
            <p className='mt-7'>No Tasks Found</p>
          )}
        </ul>
      </div>
      <Toaster richColors position='top-center' />
    </div>
  );
};

export default Tasks;
