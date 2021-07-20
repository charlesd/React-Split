import "./App.css"
import SplitPane, { Pane } from 'react-split-pane'
import './SplitPane.css'

export default function App() {
	return <div className="App">
		<SplitPane split="vertical" minSize={50} maxSize={300}
			defaultSize={parseInt(localStorage.getItem('verticalSplitPos'), 10)}
			onChange={size => localStorage.setItem('verticalSplitPos', size)}
		>
			<Pane>
			</Pane>
			<SplitPane split="horizontal" minSize={50} maxSize={500}
				defaultSize={parseInt(localStorage.getItem('horizontalSplitPos'), 10)}
				onChange={size => localStorage.setItem('horizontalSplitPos', size)}
			>
				<Pane initialSize="200px" minSize="100px">
				</Pane>
				<Pane initialSize="25%" minSize="10%" maxSize="500px">
				</Pane>
			</SplitPane>
		</SplitPane>
    </div>
}
