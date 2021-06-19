import React,{useState} from 'react'

function List({items,setItems,edit,setEdit}) {

    const deleteItem=({id})=>{
            setItems(items.filter((item)=>item.id !== id));
    }

    const completeItem=(item)=>{
        setItems(
            items.map((i) =>{
                if(i.id===item.id)
                {
                    return {...item, completed: !item.completed}
                }
                return i;
            })
        )
}
const EditItem=({id})=>{
  const findEdit = items.find((item) => item.id ===id);
  setEdit(findEdit);
  }

  const removeAll=()=>{
    setItems([]);
}

    return (
        <div>
            {
                   items.map((item)=>{
                            return(
                                <li className="list" key={item.id}>
                               
                               <input style={{ textDecoration:item.completed?"line-through":"none"  }} type="text" value={item.title} onChange={(event)=>{event.preventDefault()}}/>
                               
                                 <i  className="far fa-check-circle" title="Task Completed"  onClick={()=>{completeItem(item)}}></i>
                                 <i className="far fa-edit" title="Edit Task"  onClick={()=>{EditItem(item)} }></i> 
                                 <i className="far fa-trash-alt add-btn" title="Delete item"  onClick={()=>{deleteItem(item)} }></i>
                       </li>

                       
                            )
                    })
                }
 
        
        <div className="showItems">
        <button className="btn" onClick={removeAll}><span className="remove">Remove All</span></button>
    </div>
    </div>
    )
}

export default List
