import {random_list_slice_join} from "./../../../../node_modules/mykro/src/random/list/slice/join.mjs";
import {cc_tokens_get} from "./../get.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_tokens_3_get() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  let joined = await random_list_slice_join(tokens, 3, " ");
  return joined;
}
