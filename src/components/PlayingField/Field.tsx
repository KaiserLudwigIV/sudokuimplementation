import React, { useState } from "react";

interface Props {
	inputValue: number | undefined;
}

const Field = (props: Props) => {
	const [value, setValue] = useState<number | undefined>(props.inputValue);

	const checkNumber = (evt: string) => {
		const regex = /\b[1-9]\b/;
		if (evt[1] == undefined) {
			if (regex.test(evt)) {
				setValue(parseInt(evt));
			}
		} else if (regex.test(evt[1])) {
			setValue(parseInt(evt[1]));
		}
	};

	return (
		<input
			key={Math.random() * 1000}
			className="gameInput"
			value={value}
			onChange={(evt) => checkNumber(evt.currentTarget.value)}
			onInput={(evt) => checkNumber(evt.currentTarget.value)}
			onFocus={(evt) => {
				let value = evt.currentTarget.value;
				evt.currentTarget.value = "";
				evt.currentTarget.value = value;
			}}
			readOnly={props.inputValue != undefined}
			style={{
				backgroundColor:
					props.inputValue != undefined
						? "rgb(120,120,120)"
						: "rgb(221, 221, 221)",
			}}
		/>
	);
};

export { Field };
