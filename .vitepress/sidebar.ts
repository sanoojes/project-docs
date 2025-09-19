import type { DefaultTheme } from "vitepress";
type SidebarConfig = DefaultTheme.Config["sidebar"];

// Root sidebar
const rootSidebar: SidebarConfig = {
	"/": [
		{
			text: "Project Types",
			items: [
				{ text: "Web", link: "/web/" },
				{ text: "Backend", link: "/backend/" },
				{ text: "Spicetify", link: "/spicetify/" },
			],
		},
	],
};

// Spicetify sidebar
const spicetifySidebars: SidebarConfig = {
	"/spicetify/": [
		{
			text: "Spicetify Projects",
			items: [
				{ text: "Lucid Theme", link: "/spicetify/lucid/" },
				{ text: "Lucid Lyrics", link: "/spicetify/lucid-lyrics/" },
				{ text: "Glassify Theme", link: "/spicetify/glassify/" },
				{ text: "ShadeX Theme", link: "/spicetify/shade-x/" },
				{ text: "API Server", link: "/spicetify/server/" },

				{ text: "LibX Reborn", link: "/spicetify/libx-reborn/" },
				{
					text: "Daily Mix Url Fixer",
					link: "/spicetify/daily-mix-url-fixer/",
				},
				{ text: "Analytics Server", link: "/spicetify/analytics/" },
			],
		},
	],

	"/spicetify/lucid/": [
		{
			text: "Lucid Theme",
			items: [
				{ text: "Overview", link: "/spicetify/lucid/" },
				{ text: "Installation", link: "/spicetify/lucid/installation/" },
				{ text: "Screenshots", link: "/spicetify/lucid/screenshots/" },
				{ text: "Uninstallation", link: "/spicetify/lucid/uninstallation/" },
				{ text: "Credits", link: "/spicetify/lucid/credits/" },
			],
		},
	],

	"/spicetify/lucid-lyrics/": [
		{
			text: "Lucid Lyrics",
			items: [
				{ text: "Overview", link: "/spicetify/lucid-lyrics/" },
				{ text: "Installation", link: "/spicetify/lucid-lyrics/installation/" },
				{ text: "Screenshots", link: "/spicetify/lucid-lyrics/screenshots/" },
				{
					text: "Uninstallation",
					link: "/spicetify/lucid-lyrics/uninstallation/",
				},
				{ text: "Credits", link: "/spicetify/lucid-lyrics/credits/" },
			],
		},
	],

	"/spicetify/glassify/": [
		{
			text: "Glassify Theme",
			items: [
				{ text: "Overview", link: "/spicetify/glassify/" },
				{ text: "Installation", link: "/spicetify/glassify/installation/" },
				{ text: "Screenshots", link: "/spicetify/glassify/screenshots/" },
				{ text: "Uninstallation", link: "/spicetify/glassify/uninstallation/" },
				{ text: "Credits", link: "/spicetify/glassify/credits/" },
			],
		},
	],

	"/spicetify/libx-reborn/": [
		{
			text: "LibX Reborn",
			items: [
				{ text: "Main", link: "/spicetify/libx-reborn/" },
				{ text: "Screenshots", link: "/spicetify/libx-reborn/screenshots/" },
			],
		},
	],
	"/spicetify/analytics/": [
		{
			text: "Analytics Server",
			items: [],
		},
	],
	"/spicetify/server/": [
		{
			text: "API Server",
			items: [],
		},
	],

	"/spicetify/daily-mix-url-fixer/": [
		{
			text: "Daily Mix Url Fixer",
			items: [],
		},
	],
};

// Web sidebar
const webSidebars = {} as SidebarConfig;

// Backend sidebar
const backendSidebars = {} as SidebarConfig;

// Cyber sidebar
const cyberSidebars = {} as SidebarConfig;

// Final sidebar export
const sidebar: SidebarConfig = {
	...rootSidebar,
	...webSidebars,
	...backendSidebars,
	...cyberSidebars,
	...spicetifySidebars,
};

export default sidebar;
