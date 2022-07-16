
import { m_js_arguments_assert } from "./m_js_arguments_assert.mjs";

export async function noop() {
    await m_js_arguments_assert()(arguments);
    // TODO
}