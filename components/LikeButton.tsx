import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";

interface Iprops {
	handleLike: () => void;
	handleDislike: () => void;
}

const LikeButton = (props: Iprops) => {
	const [alreadyLiked, setAlreadyLiked] = useState(true);
	const { userProfile } = useAuthStore();

	return (
		<div className="gap-6">
			<div className="mt-4 flex flex-col justify-center items-center cursot-pointer">
				{alreadyLiked ? (
					<div
						className="bg-primary rounded-fill p-2 md:p-4 text-[#F51997]"
						onClick={props.handleDislike}>
						<MdFavorite className="text-lg md:text-2xl" />
					</div>
				) : (
					<div
						className="bg-primary rounded-fill p-2 md:p-4 text-[#F51997]"
						onClick={props.handleLike}>
						<MdFavorite className="text-lg md:text-2xl" />
					</div>
				)}
				<p className="text-md font-semibold">likes?.length || 0</p>
			</div>
		</div>
	);
};

export default LikeButton;
