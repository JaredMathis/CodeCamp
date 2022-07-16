import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_function_nested_return() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function log_then_sum2",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let y = await cc_random_number_1_10();
      return {
        input: `function log_then_sum2(x, y) {
          console.log(x);
          console.log(y);
          return sum(x, y);
        }
        console.log(log_then_sum2(${x}, ${y}));`,
        input_review: `function sum(a, b) {
          return a + b;
        }`
      };
    }
  };
}
