import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_tokens_get() {
  await m_js_arguments_assert()(arguments);
  let verse = `For God so loved the world that he gave his only Son so that everyone who believes in him may not perish but may have eternal life`;
  let tokens = await m_js_string_split(verse, " ");
  return tokens;
}
