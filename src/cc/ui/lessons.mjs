import {ui_element_button_primary} from "./../../../node_modules/mykro/src/ui/element/button/primary.mjs";
import {ui_element_style_button_primary} from "./../../../node_modules/mykro/src/ui/element/style/button/primary.mjs";
import {cc_ui_lesson} from "./lesson.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_property_get} from "./../../../node_modules/mykro/src/m/js/property/get.mjs";
import {m_js_for_each} from "./../../../node_modules/mykro/src/m/js/for/each.mjs";
import {ui_element} from "./../../../node_modules/mykro/src/ui/element.mjs";
import {ui_element_text} from "./../../../node_modules/mykro/src/ui/element/text.mjs";
import {cc_lessons_get} from "./../lessons/get.mjs";
import {ui_html_element_is} from "./../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_ui_lessons(parent, view) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is)(arguments);
  let container = await ui_element(parent, "div");
  let lessons = await cc_lessons_get();
  let span = await ui_element_text(container, "h1", "Lessons");
  let list = await ui_element(container, "ul");
  await m_js_for_each(lessons, async lesson => {
    let li = await ui_element_button_primary(list, "li", await m_js_property_get(lesson, "name"), async () => {
      await view.view_set(async () => await cc_ui_lesson(parent, lesson, async function go_back() {
        await view.view_set(async () => await cc_ui_lessons(parent, view));
      }));
    });
  });
  return {
    container
  };
}
