import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
	// :: You move all the things to the Context file.

	// const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

	// We manage the dispatch using context

	// const handleChangeTask = (task) => {
	// 	dispatch({
	// 		type: "changed",
	// 		task: task,
	// 	});
	// };

	// const handleDeleteTask = (taskId) => {
	// 	dispatch({
	// 		type: "deleted",
	// 		id: taskId,
	// 	});
	// };

	return (
		<TaskContextProvider>
			<h1>Prague itinerary</h1>
			<AddTask />
			<TaskList />
		</TaskContextProvider>
	);
}

/*
export const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
*/
