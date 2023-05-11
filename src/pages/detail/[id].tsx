import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../utils";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import axios from "axios";
import { Video } from "../../../type";
import useAuthStore from "../../../store/authStore";
import LikeButton from "../../../components/LikeButton";
import Comment from "../../../components/Comment";
interface Iprops {
	postDetails: Video;
}

const Detail = ({ postDetails }: Iprops) => {
	const [post, setPost] = useState(postDetails);
	const [playing, setPlaying] = useState(false);
	const [isVideoMuted, setIsVideoMuted] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const router = useRouter();
	const { userProfile }: any = useAuthStore();

	// video playing
	const onVideoClick = () => {
		if (playing) {
			videoRef?.current?.pause();
			setPlaying(false);
		} else {
			videoRef?.current?.play();
			setPlaying(true);
		}
	};

	// video muted
	useEffect(() => {
		if (post && videoRef?.current) {
			videoRef.current.muted = isVideoMuted;
		}
	}, [isVideoMuted, post]);

	// like handle
	const handleLike = async (like: Boolean) => {
		if (userProfile) {
			const response = await axios
				.put(`${BASE_URL}/api/like`, {
					userId: userProfile._id,
					postId: post._id,
					like,
				})
				.then(() => console.log("hello"))
				.catch((e) => console.log(e));
		}
	};

	if (!post) {
		return null;
	}

	return (
		<div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
			<div className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-black">
				<div className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
					<p
						className="cursor-pointer"
						onClick={() => router.back()}>
						<MdOutlineCancel className="text-white text-[35px]" />
					</p>
				</div>
				<div className="relative">
					<div className="lg:h-[100vh] h-[60vh]">
						<video
							ref={videoRef}
							loop
							onClick={onVideoClick}
							src={post.video.asset.url}
							className="h-full cursor-pointer"></video>
					</div>
					<div className="absolute top-[45%] lef-[45%] curosr-pointer">
						{!playing && (
							<button onClick={onVideoClick}>
								<BsFillPlayFill className="text-white text-6xl lg:text-8xl" />
							</button>
						)}
					</div>
				</div>
				<div className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer">
					{isVideoMuted ? (
						<button onClick={() => setIsVideoMuted(false)}>
							<HiVolumeOff className="text-white text-2xl lg:text-4xl" />
						</button>
					) : (
						<button onClick={() => setIsVideoMuted(true)}>
							<HiVolumeUp className="text-white text-2xl lg:text-4xl" />
						</button>
					)}
				</div>
			</div>
			<div className="relative w-[1000px] md:w-[900px] lg:w-[700px]">
				<div className="lg:mt-20 mt-10 flex flex-col">
					<div className="flex ml-5">
						<div className="md:2-16 md:h-16 w-10 h-10 flex items-center">
							<Link href="">
								<>
									<Image
										width={100}
										height={100}
										className="rounded-full"
										src={post.postedBy.image}
										alt=""
									/>
								</>
							</Link>
						</div>
						<Link href="/">
							<div className="flex gap-2 items-center flex-col ml-4">
								<p className="flex gap-2 md:text-md text-primary bold">
									{post.postedBy.userName}
									<GoVerified className="text-blue-400 text-md" />
								</p>
								<p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
									{post.postedBy.userName}
								</p>
							</div>
						</Link>
					</div>

					<p className="px-10 text-lg text-gray-600">{post.caption}</p>
					<div className="mt-10 px-10">
						{userProfile && (
							<LikeButton
								handleLike={() => handleLike(true)}
								handleDislike={() => handleLike(false)}
							/>
						)}
					</div>
					<Comment />
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);
	return {
		props: { postDetails: data },
	};
};

export default Detail;
