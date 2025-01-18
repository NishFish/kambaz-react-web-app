import "./index.css";

export default function ForegroundColors() {
    return (
        <div id="wd-css-colors">
            <h2>Colors</h2>
            <h3 className="wd-fg-color-blue">Foreground color</h3>
            <p className="wd-fg-color-red">
                The text in this paragraph is red but
                <span className="wd-fg-color-green">this text is green</span>
            </p>

            <p className="wd-fg-color-purple">
                While the text in this paragraph is purple but
                <span className="wd-fg-color-orange">this text is orange</span>
            </p>
        </div>
    );
}