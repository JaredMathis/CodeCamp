import {ui_element} from "./../../../../node_modules/mykro/src/ui/element.mjs";
import {m_js_defined_is} from "./../../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {ui_element_html_inner_set} from "./../../../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
export async function cc_ui_lesson_example(parent, lesson) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is)(arguments);
  let container = await ui_element(parent, "div");
  await ui_element_html_inner_set(container, "test");
  return {
    container
  };
}
