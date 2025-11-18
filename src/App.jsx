function App(){
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