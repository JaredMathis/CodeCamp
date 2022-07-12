import {cc_lesson_number_add_let_assign} from "./number/add/let/assign.mjs";
import {cc_lesson_number_add_one} from "./number/add/one.mjs";
import {cc_lesson_console_log_less_than} from "./console/log/less/than.mjs";
import {cc_lesson_let_value_twice_c} from "./let/value/twice/c.mjs";
import {cc_lesson_let_value} from "./let/value.mjs";
import {cc_lesson_number_add} from "./number/add.mjs";
import {cc_lesson_console_log_number} from "./console/log/number.mjs";
import {cc_lesson_console_log_twice} from "./console/log/twice.mjs";
import {cc_lesson_let_value_twice} from "./let/value/twice.mjs";
import {cc_lesson_console_log_string} from "./console/log/string.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {cc_lesson_let_value_assign} from "./let/value/assign.mjs";
import {list_add} from "./../../../node_modules/mykro/src/list/add.mjs";
import {cc_lesson_let_value_twice_b} from "./let/value/twice/b.mjs";
import {cc_lesson_console_log_less_than_equals} from "./console/log/less/than/equals.mjs";
import {cc_lesson_if_let} from "./if/let.mjs";
import {cc_lesson_if_true_false} from "./if/true/false.mjs";
import {cc_lesson_if_true} from "./if/true.mjs";
import {cc_lesson_if_false} from "./if/false.mjs";
import {cc_lesson_if_less_than_equals} from "./if/less/than/equals.mjs";
import {cc_lesson_while_basic} from "./while/basic.mjs";
import {cc_lesson_number_add_let} from "./number/add/let.mjs";
import { cc_lesson_let_twice } from "./let/twice.mjs";
import { cc_lesson_number_increment } from "./number/increment.mjs";
import { cc_lesson_number_increment_twice } from "./number/increment/twice.mjs";
import { cc_lesson_if_preloop } from "./if/preloop.mjs";
export async function cc_lesson_all() {
  await m_js_arguments_assert()(arguments);
  let result = [];
  await list_add(result, await cc_lesson_console_log_number());
  await list_add(result, await cc_lesson_number_add());
  await list_add(result, await cc_lesson_console_log_string());
  await list_add(result, await cc_lesson_console_log_twice());
  await list_add(result, await cc_lesson_let_value_assign());
  await list_add(result, await cc_lesson_let_value_twice_b());
  await list_add(result, await cc_lesson_let_value());
  await list_add(result, await cc_lesson_let_value_twice());
  await list_add(result, await cc_lesson_let_value_twice_c());
  await list_add(result, await cc_lesson_let_twice());
  await list_add(result, await cc_lesson_number_add_let());
  await list_add(result, await cc_lesson_number_add_one());
  await list_add(result, await cc_lesson_number_add_let_assign());
  await list_add(result, await cc_lesson_number_increment());
  await list_add(result, await cc_lesson_number_increment_twice());
  await list_add(result, await cc_lesson_console_log_less_than_equals());
  await list_add(result, await cc_lesson_console_log_less_than());
  await list_add(result, await cc_lesson_if_true());
  await list_add(result, await cc_lesson_if_false());
  await list_add(result, await cc_lesson_if_true_false());
  await list_add(result, await cc_lesson_if_less_than_equals());
  await list_add(result, await cc_lesson_if_let());
  await list_add(result, await cc_lesson_if_preloop());
  await list_add(result, await cc_lesson_while_basic());
  return result;
}
