import { useEffect, useState } from "react";


export function RandomPokemon(){
	let [name, setName] = useState("");
	let [sprite, setSprite] = useState("");

	// let [readOnlyData, functionToUpdateData] = useState("");

	// let [pokeData, setPokeData] = useState({name: "", sprite:""});

	// componentDidMount
	useEffect(() => {
		console.log("Component has loaded!");

		
	}, []);

	useEffect(() => {
		// componentWillUnmount
		return (() => {
			console.log("useEffect replicating onComponentDidMount is unloading.");
		});
	}, []);

	// componentDidUpdate
	useEffect(() => {
		console.log(`name: ${name}\nsprite: ${sprite}`);

		// componentWillUnmount
		return (() => {
			console.log("useEffect tracking the state data is unloading.");
		});
	}, [name, sprite]);

	if (name && sprite){
		return (
			<div>
				<h1>{name}</h1>
				<img src={sprite} />
			</div>
		)
	} else {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}
}