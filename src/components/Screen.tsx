import "./screen.css"
export default function Screen({ setOpen }: { setOpen: (open: boolean) => void }) {
    const screen = sessionStorage.getItem("screen");

    return (
        <div className="screen-wrapper" onClick={() => setOpen(false)}>
            <div className="screen">
                {screen && (
                    <img src={screen} alt="screenshot" />
                )}

                <button className="screen-close"
                    onClick={() => {
                        setOpen(false);
                        sessionStorage.removeItem("screen");
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
}
