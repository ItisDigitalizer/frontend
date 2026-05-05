import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout, AuthLayout } from '@/app/layouts';
import { TemplatesPage } from '@/pages/templatesPage';
import { LoginPage } from '@/pages/loginPage';
import { RegisterPage } from '@/pages/registerPage';
import { GeneratePage } from '@/pages/generatePage';
import { GenerateSuccessPage } from '@/pages/generateSuccessPage';
import { ProfilePage } from '@/pages/profilePage';
import { NotFoundPage } from '@/pages/notFoundPage';

function App() {
  const isAuth = false; //заглушка

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/templates" replace />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/generate/:id" element={<GeneratePage />} />
        <Route path="/generate/success" element={<GenerateSuccessPage />} />
        <Route
          path="/profile"
          element={
            // TODO: сделать обертку для приватных роутов
            isAuth ? <ProfilePage /> : <Navigate to="/login" replace />
          }
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
