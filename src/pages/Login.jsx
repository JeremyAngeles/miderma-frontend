import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const manejarLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Hacemos la petición al backend local
            const respuesta = await axios.post('http://localhost:3001/api/auth/login', {
                username,
                password
            });

            // Guardamos el token en el almacenamiento del navegador
            localStorage.setItem('token', respuesta.data.token);
            
            // Redirigimos al panel de administración
            navigate('/panel'); 
            
        } catch (error) {
            setError(error.response?.data?.error || 'Error al conectar con el servidor');
        }
    };

    return (
        <div className="min-h-screen bg-miderma-light flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-miderma-pink">
                
                {/* Logo de la clínica */}
                <div className="flex justify-center mb-6">
                    <img 
                        src="/logomiderma.png" 
                        alt="Logo Miderma" 
                        className="h-24 object-contain"
                    />
                </div>

                <h2 className="text-2xl font-bold text-miderma-dark text-center mb-8">
                    Acceso Administrativo
                </h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm text-center">
                        {error}
                    </div>
                )}
                
                <form onSubmit={manejarLogin} className="space-y-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">
                            Usuario
                        </label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:border-miderma-pink focus:ring-1 focus:ring-miderma-pink"
                            placeholder="Ingresa tu usuario"
                            required 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">
                            Contraseña
                        </label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:border-miderma-pink focus:ring-1 focus:ring-miderma-pink"
                            placeholder="••••••••"
                            required 
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-miderma-dark text-white font-bold py-3 px-4 rounded-lg hover:bg-miderma-purple transition-colors duration-300"
                    >
                        Ingresar al Panel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;