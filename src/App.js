import TodoList from "./Components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import {useCallback,useState, useEffect} from 'react';
import {v4} from 'uuid'
function App() {

  const  TODO_APP_STOGRAGE_KEY = 'TODO_APP';
  
  //state, props
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(()=>{
    const storageTodoList = localStorage.getItem(TODO_APP_STOGRAGE_KEY);
    if(storageTodoList){
      setTodoList(JSON.parse(storageTodoList));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STOGRAGE_KEY, JSON.stringify(todoList));
  }, [todoList])

  const onTextInputChange = useCallback((e) =>{
    setTextInput(e.target.value)
  }, []);

  const onAddBtnClick = useCallback((e) => {
    //them text input vao danh sach todoList;
    setTodoList([ {id:v4(), name: textInput, isComplete: false},...todoList]);
    setTextInput('');
  },[textInput, todoList] );

  const onCheckBtnClick = useCallback((id)=>{
    setTodoList((prevState) => prevState.map((todo) => todo.id === id ? {...todo, isComplete: true}: todo));
  },[])

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name="add-todo" placeholder="Thêm việc cần làm..." elemAfterInput={
        <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>Thêm</Button>
      }
    
      value={textInput}
      onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
