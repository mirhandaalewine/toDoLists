function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'go grocery shopping',
      isCompleted: false,
    },
    {
      text: 'workout',
      isCompleted: false,
    },
    {
      text: 'finish homework',
      isCompleted: false,
    },
    {
      text: 'walk dog',
      isCompleted: false,
    }              
  ])

  return(
    <>
      {todos.map((todo, i) => 
        <div className ="todo" key={i}>{todo.text}</div>)}
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
