import {cc_ui_lessons} from "./ui/lessons.mjs";
import {ui_html_element_is} from "./../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_main(parent) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  await cc_ui_lessons(parent);
}
await cc_main(document.body);
