import {ui_element_card} from "./../../ui/element/card.mjs";
import {ui_element_style_background_color_border} from "./../../../node_modules/mykro/src/ui/element/style/background/color/border.mjs";
import {m_js_true_is} from "./../../../node_modules/mykro/src/m/js/true/is.mjs";
import {list_map} from "./../../../node_modules/mykro/src/list/map.mjs";
import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {ui_element_button_primary} from "./../../../node_modules/mykro/src/ui/element/button/primary.mjs";
import {cc_ui_lesson} from "./lesson.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_property_get} from "./../../../node_modules/mykro/src/m/js/property/get.mjs";
import {m_js_for_each} from "./../../../node_modules/mykro/src/m/js/for/each.mjs";
import {ui_element} from "./../../../node_modules/mykro/src/ui/element.mjs";
import {ui_element_text} from "./../../../node_modules/mykro/src/ui/element/text.mjs";
import {cc_lesson_all} from "./../lesson/all.mjs";
import {ui_html_element_is} from "./../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {list_index_of} from "./../../../node_modules/mykro/src/list/index/of.mjs";
import {m_js_assert} from "./../../../node_modules/mykro/src/m/js/assert.mjs";
export async function cc_ui_lessons(parent, view) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is)(arguments);
  let container = await ui_element(parent, "div");
  let modules = await cc_lesson_all();
  let lessons = await list_join(await list_map(modules, module => module["lessons"]));
  let span = await ui_element_text(container, "h1", "Lessons");
  let module_list = await ui_element(container, "div");
  await m_js_for_each(modules, async module => {
    let module_container = await ui_element_card(module_list);
    let module_title = await ui_element_text(module_container, "h2", module.name);
    let lesson_list = await ui_element(module_container, "div");
    await m_js_for_each(module.lessons, async lesson => {
      let index = await list_index_of(lessons, lesson);
      await m_js_assert(m_js_true_is)(index.success);
      index = index.index;
      lesson.select = async () => {
        await view.view_set(async () => await cc_ui_lesson(parent, lesson, async function go_back() {
          await view.view_set(async () => await cc_ui_lessons(parent, view));
        }, async function next_lesson() {
          let next = lessons[index + 1];
          await next.select();
        }, module.name));
      };
      await ui_element_button_primary(lesson_list, await m_js_property_get(lesson, "name"), lesson.select);
    });
  });
  return {
    container
  };
}
