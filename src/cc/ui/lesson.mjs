import {cc_ui_lesson_example} from "./lesson/example.mjs";
import {ui_element_style_button_secondary} from "./../../../node_modules/mykro/src/ui/element/style/button/secondary.mjs";
import {ui_element_style_button_primary} from "./../../../node_modules/mykro/src/ui/element/style/button/primary.mjs";
import {ui_element} from "./../../../node_modules/mykro/src/ui/element.mjs";
import {ui_element_text} from "./../../../node_modules/mykro/src/ui/element/text.mjs";
import {ui_html_element_is} from "./../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_property_get} from "./../../../node_modules/mykro/src/m/js/property/get.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {ui_view} from "./../../../node_modules/mykro/src/ui/view.mjs";
export async function cc_ui_lesson(parent, lesson, go_back) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is, m_js_function_is)(arguments);
  let container = await ui_element(parent, "div");
  await ui_element_text(container, "h1", "Lesson: " + await m_js_property_get(lesson, "name"));
  let view = await ui_view(container);
  let example_index = 0;
  view.view_set(async (parent) => {
    return await cc_ui_lesson_example(parent, lesson.examples[example_index], example_index + 1, function example_next() {
      alert('here')
    });
  });
  let back = await ui_element_text(container, "button", "Back to Lessons");
  await ui_element_style_button_secondary(back);
  back.addEventListener("click", go_back);
  return {
    container
  };
}
