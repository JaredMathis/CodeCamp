import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_twice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x); // x2",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await cc_random_number_1_10();
      return {
        input: `console.log(${x});
console.log(${y});`,
        answers_wrong: [y + "\n" + x, x + " " + y]
      };
    }
  };
}
