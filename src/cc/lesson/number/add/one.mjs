import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_number_add_one() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let x = ...; x = x + 1; console...",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      return {
        input: `let x = ${x};
        x = x + 1;
        console.log(x);`
      };
    }
  };
}
