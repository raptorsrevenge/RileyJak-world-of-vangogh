import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Look from "./pages/look";
import Write from "./pages/write";
import Read from "./pages/read";
import Learn from "./pages/learn";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Landing />
				</Route>
				<Route path="/look">
					<Look />
				</Route>
				<Route path="/write">
					<Write />
				</Route>
				<Route path="/read">
					<Read />
				</Route>
				<Route path="/learn">
					<Learn />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
