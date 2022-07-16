import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_function_expression() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function log_value_bigger2",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await cc_random_number_1_10();
      return {
        input: `function log_value_bigger2() {
          let is_bigger = ${x} > ${x};
          console.log(is_bigger);
        }
        log_value_bigger2();`,
        answers_wrong: [`${x}`, `${y}`]
      };
    }
  };
}
