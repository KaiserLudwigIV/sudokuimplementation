import React from "react";
import { sudokuField } from "~/../logic";
import { Field } from "./Field";

interface Props {
	size: number;
	fields: sudokuField[];
	difficulty: number;
}

const Section = (props: Props) => {
	return (
		<div
			style={{
				gridTemplateColumns: "repeat(" + props.size + ",1fr)",
				gridTemplateRows: "repeat(" + props.size + ",1fr)",
			}}
		>
			{props.fields.map((e: sudokuField, ind: number) => (
				<Field
					key={Math.random() * 1000}
					inputValue={
						Math.random() > props.difficulty ** 1.7 * 0.1 ? e.value : undefined
					}
				/>
			))}
		</div>
	);
};

export { Section };
