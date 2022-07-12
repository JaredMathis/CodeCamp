import {m_js_arguments_assert} from "./../../../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_less_than_equals() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x);",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      return {
        input: `console.log(${x});`
      };
    }
  };
}
