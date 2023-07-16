import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from './components/Coffee/Coffee';

function App() {
	const coffees = useLoaderData();

	return (
		<div className='min-h-[100vh] mt-16 flex flex-col justify-center items-center'>
			<h2 className='text-2xl font-bold'>Our Popular Products</h2>
			<Link to='/addCoffee' className='btn mt-2'>Add Coffee</Link>
			<div className='w-4/6 mt-10 grid grid-cols-2 gap-5'>
				{coffees.map((coffee) => (
					<Coffee key={coffee._id} coffee={coffee} />
				))}
			</div>
		</div>
	);
}

export default App;
