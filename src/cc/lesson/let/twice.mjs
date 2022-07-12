import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {cc_value_different_generate} from "./../../value/different/generate.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_twice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x = ..., y = ...;",
    example_get: async () => {
      let {x, y} = await cc_value_different_generate(cc_random_number_1_10);
      return {
        input: `let x = ${x}, y = ${y};
        console.log(x);
        console.log(y);`
      };
    }
  };
}
