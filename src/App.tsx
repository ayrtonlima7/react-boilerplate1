import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const user = await axios.post('http://localhost:5000/register', {
            email,
            password,
        });
        console.log('Usuário cadastrado!', user.data)
    };

    const handleGetUser = async () => {
        const checkUser = await axios.get('http://localhost:5000/register/:id');
        console.log('Usuário:', checkUser)
    };

    const handleGetUsers = async () => {
        const checkAllUsers = await axios.get('http://localhost:5000/register');
        console.log('Lista de usuários:', checkAllUsers.data);
    };

    return (
        <div className="App">
            <div className="Container">
                <h1>CRUD</h1>

                <input
                    style={{width: 150, marginBottom: 10}}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    style={{width: 150, marginBottom: 10}}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <div
                    className="buttons"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop: 10,
                        width: '65%',
                    }}
                >
                    <button
                        style={{padding: 5, boxShadow: '1px 1px 1px black'}}
                        onClick={handleRegister}
                    >
                        Registrar
                    </button>

                    <button
                        style={{padding: 5, boxShadow: '1px 1px 1px black'}}
                        onClick={handleGetUsers}
                    >
                        Exibir usuários
                    </button>

                    <button
                        style={{padding: 5, boxShadow: '1px 1px 1px black'}}
                        onClick={handleGetUser}
                    >
                        Checar Usuário
                    </button>

                    <button
                        style={{padding: 5, boxShadow: '1px 1px 1px black'}}
                    >
                        Alterar
                    </button>

                    <button
                        style={{padding: 5, boxShadow: '1px 1px 1px black'}}
                    >
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
