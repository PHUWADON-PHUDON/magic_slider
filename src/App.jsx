import { useState,useRef } from "react";
import "./App.css"

function App() {
	const [poimg,setpoimg] = useState([630,630,420,210,0]);
	const [checkclick,setcheckclick] = useState(false);
	const imgref = useRef(null);
	const mark1ref = useRef(null);
	const mark2ref = useRef(null);
	const mark3ref = useRef(null);

	//!click right

	const clickRight = () => {
		setcheckclick(true);
		setTimeout(() => {
			setcheckclick(false);
		},650);

		let indexcount = 0;
		let mark1 = mark1ref.current.getBoundingClientRect();
		for (let i = 0 ; i < imgref.current.children.length ; i++) {
			let arrimg = imgref.current.children[i].getBoundingClientRect();
			if (mark1.top < arrimg.bottom &&
				mark1.bottom > arrimg.top &&
				mark1.left < arrimg.right &&
				mark1.right > arrimg.left) {
					indexcount = i;
				}
		}

		imgref.current.children[indexcount].style.transform = "none";
		imgref.current.children[indexcount].style.right = "0";
		imgref.current.children[indexcount].style.bottom = "0";
		imgref.current.children[indexcount].style.width = "100%";
		imgref.current.children[indexcount].style.height = "100%";
		

		for (let i = indexcount + 1 ; i < imgref.current.children.length ; i++) {
			imgref.current.children[i].style.right = `${poimg[i] + 210}px`;
			poimg[i] = poimg[i] + 210;
		}

		const newimg = document.createElement("img");
		newimg.style.right = "0";
		newimg.style.bottom = "100px";
		newimg.className = "img addaniscale";

		let indexcountborn = 0;
		let mark3 = mark3ref.current.getBoundingClientRect();
		for (let i = 0 ; i < imgref.current.children.length ; i++) {
			let arrimg = imgref.current.children[i].getBoundingClientRect();
			if (mark3.top < arrimg.bottom &&
				mark3.bottom > arrimg.top &&
				mark3.left < arrimg.right &&
				mark3.right > arrimg.left) {
					indexcountborn = i;
				}
		}
		newimg.src = imgref.current.children[indexcountborn].src;

		imgref.current.appendChild(newimg);

		setTimeout(() => {
			imgref.current.removeChild(imgref.current.children[0]);
			setpoimg(prev => [630,630,420,210,0]);
		},550);
	}

	//!

	//!click left

	const clickLeft = () => {
		setcheckclick(true);
		setTimeout(() => {
			setcheckclick(false);
		},650);

		let indexcount = 0;
		let mark2 = mark2ref.current.getBoundingClientRect();
		for (let i = 0 ; i < imgref.current.children.length ; i++) {
			let arrimg = imgref.current.children[i].getBoundingClientRect();
			if (mark2.top < arrimg.bottom &&
				mark2.bottom > arrimg.top &&
				mark2.left < arrimg.right &&
				mark2.right > arrimg.left) {
					indexcount = i;
				}
		}

		const newimg = document.createElement("img");
		newimg.style.position = "absolute";
		newimg.style.right = "0";
		newimg.style.bottom = "0";
		newimg.style.width = "100%";
		newimg.style.height = "100%";
		newimg.src = imgref.current.children[indexcount].src;

		imgref.current.prepend(newimg);

		let indexcountscaledown = 0;
		let mark3 = mark3ref.current.getBoundingClientRect();
		for (let i = 0 ; i < imgref.current.children.length ; i++) {
			let arrimg = imgref.current.children[i].getBoundingClientRect();
			if (mark3.top < arrimg.bottom &&
				mark3.bottom > arrimg.top &&
				mark3.left < arrimg.right &&
				mark3.right > arrimg.left) {
					indexcountscaledown = i;
				}
		}

		imgref.current.children[indexcountscaledown].style.transition = "all .5s ease-in-out";
		imgref.current.children[indexcountscaledown].style.right = "630px";
		imgref.current.children[indexcountscaledown].style.bottom = "100px";
		imgref.current.children[indexcountscaledown].style.width = "200px";
		imgref.current.children[indexcountscaledown].style.height = "230px";

		let clonearrpoimg = [...poimg];

		for (let i = indexcountscaledown + 1 ; i < imgref.current.children.length ; i++) {
			imgref.current.children[i].style.right = `${clonearrpoimg[i - 1] - 210}px`;
			clonearrpoimg[i - 1] = clonearrpoimg[i - 1] - 210;
		}

		setTimeout(() => {
			imgref.current.removeChild(imgref.current.children[imgref.current.children.length - 1]);
			setpoimg(prev => [630,630,420,210,0]);
		},550);
	}

	//!

  	return (
  	  <>
	  	<main ref={imgref}>
			<img className="img img1" src="./593735fa-7953-4de4-b4f4-c6e06a112d9d.jpg" alt="" />
			<img className="img img2" src="./pexels-pixabay-2150.jpg" alt="" />
			<img className="img img3" src="./pexels-pixabay-76969.jpg" alt="" />
			<img className="img img4" src="./pexels-pixabay-87009.jpg" alt="" />
			<img className="img img5" src="./3146489.jpg" alt="" />
  	  	</main>
	  	<div className="boxbtn">
	  		<button style={checkclick == true ? {pointerEvents:"none"}:{}} onClick={() => clickLeft()}>Left</button>
	  		<button style={checkclick == true ? {pointerEvents:"none"}:{}} onClick={() => clickRight()}>Right</button>
		</div>
		<span ref={mark1ref} className="mark1">mark1</span>
		<span ref={mark2ref} className="mark2">mark2</span>
		<span ref={mark3ref} className="mark3">mark3</span>
	  </>
  	);
}

export default App;