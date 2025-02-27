/** @format */

import "./App.css";
import REDUX_EG1 from "./tutorials/reduxTut/example1";
import USECALLBACK_EG1 from "./tutorials/useCallbackTut/example1";
import USECONTEXT_EG1 from "./tutorials/useContextTut/example1";
import USEMEMO_EG1 from "./tutorials/useMemoTut/example1";
import USEREF_EG1 from "./tutorials/useRefTut/example1";
import USEREF_EG2 from "./tutorials/useRefTut/example2";
import CustomHook from "./tutorials/customHooks/CustomHook";
import LazyLoading from "./tutorials/lazyLoading/index";

function App() {
	return (
		<div>
			{/* <USEREF_EG1 /> */}
			{/* <USEREF_EG2 /> */}
			{/* <USEMEMO_EG1 /> */}
			{/* <USECALLBACK_EG1 /> */}
			{/* <USECONTEXT_EG1 /> */}
			{/* <REDUX_EG1 /> */}
			{/* <CustomHook /> */}
			<LazyLoading />
		</div>
	);
}

export default App;
