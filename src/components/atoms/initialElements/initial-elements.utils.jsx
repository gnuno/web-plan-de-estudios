import React from 'react'

export const nodeStyles = (width = '150px') => {
	return {
		border: "1px solid #000",
		borderRadius: "3px",
		padding: 10,
		fontSize: "12px",
		backgroundColor: "#FFF",
		width,
		textAlign: 'center'
	}
}

export const NodeLabel = ({title, subtitle}) => {
	return (
		<>
			<h4 style={{ margin: 0 }}>{title}</h4>
			<i>{subtitle}</i>
		</>
	)
}