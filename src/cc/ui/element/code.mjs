import {ui_element_card} from "./../../../ui/element/card.mjs";
import {ui_element_style_background_color_border} from "./../../../../node_modules/mykro/src/ui/element/style/background/color/border.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {ui_element_text} from "./../../../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_string_is} from "./../../../../node_modules/mykro/src/m/js/string/is.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_ui_element_code(parent, title_text, code_text) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_string_is)(arguments);
  let container_input = await ui_element_card(parent);
  await ui_element_text(container_input, "div", title_text);
  let code_lines = await m_js_string_split(code_text, "\n");
  let result = await ui_element_text(container_input, "div", "");
  await ui_element_lines_monospace(result, code_lines, line => line.style.color = "white", "TODO");
  await ui_element_style_background_color_border(result, "0,0,0", 1, 1);
  result.style.overflowWrap = "break-word";
  result.style.color = "white";
  return result;
}
