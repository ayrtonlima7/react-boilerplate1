import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Formulário API</h1>
        <input
          style={{
            width: 150,
            marginBottom: 10
          }}
          placeholder="E-mail"
        />
        <input
          style={{
            width: 150,
            marginBottom: 10
          }}
          type="password"
          placeholder="Senha"
        />
        <button
          style={{
            padding: 5,
            boxShadow: "1px 1px 1px black"
          }}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App;
