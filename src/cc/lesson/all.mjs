import {cc_lesson_let_value_b} from "./let/value/b.mjs";
import {cc_lesson_number_add} from "./number/add.mjs";
import {cc_lesson_console_log_number} from "./console/log/number.mjs";
import {cc_lesson_console_log_twice} from "./console/log/twice.mjs";
import {cc_lesson_let_value_twice} from "./let/value/twice.mjs";
import {cc_lesson_console_log_string} from "./console/log/string.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {cc_lesson_let_value} from "./let/value.mjs";
import {list_add} from "./../../../node_modules/mykro/src/list/add.mjs";
import {cc_lesson_let_value_twice_b} from "./let/value/twice/b.mjs";
export async function cc_lesson_all() {
  await m_js_arguments_assert()(arguments);
  let result = [];
  await list_add(result, await cc_lesson_console_log_number());
  await list_add(result, await cc_lesson_number_add());
  await list_add(result, await cc_lesson_console_log_string());
  await list_add(result, await cc_lesson_console_log_twice());
  await list_add(result, await cc_lesson_let_value());
  await list_add(result, await cc_lesson_let_value_twice_b());
  await list_add(result, await cc_lesson_let_value_b());
  await list_add(result, await cc_lesson_let_value_twice());
  return result;
}
