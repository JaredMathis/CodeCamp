import {list_take} from "./../../../../node_modules/mykro/src/list/take.mjs";
import {m_js_string_join} from "./../../../../node_modules/mykro/src/m/js/string/join.mjs";
import {list_join} from "./../../../../node_modules/mykro/src/list/join.mjs";
import {list_starting_at} from "./../../../../node_modules/mykro/src/list/starting/at.mjs";
import {random_number} from "./../../../../node_modules/mykro/src/random/number.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
import {m_js_string_split} from "./../../../../node_modules/mykro/src/m/js/string/split.mjs";
import {list_map} from "./../../../../node_modules/mykro/src/list/map.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {list_max_index} from "./../../../../node_modules/mykro/src/list/max/index.mjs";
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
async function random_list_slice(tokens, max_words) {
  let max_index = await list_max_index(tokens);
  let max_selectable_index = max_index - (max_words - 1);
  let start_index = await random_number(0, max_selectable_index);
  let size = await random_number(1, max_words);
  let starting_at = await list_starting_at(tokens, start_index);
  let shortened = await list_take(starting_at, size);
  return shortened;
}

