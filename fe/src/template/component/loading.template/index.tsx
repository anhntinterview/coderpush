import * as React from "react";

interface IProps {
	isLoading: boolean
}

export function Loading(props: IProps) {
	return props.isLoading ? <div>Loading...</div> : null;
}
