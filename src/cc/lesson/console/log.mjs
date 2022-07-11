import {random_list_slice} from "./../../../../node_modules/mykro/src/random/list/slice.mjs";
import {m_js_string_join} from "./../../../../node_modules/mykro/src/m/js/string/join.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {list_map} from "./../../../../node_modules/mykro/src/list/map.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log() {
  await m_js_arguments_assert()(arguments);
  let verse = `For God so loved the world that he gave his only Son so that everyone who believes in him may not perish but may have eternal life`;
  let tokens = await m_js_string_split(verse, " ");
  return {
    name: "console.log(...);",
    example_get: async () => {
      let slice_size = 3;
      let shortened = await random_list_slice(tokens, slice_size);
      let joined = await m_js_string_join(shortened, " ");
      return {
        input: `console.log('${joined}');`,
        output: joined
      };
    },
    examples: await list_map(["Hello", "ABC", "Jesus is Lord"], item => {
      return {
        "input": `console.log('${item}');`,
        "output": `${item}`
      };
    })
  };
}
