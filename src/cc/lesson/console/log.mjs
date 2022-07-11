import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(...);",
    examples: [
      {
        "input": "console.log('Hello')",
        "output": `Hello`
      },
      {
        "input": "console.log('Hello, my name is Simon Peter')",
        "output": `Hello, my name is Simon Peter`
      },
      {
        "input": "console.log('a')",
        "output": `'a'`
      }
    ]
  }
}
