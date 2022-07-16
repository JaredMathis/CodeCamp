import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_function_basic() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function log (no call)",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      return {
        input: `function log() {
          console.log(${x});
        }`,
        answers_wrong: [`${x}`]
      };
    }
  };
}
