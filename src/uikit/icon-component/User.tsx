import * as React from "react";

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17 8.5C17 3.813 13.187 0 8.5 0 3.813 0 0 3.813 0 8.5a8.479 8.479 0 002.759 6.262l-.008.007.276.232.055.043a8.588 8.588 0 00.604.455 8.674 8.674 0 001.202.693l.044.02a8.423 8.423 0 002.792.75l.084.007c.228.019.458.031.692.031.232 0 .46-.012.687-.03l.086-.007a8.6 8.6 0 00.673-.088l.058-.011a8.42 8.42 0 002.027-.635l.07-.032a8.598 8.598 0 001.185-.677c.057-.039.113-.08.17-.12.135-.098.268-.2.398-.305.029-.023.06-.043.088-.067l.282-.236-.008-.007A8.478 8.478 0 0017 8.5zM.618 8.5C.618 4.154 4.154.618 8.5.618s7.882 3.536 7.882 7.882a7.862 7.862 0 01-2.655 5.892 2.315 2.315 0 00-.276-.166l-2.617-1.308a.685.685 0 01-.38-.616v-.914a6.3 6.3 0 001-1.836c.39-.186.643-.576.643-1.017V7.44c0-.268-.098-.528-.274-.733V5.265c.016-.16.073-1.066-.582-1.813-.57-.65-1.492-.98-2.741-.98s-2.171.33-2.74.98c-.656.747-.599 1.652-.583 1.812v1.443a1.126 1.126 0 00-.274.732v1.096c0 .34.153.658.414.872.25.98.766 1.723.956 1.975v.894a.69.69 0 01-.359.605L3.47 14.214a2.23 2.23 0 00-.232.148A7.863 7.863 0 01.618 8.5zm12.506 6.377a7.876 7.876 0 01-.33.227 7.777 7.777 0 01-.6.356l-.101.052a7.869 7.869 0 01-1.078.456l-.04.013c-.193.065-.39.122-.588.17l-.002.001c-.2.05-.403.09-.607.124-.005.001-.011.003-.017.003a7.917 7.917 0 01-.58.071l-.102.008a7.679 7.679 0 01-.579.024c-.196 0-.391-.01-.586-.024l-.1-.008a8.004 8.004 0 01-.585-.072l-.026-.005a7.847 7.847 0 01-1.202-.3l-.036-.012a8.008 8.008 0 01-.576-.22l-.004-.002a8.109 8.109 0 01-.527-.253l-.068-.035a7.956 7.956 0 01-1.013-.645l-.04-.032.029-.017 2.444-1.333c.42-.23.681-.67.681-1.148v-1.113l-.07-.086a5.16 5.16 0 01-.928-1.921l-.029-.123-.105-.068a.512.512 0 01-.238-.43V7.439c0-.144.061-.278.172-.378l.102-.092V5.247l-.002-.04c-.001-.008-.092-.751.431-1.348.447-.51 1.213-.768 2.276-.768 1.059 0 1.822.256 2.27.762.524.59.438 1.348.437 1.354l-.003 1.762.102.092c.112.1.173.235.173.379v1.095c0 .22-.15.42-.365.487l-.154.047-.05.153a5.72 5.72 0 01-.77 1.556c-.082.114-.16.215-.228.293l-.077.088v1.143c0 .498.277.946.723 1.169l2.617 1.308.05.026-.101.072z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgUser;