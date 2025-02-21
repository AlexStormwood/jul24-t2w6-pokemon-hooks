import { useEffect, useState } from "react";


export function RandomPokemon(){
	let [name, setName] = useState("");
	let [sprite, setSprite] = useState("");

	// let [readOnlyData, functionToUpdateData] = useState("");

	// let [pokeData, setPokeData] = useState({name: "", sprite:""});

	async function getRandomPokemon(){
		console.log("RandomPokemonComponent has loaded.");

		let targetPokemonID = Math.floor(Math.random() * 1025) + 1;
		console.log("Getting data for Pokemon with ID of : " + targetPokemonID);

		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonID);
		let data = await response.json();

		return data;

		// setName(data.name);
		// setSprite(data.sprites.front_default);

		// this.setState is only for class components!
		// this.setState({
		// 	name: data.name,
		// 	sprite: data.sprites.front_default
		// });
	}

	// componentDidMount
	useEffect(() => {
		console.log("Component has loaded!");

		getRandomPokemon().then(data => {
			setName(data.name);
			setSprite(data.sprites.front_default);
		});
		
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