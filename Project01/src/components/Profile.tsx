import { ChangeEvent, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import Tab from './Tabs';

const Profile = () => {
	const [bannerUrl, setBannerUrl] = useState('https://placehold.co/1500x400');
	const [profileUrl, setProfileUrl] = useState('https://placehold.co/100');

	const handleBannerChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files;
		if (file) {
			const ImagePath = URL.createObjectURL(file[0]);
			setBannerUrl(ImagePath);
		}
	};
	const handleProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files;
		if (file) {
			const ImagePath = URL.createObjectURL(file[0]);
			setProfileUrl(ImagePath);
		}
	};

	return (
		<div className="relative w-[94%] ml-[5rem]">
			<div className="relative ">
				<img
					src={bannerUrl}
					alt="background image"
					className="w-full h-60 object-cover"
				/>

				<button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
					<label htmlFor="banner-upload" className="cursor-pointer">
						<FaCamera size={24} />
					</label>
					<input
						type="file"
						name=""
						id="banner-upload"
						className="hidden"
						onChange={handleBannerChange}
					/>
				</button>
			</div>

			{/* logo */}
			<div className="flex items-center ml-4 mt-[2rem]">
				<img
					src={profileUrl}
					alt="Channel Logo"
					className="w-40 h-40 object-cover rounded-full border-white relative"
				/>

				<button className="absolute ml-[3.6rem]  bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10">
					<label htmlFor="profile-upload" className="cursor-pointer">
						<FaCamera size={24} />
					</label>
					<input
						type="file"
						id="profile-upload"
						className="hidden"
						accept="image/*"
						onChange={handleProfileChange}
					/>
				</button>

				{/* 频道详细信息 */}
				<div className="ml-4 mt-4">
					<h1 className="text-2xl font-bold ml-16">Mr.Tian</h1>
					<p className="ml-16">1000M</p>
					<p className="mt-2 ml-16">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
						exercitationem hic molestiae aut, quam cumque id velit. Voluptatum,
						iste laborum!
					</p>
					<button className="ml-16 mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 hover:-translate-y-1 transition-all duration-200 ease-in-out">
						订阅
					</button>
				</div>
			</div>
			<Tab />
		</div>
	);
};

export default Profile;
