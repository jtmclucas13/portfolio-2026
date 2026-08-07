import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { D as createAstro, T as unescapeHTML, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, i as renderComponent, m as generateCspDigest, t as spreadAttributes, v as createRenderInstruction } from "./server_r9OEQJVP.mjs";
import { n as $$Font, r as createComponent } from "./_astro_assets_kEcE4XuT.mjs";
import { n as zod_exports } from "./zod_qNk429ll.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Icon.astro
createAstro("https://www.joshuamclucas.com");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { class: className, name, size } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["container", className], "class:list")}${addAttribute({ fontSize: size ? `${size}rem` : void 0 }, "style")} data-astro-cid-ccg5yoga>${name}</span>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Icon.astro", void 0);
//#endregion
//#region src/components/BoxItem.astro
createAstro("https://www.joshuamclucas.com");
var $$BoxItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BoxItem;
	const { class: className, href, icon, subtitle, theme, title } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Element", href ? "a" : "div", {
		"class:list": [
			"box",
			{ link: !!href },
			theme,
			className
		],
		"href": href,
		"data-astro-cid-jl3zozrx": true
	}, { "default": ($$result) => renderTemplate`${Astro.slots.has("default") && renderTemplate`${maybeRenderHead($$result)}<div class="image" data-astro-cid-jl3zozrx>${renderSlot($$result, $$slots["default"])}</div>`}<div class="main-content" data-astro-cid-jl3zozrx><span class="title" data-astro-cid-jl3zozrx>${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"size": 1.5,
		"data-astro-cid-jl3zozrx": true
	})}`}${title}</span><span class="subtitle" data-astro-cid-jl3zozrx>${subtitle}</span></div>` })}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/BoxItem.astro", void 0);
//#endregion
//#region src/components/Button.astro
createAstro("https://www.joshuamclucas.com");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { type } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(type, "type")} data-astro-cid-ekguhzzh>${renderSlot($$result, $$slots["default"])}</button>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Button.astro", void 0);
//#endregion
//#region src/components/Flex.astro
createAstro("https://www.joshuamclucas.com");
var $$Flex = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Flex;
	const { align = "start", alignSelf, class: className = "", direction = "row", gap = 0, grow, justify = "start", maxWidth, ...rest } = Astro.props;
	const BREAKPOINT_MODIFIERS = ["small", "medium"];
	function getResponsiveClasses(classProp, prefix) {
		if (Array.isArray(classProp)) {
			let responsiveClasses = [];
			for (let i = 0; i < classProp.length; i++) {
				const breakpointProp = classProp[i];
				if (breakpointProp === null) continue;
				const modifier = BREAKPOINT_MODIFIERS[i];
				if (!modifier) throw new Error("Improper breakpoint found");
				const propClass = prefix ? `${prefix}-${breakpointProp}` : breakpointProp;
				responsiveClasses.push(`${propClass}-${modifier}`);
			}
			return responsiveClasses;
		}
		return [prefix ? `${prefix}-${classProp}` : classProp];
	}
	function getGrowClass(growProp) {
		if (!growProp) return [];
		if (typeof growProp === "boolean") return getResponsiveClasses("grow");
		return getResponsiveClasses(growProp.map((prop) => prop ? "grow" : null));
	}
	function getResponsiveGap(gap) {
		if (!gap) return zod_exports.undefined;
		if (typeof gap === "number") return `${gap}rem;`;
		return `${gap[0]}rem; ${gap[1] ? `@media screen and (min-width: 850px) { ${gap[1]}rem; }` : ""} ${gap[2] ? `@media screen and (min-width: 1200px) { ${gap[2]}rem; }` : ""}`;
	}
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"flex",
		className,
		...getResponsiveClasses(direction),
		...getGrowClass(grow),
		...getResponsiveClasses(align, "align"),
		...getResponsiveClasses(justify, "justify")
	], "class:list")}${addAttribute({
		alignSelf,
		gap: getResponsiveGap(gap),
		maxWidth: maxWidth ? `${maxWidth}px` : zod_exports.undefined
	}, "style")}${spreadAttributes(rest)} data-astro-cid-5vo43l3u>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Flex.astro", zod_exports.undefined);
//#endregion
//#region src/components/LinkButton.astro
createAstro("https://www.joshuamclucas.com");
var $$LinkButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LinkButton;
	const { download, href, theme = "primary" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(theme, "class")}${addAttribute(download, "download")}${addAttribute(href, "href")} data-astro-cid-c75bxee4>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/LinkButton.astro", void 0);
//#endregion
//#region src/components/Head.astro
createAstro("https://www.joshuamclucas.com");
var $$Head = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Head;
	const { description = "The web home of Joshua McLucas, the Career Chameleon.", title = "Joshua McLucas - Career Chameleon" } = Astro.props;
	const { href } = Astro.url;
	return renderTemplate`<meta name="generator"${addAttribute(Astro.generator, "content")}><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(href, "content")}><meta property="og:type" content="website"><meta property="twitter:card" content="summary"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><link rel="icon" href="/favicon.ico"><link rel="icon" type="image/png" href="/favicon.png">${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-icon",
		"preload": true
	})}${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-display",
		"preload": true
	})}${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-cursive",
		"preload": true
	})}${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-body",
		"preload": true
	})}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Head.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
//#region src/assets/chameleon-2.svg
var chameleon_2_default = createSvgComponent({
	"meta": {
		"src": "/_astro/chameleon-2.Df6drRNE.svg",
		"width": 600,
		"height": 620,
		"format": "svg"
	},
	"attributes": {
		"id": "Layer_1",
		"viewBox": "255 176 600 620"
	},
	"children": "\n<path fill=\"currentColor\" opacity=\"1.000000\" stroke=\"none\" d=\"\nM551.001099,793.318665 \n	C487.686676,792.355835 430.404358,774.769592 380.716217,735.575867 \n	C349.193695,710.711182 324.842804,680.116028 313.145966,641.132751 \n	C299.614563,596.034973 303.002655,552.390076 327.543304,511.309662 \n	C331.274841,505.063202 330.466614,502.733154 323.393738,500.317963 \n	C299.989471,492.325928 279.374146,479.881836 262.106781,462.069672 \n	C261.207306,461.141785 259.999695,460.379730 259.966187,458.469818 \n	C262.083527,457.069580 264.620117,457.719330 266.977539,457.704132 \n	C306.161133,457.451111 345.009430,454.134369 383.152344,444.710938 \n	C401.881317,440.083832 419.293335,432.165558 435.898743,422.451965 \n	C440.872772,419.542267 445.557159,416.188538 449.462982,411.514374 \n	C446.992706,409.442963 445.238342,410.963654 443.611725,411.728638 \n	C419.953278,422.855408 395.033356,430.014526 369.426025,434.715942 \n	C350.156860,438.253662 330.722260,440.779297 311.171936,442.432220 \n	C291.955902,444.056885 272.773010,446.089722 253.468002,446.287415 \n	C245.009476,446.374054 241.971695,442.482117 244.245834,434.292175 \n	C254.220840,398.368652 268.749054,364.588013 291.650024,334.825409 \n	C307.782898,313.858734 328.346130,298.233185 351.366272,285.597992 \n	C373.846039,273.259430 396.958954,262.061890 418.725006,248.438248 \n	C438.076721,236.325790 457.146118,223.799255 474.978180,209.478149 \n	C477.951813,207.090027 481.192627,204.969208 484.521881,203.102966 \n	C491.394867,199.250229 497.192841,201.280640 500.242096,208.625397 \n	C504.741211,219.462357 506.468414,230.991592 508.294647,242.481796 \n	C510.725342,257.775146 511.312317,273.228973 512.310547,288.647125 \n	C512.395264,289.956177 512.316772,291.357452 513.893616,292.130005 \n	C515.986450,291.808685 516.520996,289.818268 517.471741,288.385986 \n	C521.534302,282.265289 526.196716,276.616119 530.740295,270.860596 \n	C535.446289,264.899414 541.362488,261.706909 548.867371,260.613586 \n	C557.424377,259.366974 566.013306,258.559998 574.606445,257.727356 \n	C577.393799,257.457245 579.972107,257.804535 581.229004,260.894684 \n	C582.502808,264.026703 583.697632,266.938812 581.007751,270.175476 \n	C576.903748,275.113861 573.167053,280.357452 569.031006,285.791199 \n	C572.232178,287.263031 573.667847,285.264313 575.245667,284.115479 \n	C582.650269,278.724182 590.081665,273.363312 597.335510,267.773468 \n	C602.531189,263.769623 608.333008,262.156128 614.674011,262.984985 \n	C622.444641,264.000671 630.315613,263.161346 638.057678,264.623657 \n	C641.562378,265.285583 645.307129,265.404358 646.169373,269.779694 \n	C647.117371,274.589752 648.909485,279.617706 642.952515,282.998688 \n	C639.496582,284.960144 636.393677,287.560242 633.207703,289.973083 \n	C631.833130,291.014099 629.895691,291.685120 629.823364,294.124481 \n	C632.215454,295.550507 634.350342,294.104523 636.365295,293.342072 \n	C643.526855,290.632172 650.680969,287.879364 657.703491,284.832916 \n	C663.244507,282.429199 668.590515,281.865387 674.612183,283.297546 \n	C683.831238,285.490112 693.075867,287.519562 702.106750,290.423492 \n	C708.329651,292.424500 707.914124,293.062958 709.265076,301.905273 \n	C710.022400,306.862061 706.497009,308.432129 702.856262,310.094971 \n	C697.366150,312.602478 691.175232,313.698730 685.670715,318.390198 \n	C694.666870,319.362457 702.752869,318.056488 710.695496,317.180878 \n	C721.716675,315.965851 731.736145,316.878326 741.134216,323.397614 \n	C748.106445,328.234131 755.444519,332.554199 762.192261,337.734924 \n	C766.776917,341.254822 767.113708,343.498718 764.974915,351.069183 \n	C763.707947,355.554016 760.518188,356.096252 756.564575,356.429779 \n	C752.026062,356.812683 747.317322,356.736877 742.993958,358.569702 \n	C742.978333,361.198639 744.715515,361.382507 746.325745,361.777649 \n	C754.393127,363.757263 762.427734,365.880005 770.528564,367.710205 \n	C775.057678,368.733459 778.924133,370.524292 782.094421,374.063446 \n	C789.889404,382.765564 797.055725,391.953125 803.824463,401.458221 \n	C805.782349,404.207611 804.908447,416.628479 802.622498,418.663269 \n	C800.895142,420.200775 798.795349,419.327698 796.875122,419.018188 \n	C793.434692,418.463623 790.022827,417.733368 786.587036,417.146729 \n	C786.201050,417.080811 785.737793,417.467560 785.210449,417.685699 \n	C785.943237,420.354401 788.361084,421.125916 790.183228,422.366638 \n	C794.721436,425.456696 799.321899,428.477539 804.066589,431.235046 \n	C808.026245,433.536255 810.630371,436.739685 812.201233,440.965637 \n	C816.377808,452.202118 820.438232,463.476990 823.675049,475.027893 \n	C825.669373,482.144409 820.644653,490.720428 814.157593,491.203217 \n	C812.201904,493.777832 814.036865,496.387207 814.530029,498.776978 \n	C819.131470,521.076355 820.177979,543.478027 818.497253,566.207642 \n	C815.826782,602.320312 806.081604,636.225952 788.225586,667.649536 \n	C761.185364,715.235779 721.829529,749.114441 671.703491,770.687012 \n	C644.741943,782.290344 616.437927,788.823242 587.394714,792.114807 \n	C575.512329,793.461426 563.492676,793.711670 551.001099,793.318665 \nM578.799133,539.645874 \n	C586.205505,544.765320 591.863892,551.471680 596.365417,559.187134 \n	C608.374329,579.770386 604.835022,605.109497 588.055237,620.967896 \n	C574.166321,634.094116 546.093689,637.087402 534.128906,621.188416 \n	C533.249756,620.020081 532.089661,618.578369 530.396484,619.577637 \n	C528.547302,620.668884 529.801025,622.308716 530.295654,623.574951 \n	C535.755737,637.552551 547.086609,643.677063 561.048462,644.487061 \n	C586.103394,645.940613 605.776978,635.695007 619.073364,614.346863 \n	C628.575195,599.091064 631.250916,582.286011 628.782776,564.466125 \n	C625.220825,538.749268 613.230103,517.993347 592.768127,502.196838 \n	C568.143616,483.186829 539.834717,475.153137 509.050842,474.218170 \n	C475.912201,473.211700 444.948792,480.112671 416.776825,498.071259 \n	C360.518250,533.934021 339.533020,596.816467 359.349243,657.168030 \n	C373.060913,698.927856 402.588684,727.577087 440.590057,748.002319 \n	C477.662262,767.928040 517.412354,774.078308 558.983643,769.743225 \n	C588.404907,766.675232 615.827576,757.610291 640.895569,741.749573 \n	C643.607056,740.033936 646.429016,738.395203 649.467224,734.856506 \n	C634.665466,738.867554 621.018188,741.387939 607.073486,742.524902 \n	C572.233643,745.365540 538.249329,742.461792 505.908081,728.173462 \n	C481.158569,717.239075 460.330353,701.610779 445.778931,678.182007 \n	C423.391357,642.136414 425.637909,594.651978 452.355591,561.763062 \n	C469.092468,541.160278 490.767487,528.803162 517.407166,525.546204 \n	C539.351807,522.863281 559.780762,526.519165 578.799133,539.645874 \nM489.292847,409.774597 \n	C508.308533,392.735504 530.180603,384.812408 555.865234,388.594421 \n	C587.033386,393.183868 612.748596,407.601410 633.009277,431.560883 \n	C644.889343,445.609711 644.779114,450.185852 634.430176,465.461121 \n	C629.381897,472.912476 624.385010,480.388336 618.256226,487.025513 \n	C616.655457,488.759094 615.569763,490.602356 617.972839,492.540924 \n	C620.497437,494.577484 622.248108,493.309875 623.716797,491.089325 \n	C624.175781,490.395416 624.560242,489.652557 625.012146,488.953644 \n	C644.933533,458.149384 679.377380,449.641296 711.155273,468.081787 \n	C734.761780,481.780548 749.058044,503.042786 758.168640,528.199585 \n	C762.316833,539.653931 764.937012,551.474426 766.486755,563.560303 \n	C766.896606,566.755920 767.226807,570.200745 771.527405,571.237793 \n	C777.988464,572.795776 784.340393,574.800354 790.779114,576.458435 \n	C794.829163,577.501404 797.194031,575.844177 797.613708,571.577576 \n	C799.676819,550.601013 799.169250,529.687622 795.309265,508.963867 \n	C787.153259,465.174164 768.919800,426.069153 740.235107,391.896240 \n	C709.291199,355.031860 670.041565,331.076691 624.247803,317.400665 \n	C607.952637,312.534180 591.200256,310.259277 574.226074,308.985107 \n	C554.345398,307.492798 534.713196,308.624207 515.145081,312.132263 \n	C512.251038,312.651062 510.806458,314.143402 510.316406,316.971741 \n	C506.370667,339.745270 498.129303,360.831268 485.420807,380.160767 \n	C484.331879,381.817047 483.122894,383.553467 483.440674,385.690216 \n	C484.514984,392.914337 482.847626,399.840820 481.639404,406.884827 \n	C481.065765,410.228912 478.681610,413.556183 480.377838,417.537048 \n	C484.208984,415.923553 485.940063,412.440521 489.292847,409.774597 \nM580.582520,580.122681 \n	C578.851196,572.338501 575.817383,565.278809 569.888000,559.640442 \n	C553.861389,544.400330 526.872253,541.858154 506.167084,553.737427 \n	C477.736908,570.048828 463.131561,603.204895 469.801147,635.683777 \n	C475.660217,664.215759 492.101349,685.292542 516.264709,700.316711 \n	C551.940125,722.498535 590.884216,728.534302 631.859497,720.467224 \n	C671.170044,712.727905 701.306213,691.280029 720.991943,656.379028 \n	C739.779907,623.069641 745.468018,586.980957 739.463867,549.312866 \n	C736.004944,527.613037 727.115540,508.224945 710.785095,492.890045 \n	C700.942566,483.647491 689.302551,477.942841 675.659668,478.570374 \n	C658.852051,479.343536 646.205627,487.809814 636.945251,501.769287 \n	C634.598694,505.306549 634.726318,507.950470 637.272583,511.134094 \n	C641.032227,515.834717 643.776733,521.189514 646.355896,526.611450 \n	C656.860901,548.695190 660.621155,571.917664 657.188904,596.091125 \n	C654.438965,615.458740 647.085815,632.984436 633.533997,647.426147 \n	C619.249329,662.648804 601.493103,670.694824 580.729614,672.713379 \n	C554.608032,675.252808 532.595764,667.832336 516.522888,646.452881 \n	C502.358337,627.611816 503.383759,602.983643 518.735474,587.378723 \n	C537.081787,568.729736 564.609253,572.532776 573.757629,596.472961 \n	C574.204895,597.643250 574.416931,599.186829 576.702026,599.153931 \n	C581.079712,593.916870 580.806458,587.444031 580.582520,580.122681 \nM490.073547,459.500854 \n	C509.470398,456.570587 528.854065,456.915955 548.149902,460.200867 \n	C564.681824,463.015228 580.267456,468.755463 594.922607,476.864868 \n	C598.269775,478.717010 600.302368,478.291687 602.425293,475.321442 \n	C605.230713,471.396454 608.506836,467.795807 611.167908,463.782104 \n	C618.409912,452.859222 617.312500,444.921326 608.007202,435.779633 \n	C593.630310,421.655426 576.087341,413.546661 556.704224,409.595001 \n	C542.844849,406.769470 528.938232,407.175873 515.794617,413.806091 \n	C499.549194,422.000977 489.702332,436.136047 480.736420,451.102142 \n	C479.527771,453.119629 477.352203,455.262360 478.891632,457.944519 \n	C480.594208,460.910858 483.623230,459.587921 486.174805,459.666260 \n	C487.171692,459.696838 488.171967,459.616608 490.073547,459.500854 \nM361.447449,372.722107 \n	C370.909790,371.938843 378.075012,364.925415 377.497986,357.011536 \n	C376.940002,349.359528 369.121521,342.249084 361.253174,342.237854 \n	C352.338074,342.225128 345.763947,348.177521 345.345123,356.641541 \n	C344.903595,365.563263 350.971222,371.950012 361.447449,372.722107 \nz\" />\n<path fill=\"currentColor\" opacity=\"1.000000\" stroke=\"none\" d=\"\nM577.380127,703.996582 \n	C567.549133,701.708618 557.921631,700.238342 548.111328,695.448425 \n	C637.345276,693.845825 695.411255,652.325562 720.732849,566.709717 \n	C723.136047,568.842712 723.070740,571.920593 723.104492,574.401245 \n	C723.774475,623.684204 708.326965,665.043884 663.949280,691.442322 \n	C649.775513,699.873718 633.907837,703.540466 617.507690,705.473267 \n	C604.114197,707.051697 590.997864,705.584839 577.380127,703.996582 \nz\" />\n",
	"styles": []
});
//#endregion
//#region src/components/Header.astro
createAstro("https://www.joshuamclucas.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const currentPath = Astro.url.pathname;
	const { withBorder } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute([{ "with-border": withBorder }], "class:list")} data-astro-cid-nen7h5rs><div data-astro-cid-nen7h5rs>${renderComponent($$result, "Flex", $$Flex, {
		"align": "center",
		"class": "main-header",
		"gap": 1,
		"data-astro-cid-nen7h5rs": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Chameleon", chameleon_2_default, { "data-astro-cid-nen7h5rs": true })}<div data-astro-cid-nen7h5rs><a href="/" data-astro-cid-nen7h5rs><h1 data-astro-cid-nen7h5rs>Joshua McLucas</h1></a><h2 data-carousel${addAttribute([{ animate: currentPath === "/" }], "class:list")} data-astro-cid-nen7h5rs>Career Chameleon</h2></div>` })}<div aria-label="Open Navigation" class="hamburger" data-astro-cid-nen7h5rs>menu</div><div aria-hidden="true" class="navigation" data-astro-cid-nen7h5rs><ul data-astro-cid-nen7h5rs><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "home",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/" data-astro-cid-nen7h5rs>Home</a></li><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "computer",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/software" data-astro-cid-nen7h5rs>Software</a></li><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "theater_comedy",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/theater" data-astro-cid-nen7h5rs>Theater</a></li><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "edit_note",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/writing" data-astro-cid-nen7h5rs>Writing</a></li><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "play_circle",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/streaming" data-astro-cid-nen7h5rs>Streaming</a></li><li data-astro-cid-nen7h5rs>${renderComponent($$result, "Icon", $$Icon, {
		"name": "drafts",
		"data-astro-cid-nen7h5rs": true
	})}<a href="/contact" data-astro-cid-nen7h5rs>Contact</a></li></ul></div></div></header>${renderScript($$result, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Header.astro", void 0);
//#endregion
//#region src/assets/github.svg
var github_default = createSvgComponent({
	"meta": {
		"src": "/_astro/github.QpYQ9fJQ.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"role": "img",
		"viewBox": "0 0 24 24"
	},
	"children": "<title>GitHub</title><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\" />",
	"styles": []
});
//#endregion
//#region src/assets/instagram.svg
var instagram_default = createSvgComponent({
	"meta": {
		"src": "/_astro/instagram.Beks89Ng.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"role": "img",
		"viewBox": "0 0 24 24"
	},
	"children": "<title>Instagram</title><path d=\"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077\" />",
	"styles": []
});
//#endregion
//#region src/assets/linkedin.svg
var linkedin_default = createSvgComponent({
	"meta": {
		"src": "/_astro/linkedin.B1zICW_L.svg",
		"width": 382,
		"height": 382,
		"format": "svg"
	},
	"attributes": {
		"id": "Layer_1",
		"viewBox": "0 0 382 382",
		"xml:space": "preserve"
	},
	"children": "\r\n	 <title>LinkedIn</title>\r\n<path d=\"M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\r\n	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056\r\n	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806\r\n	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1\r\n	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73\r\n	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079\r\n	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426\r\n	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472\r\n	L341.91,330.654L341.91,330.654z\" />\r\n",
	"styles": []
});
//#endregion
//#region src/components/Socials.astro
createAstro("https://www.joshuamclucas.com");
var $$Socials = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Socials;
	const { gap = 1, size = "medium", theme } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Flex", $$Flex, {
		"align": "center",
		"gap": gap,
		"data-astro-cid-qbunpjfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="https://www.linkedin.com/in/joshuamclucas/" rel="noreferrer noopener" target="_blank" data-astro-cid-qbunpjfh>${renderComponent($$result, "LinkedIn", linkedin_default, {
		"class:list": [
			"logo",
			size,
			theme
		],
		"data-astro-cid-qbunpjfh": true
	})}</a><a href="https://github.com/jtmclucas13" rel="noreferrer noopener" target="_blank" data-astro-cid-qbunpjfh>${renderComponent($$result, "GitHub", github_default, {
		"class:list": [
			"logo",
			size,
			theme
		],
		"data-astro-cid-qbunpjfh": true
	})}</a><a href="https://www.instagram.com/jtmclucas13/" rel="noreferrer noopener" target="_blank" data-astro-cid-qbunpjfh>${renderComponent($$result, "Instagram", instagram_default, {
		"class:list": [
			"logo",
			size,
			theme
		],
		"data-astro-cid-qbunpjfh": true
	})}</a>` })}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Socials.astro", void 0);
//#endregion
//#region src/assets/hi-mark.svg
var hi_mark_default = createSvgComponent({
	"meta": {
		"src": "/_astro/hi-mark.BNFAtabL.svg",
		"width": 400,
		"height": 400,
		"format": "svg"
	},
	"attributes": {
		"id": "a",
		"data-name": "Layer 1",
		"width": "400",
		"height": "400",
		"viewBox": "0 0 400 400"
	},
	"children": "\n  <title>Human-Intelligence Mark</title>\n  <path d=\"M200,0C89.543,0,0,89.543,0,200s89.543,200,200,200,200-89.543,200-200S310.457,0,200,0ZM315.054,315.054c-30.732,30.732-71.592,47.657-115.054,47.657s-84.322-16.925-115.054-47.657c-30.732-30.732-47.657-71.592-47.657-115.054s16.925-84.322,47.657-115.054c30.732-30.732,71.592-47.657,115.054-47.657s84.322,16.925,115.054,47.657c30.732,30.732,47.657,71.592,47.657,115.054s-16.925,84.322-47.657,115.054Z\" fill=\"currentColor\" />\n  <path d=\"M204.728,172.508c-7.737-4.381-16.843-6.603-27.065-6.603-12.231,0-22.582,3.305-30.764,9.823-4.118,3.282-7.76,7.425-10.881,12.368v-94.416h-37.306v212.639h37.822v-76.698c0-6.584,1.261-12.262,3.749-16.874,2.458-4.562,5.869-8.078,10.136-10.449,4.307-2.393,9.303-3.605,14.849-3.605,8.227,0,14.469,2.475,19.083,7.565,4.604,5.082,6.939,12.247,6.939,21.297v78.765h37.952v-83.93c0-11.9-2.141-22.171-6.361-30.527-4.265-8.435-10.372-14.946-18.152-19.354Z\" fill=\"currentColor\" />\n  <rect x=\"260.626\" y=\"167.713\" width=\"37.822\" height=\"138.606\" fill=\"currentColor\" />\n  <path d=\"M279.537,110.513c-5.867,0-10.981,1.995-15.201,5.93-4.261,3.974-6.422,8.906-6.422,14.66,0,5.578,2.157,10.442,6.412,14.458,4.219,3.983,9.337,6.004,15.211,6.004,5.957,0,11.118-2.02,15.341-6.004,4.254-4.017,6.411-8.924,6.411-14.586s-2.16-10.556-6.422-14.532c-4.222-3.935-9.38-5.929-15.33-5.929Z\" fill=\"currentColor\" />\n",
	"styles": []
});
//#endregion
//#region src/components/ThemeToggle.astro
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}${renderScript($$result, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}<button id="themeToggle" aria-label="Toggle theme" data-astro-cid-l6lhmie6><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" data-astro-cid-l6lhmie6><path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-l6lhmie6></path><path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-l6lhmie6></path></svg></button>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/ThemeToggle.astro", void 0);
//#endregion
//#region src/components/Analytics.astro
var $$Analytics = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script async src="https://www.googletagmanager.com/gtag/js?id=G-913YEMXBKV"><\/script><script>
  /* @ts-ignore */
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    /* @ts-ignore */
    dataLayer.push(arguments);
  }
  /* @ts-ignore */
  gtag("js", new Date());

  /* @ts-ignore */
  gtag("config", "G-913YEMXBKV");
<\/script>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/components/Analytics.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://www.joshuamclucas.com");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { maxWidth, withGlobalPadding = true, withHeaderBorder } = Astro.props;
	return renderTemplate`<html lang="en" data-astro-cid-ju4pidww><head>${renderComponent($$result, "Head", $$Head, { "data-astro-cid-ju4pidww": true })}${renderHead($$result)}</head>${renderComponent($$result, "Analytics", $$Analytics, { "data-astro-cid-ju4pidww": true })}<body data-astro-cid-ju4pidww><div data-astro-cid-ju4pidww>${renderComponent($$result, "Header", $$Header, {
		"withBorder": withHeaderBorder,
		"data-astro-cid-ju4pidww": true
	})}<div${addAttribute(["content", { withGlobalPadding }], "class:list")}${addAttribute({
		margin: maxWidth ? "auto" : void 0,
		maxWidth: maxWidth ? `${maxWidth}px` : void 0
	}, "style")} data-astro-cid-ju4pidww>${renderSlot($$result, $$slots["default"])}</div></div><footer data-astro-cid-ju4pidww><span class="copyright" data-astro-cid-ju4pidww><a href="https://www.artistsu.org/human-intelligence" rel="noopener noreferrer" target="_blank" data-astro-cid-ju4pidww>${renderComponent($$result, "HiMark", hi_mark_default, {
		"class": "hi-mark",
		"data-astro-cid-ju4pidww": true
	})}</a> Joshua McLucas, ${(/* @__PURE__ */ new Date()).getFullYear()}</span>${renderComponent($$result, "Flex", $$Flex, {
		"align": "center",
		"gap": 1,
		"data-astro-cid-ju4pidww": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Socials", $$Socials, {
		"size": "small",
		"theme": "inverted",
		"data-astro-cid-ju4pidww": true
	})}${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-ju4pidww": true })}` })}</footer></body></html>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "/Users/joshuamclucas/Projects/portfolio-2026/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "Layout", $$Layout, {
		"withHeaderBorder": true,
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h2 data-astro-cid-6bfsojfh>Contact Me</h2>${renderComponent($$result, "Flex", $$Flex, {
		"align": ["center", "end"],
		"direction": ["column", "row"],
		"gap": 2,
		"grow": true,
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`<div class="success" data-astro-cid-6bfsojfh>${renderComponent($$result, "BoxItem", $$BoxItem, {
		"icon": "check_circle",
		"title": "Thank you!",
		"subtitle": "I'll get back to you as soon as I can",
		"theme": "success",
		"data-astro-cid-6bfsojfh": true
	})}</div><form data-netlify="true" data-netlify-honeypot="bot-field" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh>Name<input maxlength="1000" name="name" data-astro-cid-6bfsojfh></label><div class="field-error-element" data-field="name" data-astro-cid-6bfsojfh></div></div><div data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh>Email<input maxlength="1000" name="email" type="email" data-astro-cid-6bfsojfh></label><div class="field-error-element" data-field="email" data-astro-cid-6bfsojfh></div></div><div data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh>Subject<input maxlength="1000" name="subject" data-astro-cid-6bfsojfh></label><div class="field-error-element" data-field="subject" data-astro-cid-6bfsojfh></div></div><div data-astro-cid-6bfsojfh><label data-astro-cid-6bfsojfh>Message<textarea maxlength="20000" name="message" rows="5" data-astro-cid-6bfsojfh></textarea></label><div class="field-error-element" data-field="message" data-astro-cid-6bfsojfh></div></div><input name="bot-field"${addAttribute({
		visibility: "hidden",
		height: 0,
		margin: 0,
		padding: 0,
		border: 0
	}, "style")} data-astro-cid-6bfsojfh><div class="error" data-astro-cid-6bfsojfh>${renderComponent($$result, "BoxItem", $$BoxItem, {
		"icon": "error",
		"title": "Uh-oh!",
		"subtitle": "There was an error sending your message. Please try again, or contact me via social media.",
		"theme": "danger",
		"data-astro-cid-6bfsojfh": true
	})}</div>${renderComponent($$result, "Button", $$Button, {
		"type": "submit",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "send",
		"data-astro-cid-6bfsojfh": true
	})}Send Email` })}</form>${renderComponent($$result, "Flex", $$Flex, {
		"align": "center",
		"direction": "column",
		"gap": [2, 5],
		"grow": true,
		"justify": "center",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Socials", $$Socials, {
		"gap": 3,
		"data-astro-cid-6bfsojfh": true
	})}${renderComponent($$result, "LinkButton", $$LinkButton, {
		"href": "McLucas - Professional Resume.pdf",
		"download": "McLucas - Professional Resume",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "download",
		"data-astro-cid-6bfsojfh": true
	})}Download my resume` })}` })}` })}` })}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/src/pages/contact.astro", void 0);
var $$file = "/Users/joshuamclucas/Projects/portfolio-2026/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
