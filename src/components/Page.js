import Item from './Item.js';
import './Page.css';
import DirectBar from "./DirectBar.js"
import {useState} from 'react'

var directoryList = [
	{rel: "#sem1", text: "Semester 1", mainRoute: '/sem1', sideHrefs: []},
	{rel: "#sem2", text: "Semester 2", mainRoute: '/sem2', sideHrefs: [{rel : "#", text : "Unit 1 - Trig Identities"}]}
];

export const Page = ({baseContent = <><h1>No page found!</h1><p>Try navigating to another page.</p></>}) => {
	const [content, setContent] = useState(baseContent);
	return (
		<>
		<DirectBar elems={directoryList} pageManipulator={setContent}/>
		<main style={{ background: 'white', color: 'black' }}>
			<Item content={content} />
		</main>
		</>
	);
}

export default Page;