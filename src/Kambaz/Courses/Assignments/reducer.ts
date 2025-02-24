import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignments }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignments.title,
                description: assignments.description,
                points: assignments.points,
                due: assignments.due,
                release: assignments.release,
                until: assignments.until
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        }
    },
});
export const { addAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;