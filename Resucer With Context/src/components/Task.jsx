import { useState } from "react";
import { useTaskDispatch } from "../context/TaskContext";

export default function Task({ task }) {
	const [isEditing, setIsEditing] = useState(false);

	const dispatch = useTaskDispatch();

	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						// Expect a task object
						dispatch({
							type: "changed",
							task: {
								...task,
								text: e.target.value,
							},
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}>save</button>
			</>
		);
	} else {
		taskContent = (
			<>
				<span>{task.text}</span>
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}

	return (
		<li>
			<label>
				{/* Without any aditional property, the checkbox is basically uncontrolled */}
				<input
					type="checkbox"
					checked={task.done}
					onChange={(e) => {
						dispatch({
							type: "changed",
							task: {
								...task,
								done: e.target.checked,
							},
						});
					}}
				/>
				{taskContent}
				<button
					onClick={() =>
						dispatch({
							type: "deleted",
							id: task.id,
						})
					}
				>
					Delete
				</button>
			</label>
		</li>
	);
}

/*
export const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false }
	{ id: 2, text: "Lennon Wall pic", done: false },
];
*/
