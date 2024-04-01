import React from 'react';

const Todolist7_2 = (props) => {

    return (<>
        <div className='todo_style'>

            <li>{props.text}</li>
            <button className='deleteitem' onClick={() => {
                props.onSelect(props.id)
            }} style={{ width: "2vw", marginLeft: "10px" }}>x</button>
        </div>
    </>
    )

}

export default Todolist7_2;
