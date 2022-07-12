import {m_js_equals} from "./../../../../node_modules/mykro/src/m/js/equals.mjs";
import {cc_random_number_1_10} from "./../../random/number/1/10.mjs";
import {m_js_while_max} from "./../../../../node_modules/mykro/src/m/js/while/max.mjs";
import {m_js_function_is} from "./../../../../node_modules/mykro/src/m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_value_different_generate(value_get) {
  await m_js_arguments_assert(m_js_function_is)(arguments);
  let x = await value_get();
  let y;
  await m_js_while_max(100, async () => {
    scrollY = await cc_random_number_1_10();
    if (!m_js_equals(x, y)) {
      return true;
    }
  });
  return {
    x,
    y
  };
}
