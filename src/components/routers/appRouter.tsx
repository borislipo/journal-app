import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AuthRouter } from './authRouter';
import { JournalScreen } from '../journal/journalScreen';
import { LoginScreen } from '../auth/loginScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JournalScreen />} />
                <Route path='/auth/*' element={<AuthRouter />} />
                <Route path='*' element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

