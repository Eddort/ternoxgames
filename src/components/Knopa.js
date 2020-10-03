import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "https://store.steampowered.com/app/932210/NEXORIA/",
	"target": "_blank",
	"background": "--color-primary",
	"padding": "7px 20px 7px 20px",
	"margin": "3px 3px 3px 3px",
	"color": "#F7FBFF",
	"text-decoration-line": "initial",
	"border-radius": "2px",
	"display": "inline-block",
	"hover-background": "--color-darkL1",
	"children": "PC (Steam)"
};
const overrides = {};

const Knopa = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(Knopa, { ...Link,
	defaultProps,
	overrides
});
export default Knopa;