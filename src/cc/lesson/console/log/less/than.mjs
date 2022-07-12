import {random_number} from "./../../../../../../node_modules/mykro/src/random/number.mjs";
import {cc_random_number_1_10} from "./../../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_less_than() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x < y);",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await random_number(x - 1, x + 1);
      return {
        input: `console.log(${x} < ${y});`
      };
    }
  };
}
