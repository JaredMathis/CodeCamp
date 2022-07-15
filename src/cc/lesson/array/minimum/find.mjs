import {cc_values_different_generate} from "./../../../values/different/generate.mjs";
import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_array_minimum_find() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x);",
    example_get: async () => {
      let x = await cc_values_different_generate(cc_random_number_1_10);
      return {
        input: `let list = [];
        `
      };
    }
  };
}
