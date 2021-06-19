import React,{useEffect} from 'react'
function Form({value,setValue,items,setItems,edit,setEdit}) {
   
    const updateItem = (title,id,completed)=>{
        const newItem = items.map((item)=>
            item.id === id? {title,id,completed}:item
        );
        setItems(newItem);
        setEdit("");
    };
    useEffect(() => {
        if(edit){
            setValue(edit.title);
        }
        else{
           setValue("") ;
        }
    },[setValue,edit]);
        
   const onInputChange= (event) =>{
       setValue(event.target.value);
   };
   const onFormSumit = (event) =>{
       event.preventDefault();
       if(!edit)
       { if(!value){}
       else{ setItems([...items,{id:Math.floor(Math.random()*10000),title:value,completed:false}])
        setValue('');
       }}
       else{
          updateItem(value,edit.id,edit.completed) 
       }
       
   }
  
    return (
        <div>
              <form className="form" onSubmit={onFormSumit}>
                <input type="text"
                placeholder="Enter your task.."
                value={value}
                onChange={onInputChange} />
                 <button type="submit"><i class="fas fa-plus"></i></button>
            </form>
          
        </div>
    )
}

export default Form
