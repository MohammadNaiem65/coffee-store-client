import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;

		// field values
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		fetch('http://localhost:5000/coffee', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: 'Success!',
						text: 'Added the coffee',
						icon: 'success',
						confirmButtonText: 'Okay',
					});
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'Something went wrong. Try again!',
						icon: 'error',
						confirmButtonText: 'Okay',
					});
				}
			});

		// form.reset();
	};
	return (
		<div className='w-[calc(100vw-7rem)] bg-[#F4F3F0] mx-auto mt-10 px-16 py-10 rounded'>
			<h1 className='text-center text-3xl font-rancho font-bold'>
				Add New Coffee
			</h1>
			<form className='font-raleway mt-4' onSubmit={handleAddCoffee}>
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
							name='name'
							type='text'
							placeholder='Enter coffee name'
							className='input input-bordered input-info w-full border-none rounded'
							required
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
							name='quantity'
							type='text'
							placeholder='Enter coffee quantity'
							className='input input-bordered input-info w-full border-none rounded'
							required
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
							name='supplier'
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
							name='taste'
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
							name='category'
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
							name='details'
							type='text'
							placeholder='Enter coffee details'
							className='input input-bordered input-info w-full border-none rounded'
						/>
					</div>
				</div>
				{/* Form control */}
				<div>
					<label
						htmlFor='coffee-photo'
						className='block text-lg font-semibold mb-1'>
						Photo
					</label>
					<input
						id='coffee-photo'
						name='photo'
						type='text'
						placeholder='Enter photo URL'
						className='input input-bordered input-info w-full border-none rounded'
					/>
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
