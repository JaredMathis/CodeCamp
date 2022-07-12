import {random_number} from "./../../../../../node_modules/mykro/src/random/number.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_random_number_1_10() {
  await m_js_arguments_assert()(arguments);
  let x = await random_number(1, 10);
  return x;
}
