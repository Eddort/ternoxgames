import React from "react";
import theme from "theme";
import { Theme, Text, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Privacy Policy Ternoxgames.com
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Ternoxgames.com
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-404" display="none" />
				<Override slot="link-index">
					Main
				</Override>
				<Override slot="link-policy">
					Policy
				</Override>
			</Menu>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			background="--color-darkL1"
		>
			<Text as="h1" font="--headline2" md-font="--headline2" margin="10px 0 0 0">
				Privacy policy ternoxgames.com and games from Ternox{"\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				<br />
				I am Ternox – solo developer and publisher. I committed to protecting and respecting your privacy.{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					I don't collect personal data and we don't use cookies to collect personally identifiable information about you
				</Strong>
				.
				<br />
				<br />
				I can receive information from you directly or take it from public sources, but only for direct contact with you on a one-time basis.
				<br />
				<br />
				I don't know who buys my games, and I can only judge from the non-anonymous feedback I receive (e.g. on the Steam or Microsoft Store game page).
				<br />
				<br />
				I can also email you if you give it in the feedback form. But I don't keep your email adress longer than 30 days and won't write to you again unless you want me to.
				<br />
			</Text>
			<Components.Knopa font="20px sans-serif" href="/">
				Main page
			</Components.Knopa>
		</Section>
	</Theme>;
});