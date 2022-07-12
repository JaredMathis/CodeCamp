import {cc_value_different_generate} from "./../../../../value/different/generate.mjs";
import {cc_random_number_1_10} from "./../../../../random/number/1/10.mjs";
import {m_js_arguments_assert} from "./../../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value_twice_b() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let value; value = ...; console...; // x2",
    example_get: async () => {
      let {x, y} = await cc_value_different_generate(cc_random_number_1_10);
      return {
        input: `let value;
value = ${y};
console.log(value);
value = ${x};
console.log(value);`,
        answers_wrong: [x + "\n" + y, y + " " + x]
      };
    }
  };
}
