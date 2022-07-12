import {m_js_number_at_least} from "./../../../../node_modules/mykro/src/m/js/number/at/least.mjs";
import {m_js_while_max} from "./../../../../node_modules/mykro/src/m/js/while/max.mjs";
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
import {m_js_property_has} from "./../../../../node_modules/mykro/src/m/js/property/has.mjs";
import {list_add_all} from "./../../../../node_modules/mykro/src/list/add/all.mjs";
import {ui_color_blue} from "./../../../../node_modules/mykro/src/ui/color/blue.mjs";
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
  await ui_element_lines_monospace(input, input_lines, `rgba(255,255,255,0.5)`);
  await ui_element_style_background_color_border(input, "0,0,0", 1, 1);
  input.style.overflowWrap = "break-word";
  input.style.color = "white";
  await ui_element_text(container, "div", "Output");
  let answer_right = await m_js_property_get(example, "output");
  if (is_quiz) {
    let wrong_answers = [];
    if (await m_js_property_has(example, "answers_wrong")) {
      await list_add_all(wrong_answers, example.answers_wrong);
    }
    let wrong_answers_count = 3;
    await m_js_while_max(100, async () => {
      if (await m_js_number_at_least(await list_size(wrong_answers), wrong_answers_count)) {
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
      let red = "255,0,20";
      let answer_button = await ui_element_button_primary(container, "", async () => {
        if (m_js_equals(answer, answer_right)) {
          await on_next();
        } else {
          await ui_element_style_background_color_border(answer_button, red, 0.5, 0.2);
        }
      });
      await ui_element_lines_monospace(answer_button, await m_js_string_split(answer, "\n"), `rgba(${await ui_color_blue()},0.5)`);
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
async function ui_element_lines_monospace(container, lines, color) {
  await m_js_for_each(lines, async (line_text, index) => {
    let line = await ui_element_text(container, "div", line_text);
    await ui_element_style_monospace(line);
    if (index !== 0) {
      line.style.borderTop = `0.1vh solid ${color}`;
      line.style.paddingTop = "1vh";
    }
    if (index !== await list_max_index(lines)) {
      line.style.paddingBottom = "1vh";
    }
  });
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
