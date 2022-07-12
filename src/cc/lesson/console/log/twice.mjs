import {cc_tokens_3_get} from "./../../../tokens/3/get.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log_twice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log('...'); // x2",
    example_get: async () => {
      let joined = await cc_tokens_3_get();
      let joined2 = await cc_tokens_3_get();
      return {
        input: `console.log('${joined}');
console.log('${joined2}');`
      };
    }
  };
}
