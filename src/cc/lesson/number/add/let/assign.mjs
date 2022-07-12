import {cc_random_number_1_10} from "./../../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_number_add_let_assign() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x,y...; x = x + y; console...",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await cc_random_number_1_10();
      return {
        input: `let x = ${x}, y = ${y};
        x = x + y;
        console.log(x);`
      };
    }
  };
}
