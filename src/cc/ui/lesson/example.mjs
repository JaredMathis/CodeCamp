import {random_list_shuffle} from "./../../../../node_modules/mykro/src/random/list/shuffle.mjs";
import {list_join} from "./../../../../node_modules/mykro/src/list/join.mjs";
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
import {m_js_for_each} from "./../../../../node_modules/mykro/src/m/js/for/each.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {list_max_index} from "./../../../../node_modules/mykro/src/list/max/index.mjs";
export async function cc_ui_lesson_example(parent, example_get, example_number, on_next, on_quiz_me, is_quiz) {
  await m_js_arguments_assert(ui_html_element_is, m_js_function_is, m_js_number_is, m_js_function_is, m_js_function_is, m_js_boolean_is)(arguments);
  let container = await ui_element(parent, "div");
  container.style.margin = 0;
  let example = await example_get();
  cc_example_output_generate(example);
  container.style.margin = 0;
  let prefix = "Example";
  if (is_quiz) {
    prefix = "Question";
  }
  await ui_element_text(container, "h1", prefix + " " + example_number);
  await ui_element_text(container, "div", "Input");
  const input_text = await m_js_property_get(example, "input");
  let input_lines = await m_js_string_split(input_text, "\n");
  let input = await ui_element_text(container, "div", "");
  await m_js_for_each(input_lines, async (line_text, index) => {
    let line = await ui_element_text(input, "div", line_text);
    await ui_element_style_monospace(line);
    if (index !== 0) {
      line.style.borderTop = `0.1vh solid rgba(255,255,255, 0.5)`;
      line.style.paddingTop = "1vh";
    }
    if (index !== await list_max_index(input_lines)) {
      line.style.paddingBottom = "1vh";
    }
  });
  await ui_element_style_background_color_border(input, "0,0,0", 1, 1);
  input.style.overflowWrap = "break-word";
  input.style.color = "white";
  await ui_element_text(container, "div", "Output");
  let answer_right = await m_js_property_get(example, "output");
  if (is_quiz) {
    let wrong_answers = [];
    let wrong_answers_count = 3;
    await m_js_for_each(await list_range(100), async () => {
      if (m_js_equals(await list_size(wrong_answers), wrong_answers_count)) {
        return true;
      }
      let wrong = await example_get();
      cc_example_output_generate(wrong);
      let wrong_answer = await m_js_property_get(wrong, "output");
      if (m_js_equals(wrong_answer, answer_right)) {
        return false;
      }
      await list_add(wrong_answers, wrong_answer);
    });
    let answers = await list_join([[answer_right], wrong_answers]);
    await random_list_shuffle(answers);
    await m_js_for_each(answers, async answer => {
      let answer_button = await ui_element_button_primary(container, answer, async () => {
        if (m_js_equals(answer, answer_right)) {
          await on_next();
        } else {
          await ui_element_style_background_color_border(answer_button, "255,0,20", 0.5, 0.2);
        }
      });
      await ui_element_style_monospace(answer_button);
    });
  } else {
    let next_text = `Another Example`;
    let output = await ui_element_text(container, "div", answer_right);
    await ui_element_style_monospace(output);
    await ui_element_style_background_color_border(output, "0,255,0", 0.5, 0.2);
    await ui_element_button_primary(container, next_text, on_next);
    await ui_element_button_primary(container, "Enough examples! Quiz me!", on_quiz_me);
  }
  return {
    container
  };
}
function cc_example_output_generate(example) {
  const code = `
  console.log = function (value) {
    console.log.outputs.push(value);
  }
  console.log.outputs = [];
  ${example.input}
  console.log.outputs.join('\\n');
  `;
  console.log(code);
  example.output = eval(code);
}
