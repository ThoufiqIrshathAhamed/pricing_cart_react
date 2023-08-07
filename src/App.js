import "./App.css";
import { Plans } from "./Plans";

function App() {
  const plans = [
    {
      plan: "FREE",
      price: 0,
      f1: "Single User",
      a1: "✔",
      f2: "5GB Storage",
      a2: "✔",
      f3: "Unlimited Public Projects",
      a3: "✔",
      f4: "Community Access",
      a4: "✔",
      f5: "Unlimited Private Projects",
      a5: "❌",
      f6: "Dedicated Phone Support",
      a6: "❌",
      f7: "Free Subdomain",
      a7: "❌",
      f8: "Monthly Status Reports",
      a8: "❌"
    },
    {
      plan: "PLUS",
      price: 9,
      f1: "5 Users",
      a1: "✔",
      f2: "50GB Storage",
      a2: "✔",
      f3: "Unlimited Public Projects",
      a3: "✔",
      f4: "Community Access",
      a4: "✔",
      f5: "Unlimited Private Projects",
      a5: "✔",
      f6: "Dedicated Phone Support",
      a6: "✔",
      f7: "Free Subdomain",
      a7: "✔",
      f8: "Monthly Status Reports",
      a8: "❌"
    },
    {
      plan: "PRO",
      price: 49,
      f1: "Unlimited Users",
      a1: "✔",
      f2: "150GB Storage",
      a2: "✔",
      f3: "Unlimited Public Projects",
      a3: "✔",
      f4: "Community Access",
      a4: "✔",
      f5: "Unlimited Private Projects",
      a5: "✔",
      f6: "Dedicated Phone Support",
      a6: "✔",
      f7: "Unlimited Free Subdomains",
      a7: "✔",
      f8: "Monthly Status Reports",
      a8: "✔"
    }
  ];
  return (
    <div className="App">
      {plans.map((props) => (
        <Plans
          plan={props.plan}
          price={props.price}
          a1={props.a1}
          f1={props.f1}
          a2={props.a2}
          f2={props.f2}
          a3={props.a3}
          f3={props.f3}
          a4={props.a4}
          f4={props.f4}
          a5={props.a5}
          f5={props.f5}
          a6={props.a6}
          f6={props.f6}
          a7={props.a7}
          f7={props.f7}
          a8={props.a8}
          f8={props.f8}
        ></Plans>
      ))}
    </div>
  );
}

export default App;
