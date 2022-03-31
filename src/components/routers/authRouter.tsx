import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/loginScreen';
import { RegisterScreen } from '../auth/registerScreen';

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path='/auth/login' element={<LoginScreen />} />
            <Route path='/auth/register' element={<RegisterScreen />} />
            <Route path='*' element={<LoginScreen />} />
        </Routes>
    )
}
