import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
	const navOptions = ['Home', 'About', 'Services', 'Blog', 'Contact'];
	return (
		<div className='navbar bg-base-100'>
			{/* Left sight container */}
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content w-52 mt-3 bg-base-100 text-base font-semibold gap-y-3 shadow rounded z-[1]'>
						{navOptions.map((option) => (
							<Link
								to={`/${option.toLocaleLowerCase()}`}
								key={option}
								className='px-3 py-1 rounded hover:bg-primary/90 hover:text-white'>
								{option}
							</Link>
						))}
					</ul>
				</div>
				<Link>
					<img src={logo} alt='Car Doctor logo' className='h-24' />
				</Link>
			</div>
			{/* Center container */}
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 gap-x-5 text-base font-semibold'>
					{navOptions.map((option) => (
						<Link
							to={`/${option.toLocaleLowerCase()}`}
							key={option}
							className='hover:text-primary'>
							{option}
						</Link>
					))}
				</ul>
			</div>
			{/* Right container */}
			<div className='navbar-end'>
				<button className='btn btn-outline text-primary border-2 hover:bg-primary hover:text-white hover:border-primary'>
					Error
				</button>
			</div>
		</div>
	);
};

export default Navbar;
