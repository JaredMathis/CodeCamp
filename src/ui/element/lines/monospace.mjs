import {list_max_index} from "./../../../../node_modules/mykro/src/list/max/index.mjs";
import {ui_element_style_monospace} from "./../../../../node_modules/mykro/src/ui/element/style/monospace.mjs";
import {ui_element_text} from "./../../../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_for_each} from "./../../../../node_modules/mykro/src/m/js/for/each.mjs";
import {ui_element_html_inner_set} from "./../../../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
import {m_js_equals} from "./../../../../node_modules/mykro/src/m/js/equals.mjs";
import {list_is} from "./../../../../node_modules/mykro/src/list/is.mjs";
import {m_js_function_is} from "./../../../../node_modules/mykro/src/m/js/function/is.mjs";
import {m_js_string_is} from "./../../../../node_modules/mykro/src/m/js/string/is.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function ui_element_lines_monospace(container, lines, for_each_line, no_lines_message) {
  await m_js_arguments_assert(ui_html_element_is, list_is, m_js_function_is, m_js_string_is)(arguments);
  console.log({
    lines
  });
  if (m_js_equals(await list_size(lines), 1) && lines[0] === "") {
    await ui_element_html_inner_set(container, no_lines_message);
    container.style.fontStyle = "italic";
  }
  await m_js_for_each(lines, async (line_text, index) => {
    let line = await ui_element_text(container, "div", line_text);
    await ui_element_style_monospace(line);
    if (index !== 0) {
      line.style.borderTop = `0.15vh solid rgba(200,200,200,0.5)`;
      line.style.paddingTop = "1vh";
    }
    if (index !== await list_max_index(lines)) {
      line.style.paddingBottom = "1vh";
    }
    for_each_line(line);
  });
}
