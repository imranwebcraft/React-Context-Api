import AllPosts from "./components/AllPost.jsx";
import Heading from "./components/Heading.jsx";
import Post from "./components/Post.jsx";
import Section from "./components/Section.jsx";

export default function ProfilePage() {
	return (
		<Section>
			<Heading>My Profile</Heading>
			<Post title="Hello travealler!" body="Read about my adventures." />
			<AllPosts />
		</Section>
	);
}
