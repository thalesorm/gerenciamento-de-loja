import React from 'react';
import AppRoutes from './routes/index'; // Importa as rotas configuradas

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes /> {/* Renderiza o roteador */}
    </div>
  );
};

export default App;
