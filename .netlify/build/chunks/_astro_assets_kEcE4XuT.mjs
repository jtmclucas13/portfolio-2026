import { D as FontFamilyNotFound, F as InvalidComponentArgs, N as ImageMissingAlt, W as MissingGetFontFileRequestUrl, pt as AstroError } from "./path_TPyXO9Vx.mjs";
import { D as createAstro, T as unescapeHTML, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, t as spreadAttributes } from "./server_r9OEQJVP.mjs";
import { a as inferRemoteSize$1, c as isRemoteImage, l as resolveSrc, n as getImage$1, s as isESMImportedImage, t as getConfiguredImageService } from "./assets_CjQbHxuy.mjs";
import * as mime from "mrmime";
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/astro/components/Image.astro
createAstro("https://www.joshuamclucas.com");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://www.joshuamclucas.com");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) {
		if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
		else pictureAttributes.class = scopedStyleClass;
	}
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
		return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([
	["--font-display", {
		"preloads": [{
			"style": "normal",
			"subset": "latin",
			"type": "woff2",
			"url": "/_astro/fonts/50c8417ec683ca96.woff2",
			"weight": "400"
		}],
		"css": "@font-face{font-family:\"Zen Dots-7f593255e2d715c6\";src:url(\"/_astro/fonts/50c8417ec683ca96.woff2\") format(\"woff2\");font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-weight:400;font-style:normal;}@font-face{font-family:\"Zen Dots-7f593255e2d715c6 fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:140.1972%;ascent-override:66.3352%;descent-override:19.2586%;line-gap-override:0%;}:root{--font-display:\"Zen Dots-7f593255e2d715c6\",\"Zen Dots-7f593255e2d715c6 fallback: Arial\",sans-serif;}"
	}],
	["--font-cursive", {
		"preloads": [{
			"style": "normal",
			"subset": "latin",
			"type": "woff2",
			"url": "/_astro/fonts/4f20f44f92097c6f.woff2",
			"weight": "400"
		}],
		"css": "@font-face{font-family:Tangerine-e1bd9243e91a6db4;src:url(\"/_astro/fonts/4f20f44f92097c6f.woff2\") format(\"woff2\");font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-weight:400;font-style:normal;}@font-face{font-family:\"Tangerine-e1bd9243e91a6db4 fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:53.1628%;ascent-override:141.0762%;descent-override:47.0254%;line-gap-override:0%;}:root{--font-cursive:Tangerine-e1bd9243e91a6db4,\"Tangerine-e1bd9243e91a6db4 fallback: Arial\",sans-serif;}"
	}],
	["--font-body", {
		"preloads": [{
			"style": "normal",
			"subset": "latin",
			"type": "woff2",
			"url": "/_astro/fonts/355c04847e5e0220.woff2",
			"weight": "300"
		}],
		"css": "@font-face{font-family:Outfit-8f32e2f0f87b76e4;src:url(\"/_astro/fonts/355c04847e5e0220.woff2\") format(\"woff2\");font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-weight:300;font-style:normal;}@font-face{font-family:\"Outfit-8f32e2f0f87b76e4 fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:300;font-style:normal;size-adjust:99.5961%;ascent-override:100.4056%;descent-override:26.1055%;line-gap-override:0%;}:root{--font-body:Outfit-8f32e2f0f87b76e4,\"Outfit-8f32e2f0f87b76e4 fallback: Arial\",sans-serif;}"
	}],
	["--font-icon", {
		"preloads": [{
			"style": "normal",
			"type": "woff2",
			"url": "/_astro/fonts/7c22278905934dcc.woff2",
			"weight": "400"
		}],
		"css": "@font-face{font-family:\"Material Icons Outlined-7e786925645a3a52\";src:url(\"/_astro/fonts/7c22278905934dcc.woff2\") format(\"woff2\");font-display:swap;font-weight:400;font-style:normal;}@font-face{font-family:\"Material Icons Outlined-7e786925645a3a52 fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:224.3154%;ascent-override:44.5801%;line-gap-override:0%;}:root{--font-icon:\"Material Icons Outlined-7e786925645a3a52\",\"Material Icons Outlined-7e786925645a3a52 fallback: Arial\",sans-serif;}"
	}]
]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://www.joshuamclucas.com");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/Users/joshuamclucas/Projects/portfolio-2026/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/ssr-runtime-font-file-url-resolver.js
var SsrRuntimeFontFileUrlResolver = class {
	#urls;
	constructor({ urls }) {
		this.#urls = urls;
	}
	resolve(url, requestUrl) {
		if (!this.#urls.has(url)) return null;
		if (!url.startsWith("/")) return url;
		if (!requestUrl) throw new AstroError(MissingGetFontFileRequestUrl);
		return `${requestUrl.origin}${url}`;
	}
};
new SsrRuntimeFontFileUrlResolver({ urls: /* @__PURE__ */ new Set([
	"/_astro/fonts/50c8417ec683ca96.woff2",
	"/_astro/fonts/4f20f44f92097c6f.woff2",
	"/_astro/fonts/355c04847e5e0220.woff2",
	"/_astro/fonts/7c22278905934dcc.woff2"
]) });
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "@astrojs/netlify/image-service.js",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
export { $$Font as n, createComponent as r, imageConfig as t };
