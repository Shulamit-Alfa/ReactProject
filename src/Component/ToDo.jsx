import React, { useEffect, useState } from "react"
const ToDo = () => {

    const [task, setTask] = useState([]);

    const useEffect=(() => {

        task
    }, []);


    return (
        <>
            <button>הוספת משימה</button>
            <button>עריכת משימה</button>
            {/* <button>שמור</button> */}
            <button>מחיקת משימה</button>
        </>

    )
};
export default ToDo;