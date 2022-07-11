import {ui_element_style_background_color_border} from "./../../../../node_modules/mykro/src/ui/element/style/background/color/border.mjs";
import {ui_element_text} from "./../../../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_number_is} from "./../../../../node_modules/mykro/src/m/js/number/is.mjs";
import {ui_element_style_monospace} from "./../../../../node_modules/mykro/src/ui/element/style/monospace.mjs";
import {m_js_property_get} from "./../../../../node_modules/mykro/src/m/js/property/get.mjs";
import {ui_element} from "./../../../../node_modules/mykro/src/ui/element.mjs";
import {m_js_defined_is} from "./../../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {ui_element_html_inner_set} from "./../../../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
export async function cc_ui_lesson_example(parent, example, example_number) {
  await m_js_arguments_assert(ui_html_element_is, m_js_defined_is, m_js_number_is)(arguments);
  let container = await ui_element(parent, "div");
  await ui_element_text(container, "h1", "Example " + example_number);
  let input = await ui_element(container, "div");
  await ui_element_style_monospace(input);
  await ui_element_html_inner_set(input, await m_js_property_get(example, "input"));
  let output = await ui_element(container, "div");
  await ui_element_style_monospace(output);
  await ui_element_html_inner_set(output, await m_js_property_get(example, "output"));
  await ui_element_style_background_color_border(output, "0,255,0", 0.5, 0.2);
  return {
    container
  };
}
