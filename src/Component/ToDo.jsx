import React, { useEffect, useState } from "react"
const ToDo = () => {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'משימה 1', completed: false },
        { id: 2, text: 'משימה 2', completed: false },
        // נוסיף משימות נוספות כרצונך
    ]);


    const handleCheckboxChange = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };
    // const useEffect = (() => {

    //     task
    // }, []);


    return (

        <div>
            <h1>רשימת משימות</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button>הוספת משימה</button>
            <button>עריכת משימה</button>
            {/* <button>שמור</button> */}
            <button>מחיקת משימה</button>

        </div>
    )
};
export default ToDo;