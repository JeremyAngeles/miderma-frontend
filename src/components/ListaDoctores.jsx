import { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioDoctor from './FormularioDoctor';

const ListaDoctores = () => {
    const [doctores, setDoctores] = useState([]);
    const [doctorAEditar, setDoctorAEditar] = useState(null);

    const obtenerDoctores = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/doctores');
            setDoctores(respuesta.data);
        } catch (error) {
            console.error('Error al obtener doctores:', error);
        }
    };

    useEffect(() => {
        obtenerDoctores();
    }, []);

    const eliminarDoctor = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este doctor/a?')) {
            try {
                await axios.delete(`http://localhost:3001/api/doctores/${id}`);
                alert('Doctor/a eliminado con éxito');
                obtenerDoctores();
            } catch (error) {
                console.error('Error al eliminar:', error);
                alert('Error al eliminar el doctor/a');
            }
        }
    };

    const iniciarEdicion = (doctor) => {
        setDoctorAEditar(doctor);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Subir al formulario
    };

    return (
        <div>
            <FormularioDoctor 
                onDoctorAgregado={obtenerDoctores} 
                doctorAEditar={doctorAEditar}
                onCancelarEdicion={() => setDoctorAEditar(null)}
            />

            <h2 className="text-2xl font-bold text-miderma-dark mb-6 mt-12 border-b pb-2">Doctores Registrados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {doctores.map((doctor) => (
                    <div key={doctor.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                        
                        {doctor.url_foto ? (
                            <img src={doctor.url_foto} alt={doctor.nombre} className="w-full h-48 object-cover bg-gray-50" />
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">Sin imagen</div>
                        )}
                        
                        <div className="p-5 flex-1 flex flex-col">
                            <span className="text-xs font-bold bg-[#F2BDC7]/20 text-miderma-purple px-2 py-1 rounded-md w-max mb-2">
                                {doctor.genero === 'F' ? 'Dra.' : 'Dr.'} {doctor.especialidad}
                            </span>
                            
                            <h3 className="text-xl font-bold text-miderma-dark mb-1">{doctor.nombre}</h3>
                            <p className="text-xs text-gray-500 mb-3">{doctor.cmp} | {doctor.rne}</p>
                            
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
                                {doctor.titulo_profesional}
                            </p>

                            <div className="flex gap-2 mt-auto">
                                <button onClick={() => iniciarEdicion(doctor)} className="flex-1 bg-miderma-dark text-white py-2 rounded-lg font-bold hover:bg-miderma-purple transition-colors text-sm">
                                    Editar
                                </button>
                                <button onClick={() => eliminarDoctor(doctor.id)} className="flex-1 bg-red-100 text-red-600 py-2 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors text-sm">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {doctores.length === 0 && (
                <p className="text-center text-gray-500 py-10">No hay doctores registrados aún.</p>
            )}
        </div>
    );
};

export default ListaDoctores;