import Heading from "./components/Heading.jsx";
import Post from "./components/Post.jsx";
import RecentPosts from "./components/RecentPost.jsx";
import Section from "./components/Section.jsx";

export default function ProfilePage() {
	return (
		<Section>
			<Heading>My Profile</Heading>
			<Post title="Hello traveller!" body="Read about my adventures." />
			<AllPosts />
		</Section>
	);
}

function AllPosts() {
	return (
		<Section>
			<Heading>Posts</Heading>
			<RecentPosts />
		</Section>
	);
}
