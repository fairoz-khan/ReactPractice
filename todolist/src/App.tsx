import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import AddItem from './components/additem';
import ListItem from './components/listitem';
import './App.css'

export interface IToDoItem {
  id?: number | null,
  text: string | null,
  date: Date | null
}

const App: React.FC = () => {
  const [todoItems, setToDoItems] = useState<Array<IToDoItem>>([]);
  const todoCounter = useRef(0);

  const handleAdd = (data: IToDoItem) => {
    /* eslint-disable-next-line */
    let updateToDo: Array<IToDoItem> = [...todoItems];
    updateToDo.push({
      id: todoCounter.current,
      text: data.text,
      date: data.date
    });

    todoCounter.current += 1;
    setToDoItems(updateToDo)
  }

  const handleRemove = (id: number) => {
    const removeToDoItem = [...todoItems];
    setToDoItems(removeToDoItem.filter((toDo) => toDo.id !== id));
  }

  const todoList = () => {
    return (
      todoItems.map((todoitem) => {
        return (<ListItem key={`${todoitem.id}_${todoitem.text}_${todoitem.date}`} toDoItem={todoitem} removeItem={handleRemove} />)
      })
    )
  }

  return (
    <div className='container'>
      <div className='todocontainer'>
        <h1>To Do List</h1>
      </div>
      <div className='todocontainer'>
        <AddItem handleAdd={handleAdd} />
      </div>
      <div className='todocontainer'>
        <table className="table">
          <tbody>
            {
              todoList()
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
