
import './App.css';

import React,{useState} from 'react';
import Header from './Components/Header';
import Form from './Components/Form'
import List from './Components/List';
function App() {
  const[value,setValue] = useState("");
  const[items,setItems] = useState([]);
  const[edit,setEdit] = useState(null);
  return (
    <div className="App">
      
         <Header />
         <Form  
               value={value}
               setValue={setValue}
               items={items}
               setItems={setItems}
               edit={edit}
               setEdit={setEdit}/>
         <List
         value={value}
         setValue={setValue}
         items={items}
         setItems={setItems} 
         edit={edit}
         setEdit={setEdit}/>
    </div>
  );
}

export default App;
