import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Em, Icon, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack, SocialMedia, Menu } from "@quarkly/components";
import * as Components from "components";
import { MdEmail } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Games from Ternox
			</title>
			<meta name={"description"} content={"Indie games developer and publisher."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/himmm.png?v=2020-10-03T22:34:30.191Z"} />
		</Helmet>
		<Section background="--color-light">
			<Text
				margin="0px 0 0px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				text-transform="uppercase"
			>
				Ternoxgames.com
			</Text>
			<Text
				as="p"
				margin="0px 0"
				font="--headline3"
				color="#000000"
				text-align="center"
			>
				<Link
					href="mailto:me@ternoxgames.com"
					text-decoration="none"
					hover-text-decoration="underline"
					color="--darkL1"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					font="--lead"
				>
					me@ternoxgames.com
				</Link>
			</Text>
		</Section>
		<Section
			padding="0 0"
			sm-padding="40px 0"
			font="--base"
			color="--darkL1"
			background="--color-light"
		>
			<Override slot="SectionContent" max-width="1400px" background="--color-light" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				I make games
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				And I like it. Below is a list of games that I made myself.
			</Text>
			<Stack margin-top="40px">
				<StackItem width="20%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/nexoria-min.jpg?v=2020-10-03T23:32:11.660Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Rogue-like with cards
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nexoria: Dungeon Rogue Heroes
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Hardcore roguelike about dungeons with hybrid battles, combining classical turn based combat system and a collectible card game. Collect the best spells and conquer the dungeons!
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Components.Knopa />
						<Link
							href="https://www.microsoft.com/en-us/p/nexoria-dungeon-rogue-heroes/9nxmdckxdwbp"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Xbox
						</Link>
					</Box>
					{" "}
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
					<Text as="p" margin="5px 0 5px 0">
						Retro-style platform game in keeping with the best traditions of games of our childhood! Take control of the Himari, the young female wizard travelling across various ages to settle the balance in time across the whole world!
						<br />
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="http://store.steampowered.com/app/375520"
							target="_blank"
							background="--color-primary"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							PC (Steam)
						</Link>
						<Link
							href="https://www.microsoft.com/en-us/p/nexoria-dungeon-rogue-heroes/9nxmdckxdwbp"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Xbox
						</Link>
						<Link
							href="https://www.nintendo.com/games/detail/taimumari-complete-edition-switch/"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch
						</Link>
						<Link
							href="https://store.playstation.com/en-us/product/UP5817-CUSA19019_00-TAIMUMARI00000US"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Playstation 4
						</Link>
					</Box>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/legend.jpg?v=2020-10-03T23:32:27.115Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Arcade
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Legend of Himari
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Himari was ambushed! Help her hold out as long as possible, attack enemies, use magic to slay them, maintain Himari’s health level, so she could fight on, and also do not miss!
						<br />
						<br />
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Exist on consoles as part of Taimumari: Complete Edition
						</Em>
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="http://store.steampowered.com/app/634340/Legend_of_Himari/"
							target="_blank"
							background="--color-primary"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							PC (Steam)
						</Link>
						<Link
							href="https://play.google.com/store/apps/details?id=com.companyname.Legend_of_Himari&hl=en"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Play Market
						</Link>
					</Box>
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
					<Text as="p" margin="5px 0 5px 0">
						This is a short hardcore enthralling puzzle-platform game about a lonely robot, which tries to find his master. To go all the way you'll have to look for the master in two dimensions at the same time. Parallel world module will help to overcome any obstacles!
						<br />
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="http://store.steampowered.com/app/491010/INVERT/"
							target="_blank"
							background="--color-primary"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							PC (Steam)
						</Link>
						<Link
							href="https://www.microsoft.com/en-us/p/in-vert/9mt9l8jh590n"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Xbox
						</Link>
						<Link
							href="https://www.nintendo.com/games/detail/in-vert-switch/"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch
						</Link>
						<Link
							href="https://store.playstation.com/en-us/product/EP8009-CUSA17824_00-INVERT00000000EU"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Playstation 4
						</Link>
					</Box>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/bullet_big.jpg?v=2020-10-03T23:32:50.124Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Shoot'em'up with rythm
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Bullet Beat
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Bullet Beat is a shoot'em up, where everything at the levels is in tune with the music, even shooting!
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="https://store.steampowered.com/app/1180620/Bullet_Beat/"
							target="_blank"
							background="--color-primary"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							PC (Steam)
						</Link>
						<Link
							href="https://www.microsoft.com/en-us/p/bullet-beat/9p76wskflz12"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Xbox
						</Link>
						<Link
							href="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Bullet-Beat-1850285.html"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch
						</Link>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="#0E1317"
			background="--color-light"
		>
			<Override slot="SectionContent" max-width="1400px" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="820px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				I publish games
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				Since recently, I have been releasing Nintendo Switch games made in Gamemaker Studio 2.
			</Text>
			<Stack margin-top="40px">
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/nintendo33.jpg?v=2020-10-03T21:48:55.714Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Rogue-like in NES style
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Castle of No Escape
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Explore the mysterious castle full of monsters and secrets in a quest to collect all the treasures (that will also protect you from the curses on your way) and crush the main boss. The game won't let you exit the castle, no matter how you try. Technically you can win, but there is no end.
						<br />
						{"\n\n"}
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Castle-of-no-Escape-1848339.html"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch
						</Link>
					</Box>
					{" "}
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/Imacse00001.jpg?v=2020-10-03T23:05:41.127Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Danmaku-like bullet hell{"\n\n"}
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Cybxus Heart
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Cybxus Hearts inspired by classic Japanese shooting games. This is a game where you control three different characters at the same time.
						<br />
						{"\n\n"}
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="#"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch coming soon
						</Link>
					</Box>
					{" "}
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/Image00001.jpg?v=2020-10-03T21:58:36.835Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Shoot 'em up{"\n\n\n\n"}
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Void Source
					</Text>
					<Text as="p" margin="5px 0 5px 0">
						Classic multi-directional (360°) shoot 'em up. Navigate your UFO through hazardous environments with dangerous enemies and beat huge bosses!
						<br />
						{"\n\n"}
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="#"
							background="--color-primary"
							target="_blank"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
							hover-background="--color-darkL1"
						>
							Nintendo Switch coming soon
						</Link>
					</Box>
					{" "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/mayclover_meadow_night_example.png?v=2020-10-03T23:33:05.039Z)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="0x 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email me
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:me@ternoxgames.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								me@ternoxgames.com
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
			<Hr />
			<SocialMedia
				facebook="https://www.facebook.com/taimumari"
				twitter="https://twitter.com/taimumari"
				youtube="https://www.youtube.com/channel/UC1rKs1kvj_f1S7lwpHGZ9TQ/"
				vkontakte="https://vk.com/taimumari"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
				text-align="left"
				position="relative"
				display="flex"
				align-self="flex-start"
				instagram="https://www.instagram.com/taimumari/"
				icon-size="32px"
			/>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/5e9db7bb052a30001fc650d8/images/fon.jpg?v=2020-10-03T22:47:21.056Z) left/cover">
			<Box
				max-width="240px"
				padding="50px 80px 80px 50px"
				background="--color-light"
				color="#04080C"
				position="static"
				align-self="flex-end"
			>
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					iin developing
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0" width="280px">
					Taimumari 2
				</Text>
				<Text font="--base">
					Someone has given the academy's students mysterious and dangerous powers, and Himari is about to find the truth.
					<br />
					{"\n\n\n\n"}
				</Text>
				<Link
					href="https://store.steampowered.com/app/1292400/Taimumari_2/"
					background="--color-primary"
					target="_blank"
					padding="7px 20px 7px 20px"
					margin="3px 3px 3px 3px"
					color="#F7FBFF"
					text-decoration-line="initial"
					border-radius="2px"
					display="block"
					hover-background="--color-darkL1"
					text-align="center"
				>
					Steam Page
				</Link>
			</Box>
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
				exact-active-match={false}
			>
				<Override
					slot="link"
					text-decoration="none"
					color="--light"
					padding="6px 12px"
					href="/"
				/>
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-404" display="none" />
				<Override slot="link-index">
					Main Page
				</Override>
				<Override slot="link-policy">
					Privacy Policy
				</Override>
			</Menu>
		</Section>
	</Theme>;
});