import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_thrice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x); // x3",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await cc_random_number_1_10();
      let z = await cc_random_number_1_10();
      return {
        input: `console.log(${x});
        console.log(${y});
        console.log(${z});`,
        answers_wrong: [y + "\n" + x + "\n" + z, x + " " + y + " " + z]
      };
    }
  };
}
