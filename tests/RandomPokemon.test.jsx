import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { RandomPokemon } from "../src/components/RandomPokemon";
import { UserJwtProvider } from "../src/contexts/UserJwtContext";



test("Render a random Pokemon with context", () => {
	render(
	<UserJwtProvider>
		<RandomPokemon />
	</UserJwtProvider>
	);

	const randomPokemonComponent = screen.getByTestId("random-pokemon-component");
	expect(randomPokemonComponent).toBeInTheDocument();
	expect(randomPokemonComponent).toHaveClass("pokemonContainer");
	expect(randomPokemonComponent).toHaveTextContent("Loading...");
});


test("Render a random Pokemon", async () => {
	render(<RandomPokemon />);

	const randomPokemonComponent = await screen.findByTestId(
		"random-pokemon-component", 
		{
			exact: true
		}, 
		{
			timeout: 2000
		}
	);
	expect(randomPokemonComponent).toBeInTheDocument();
	expect(randomPokemonComponent).toHaveClass("pokemonContainer");
	expect(randomPokemonComponent).toHaveTextContent("Loading...");
});