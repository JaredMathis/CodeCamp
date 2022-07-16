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
import { cc_lesson_if_preloop_b } from "./if/preloop/b.mjs";
import { cc_lesson_if_preloop_c } from "./if/preloop/c.mjs";
import { cc_lesson_while_basic_b } from "./while/basic/b.mjs";
import { cc_lesson_while_basic_c } from "./while/basic/c.mjs";
import { cc_lesson_while_basic_d } from "./while/basic/d.mjs";
import { cc_lesson_while_basic_e } from "./while/basic/e.mjs";
import { cc_lesson_for_basic } from "./for/basic.mjs";
import { cc_lesson_for_basic_b } from "./for/basic/b.mjs";
import { cc_lesson_for_basic_c } from "./for/basic/c.mjs";
import { cc_lesson_console_log_thrice } from "./console/log/thrice.mjs";
import { cc_lesson_array_smallest } from "./array/smallest.mjs";
import { cc_lesson_while_basic_f } from "./while/basic/f.mjs";
import { cc_lesson_function_basic } from "./function/basic.mjs";
import { cc_lesson_function_basic_call } from "./function/basic/call.mjs";
import { cc_lesson_function_basic_call_twice } from "./function/basic/call/twice.mjs";
import { cc_lesson_function_return } from "./function/return.mjs";
import { cc_lesson_function_return_expression } from "./function/return/expression.mjs";
import { cc_lesson_function_argument } from "./function/argument.mjs";
import { cc_lesson_function_argument_multiple } from "./function/argument/multiple.mjs";
import { cc_lesson_function_return_argument } from "./function/return/argument.mjs";
import { cc_lesson_function_return_argument_expression } from "./function/return/argument/expression.mjs";
import { cc_lesson_function_return_argument_multiple } from "./function/return/argument/multiple.mjs";
import { cc_lesson_function_basic_call_b } from "./function/basic/call/b.mjs";
import { cc_lesson_function_expression } from "./function/expression.mjs";
import { cc_lesson_function_argument_expression } from "./function/argument/expression.mjs";
import { cc_lesson_function_argument_multiple_expression } from "./function/argument/multiple/expression.mjs";
import { cc_lesson_function_nested } from "./function/nested.mjs";
export async function cc_lesson_all() {
  await m_js_arguments_assert()(arguments);
  let lessons;
  let module;
  let result = [];
  await module_new(`Output`);
  await list_add(lessons, await cc_lesson_console_log_number());
  await list_add(lessons, await cc_lesson_number_add());
  await list_add(lessons, await cc_lesson_console_log_string());
  await list_add(lessons, await cc_lesson_console_log_twice());
  await list_add(lessons, await cc_lesson_console_log_thrice());
  await module_new(`Variables`);
  await list_add(lessons, await cc_lesson_let_value_assign());
  await list_add(lessons, await cc_lesson_let_value_twice_b());
  await list_add(lessons, await cc_lesson_let_value());
  await list_add(lessons, await cc_lesson_let_value_twice());
  await list_add(lessons, await cc_lesson_let_value_twice_c());
  await list_add(lessons, await cc_lesson_let_twice());
  await module_new(`Assignment`);
  await list_add(lessons, await cc_lesson_number_add_let());
  await list_add(lessons, await cc_lesson_number_add_one());
  await list_add(lessons, await cc_lesson_number_add_let_assign());
  await list_add(lessons, await cc_lesson_number_increment());
  await list_add(lessons, await cc_lesson_number_increment_twice());
  await list_add(lessons, await cc_lesson_console_log_less_than_equals());
  await list_add(lessons, await cc_lesson_console_log_less_than());
  await module_new(`Branching`);
  await list_add(lessons, await cc_lesson_if_true());
  await list_add(lessons, await cc_lesson_if_false());
  await list_add(lessons, await cc_lesson_if_true_false());
  await list_add(lessons, await cc_lesson_if_less_than_equals());
  await list_add(lessons, await cc_lesson_if_let());
  await module_new(`Looping While`);
  await list_add(lessons, await cc_lesson_if_preloop());
  await list_add(lessons, await cc_lesson_if_preloop_b());
  await list_add(lessons, await cc_lesson_if_preloop_c());
  await list_add(lessons, await cc_lesson_while_basic());
  await list_add(lessons, await cc_lesson_while_basic_b());
  await list_add(lessons, await cc_lesson_while_basic_f());
  await list_add(lessons, await cc_lesson_while_basic_c());
  await list_add(lessons, await cc_lesson_while_basic_d());
  await module_new(`Looping For`);
  await list_add(lessons, await cc_lesson_while_basic_e());
  await list_add(lessons, await cc_lesson_for_basic());
  await list_add(lessons, await cc_lesson_for_basic_b());
  await list_add(lessons, await cc_lesson_for_basic_c());
  await module_new(`Functions`);
  await list_add(lessons, await cc_lesson_function_basic());
  await list_add(lessons, await cc_lesson_function_basic_call());
  await list_add(lessons, await cc_lesson_function_basic_call_twice());
  await list_add(lessons, await cc_lesson_function_basic_call_b());
  await list_add(lessons, await cc_lesson_function_expression());
  await list_add(lessons, await cc_lesson_function_argument());
  await list_add(lessons, await cc_lesson_function_argument_expression());
  await list_add(lessons, await cc_lesson_function_argument_multiple());
  await list_add(lessons, await cc_lesson_function_argument_multiple_expression());
  await list_add(lessons, await cc_lesson_function_return());
  await list_add(lessons, await cc_lesson_function_return_expression());
  await list_add(lessons, await cc_lesson_function_return_argument());
  await list_add(lessons, await cc_lesson_function_return_argument_expression());
  await list_add(lessons, await cc_lesson_function_return_argument_multiple());
  await list_add(lessons, await cc_lesson_function_nested());
  await module_new(`Sorting`);
  await list_add(lessons, await cc_lesson_array_smallest());
  return result;

  async function module_new(module_name) {
    module = {};
    await list_add(result, module);
    lessons = [];
    module.lessons = lessons;
    module.name = module_name;
  }
}
