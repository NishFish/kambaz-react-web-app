import { IoEllipsisVertical } from "react-icons/io5";
import GreenAssignmentCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <GreenAssignmentCheckmark />
            <IoEllipsisVertical className="fs-2" />
        </div>
    );
}
