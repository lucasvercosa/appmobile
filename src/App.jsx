 function App(){
  const[task,setTask] = useState([
    {
      id: 1,
      title:"Estudar programação",
      description: "Estudando programação para se tornar um desenvolvedor full stack",
      isCompleted:false
    }

    {
      id:2,
      title:"Estudar inglês",
      description:"Estudar inglês para se tornar fluente",
      iscompleted: false
    }

    {
      id:3,
      title: "Estudar Matemática",
      description:"Estudar matemática para desenvolver minha lógica",
      iscompleted: false
    }

  ]);

  return(
    <h1>Gerenciando tarefas</h1>
  );

 }

 export default App;










/*function App(){
  const [message, setMESSAGE] =  useState('Olá,mundo');
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={
        ()=>{setMESSAGE('olá fui clicado');}} 
        ></button>
    </div>
  )
}

export default App