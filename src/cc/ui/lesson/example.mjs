import {ui_element_button_secondary} from "./../../../../node_modules/mykro/src/ui/element/button/secondary.mjs";
import {ui_element_card} from "./../../../ui/element/card.mjs";
import {noop} from "./../../../../node_modules/mykro/src/noop.mjs";
import {random_list_shuffle} from "./../../../../node_modules/mykro/src/random/list/shuffle.mjs";
import {m_js_equals} from "./../../../../node_modules/mykro/src/m/js/equals.mjs";
import {m_js_boolean_is} from "./../../../../node_modules/mykro/src/m/js/boolean/is.mjs";
import {ui_element_button_primary} from "./../../../../node_modules/mykro/src/ui/element/button/primary.mjs";
import {m_js_function_is} from "./../../../../node_modules/mykro/src/m/js/function/is.mjs";
import {ui_element_style_background_color_border} from "./../../../../node_modules/mykro/src/ui/element/style/background/color/border.mjs";
import {ui_element_text} from "./../../../../node_modules/mykro/src/ui/element/text.mjs";
import {m_js_number_is} from "./../../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_property_get} from "./../../../../node_modules/mykro/src/m/js/property/get.mjs";
import {ui_element} from "./../../../../node_modules/mykro/src/ui/element.mjs";
import {ui_html_element_is} from "./../../../../node_modules/mykro/src/ui/html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../../../../node_modules/mykro/src/m/js/for/each.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {m_js_property_has} from "./../../../../node_modules/mykro/src/m/js/property/has.mjs";
import {list_add_all} from "./../../../../node_modules/mykro/src/list/add/all.mjs";
import {cc_values_different_generate} from "./../../values/different/generate.mjs";
import {cc_ui_element_code} from "./../element/code.mjs";
import {ui_element_lines_monospace} from "./../../../ui/element/lines/monospace.mjs";
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
  const input_text = await m_js_property_get(example, "input");
  await cc_ui_element_code(container, "Input", input_text);
  if (await m_js_property_has(example, "input_review")) {
    let show = await ui_element_button_secondary(container, "Show full input", input_review_show);
    let input_review_container = await ui_element(container, "div");
    await ui_element_button_secondary(input_review_container, "Hide full input", input_review_hide);
    await cc_ui_element_code(input_review_container, "Input", example.input_review);
    await ui_element_button_secondary(input_review_container, "Hide full input", input_review_hide);
    function input_review_show() {
      input_review_container.style.display = 'block';
      show.style.display = 'none';
    }
    function input_review_hide() {
      show.style.display = 'block';
      input_review_container.style.display = 'none';
    }
    input_review_hide();
  }
  let container_output = await ui_element_card(container);
  await ui_element_text(container_output, "div", "Output");
  let answer_right = await m_js_property_get(example, "output");
  console.log("ar", answer_right);
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
      let answer_button = await ui_element_button_primary(container_output, "", async () => {
        if (m_js_equals(answer, answer_right)) {
          await on_next();
        } else {
          await ui_element_style_background_color_border(answer_button, red, 0.5, 0.2);
        }
      });
      await ui_element_lines_monospace(answer_button, await m_js_string_split(answer, "\n"), noop, "No output");
    });
  } else {
    let output = await ui_element_text(container_output, "div", "");
    let green = "0,255,0";
    await ui_element_lines_monospace(output, await m_js_string_split(answer_right, "\n"), noop, "No output");
    await ui_element_style_background_color_border(output, green, 0.5, 0.2);
    await ui_element_button_primary(container, `Another example, please!`, on_next);
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
function cc_example_output_generate(example) {
  const code = `
  let console_log_old = console.log;
  console.log = console_log_new;
  function console_log_new(value) {
    console_log_new.outputs.push(value);
  }
  console_log_new.outputs = [];
  ${example.input}
  ${example.input_review || ""}
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
