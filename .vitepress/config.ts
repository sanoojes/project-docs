import { defineConfig } from "vitepress";
import sidebar from "./sidebar.ts";

export default defineConfig({
	title: "Projects by Sanooj",
	description: "This site contains all the documentations for my projects",
	head: [
		["meta", { name: "author", content: "Sanooj E Sanish" }],
		[
			"meta",
			{
				name: "keywords",
				content:
					"Sanooj, Sanooj E Sanish, projects, documentation, web, programming, backend",
			},
		],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:url", content: "https://projects.sanooj.uk" }],
		[
			"script",
			{
				src: "https://static.cloudflareinsights.com/beacon.min.js",
				"data-cf-beacon": '{"token": "788187476fab40d4956381e80f516425"}',
				defer: "",
			},
		],
	],
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Projects", link: "/projects" },
		],
		sidebar,
		search: { provider: "local" },
		socialLinks: [{ icon: "github", link: "https://github.com/sanoojes" }],
	},
	markdown: {
		image: {
			lazyLoading: true,
		},
	},
	sitemap: { hostname: "https://projects.sanooj.uk" },
	lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,
	srcDir: "docs",
	ignoreDeadLinks: [/^\/spicetify\//],
	transformPageData(pageData) {
		pageData.frontmatter.head ??= [];

		if (pageData.relativePath.includes("spicetify/")) {
			pageData.frontmatter.head.push(
				[
					"link",
					{
						rel: "icon",
						type: "image/svg+xml",
						href: "/favicons/spicetify/favicon.svg",
					},
				],
				["link", { rel: "icon", href: "/favicons/spicetify/favicon.ico" }],
			);
		} else {
			pageData.frontmatter.head.push(
				[
					"link",
					{ rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" },
				],
				["link", { rel: "icon", href: "/favicons/favicon.ico" }],
			);
		}
	},
});
