import { IoEllipsisVertical } from "react-icons/io5";
import GreenAssignmentCheckmark from "./GreenCheckmark";
import { deleteAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function AssignmentControlButtons({ assignmentId }: { assignmentId: string }) {
    const dispatch = useDispatch();
    return (
        <div className="float-end">
            <GreenAssignmentCheckmark />
            <IoEllipsisVertical className="fs-2" />
            <FaTrash className="text-danger me-2 fs-4" onClick={() => dispatch(deleteAssignment(assignmentId))} />
        </div>
    );
}
