import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_main() {
  await m_js_arguments_assert()(arguments);
  document.body.innerHTML = 'hi'
}
