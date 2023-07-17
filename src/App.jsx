import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
	return (
		<div className='max-w-7xl mx-auto mt-5'>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
