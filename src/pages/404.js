import React from "react";
import theme from "theme";
import { Theme, Text, Image, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				404 - Page not found
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0" />
			<Image width="64px" height="64px" src="https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/smile_big.png?v=2020-10-03T22:35:08.842Z" />
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index">
					Main Page
				</Override>
				<Override slot="link-policy">
					Privacy Policy
				</Override>
				<Override slot="link-404" display="none" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				me@ternoxgames.com
			</Link>
		</Section>
	</Theme>;
});