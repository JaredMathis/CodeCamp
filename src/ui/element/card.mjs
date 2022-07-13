import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function ui_element_card(parent) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  let container = await ui_element(parent, "div");
  await ui_element_style_background_color_border(container, "1,1,1", 0.1, 0.03);
  return container;
}
