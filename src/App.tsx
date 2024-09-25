import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
            });
            console.log('Usuário registrado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <div className="App">
            <div className="Container">
                <h1>Formulário API</h1>
                <input
                    style={{ width: 150, marginBottom: 10 }}
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={{ width: 150, marginBottom: 10 }}
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    style={{ padding: 5, boxShadow: "1px 1px 1px black" }}
                    onClick={handleRegister}
                >
                    Registrar
                </button>
            </div>
        </div>
    );
}

export default App;