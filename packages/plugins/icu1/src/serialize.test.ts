import { describe, expect, it } from "vitest";
import type { Bundle, Message, Variant } from "@inlang/sdk";
import { parseMessage } from "./parse.js";
import { serializeMessage } from "./serialize.js";

const baseArgs = {
	bundleId: "bundle",
	locale: "en",
};

function buildMessage(messageSource: string): {
	bundle: Bundle;
	message: Message;
	variants: Variant[];
} {
	const parsed = parseMessage({
		...baseArgs,
		messageSource,
	});
	const messageId = "message-en";
	return {
		bundle: {
			id: "bundle",
			declarations: parsed.declarations,
		},
		message: {
			id: messageId,
			bundleId: "bundle",
			locale: "en",
			selectors: parsed.selectors,
		},
		variants: parsed.variants.map((variant, index) => ({
			id: `variant-${index}`,
			messageId,
			matches: variant.matches ?? [],
			pattern: variant.pattern ?? [],
		})),
	};
}

describe("serializeMessage", () => {
	it("serializes simple patterns", () => {
		const { bundle, message, variants } = buildMessage("Hello {name}!");
		expect(serializeMessage({ bundle, message, variants })).toBe(
			"Hello {name}!"
		);
	});

	it("serializes selects", () => {
		const { bundle, message, variants } = buildMessage(
			"{gender, select, male {He} female {She} other {They}}"
		);
		expect(serializeMessage({ bundle, message, variants })).toBe(
			"{gender, select, male {He} female {She} other {They}}"
		);
	});

	it("serializes plurals with offset and pounds", () => {
		const { bundle, message, variants } = buildMessage(
			"{count, plural, offset:1 =0 {no items} one {# item} other {# items}}"
		);
		expect(serializeMessage({ bundle, message, variants })).toBe(
			"{count, plural, offset:1 =0 {no items} one {# item} other {# items}}"
		);
	});

	it("serializes selectordinal", () => {
		const { bundle, message, variants } = buildMessage(
			"{place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}"
		);
		expect(serializeMessage({ bundle, message, variants })).toBe(
			"{place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}"
		);
	});

	it("serializes functions with style", () => {
		const { bundle, message, variants } = buildMessage(
			"The time is {when, time, short}."
		);
		expect(serializeMessage({ bundle, message, variants })).toBe(
			"The time is {when, time, short}."
		);
	});
});
