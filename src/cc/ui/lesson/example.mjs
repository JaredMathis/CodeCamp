import {ui_element_html_inner_set} from "./../../../../node_modules/mykro/src/ui/element/html/inner/set.mjs";
import {noop} from "./../../../../node_modules/mykro/src/noop.mjs";
import {random_list_shuffle} from "./../../../../node_modules/mykro/src/random/list/shuffle.mjs";
import {m_js_equals} from "./../../../../node_modules/mykro/src/m/js/equals.mjs";
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
import {cc_values_different_generate} from "./../../values/different/generate.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
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
  await ui_element_lines_monospace(input, input_lines, line => line.style.color = "white", "TODO");
  await ui_element_style_background_color_border(input, "0,0,0", 1, 1);
  input.style.overflowWrap = "break-word";
  input.style.color = "white";
  await ui_element_text(container, "div", "Output");
  let answer_right = await m_js_property_get(example, "output");
  if (is_quiz) {
    let answers = [answer_right];
    if (await m_js_property_has(example, "answers_wrong")) {
      await list_add_all(answers, example.answers_wrong);
    }
    let answers_count = 4;
    await cc_values_different_generate(answers, answers_count, answer_get);
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
      await ui_element_lines_monospace(answer_button, await m_js_string_split(answer, "\n"), noop, "No output");
    });
  } else {
    let next_text = `Another example, please!`;
    let output = await ui_element_text(container, "div", "");
    let green = "0,255,0";
    await ui_element_lines_monospace(output, await m_js_string_split(answer_right, "\n"), noop, "No output");
    await ui_element_style_background_color_border(output, green, 0.5, 0.2);
    await ui_element_button_primary(container, next_text, on_next);
    await ui_element_button_primary(container, "Enough examples! Quiz me!", on_quiz_me);
  }
  return {
    container
  };
  async function answer_get() {
    let wrong = await example_get();
    cc_example_output_generate(wrong);
    let wrong_answer = await m_js_property_get(wrong, "output");
    return wrong_answer;
  }
}
async function ui_element_lines_monospace(container, lines, for_each_line, no_lines_message) {
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
function cc_example_output_generate(example) {
  const code = `
  let console_log_old = console.log;
  console.log = console_log_new;
  function console_log_new(value) {
    console_log_new.outputs.push(value);
  }
  console_log_new.outputs = [];
  ${example.input}
  console.log = console_log_old;
  console_log_new.outputs.join('\\n');
  `;
  console.log(code);
  let evaled;
  try {
    evaled = eval(code);
  } catch (e) {
    console.log(e);
  }
  example.output = evaled;
}
