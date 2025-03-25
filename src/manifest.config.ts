import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch] = version
	// can only contain digits, dots, or dash
	.replace(/[^\d.-]+/g, "")
	// split into version parts
	.split(/[.-]/);

export default defineManifest(async () => ({
	manifest_version: 3,
	name: "eTutor Plus",
	description: "Enhances eTutor learning experience by adding low-hanging fruits to the eTutor platform.",
	version: `${major}.${minor}.${patch}`,
	version_name: version,
	icons: {
		"128": "src/assets/icons/icon-128.png",
	},
	content_scripts: [
		{
			matches: ["https://*.etutor.pl/*"],
			js: ["src/content/index.ts"],
		},
	],
	background: {
		service_worker: "src/background/index.ts",
	},
	action: {
		default_popup: "src/popup/popup.html",
	},
	permissions: ["storage"] as chrome.runtime.ManifestPermissions[],
}));
