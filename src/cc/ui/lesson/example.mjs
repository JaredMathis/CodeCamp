import {list_add} from "./../../../../node_modules/mykro/src/list/add.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
import {m_js_equals} from "./../../../../node_modules/mykro/src/m/js/equals.mjs";
import {list_range} from "./../../../../node_modules/mykro/src/list/range.mjs";
import {m_js_boolean_is} from "./../../../../node_modules/mykro/src/m/js/boolean/is.mjs";
import {ui_element_button_primary} from "./../../../../node_modules/mykro/src/ui/element/button/primary.mjs";
import {m_js_function_is} from "./../../../../node_modules/mykro/src/m/js/function/is.mjs";
import {ui_element_style_background_color_border} from "./../../../../node_modules/mykro/src/ui/element/style/background/color/border.mjs";
import {ui_element_text} from "./../../../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_number_is} from "./../../../../node_modules/mykro/src/m/js/number/is.mjs";
import {ui_element_style_monospace} from "./../../../../node_modules/mykro/src/ui/element/style/monospace.mjs";
import {m_js_property_get} from "./../../../../node_modules/mykro/src/m/js/property/get.mjs";
import {ui_element} from "./../../../../node_modules/mykro/src/ui/element.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {ui_element_html_inner_set} from "./../../../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
import {m_js_for_each} from "./../../../../node_modules/mykro/src/m/js/for/each.mjs";
export async function cc_ui_lesson_example(parent, example_get, example_number, on_next, on_quiz_me, is_quiz) {
  await m_js_arguments_assert(ui_html_element_is, m_js_function_is, m_js_number_is, m_js_function_is, m_js_function_is, m_js_boolean_is)(arguments);
  let container = await ui_element(parent, "div");
  let example = await example_get();
  container.style.margin = 0;
  await ui_element_text(container, "h1", "Example " + example_number);
  await ui_element_text(container, "div", "Input");
  let input = await ui_element(container, "div");
  await ui_element_style_monospace(input);
  await ui_element_html_inner_set(input, await m_js_property_get(example, "input"));
  await ui_element_style_background_color_border(input, "0,0,0", 1, 1);
  input.style.overflowWrap = "break-word";
  input.style.color = "white";
  await ui_element_text(container, "div", "Output");
  if (is_quiz) {
    let wrong_answers = [];
    let wrong_answers_count = 3;
    await m_js_for_each(await list_range(100), async () => {
      if ((m_js_equals(await list_size(wrong_answers)), wrong_answers_count)) {
        return true;
      }
      let wrong_answer = {};
      await list_add(wrong_answers, wrong_answer);
    });
  } else {
    let next_text = `Another `;
    if (is_quiz) {
      next_text += `Question`;
    } else {
      next_text += `Example`;
    }
    let output = await ui_element(container, "div");
    await ui_element_style_monospace(output);
    await ui_element_html_inner_set(output, await m_js_property_get(example, "output"));
    await ui_element_style_background_color_border(output, "0,255,0", 0.5, 0.2);
    await ui_element_button_primary(container, next_text, on_next);
    await ui_element_button_primary(container, "Enough examples! Quiz me!", on_quiz_me);
  }
  return {
    container
  };
}
