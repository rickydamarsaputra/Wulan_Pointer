import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { FaCaretRight } from "react-icons/fa";

export default function index({ posts }) {
	console.log(posts);
	return (
		<div className="w-4/5 mx-auto mt-24">
			<Head>
				<title>Landing Page</title>
			</Head>
			<div className="grid items-center lg:grid-cols-2 gap-3 lg:gap-0">
				<div>
					<div className="text-2xl lg:text-5xl text-custom font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
					<div className="text-sm my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae ut doloremque nisi fuga delectus cum quod! Fugiat, animi cupiditate!</div>
					<button className="flex items-center text-white bg-custom transition-all duration-300 hover:bg-transparent hover:text-custom border-2 border-custom font-medium focus:outline-none rounded-sm capitalize py-1 px-4">
						see more
						<FaCaretRight className="text-xl" />
					</button>
				</div>
				<div className="order-first lg:order-none">
					<img src="/assets/img/team_work.svg" alt="team work ilustration" />
				</div>
			</div>
			<div className="grid items-center lg:grid-cols-3 gap-10 py-32">
				<div className="flex items-center justify-center bg-gray-100 py-32">
					<img src="/assets/img/d3_logo.svg" alt="undika d3 logo" className="w-32" />
				</div>
				<div className="lg:col-span-2">
					<div className="text-2xl">Lorem, ipsum.</div>
					<div className="text-custom text-2xl mb-3">Lorem, ipsum dolor.</div>
					<div className="text-sm font-medium">
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut officiis rerum. Odit saepe eius consequatur provident, harum quos pariatur reprehenderit magni fuga nihil dolor voluptatum nobis assumenda veritatis, at quam quisquam impedit adipisci iste aliquid beatae veniam accusamus
						aspernatur. Voluptatibus, explicabo numquam tenetur quos hic nostrum provident veritatis doloremque."
					</div>
				</div>
			</div>
			<div className="mb-10">
				<div className="text-custom text-xl capitalize mb-4">latest post</div>
				<div className="grid lg:grid-cols-3 gap-5">
					{posts.map((post) => (
						<div key={post.id}>
							<img src={post.thumbnail.url} alt={post.title} className="mb-2 h-40 w-full shadow-lg rounded-sm object-cover cursor-pointer transition-all duration-300 transform hover:-translate-y-2" />
							<Link href="/post/[id]" as={`/post/${post.id}`}>
								<a className="text-sm font-medium capitalize transition-all duration-300 text-gray-500 hover:text-gray-800">{post.title}</a>
							</Link>
						</div>
					))}
				</div>
				<div className="mt-4 flex justify-end">
					<button className="flex items-center text-white bg-custom transition-all duration-300 hover:bg-transparent hover:text-custom border-2 border-custom font-medium focus:outline-none rounded-sm capitalize py-1 px-4">
						more post
						<FaCaretRight className="text-xl" />
					</button>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const { API_URL } = process.env;
	const { data } = await axios.get(`${API_URL}/posts`);

	return {
		props: {
			posts: data,
		},
	};
}