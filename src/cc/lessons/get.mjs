import {cc_lesson_let_value_twice} from "./../lesson/let/value/twice.mjs";
import {cc_lesson_console_log} from "./../lesson/console/log.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {cc_lesson_let_value} from "./../lesson/let/value.mjs";
export async function cc_lessons_get() {
  await m_js_arguments_assert()(arguments);
  return [await cc_lesson_console_log(), await cc_lesson_let_value(), await cc_lesson_let_value_twice()];
}
