import {cc_values_different_generate} from "./../../../values/different/generate.mjs";
import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_array_smallest_find() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function array_smallest_find()...",
    example_get: async () => {
      
      let x = await cc_random_number_1_10();
      let list = [];
      await cc_values_different_generate(list, 3, cc_random_number_1_10);
      return {
        input: `function array_smallest_find(array) {
          let min = array_first(array);
          array.forEach(item => {
            min = smaller(min, item);
          });
          return min;
        }
        let array = [${list.join(', ')}];
        console.log(array_smallest_find());
        `
      };
    }
  };

  `TODO
  
  // Calling function on object (.forEach)
  // Lesson on .forEach
  // Lesson on arrays
  // lesson on functions
  // Lesson on calling a function and passing that into console.log
  `
}
