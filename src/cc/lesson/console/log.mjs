import {random_list_slice} from "./../../../../node_modules/mykro/src/random/list/slice.mjs";
import {m_js_string_join} from "./../../../../node_modules/mykro/src/m/js/string/join.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  return {
    name: "console.log(...);",
    example_get: async () => {
      let shortened = await random_list_slice(tokens, 3);
      let joined = await m_js_string_join(shortened, " ");
      return {
        input: `console.log('${joined}');`,
      };
    }
  };
}
async function cc_tokens_get() {
  let verse = `For God so loved the world that he gave his only Son so that everyone who believes in him may not perish but may have eternal life`;
  let tokens = await m_js_string_split(verse, " ");
  return tokens;
}

