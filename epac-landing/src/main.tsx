import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing landing page root.');
if (root.children.length > 0) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
