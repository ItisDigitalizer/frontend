import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { TemplatesPage } from './pages/TemplatesPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GeneratePage } from './pages/GeneratePage';
import { GenerateSuccessPage } from './pages/GenerateSuccessPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const isAuth = false; //заглушка

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/templates" replace />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/generate/:id" element={<GeneratePage />} />
        <Route path="/generate/success" element={<GenerateSuccessPage />} />
        <Route
          path="/profile"
          element={
            // TODO: сделать обертку для приватных роутов
            isAuth ? <ProfilePage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
