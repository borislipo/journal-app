import * as ReactDOMClient from 'react-dom/client';
import { JournalApp } from './journalApp';
import './styles/styles.scss';


const root = ReactDOMClient.createRoot(document.getElementById('root')!)
root.render(<JournalApp />);

