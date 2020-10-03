import React from "react";
import theme from "theme";
import { Theme, Text, Box, Link, Em, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaSteamSymbol } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Main Page
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				TernoxGames.com
			</Text>
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
					<Text as="p" margin="5px 0 5px 0">
						Hardcore roguelike about dungeons with hybrid battles, combining classical turn based combat system and a collectible card game. Collect the best spells and conquer the dungeons!
					</Text>
					<Box display="block" position="static" as="div" text-align="center">
						<Link
							href="https://store.steampowered.com/app/932210/NEXORIA/"
							target="_blank"
							background="--color-primary"
							padding="7px 20px 7px 20px"
							margin="3px 3px 3px 3px"
							color="#F7FBFF"
							text-decoration-line="initial"
							border-radius="2px"
							display="inline-block"
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
						>
							Playstation 4
						</Link>
					</Box>
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
						>
							Playstation 4
						</Link>
					</Box>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(http://ternoxgames.com/assets/images/bullet_big.jpg) 50% 0/cover no-repeat" />
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
						>
							Nintendo Switch
						</Link>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Box />
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
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
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								me@ternoxgames.com
							</Link>
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							href="https://twitter.com/taimumari"
							icon={FaTwitter}
							target="_blank"
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaSteamSymbol}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
	</Theme>;
});