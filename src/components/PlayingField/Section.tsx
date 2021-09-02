import React from "react";
import { sudokuField } from "~/../logic";
import { Field } from "./Field";

interface Props {
	size: number;
	fields: sudokuField[];
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
				<div key={ind}>{e.value}</div>
			))}
		</div>
	);
};

export { Section };
