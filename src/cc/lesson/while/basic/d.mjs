import {random_number} from "./../../../../../node_modules/mykro/src/random/number.mjs";
import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_while_basic_d() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x = ...; while (...) // (3)",
    example_get: async () => {
      let x = await cc_random_number_1_10() + 3;
      let y = x - await random_number(1, 3);
      return {
        input: `let x = ${x};
        while (x <= ${y}) {
          x++;
        }
        console.log(x);`,
        answers_wrong: [`${y}`]
      };
    }
  };
}
