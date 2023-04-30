import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { AiOutlineLogout } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"
import Logo from "../utils/logo-Tiktok.jpg"
import { createOrGetUser } from "../utils"
import useAuthStore from "../store/authStore"

const Navbar = () => {
	const { userProfile, addUser, removeUser } = useAuthStore()
	return (
		<div className="flex text-gray-600 justify-between items-center px-4 bg-white	xl:border-b-2">
			<Link href={"/"}>
				<div className="w-[100px] md:w-[140px]">
					<Image
						className="cursor-pointer"
						src={Logo}
						width={100}
						height={100}
						alt="TikTok"
						layout="responsive"
					/>
				</div>
			</Link>
			<div>SEARCH</div>

			<div>
				{userProfile ? (
					<div className="flex items-center gap-5 md:gap-10">
						<Link href="/upload">
							<button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
								<IoMdAdd className="text-xl" /> {""}
								<span className="hidden md:block">Upload</span>
							</button>
						</Link>
						{userProfile.image && (
							<Link href="/">
								<>
									<Image
										width={40}
										height={40}
										className="rounded-full cursor-pointer"
										src={userProfile.image}
										alt="profile phoot"
									/>
								</>
							</Link>
						)}
						<button
							onClick={() => {
								googleLogout()
								removeUser()
							}}
							className="px-2"
							type="button">
							<BsThreeDotsVertical fontSize={21} />
						</button>
					</div>
				) : (
					<GoogleLogin
						onSuccess={(res) => createOrGetUser(res, addUser)}
						onError={() => console.log("error")}
					/>
				)}
			</div>
		</div>
	)
}

export default Navbar
