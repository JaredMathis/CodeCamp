import {list_smallest} from "./../../../../node_modules/mykro/src/list/smallest.mjs";
import {list_without} from "./../../../../node_modules/mykro/src/list/without.mjs";
import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {cc_values_different_generate} from "./../../values/different/generate.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_array_reduce() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function array_reduce",
    example_get: async () => {
      let list = [];
      await cc_values_different_generate(list, 3, cc_random_number_1_10);
      return {
        input: `function array_reduce(array, reducer) {
          let result = array_first(array);
          array_for_each_skip_first(array, item => {
            result = reducer(result, item);
          });
          return result;
        }
        let array = [${list.join(", ")}];
        console.log(array_smallest(array));`,
        input_review: `function array_first(array) {
          return array[0];
        }
        function array_for_each_skip_first(array, for_each_item) {
          for (let i = 1; i < array.length; i++) {
            let item = array[i];
            for_each_item(item);
          }
        }`,
        answers_wrong: await list_without(list, [await list_smallest(list)])
      };
    }
  };
}
`
TODO:
property on object
object with properties
array_first lesson
array lesson
array index lesson
array for lesson (looping starting on 1)
passing function into function as argument
array_for_each_skip_first lesson
`;
