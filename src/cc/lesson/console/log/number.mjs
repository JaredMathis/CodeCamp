import {random_number} from "./../../../../../node_modules/mykro/src/random/number.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_number() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(x);",
    example_get: async () => {
      let joined = random_number();
      return {
        input: `console.log(${joined});`
      };
    }
  };
}
