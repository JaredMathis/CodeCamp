import {ui_element_button_secondary} from "./../../../node_modules/mykro/src/ui/element/button/secondary.mjs";
import {cc_ui_lesson_example} from "./lesson/example.mjs";
import {ui_element} from "./../../../node_modules/mykro/src/ui/element.mjs";
import {ui_element_text} from "./../../../node_modules/mykro/src/ui/element/text.mjs";
import {ui_html_element_is} from "./../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_property_get} from "./../../../node_modules/mykro/src/m/js/property/get.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {ui_view} from "./../../../node_modules/mykro/src/ui/view.mjs";
import {m_js_string_is} from "./../../../node_modules/mykro/src/m/js/string/is.mjs";
export async function cc_ui_lesson(parent, lesson, go_back, previous_lesson, next_lesson, module_name) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is, m_js_function_is, m_js_function_is, m_js_function_is, m_js_string_is)(arguments);
  let container = await ui_element(parent, "div");
  container.style.margin = 0;
  await ui_element_text(container, "h1", `Lesson: (${module_name}) ${await m_js_property_get(lesson, "name")}`);
  let view = await ui_view(container);
  let index = 0;
  let is_quiz = false;
  let next = await ui_element_button_secondary(container, "Next Lesson", next_lesson);
  let previous = await ui_element_button_secondary(container, "Previous Lesson", previous_lesson);
  let back = await ui_element_button_secondary(container, "Back to all Lessons", go_back);
  let footer = await ui_element(container, "div");
  render_lesson();
  return {
    container
  };
  function render_lesson() {
    view.view_set(async parent => {
      return await cc_ui_lesson_example(parent, lesson.example_get, index + 1, function example_next() {
        index++;
        render_lesson();
      }, function quiz_me() {
        is_quiz = true;
        index = 0;
        render_lesson();
      }, is_quiz, footer);
    });
  }
}
