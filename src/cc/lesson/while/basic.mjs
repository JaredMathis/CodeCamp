import {random_list_shuffle} from "./../../../../node_modules/mykro/src/random/list/shuffle.mjs";
import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {random_number} from "./../../../../node_modules/mykro/src/random/number.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_while_basic() {
  await m_js_arguments_assert()(arguments);
  let x = await cc_random_number_1_10();
  let y = x + await random_number(0, 2);
  return {
    input: `let x = ${x};
    while (x <= ${y}) {
      console.log(x);
    }`,
    answers_wrong: [""]
  };
}
