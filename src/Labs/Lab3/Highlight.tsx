import { ReactNode } from "react";
export default function Highlight({ children }: { children: ReactNode }) {
    return (
        <span id="wd-highlight" style={{ backgroundColor: "red", color: "yellow" }}>
            {children}
        </span>
    );
}
