import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_function_return_argument() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "function identity",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      return {
        input: `function identity(value) {
          return value;
        }
        console.log(identity(${x}));`,
        answers_wrong: [`${x}`]
      };
    }
  };
}
