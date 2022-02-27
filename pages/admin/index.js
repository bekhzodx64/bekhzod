import Link from 'next/link';
import { BsArrowLeftCircle } from 'react-icons/bs';

const AdminEnter = () => {
	const form = (event) => {
		event.preventDefault();
	};

	return (
		<div className='space-y-8'>
			<div className='grid grid-cols-4 items-center'>
				<div className=''>
					<Link href='/' replace>
						<BsArrowLeftCircle className='h-5 w-5 cursor-pointer transition hover:text-blue-500' />
					</Link>
				</div>
				<h2 className='col-span-2 text-center text-2xl'>Админ панель</h2>
			</div>
			<form className='mx-auto flex w-full max-w-sm flex-col space-y-5' onSubmit={form}>
				<input
					type='text'
					placeholder='Логин'
					className='rounded-lg bg-slate-100 py-3 px-5 outline-none transition focus:bg-slate-200'
					required
				/>
				<input
					type='password'
					placeholder='Пароль'
					className='rounded-lg bg-slate-100 py-3 px-5 outline-none transition focus:bg-slate-200'
					required
				/>
				<button
					type='submit'
					className='mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-blue-500 px-3 py-3 text-white outline-none focus:ring-4'>
					Войти
				</button>
			</form>
		</div>
	);
};

export default AdminEnter;
