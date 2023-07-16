import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { name, quantity, supplier, taste, category, details, photo, _id } =
		coffee;

	const handlUpdateCoffee = (e) => {
		// update the database with new data
		e.preventDefault();
		const form = e.target;

		// field values
		const newName = form.name.value;
		const newQuantity = form.quantity.value;
		const newSupplier = form.supplier.value;
		const newTaste = form.taste.value;
		const newCategory = form.category.value;
		const newDetails = form.details.value;
		const newPhoto = form.photo.value;

		const newCoffee = {
			name: newName,
			quantity: newQuantity,
			supplier: newSupplier,
			taste: newTaste,
			category: newCategory,
			details: newDetails,
			photo: newPhoto,
		};
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#A2FF86',
			confirmButtonText: 'Yes, update it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/updateCoffee/${_id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newCoffee),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.modifiedCount > 0) {
							Swal.fire(
								'Updated!',
								'Your coffee has been updated.',
								'success'
							);
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'Something went wrong!',
							});
						}
					});
			}
		});
	};
	return (
		<div className='w-[calc(100vw-7rem)] bg-[#F4F3F0] mx-auto mt-10 px-16 py-10 rounded'>
			<h1 className='text-center text-3xl font-rancho font-bold'>
				Update {coffee.name}
			</h1>
			<form className='font-raleway mt-4' onSubmit={handlUpdateCoffee}>
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
							defaultValue={name}
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
							defaultValue={quantity}
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
							defaultValue={supplier}
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
							defaultValue={taste}
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
							defaultValue={category}
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
							defaultValue={details}
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
						defaultValue={photo}
						className='input input-bordered input-info w-full border-none rounded'
					/>
				</div>
				{/* Submit button */}
				<button
					type='submit'
					className='w-full bg-[#D2B48C] mt-3 py-3 border-2 font-rancho font-semibold text-xl rounded hover:border-black focus:border-black'>
					Update Coffee
				</button>
			</form>
		</div>
	);
};

export default UpdateCoffee;
