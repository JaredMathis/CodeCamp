import {ui_element} from "./../../node_modules/mykro/src/ui/element.mjs";
import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_main() {
  await m_js_arguments_assert()(arguments);
  await ui_element(document.body, "span");
}
