import React from 'react';
import './App.css';
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
	return (
		<div className="App">
			<Button disabled>Hello</Button>
			<Button >Hello</Button>
			<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
			<Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>Hello</Button>
			<Button btnType={ButtonType.Link}  href="http://www.baidu.com" target="_blank">Hello</Button>
		</div>
  );
}

export default App;
