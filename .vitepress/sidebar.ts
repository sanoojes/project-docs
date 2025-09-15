import type { DefaultTheme } from "vitepress";
type SidebarConfig = DefaultTheme.Config["sidebar"];

const webSidebars = {} as SidebarConfig;
const backendSidebars = {} as SidebarConfig;

const getSpicetifySidebar = (name: string) => ({
	[`/spicetify/${name}/`]: [
		{
			text: `${capitalizeName(name)} Theme`,
			items: [
				{ text: "Overview", link: `/spicetify/${name}/` },
				{ text: "Installation", link: `/spicetify/${name}/installation` },
				{ text: "Screenshots", link: `/spicetify/${name}/screenshots` },
				{ text: "Uninstallation", link: `/spicetify/${name}/uninstallation` },
				{ text: "Credits", link: `/spicetify/${name}/credits` },
			],
		},
	],
});

const spicetifySidebars = {
	"/spicetify/": [
		{
			text: "Spicetify Projects",
			items: [
				{ text: "Lucid Theme", link: "/spicetify/lucid" },
				{ text: "Lucid Lyrics", link: "/spicetify/lucid-lyrics" },
				{ text: "Glassify Theme", link: "/spicetify/glassify" },
				{ text: "LibX reborn", link: "/spicetify/libx-reborn" },
				{
					text: "Daily Mix Url Fixer",
					link: "/spicetify/daily-mix-url-fixer",
				},
			],
		},
	],
	...getSpicetifySidebar("lucid"),
	...getSpicetifySidebar("glassify"),
	...getSpicetifySidebar("lucid-lyrics"),
} satisfies SidebarConfig;

const rootSidebar = {
	"/": [
		{
			text: "Project Types",
			items: [
				{ text: "Web", link: "/web" },
				{ text: "Backend", link: "/backend" },
				{ text: "Spicetify", link: "/spicetify" },
			],
		},
	],
} satisfies SidebarConfig;

const sidebar: SidebarConfig = {
	...rootSidebar,
	...webSidebars,
	...backendSidebars,
	...spicetifySidebars,
} satisfies SidebarConfig;

export default sidebar;

function capitalizeName(name: string): string {
	return name
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}
