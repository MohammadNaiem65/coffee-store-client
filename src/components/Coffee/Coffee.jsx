import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee }) => {
	const { _id, name, quantity, taste, category, photo } = coffee;

	const handleDelete = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#A2FF86',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
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
		<div className='w-full bg-[#F5F4F1] flex items-center justify-evenly rounded shadow-lg'>
			<img
				src={photo}
				alt='Coffee image'
				loading='lazy'
				className='h-64 w-40 object-cover px-3 py-4'
			/>
			<div>
				<p>Name: {name}</p>
				<p>Quantity: {quantity}</p>
				<p>Taste: {taste}</p>
				<p>Category: {category}</p>
			</div>
			<div className='flex flex-col gap-2'>
				<Link className='btn bg-green-400'>More</Link>
				<Link
					to={`http://localhost:5173/updateCoffee/${_id}`}
					className='btn bg-blue-400'>
					Edit
				</Link>
				<button className='btn bg-red-500' onClick={handleDelete}>
					X
				</button>
			</div>
		</div>
	);
};

export default Coffee;
