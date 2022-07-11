import {ui_element_text} from "./../../../node_modules/mykro/src/ui/element/text.mjs";
import {ui_html_element_is} from "./../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_ui_lesson(parent, lesson) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is)(arguments);
  let span = await ui_element_text(container, "h1", "Lessons");
}
