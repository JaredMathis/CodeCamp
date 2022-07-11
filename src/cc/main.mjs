import {ui_color_blue} from "./../../node_modules/mykro/src/ui/color/blue.mjs";
import {ui_element_style_background_color} from "./../../node_modules/mykro/src/ui/element/style/background/color.mjs";
import {ui_element_style_border} from "./../../node_modules/mykro/src/ui/element/style/border.mjs";
import {ui_element} from "./../../node_modules/mykro/src/ui/element.mjs";
import {m_js_property_get} from "./../../node_modules/mykro/src/m/js/property/get.mjs";
import {ui_html_element_is} from "./../../node_modules/mykro/src/ui/html/element/is.mjs";
import {json_to} from "./../../node_modules/mykro/src/json/to.mjs";
import {m_js_for_each} from "./../../node_modules/mykro/src/m/js/for/each.mjs";
import {ui_element_text} from "./../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {cc_lessons_get} from "./lessons/get.mjs";
export async function cc_main(parent) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  let lessons = await cc_lessons_get();
  let span = await ui_element_text(parent, "h1", "Lessons");
  let list = await ui_element(parent, "ul");
  await m_js_for_each(lessons, async lesson => {
    let li = await ui_element_text(list, "li", await m_js_property_get(lesson, "name"));
    li.style.listStyleType = "none";
    await ui_element_style_border(li, `rgba(${await ui_color_blue()}, 1)`);
    await ui_element_style_background_color(li, await ui_color_blue(), 0.3);
  });
}
await cc_main(document.body);
