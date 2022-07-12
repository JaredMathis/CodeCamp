import {random_list_shuffle} from "./../../../../../node_modules/mykro/src/random/list/shuffle.mjs";
import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {cc_value_different_generate} from "./../../../value/different/generate.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_if_true_false() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "if (true) ... if (false)",
    example_get: async () => {
      let {x, y} = await cc_value_different_generate(cc_random_number_1_10);
      let list = [true, false];
      await random_list_shuffle(list);
      return {
        input: `if (${list[0]}) {
          console.log(${x});
        }
        if (${list[1]}) {
          console.log(${y});
        }`,
        answers_wrong: ["", `${x}\n${y}`]
      };
    }
  };
}
