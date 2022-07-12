import {cc_tokens_3_get} from "./../../../tokens/3/get.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import { cc_value_different_generate } from "../../../value/different/generate.mjs";
export async function cc_lesson_let_value_twice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let value; value = ...; // x2",
    example_get: async () => {
      let { x, y } = await cc_value_different_generate(cc_tokens_3_get);
      return {
        input: `let value;
value = '${y}';
value = '${x}';
console.log(value);`,
        answers_wrong: [y]
      };
    }
  };
}
