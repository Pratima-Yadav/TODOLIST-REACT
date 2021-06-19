import React,{useState} from 'react'

function Todo() {
    const[value,setValue] = useState("");
    const[items,setItems] = useState([]);

    const addItem=()=>{
        setItems([...items,value]);
        setValue('');
    }
    return (
        <div>
            <h1>MY TODO APP</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text"
                placeholder="Enter your task.."
                value={value}
                onChange={(e)=>{setValue(e.target.value)}} />
                 <button onClick={addItem}>ADD</button>
            </form>
                  {
                    items.map((element,index)=>{
                            return(
                                <div key={index}>
                                <h3>{element}</h3>
                                <i className="far fa-trash-alt add-btn" title="Delete item"></i>
                                 <i class="far fa-check-circle" title="Task Completed"></i>
                         </div>
                            )
                    })
                }

           
        </div>
    )
}

export default Todo
