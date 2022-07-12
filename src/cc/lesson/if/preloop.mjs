import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_if_preloop() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x = ...; while (...)",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = x + 1;
      return {
        input: `let x = ${x};
        if (x <= ${y}) {
          console.log(x);
          x++;
        }
        if (x <= ${y}) {
          console.log(x);
          x++;
        }`,
        answers_wrong: [""]
      };
    }
  };
}
