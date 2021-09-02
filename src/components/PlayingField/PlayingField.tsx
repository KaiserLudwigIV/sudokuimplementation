import React from "react";
import "../../logic";
import { getGame, SettingsI, sudokuField } from "../../logic";
import "./PlayingField.scss";
import { Section } from "./Section";

interface Props {
	settings: SettingsI;
}

const PlayingField = (props: Props) => {
	const game: sudokuField[][] = getGame(
		props.settings.size,
		props.settings.difficulty
	);
	return (
		<section
			id="PlayingField"
			style={{
				gridTemplateColumns: "repeat(" + props.settings.size + ",1fr)",
				gridTemplateRows: "repeat(" + props.settings.size + ",1fr)",
			}}
		>
			{game.map((evt, ind) => (
				<Section
					key={ind}
					size={props.settings.size}
					fields={evt}
					difficulty={props.settings.difficulty}
				/>
			))}
		</section>
	);
};

export { PlayingField };
