import React, { useRef, useState } from "react"
import { Video } from "../type"
import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi"
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs"
import { GoVerified } from "react-icons/go"

interface IProps {
	post: Video
}

const VideoCard: NextPage<IProps> = ({ post }) => {
	const [isHover, setIsHover] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [isVideoMuted, setIsVideoMuted] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	const onVideoPres = () => {
		if (playing) {
			videoRef.current?.pause()
			setPlaying(false)
		} else {
			videoRef.current?.play()
			setPlaying(true)
		}
	}
	return (
		<div>
			<div className="flex border-b-2 border-gray-200 pb-6">
				<div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
					<div className="md:2-16 md:h-16 w-10 h-10">
						<Link href="">
							<>
								<Image
									width={100}
									height={100}
									className="rounded-full"
									src={post.postedBy.image}
									alt="profile phoot"
									layout="responsive"></Image>
							</>
						</Link>
					</div>
				</div>
				<Link href="/">
					<div className="flex gap-2 items-center">
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

			<div className="lg:ml-20 flex gap-4 flex-col relative">
				<div
					onMouseLeave={() => {
						setIsVideoMuted(true)
						setIsHover(true)
					}}
					onMouseEnter={() => {
						setIsHover(false)
						setIsVideoMuted(false)
					}}
					className="rounded-3x1">
					<Link href="/">
						<video
							ref={videoRef}
							loop
							className="lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xxl cursor-pointer bg-gray-100"
							src={post.video.asset.url}></video>
					</Link>
				</div>

				{isHover && (
					<div>
						{playing ? (
							<button onClick={onVideoPres}>
								<BsFillPauseFill />
							</button>
						) : (
							<button onClick={onVideoPres}>
								<BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
							</button>
						)}

						{isVideoMuted && (
							<div>
								{playing ? (
									<button>
										<HiVolumeOff onClick={() => setIsVideoMuted(false)} />
									</button>
								) : (
									<button>
										<HiVolumeUp
											onClick={() => setIsVideoMuted(true)}
											className="text-black text-2xl lg:text-4xl"
										/>
									</button>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default VideoCard
