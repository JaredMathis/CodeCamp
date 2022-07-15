import {list_smallest} from "./../../../../node_modules/mykro/src/list/smallest.mjs";
import {list_without} from "./../../../../node_modules/mykro/src/list/without.mjs";
import {cc_values_different_generate} from "./../../values/different/generate.mjs";
import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_array_smallest() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function array_smallest()...",
    example_get: async () => {
      let list = [];
      await cc_values_different_generate(list, 3, cc_random_number_1_10);
      return {
        input: `function array_smallest(array) {
          return array.reduce(smaller);
        }
        let array = [${list.join(", ")}];
        console.log(array_smallest(array));`,
        input_review: `function smaller(a, b) {
          if (a < b) return a;
          return b;
        }`,
        answers_wrong: await list_without(list, [await list_smallest(list)])
      };
    }
  };
  `TODO
  // Reduce lesson
  // Smaller function
  // Same line 
  // Calling function on object (.forEach)
  // Lesson on .forEach
  // Lesson on arrays
  // lesson on functions
  // Lesson on calling a function and passing that into console.log
  `;
}
