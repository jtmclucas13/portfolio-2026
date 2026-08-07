import { g as ActionCalledFromServerError, pt as AstroError } from "./path_TPyXO9Vx.mjs";
import { c as createActionsProxy, l as createGetActionPath, n as defineAction } from "./server_kIfR8dzE.mjs";
import { u as pipelineSymbol } from "./constants_DCZzRVRk.mjs";
import { t as mod } from "./zod_qNk429ll.mjs";
createGetActionPath({
	baseUrl: "/",
	shouldAppendTrailingSlash: true
});
createActionsProxy({ handleAction: async (param, path, context) => {
	const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
	if (!pipeline) throw new AstroError(ActionCalledFromServerError);
	const action = await pipeline.getAction(path);
	if (!action) throw new Error(`Action not found: ${path}`);
	return action.bind(context)(param);
} });
//#endregion
//#region src/actions/index.ts
var server = { sendEmail: defineAction({
	accept: "form",
	input: mod.object({
		email: mod.string("Email is required.").max(1e3, { error: "Email must be shorter than 1000 characters." }),
		message: mod.string("Message is required.").max(2e4, { error: "Message must be shorter than 20000 characters." }),
		name: mod.string("Name is required.").max(1e3, { error: "Name must be shorter than 1000 characters." }),
		subject: mod.string("Subject is required.").max(1e3, { error: "Subject must be shorter than 1000 characters." })
	}),
	handler: async (input) => input
}) };
//#endregion
export { server };
