import {cc_lesson_console_log} from "./../lesson/console/log.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lessons_get() {
  await m_js_arguments_assert()(arguments);
  return [await cc_lesson_console_log()];
}
