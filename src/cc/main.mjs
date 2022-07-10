import {ui_element_html_inner_set} from "./../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
import {ui_element} from "./../../node_modules/mykro/src/ui/element.mjs";
import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {cc_lessons_get} from "./lessons/get.mjs";
export async function cc_main() {
  await m_js_arguments_assert()(arguments);
  let lessons = await cc_lessons_get();
  let span = await ui_element(document.body, "span");
  await ui_element_html_inner_set(span, "hi");
}
await cc_main();
