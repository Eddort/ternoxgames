import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Company name
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
				</Menu>
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--darkL1">
			<Override slot="SectionContent" max-width="1400px" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				We are cute
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="20%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/nexoria-min.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Rogue-like with cards
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nexoria: Dungeon Rogue Heroes
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Hardcore roguelike about dungeons with hybrid battles, combining classical turn based combat system and a collectible card game. Collect the best spells and conquer the dungeons!
					</Text>
					<Button href="#">
						Button
					</Button>
					<Hr />
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TaimumariCompleteEdition.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Platformer inspired by MegaMan X
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Taimumari
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/assets/images/legend.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Arcade
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Legend of Himari
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_InVert.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Puzzle platformer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						IN-VERT
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/assets/images/bullet_big.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Shut'em'up with rythm
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Bullet Beat
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Override slot="SectionContent" max-width="1400px" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Published
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="20%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/nexoria-min.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Rogue-like with cards
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nexoria: Dungeon Rogue Heroes
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Hardcore roguelike about dungeons with hybrid battles, combining classical turn based combat system and a collectible card game. Collect the best spells and conquer the dungeons!
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TaimumariCompleteEdition.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Platformer inspired by MegaMan X
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Taimumari
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/assets/images/legend.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Arcade
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Legend of Himari
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_InVert.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Puzzle platformer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						IN-VERT
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/assets/images/bullet_big.jpg) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Shut'em'up with rythm
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Bullet Beat
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Button
			position="fixed"
			top="20px"
			left="20px"
			z-index="2"
			href="/"
		>
			Button
		</Button>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Box />
	</Theme>;
});