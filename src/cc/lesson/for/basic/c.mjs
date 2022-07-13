import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_for_basic_c() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x = ...; for (...)",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = x + 3;
      return {
        input: `for (let x = ${x}; x < ${y}; x++) {
          console.log(x);
        }`,
        answers_wrong: ["", `${x}\n${x + 1}`, `${x}\n${x + 1}\n${x + 2}\n${y}`]
      };
    }
  };
}
