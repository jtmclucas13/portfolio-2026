var ASTRO_GENERATOR = `Astro v7.2.0`;
var ASTRO_ERROR_HEADER = "X-Astro-Error";
var DEFAULT_404_COMPONENT = "astro-default-404.astro";
var REDIRECT_STATUS_CODES = [
	301,
	302,
	303,
	307,
	308,
	300,
	304
];
var REROUTABLE_STATUS_CODES = [404, 500];
var clientAddressSymbol = /* @__PURE__ */ Symbol.for("astro.clientAddress");
var originPathnameSymbol = /* @__PURE__ */ Symbol.for("astro.originPathname");
var pipelineSymbol = /* @__PURE__ */ Symbol.for("astro.pipeline");
var fetchStateSymbol = /* @__PURE__ */ Symbol.for("astro.fetchState");
var appSymbol = /* @__PURE__ */ Symbol.for("astro.app");
var responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
//#endregion
export { REROUTABLE_STATUS_CODES as a, fetchStateSymbol as c, responseSentSymbol as d, REDIRECT_STATUS_CODES as i, originPathnameSymbol as l, ASTRO_GENERATOR as n, appSymbol as o, DEFAULT_404_COMPONENT as r, clientAddressSymbol as s, ASTRO_ERROR_HEADER as t, pipelineSymbol as u };
