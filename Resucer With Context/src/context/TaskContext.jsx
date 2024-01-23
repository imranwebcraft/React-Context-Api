import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const TaskContextProvider = ({ children }) => {
	const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

	return (
		<TaskContext.Provider value={tasks}>
			<TaskDispatchContext.Provider value={dispatch}>
				{children}
			</TaskDispatchContext.Provider>
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;

export const useTask = () => {
	return useContext(TaskContext);
};

export const useTaskDispatch = () => {
	return useContext(TaskDispatchContext);
};
