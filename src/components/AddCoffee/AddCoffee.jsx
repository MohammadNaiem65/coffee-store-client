import React from 'react';

const AddCoffee = () => {
	return (
		<div className='w-[calc(100vw-7rem)] bg-[#F4F3F0] mx-auto mt-10 px-16 py-10 rounded'>
			<h1 className='text-center text-3xl font-rancho font-bold'>
				Add New Coffee
			</h1>
			<form className='font-raleway mt-4'>
				{/* Form control */}
				<div className='flex gap-x-5 mb-6'>
					<div className='w-full'>
						<label
							htmlFor='coffee-name'
							className='block text-lg font-semibold mb-1'>
							Name
						</label>
						<input
							id='coffee-name'
							name='coffee-name'
							type='text'
							placeholder='Enter coffee name'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
					<div className='w-full'>
						<label
							htmlFor='coffee-quantity'
							className='block text-lg font-semibold mb-1'>
							Quantity
						</label>
						<input
							id='coffee-quantity'
							name='coffee-quantity'
							type='text'
							placeholder='Enter coffee quantity'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
				</div>
				{/* Form control */}
				<div className='flex gap-x-5 mb-6'>
					<div className='w-full'>
						<label
							htmlFor='coffee-supplier'
							className='block text-lg font-semibold mb-1'>
							Supplier
						</label>
						<input
							id='coffee-supplier'
							name='coffee-supplier'
							type='text'
							placeholder='Enter coffee supplier'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
					<div className='w-full'>
						<label
							htmlFor='coffee-taste'
							className='block text-lg font-semibold mb-1'>
							Taste
						</label>
						<input
							id='coffee-taste'
							name='coffee-taste'
							type='text'
							placeholder='Enter coffee taste'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
				</div>
				{/* Form control */}
				<div className='flex gap-x-5 mb-6'>
					<div className='w-full'>
						<label
							htmlFor='coffee-category'
							className='block text-lg font-semibold mb-1'>
							Category
						</label>
						<input
							id='coffee-category'
							name='coffee-category'
							type='text'
							placeholder='Enter coffee category'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
					<div className='w-full'>
						<label
							htmlFor='coffee-details'
							className='block text-lg font-semibold mb-1'>
							Details
						</label>
						<input
							id='coffee-details'
							name='coffee-details'
							type='text'
							placeholder='Enter coffee details'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
				</div>
				{/* Form control */}
				<div>
					<div>
						<label
							htmlFor='coffee-photo'
							className='block text-lg font-semibold mb-1'>
							Photo
						</label>
						<input
							id='coffee-photo'
							name='coffee-photo'
							type='text'
							placeholder='Enter photo URL'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
				</div>
				{/* Submit button */}
				<button
					type='submit'
					className='w-full bg-[#D2B48C] mt-3 py-3 border-2 font-rancho font-semibold text-xl rounded hover:border-black focus:border-black'>
					Add Coffee
				</button>
			</form>
		</div>
	);
};

export default AddCoffee;
