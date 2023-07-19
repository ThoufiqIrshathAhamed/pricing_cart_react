export function Plans(props) {
    return (
        <div className="card">
            <div className="plan-name">
                <h5 style={{ opacity: "0.5" }}>{props.plan}</h5>
                <h1>
                    ${props.price}
                    <small style={{ fontSize: "15px" }}>/month</small>
                </h1>
                <hr />
            </div>
            <div className="features">
                <p>
                    {props.a1} {props.f1}
                </p>
                <p>
                    {props.a2} {props.f2}
                </p>
                <p>
                    {props.a3} {props.f3}
                </p>
                <p>
                    {props.a4} {props.f4}
                </p>
                <p>
                    {props.a5} {props.f5}
                </p>
                <p>
                    {props.a6} {props.f6}
                </p>
                <p>
                    {props.a7} {props.f7}
                </p>
                <p>
                    {props.a8} {props.f8}
                </p>
            </div>
            <div className="btn">
                <button>BUTTON</button>
            </div>
        </div>
    );
}
