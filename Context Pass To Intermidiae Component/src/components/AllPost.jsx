import Heading from "./Heading";
import RecentPosts from "./RecentPost";
import Section from "./Section";

export default function AllPosts() {
	return (
		<Section>
			<Heading>Posts</Heading>
			<RecentPosts />
		</Section>
	);
}
