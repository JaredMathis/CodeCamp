import {list_add} from "./../../../../node_modules/mykro/src/list/add.mjs";
import {list_contains} from "./../../../../node_modules/mykro/src/list/contains.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
import {m_js_number_at_least} from "./../../../../node_modules/mykro/src/m/js/number/at/least.mjs";
import {m_js_while_max} from "./../../../../node_modules/mykro/src/m/js/while/max.mjs";
import {list_is} from "mykro/src/list/is.mjs";
import {m_js_function_is} from "mykro/src/m/js/function/is.mjs";
import {m_js_number_is} from "mykro/src/m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_values_different_generate(answers, answers_count, answer_get) {
  await m_js_arguments_assert(list_is, m_js_number_is, m_js_function_is)(arguments);
  await m_js_while_max(100, async () => {
    if (await m_js_number_at_least(await list_size(answers), answers_count)) {
      return true;
    }
    let wrong_answer = await answer_get();
    if (await list_contains(answers, wrong_answer)) {
      return false;
    }
    await list_add(answers, wrong_answer);
  });
}
