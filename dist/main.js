(()=>{"use strict";var __webpack_modules__={269:(_,a,e)=>{e.d(a,{r:()=>r});var n=e(548),t=e(130),i=e(412);async function r(_,a){await(0,n.b)(i.s,t.z)(arguments),_.push(a)}},727:(_,a,e)=>{e.d(a,{C:()=>o});var n=e(548),t=e(100),i=e(412),r=e(269);async function o(_,a){return await(0,n.b)(i.s,i.s)(arguments),await(0,t._)(a,(async a=>{await(0,r.r)(_,a)})),_}},602:(_,a,e)=>{e.d(a,{P:()=>o});var n=e(548),t=e(130),i=e(311),r=e(412);async function o(_,a){await(0,n.b)(r.s,t.z)(arguments);let e=await(0,i.F)(_,a);return e.success}},311:(_,a,e)=>{e.d(a,{F:()=>o});var n=e(548),t=e(130),i=e(412),r=e(627);async function o(_,a){await(0,n.b)(i.s,t.z)(arguments);let e=_.indexOf(a);return{index:e,success:await(0,r.f)(e)}}},412:(_,a,e)=>{e.d(a,{s:()=>i});var n=e(548),t=e(130);async function i(_){return await(0,n.b)(t.z)(arguments),Array.isArray(_)}},928:(_,a,e)=>{e.d(a,{y:()=>r});var n=e(669),t=e(412),i=e(548);async function r(_){return await(0,i.b)(t.s)(arguments),await(0,n.m)(_)-1}},670:(_,a,e)=>{e.d(a,{L:()=>r});var n=e(548),t=e(627),i=e(269);async function r(_){await(0,n.b)(t.f)(arguments);let a=[];for(let e=0;e<_;e++)await(0,i.r)(a,e);return a}},669:(_,a,e)=>{e.d(a,{m:()=>i});var n=e(548),t=e(412);async function i(_){return await(0,n.b)(t.s)(arguments),_.length}},188:(_,a,e)=>{e.d(a,{o:()=>o});var n=e(77),t=e(548),i=e(100),r=e(412);async function o(_,a){await(0,t.b)(r.s,n.q)(arguments);let e=[];return await(0,i._)(_,(async _=>{await a(_)&&e.push(_)})),e}},548:(_,a,e)=>{e.d(a,{b:()=>i});var n=e(931),t=e(307);function i(){let _=Array.from(arguments);return async function(){let a=Array.from(arguments[0]);await(0,n.N)(t.a)(_.length,a.length),await Promise.all(_.map((async(_,e)=>{let t=a[e];await(0,n.N)(_,{argument_index:e,asserter:_,value:t})(t)})))}}},931:(_,a,e)=>{e.d(a,{N:()=>o});var n=e(307);function t(_,a){return _(...a)}var i=e(319);function r(_){throw(0,i.i)(_)&&(_=JSON.stringify(_)),new Error(_)}function o(_,a){return function(_,a,e){return async function(){let i=await t(_,arguments);(0,n.a)(i,a)||(e?.value?.then&&console.log("data?.value?.then is a promise, maybe there is a missing await?".yellow),r(JSON.stringify({_function_data:_.data||_.name,actual:i,expected:a,arguments:Array.from(arguments),data:e})))}}(_,!0,a)}},107:(_,a,e)=>{e.d(a,{I:()=>i});var n=e(931),t=e(307);async function i(_){return await(0,n.N)(t.a)(arguments.length,1),[!0,!1].includes(_)}},130:(_,a,e)=>{e.d(a,{z:()=>i});var n=e(548);function t(){return!0}async function i(_){return await(0,n.b)(t)(arguments),void 0!==_}},307:(_,a,e)=>{function n(_,a){return _===a}e.d(a,{a:()=>n})},100:(_,a,e)=>{e.d(a,{_:()=>s});var n=e(412),t=e(77),i=e(548),r=e(130),o=e(806);async function s(_,a){await(0,i.b)(n.s,t.q)(arguments);let e=0;for(let n of _){let _=await a(n,e);if(await(0,r.z)(_)&&await(0,o.$)(_))break;e++}}},77:(_,a,e)=>{e.d(a,{q:()=>i});var n=e(548),t=e(130);async function i(_){return await(0,n.b)(t.z)(arguments),"function"==typeof _}},537:(_,a,e)=>{e.d(a,{J:()=>i});var n=e(306),t=e(548);async function i(_,a){return await(0,t.b)(n.j,n.j)(arguments),_>=a}},306:(_,a,e)=>{e.d(a,{j:()=>i});var n=e(548),t=e(130);async function i(_){return await(0,n.b)(t.z)(arguments),"number"==typeof _}},627:(_,a,e)=>{e.d(a,{f:()=>r});var n=e(306),t=e(548),i=e(537);async function r(_){return await(0,t.b)(n.j)(arguments),(0,i.J)(_,0)}},480:(_,a,e)=>{e.d(a,{$:()=>i});var n=e(548),t=e(130);async function i(_){return await(0,n.b)(t.z)(arguments),Object.keys(_)}},736:(_,a,e)=>{e.d(a,{B:()=>s});var n=e(837),t=e(548),i=e(931),r=e(130),o=e(319);async function s(_,a){await(0,t.b)(r.z,o.i)(arguments),(0,i.N)(n.M)(_,a);let e=_[a];return await(0,i.N)(r.z,e),e}},837:(_,a,e)=>{e.d(a,{M:()=>s});var n=e(548),t=e(130),i=e(480),r=e(319),o=e(602);async function s(_,a){await(0,n.b)(t.z,r.i)(arguments);let e=await(0,i.$)(_);return await(0,o.P)(e,a)}},319:(_,a,e)=>{function n(_){return"string"==typeof _}e.d(a,{i:()=>n})},864:(_,a,e)=>{e.d(a,{E:()=>i});var n=e(548),t=e(319);async function i(_,a){return await(0,n.b)(t.i,t.i)(arguments),_.split(a)}},806:(_,a,e)=>{e.d(a,{$:()=>r});var n=e(548),t=e(130),i=e(307);async function r(_){return await(0,n.b)(t.z)(arguments),(0,i.a)(_,!0)}},389:(_,a,e)=>{e.d(a,{$:()=>s});var n=e(670),t=e(100),i=e(77),r=e(306),o=e(548);async function s(_,a){await(0,o.b)(r.j,i.q)(arguments),await(0,t._)(await(0,n.L)(_),a)}},753:(_,a,e)=>{async function n(){}e.d(a,{Z:()=>n})},740:(_,a,e)=>{e.d(a,{$:()=>w});var n=e(306),t=e(412),i=e(548);async function r(_,a,e){await(0,i.b)(t.s,n.j,n.j)(arguments);let r=_[a];_[a]=_[e],_[e]=r}var o=e(928),s=e(670),c=e(669),l=e(100),u=e(570);async function w(_){await(0,i.b)(t.s)(arguments),await(0,l._)(await(0,s.L)(await(0,c.m)(_)),(async a=>{let e=await(0,u.b)(a,await(0,o.y)(_));await r(_,a,e)}))}},570:(_,a,e)=>{e.d(a,{b:()=>i});var n=e(548),t=e(306);async function i(_,a){return await(0,n.b)(t.j,t.j)(arguments),_+Math.floor(Math.random()*(a-_+1))}},520:(_,a,e)=>{e.d(a,{J:()=>m});var n=e(806),t=e(412),i=e(100),r=e(548);async function o(_){await(0,r.b)(t.s)(arguments);let a=!0;return await(0,i._)(_,(async _=>{if(!await(0,n.$)(_))return a=!1,!0})),a}var s=e(130),c=e(306);async function l(_,a){return await(0,r.b)(c.j,c.j)(arguments),_<=a}var u=e(627),w=e(188);async function m(_){await(0,r.b)(s.z)(arguments);let a=[(0,c.j)(_),await(0,u.f)(_),await l(_,1)];return await o(await(0,w.o)(a,n.$))}},660:(_,a,e)=>{e.d(a,{J:()=>r});var n=e(319),t=e(548),i=e(18);async function r(_,a){await(0,t.b)(i.d,n.i)(arguments);let e=document.createElement(a);return e.style.fontSize="3.1vh",e.style.fontFamily="Sans-Serif",e.style.margin=0,e.style.color="black",e.style.marginBottom="0.5vh",e.style.padding=0,_.appendChild(e),e}},877:(_,a,e)=>{e.d(a,{B:()=>c});var n=e(77),t=e(319),i=e(18),r=e(548);async function o(_,a,e){await(0,r.b)(i.d,t.i,n.q)(arguments),_.addEventListener(a,e)}var s=e(178);async function c(_,a,e,c){await(0,r.b)(i.d,t.i,n.q,n.q)(arguments);let l=await(0,s.S)(_,"button",a);return await c(l),await o(l,"click",e),l}},104:(_,a,e)=>{e.d(a,{b:()=>u});var n=e(877),t=e(77),i=e(319),r=e(18),o=e(932),s=e(548);async function c(){return await(0,s.b)()(arguments),"0, 100, 255"}async function l(_){await(0,s.b)(r.d)(arguments);const a=await c();return await(0,o.d)(_,a,1,.3)}async function u(_,a,e){return await(0,s.b)(r.d,i.i,t.q)(arguments),(0,n.B)(_,a,e,l)}},7:(_,a,e)=>{e.d(a,{j:()=>r});var n=e(319),t=e(18),i=e(548);async function r(_,a){await(0,i.b)(t.d,n.i)(arguments),_.innerHTML=a}},859:(_,a,e)=>{e.d(a,{Z:()=>d});var n=e(319),t=e(18),i=e(548),r=e(520);async function o(_,a,e){await(0,i.b)(t.d,n.i,r.J)(arguments),_.style.backgroundColor=`rgba(${a}, ${e})`}var s=e(130),c=e(480),l=e(100);async function u(_,a,e){await(0,i.b)(s.z,n.i,s.z)(arguments),_[a]=e}var w=e(736);async function m(_,a){await(0,i.b)(s.z,s.z)(arguments);let e=await(0,c.$)(a);await(0,l._)(e,(async e=>{let n=await(0,w.B)(a,e);await u(_,e,n)}))}async function y(_,a){return await(0,i.b)(t.d,n.i)(arguments),await m(_.style,{borderWidth:"0.3vh",borderStyle:"solid",borderColor:`${a}`,borderRadius:"2vh",padding:"1.3vh"}),_}async function d(_,a,e,s){await(0,i.b)(t.d,n.i,r.J,r.J)(arguments),await y(_,`rgba(${a}, ${e})`),await o(_,a,s)}},932:(_,a,e)=>{e.d(a,{d:()=>s});var n=e(520),t=e(319),i=e(18),r=e(548),o=e(859);async function s(_,a,e,s){await(0,r.b)(i.d,t.i,n.J,n.J)(arguments),_.style.cursor="pointer",_.style.listStyleType="none",await(0,o.Z)(_,a,e,s),_.style.width="100%",_.style.boxSizing="border-box"}},333:(_,a,e)=>{e.d(a,{F:()=>i});var n=e(18),t=e(548);async function i(_){await(0,t.b)(n.d)(arguments),_.style.fontFamily="monospace"}},178:(_,a,e)=>{e.d(a,{S:()=>s});var n=e(319),t=e(18),i=e(548),r=e(660),o=e(7);async function s(_,a,e){await(0,i.b)(t.d,n.i,n.i)(arguments);let s=await(0,r.J)(_,a);return await(0,o.j)(s,e),s}},18:(_,a,e)=>{e.d(a,{d:()=>i});var n=e(130),t=e(548);async function i(_){return await(0,t.b)(n.z)(arguments),_ instanceof HTMLElement}},663:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cc_ui_lesson_example});var _ui_element_card_mjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(57),_node_modules_mykro_src_ui_element_html_inner_set_mjs__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(7),_node_modules_mykro_src_noop_mjs__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(753),_node_modules_mykro_src_random_list_shuffle_mjs__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(740),_node_modules_mykro_src_m_js_equals_mjs__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(307),_node_modules_mykro_src_m_js_boolean_is_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(107),_node_modules_mykro_src_ui_element_button_primary_mjs__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(104),_node_modules_mykro_src_m_js_function_is_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),_node_modules_mykro_src_ui_element_style_background_color_border_mjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(859),_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(178),_node_modules_mykro_src_m_js_number_is_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(306),_node_modules_mykro_src_ui_element_style_monospace_mjs__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(333),_node_modules_mykro_src_m_js_property_get_mjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(736),_node_modules_mykro_src_ui_element_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(660),_node_modules_mykro_src_ui_html_element_is_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),_node_modules_mykro_src_m_js_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(548),_node_modules_mykro_src_m_js_for_each_mjs__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(100),_node_modules_mykro_src_m_js_string_split_mjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(864),_node_modules_mykro_src_list_max_index_mjs__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(928),_node_modules_mykro_src_m_js_property_has_mjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(837),_node_modules_mykro_src_list_add_all_mjs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(727),_values_different_generate_mjs__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(431),_node_modules_mykro_src_list_size_mjs__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(669);async function cc_ui_lesson_example(_,a,e,n,t,i){await(0,_node_modules_mykro_src_m_js_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(_node_modules_mykro_src_ui_html_element_is_mjs__WEBPACK_IMPORTED_MODULE_1__.d,_node_modules_mykro_src_m_js_function_is_mjs__WEBPACK_IMPORTED_MODULE_2__.q,_node_modules_mykro_src_m_js_number_is_mjs__WEBPACK_IMPORTED_MODULE_3__.j,_node_modules_mykro_src_m_js_function_is_mjs__WEBPACK_IMPORTED_MODULE_2__.q,_node_modules_mykro_src_m_js_function_is_mjs__WEBPACK_IMPORTED_MODULE_2__.q,_node_modules_mykro_src_m_js_boolean_is_mjs__WEBPACK_IMPORTED_MODULE_4__.I)(arguments);let r=await(0,_node_modules_mykro_src_ui_element_mjs__WEBPACK_IMPORTED_MODULE_5__.J)(_,"div");r.style.margin=0;let o=await a();cc_example_output_generate(o),r.style.margin=0;let s="Example";i&&(s="Question"),await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(r,"h1",s+" "+e);let c=await(0,_ui_element_card_mjs__WEBPACK_IMPORTED_MODULE_7__.H)(r);await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(c,"div","Input");const l=await(0,_node_modules_mykro_src_m_js_property_get_mjs__WEBPACK_IMPORTED_MODULE_8__.B)(o,"input");let u=await(0,_node_modules_mykro_src_m_js_string_split_mjs__WEBPACK_IMPORTED_MODULE_9__.E)(l,"\n"),w=await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(c,"div","");await ui_element_lines_monospace(w,u,(_=>_.style.color="white"),"TODO"),await(0,_node_modules_mykro_src_ui_element_style_background_color_border_mjs__WEBPACK_IMPORTED_MODULE_10__.Z)(w,"0,0,0",1,1),w.style.overflowWrap="break-word",w.style.color="white";let m=await(0,_ui_element_card_mjs__WEBPACK_IMPORTED_MODULE_7__.H)(r);await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(m,"div","Output");let y=await(0,_node_modules_mykro_src_m_js_property_get_mjs__WEBPACK_IMPORTED_MODULE_8__.B)(o,"output");if(i){let _=[y];await(0,_node_modules_mykro_src_m_js_property_has_mjs__WEBPACK_IMPORTED_MODULE_11__.M)(o,"answers_wrong")&&await(0,_node_modules_mykro_src_list_add_all_mjs__WEBPACK_IMPORTED_MODULE_12__.C)(_,o.answers_wrong);let a=4;await(0,_values_different_generate_mjs__WEBPACK_IMPORTED_MODULE_13__.p)(_,a,d),await(0,_node_modules_mykro_src_random_list_shuffle_mjs__WEBPACK_IMPORTED_MODULE_14__.$)(_),await(0,_node_modules_mykro_src_m_js_for_each_mjs__WEBPACK_IMPORTED_MODULE_15__._)(_,(async _=>{let a=await(0,_node_modules_mykro_src_ui_element_button_primary_mjs__WEBPACK_IMPORTED_MODULE_16__.b)(m,"",(async()=>{(0,_node_modules_mykro_src_m_js_equals_mjs__WEBPACK_IMPORTED_MODULE_17__.a)(_,y)?await n():await(0,_node_modules_mykro_src_ui_element_style_background_color_border_mjs__WEBPACK_IMPORTED_MODULE_10__.Z)(a,"255,0,20",.5,.2)}));await ui_element_lines_monospace(a,await(0,_node_modules_mykro_src_m_js_string_split_mjs__WEBPACK_IMPORTED_MODULE_9__.E)(_,"\n"),_node_modules_mykro_src_noop_mjs__WEBPACK_IMPORTED_MODULE_18__.Z,"No output")}))}else{let _=await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(m,"div",""),a="0,255,0";await ui_element_lines_monospace(_,await(0,_node_modules_mykro_src_m_js_string_split_mjs__WEBPACK_IMPORTED_MODULE_9__.E)(y,"\n"),_node_modules_mykro_src_noop_mjs__WEBPACK_IMPORTED_MODULE_18__.Z,"No output"),await(0,_node_modules_mykro_src_ui_element_style_background_color_border_mjs__WEBPACK_IMPORTED_MODULE_10__.Z)(_,a,.5,.2),await(0,_node_modules_mykro_src_ui_element_button_primary_mjs__WEBPACK_IMPORTED_MODULE_16__.b)(r,"Another example, please!",n),await(0,_node_modules_mykro_src_ui_element_button_primary_mjs__WEBPACK_IMPORTED_MODULE_16__.b)(r,"Enough examples! Quiz me!",t)}return{container:r};async function d(){let _=await a();return cc_example_output_generate(_),await(0,_node_modules_mykro_src_m_js_property_get_mjs__WEBPACK_IMPORTED_MODULE_8__.B)(_,"output")}}async function ui_element_lines_monospace(_,a,e,n){console.log({lines:a}),(0,_node_modules_mykro_src_m_js_equals_mjs__WEBPACK_IMPORTED_MODULE_17__.a)(await(0,_node_modules_mykro_src_list_size_mjs__WEBPACK_IMPORTED_MODULE_19__.m)(a),1)&&""===a[0]&&(await(0,_node_modules_mykro_src_ui_element_html_inner_set_mjs__WEBPACK_IMPORTED_MODULE_20__.j)(_,n),_.style.fontStyle="italic"),await(0,_node_modules_mykro_src_m_js_for_each_mjs__WEBPACK_IMPORTED_MODULE_15__._)(a,(async(n,t)=>{let i=await(0,_node_modules_mykro_src_ui_element_text_mjs__WEBPACK_IMPORTED_MODULE_6__.S)(_,"div",n);await(0,_node_modules_mykro_src_ui_element_style_monospace_mjs__WEBPACK_IMPORTED_MODULE_21__.F)(i),0!==t&&(i.style.borderTop="0.15vh solid rgba(200,200,200,0.5)",i.style.paddingTop="1vh"),t!==await(0,_node_modules_mykro_src_list_max_index_mjs__WEBPACK_IMPORTED_MODULE_22__.y)(a)&&(i.style.paddingBottom="1vh"),e(i)}))}function cc_example_output_generate(example){const code=`\n  let console_log_old = console.log;\n  console.log = console_log_new;\n  function console_log_new(value) {\n    console_log_new.outputs.push(value);\n  }\n  console_log_new.outputs = [];\n  ${example.input}\n  console.log = console_log_old;\n  console_log_new.outputs.join('\\n');\n  `;let evaled;console.log(code);try{evaled=eval(code)}catch(_){console.log(_)}example.output=evaled}},431:(_,a,e)=>{e.d(a,{p:()=>w});var n=e(269),t=e(602),i=e(669),r=e(537),o=e(389),s=e(412),c=e(77),l=e(306),u=e(548);async function w(_,a,e){await(0,u.b)(s.s,l.j,c.q)(arguments),await(0,o.$)(100,(async()=>{if(await(0,r.J)(await(0,i.m)(_),a))return!0;let o=await e();if(await(0,t.P)(_,o))return!1;await(0,n.r)(_,o)}))}},57:(_,a,e)=>{e.d(a,{H:()=>o});var n=e(859),t=e(660),i=e(18),r=e(548);async function o(_){await(0,r.b)(i.d)(arguments);let a=await(0,t.J)(_,"div");return await(0,n.Z)(a,"1,1,1",.1,.03),a}}},__webpack_module_cache__={};function __webpack_require__(_){var a=__webpack_module_cache__[_];if(void 0!==a)return a.exports;var e=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](e,e.exports,__webpack_require__),e.exports}__webpack_require__.d=(_,a)=>{for(var e in a)__webpack_require__.o(a,e)&&!__webpack_require__.o(_,e)&&Object.defineProperty(_,e,{enumerable:!0,get:a[e]})},__webpack_require__.o=(_,a)=>Object.prototype.hasOwnProperty.call(_,a);var __webpack_exports__={};(()=>{var _=__webpack_require__(660),a=__webpack_require__(18),e=__webpack_require__(548);async function n(_){await(0,e.b)(a.d)(arguments),_.remove()}var t=__webpack_require__(130),i=__webpack_require__(736);async function r(r){let o,s=await(0,_.J)(r,"div");return s.style.margin=0,await(0,e.b)(a.d)(arguments),{container:s,view_set:async _=>{await(0,t.z)(o)&&await n(o);let a=await _(s);o=await(0,i.B)(a,"container")}}}var o=__webpack_require__(57),s=__webpack_require__(806),c=__webpack_require__(77),l=__webpack_require__(100),u=__webpack_require__(412);async function w(_,a){await(0,e.b)(u.s,c.q)(arguments);let n=[];return await(0,l._)(_,(async _=>{let e=await a(_);n.push(e)})),n}var m=__webpack_require__(727);async function y(_){await(0,e.b)(u.s)(arguments);let a=[];return await(0,l._)(_,(async _=>{await(0,m.C)(a,_)})),a}var d=__webpack_require__(104),p=__webpack_require__(877),b=__webpack_require__(932);async function f(_){return await(0,e.b)(a.d)(arguments),await(0,b.d)(_,"1,1,1",.2,.12)}var E=__webpack_require__(319);async function x(_,n,t){return await(0,e.b)(a.d,E.i,c.q)(arguments),(0,p.B)(_,n,t,f)}var g=__webpack_require__(663),k=__webpack_require__(178);async function v(n,o,s,l,u){await(0,e.b)(a.d,t.z,c.q,c.q,E.i)(arguments);let w=await(0,_.J)(n,"div");w.style.margin=0,await(0,k.S)(w,"h1",`Lesson: (${u}) ${await(0,i.B)(o,"name")}`);let m=await r(w),y=0,d=!1;return p(),await x(w,"Next Lesson",l),await x(w,"Back to Lessons",s),{container:w};function p(){m.view_set((async _=>await(0,g.j)(_,o.example_get,y+1,(function(){y++,p()}),(function(){d=!0,y=0,p()}),d)))}}var O=__webpack_require__(570);async function $(){await(0,e.b)()(arguments);let _=await(0,O.b)(1,10);return _}async function M(){return await(0,e.b)()(arguments),{name:"let x,y...; x = x + y; console...",example_get:async()=>({input:`let x = ${await $()}, y = ${await $()};\n        x = x + y;\n        console.log(x);`})}}async function P(){return await(0,e.b)()(arguments),{name:"let x = ...; x = x + 1; console...",example_get:async()=>({input:`let x = ${await $()};\n        x = x + 1;\n        console.log(x);`})}}async function D(){return await(0,e.b)()(arguments),{name:"console.log(x < y);",example_get:async()=>{let _=await $();return{input:`console.log(${_} < ${await(0,O.b)(_-1,_+1)});`}}}}var j=__webpack_require__(307),q=__webpack_require__(389);async function B(_){await(0,e.b)(c.q)(arguments);let a,n=await _();return await(0,q.$)(100,(async()=>{if(a=await _(),!(0,j.a)(n,a))return!0})),{x:n,y:a}}async function L(){return await(0,e.b)()(arguments),{name:"let value = ...; value = ...;",example_get:async()=>{let{x:_,y:a}=await B($);return{input:`let value = ${a};\nvalue = ${_};\nconsole.log(value);`,answers_wrong:[a]}}}}async function h(){return await(0,e.b)()(arguments),{name:"let value = ...;",example_get:async()=>({input:`let value = ${await $()};\nconsole.log(value);`})}}async function A(){return await(0,e.b)()(arguments),{name:"console.log(x + y);",example_get:async()=>({input:`console.log(${await $()} + ${await $()});`})}}async function C(){return await(0,e.b)()(arguments),{name:"console.log(x);",example_get:async()=>({input:`console.log(${await $()});`})}}async function T(){return await(0,e.b)()(arguments),{name:"console.log(x); // x2",example_get:async()=>{let _=await $(),a=await $();return{input:`console.log(${_});\nconsole.log(${a});`,answers_wrong:[a+"\n"+_,_+" "+a]}}}}async function I(_,a){return await(0,e.b)(u.s,E.i)(arguments),_.join(a)}var W=__webpack_require__(306);async function R(_,a){return await(0,e.b)(u.s,W.j)(arguments),_.slice(0,a)}var K=__webpack_require__(627);async function U(_,a){return await(0,e.b)(u.s,K.f)(arguments),_.slice(a)}var z=__webpack_require__(928);async function S(_,a){await(0,e.b)(u.s,W.j)(arguments);let n=await(0,z.y)(_),t=n-(a-1),i=await(0,O.b)(0,t),r=await(0,O.b)(1,a),o=await U(_,i),s=await R(o,r);return s}async function J(_,a,n){await(0,e.b)(u.s,W.j,E.i)(arguments);let t=await S(_,a),i=await I(t,n);return i}var N=__webpack_require__(864);async function F(){await(0,e.b)()(arguments);let _="For God so loved the world that he gave his only Son so that everyone who believes in him may not perish but may have eternal life",a=await(0,N.E)(_," ");return a}async function Z(){await(0,e.b)()(arguments);let _=await F(),a=await J(_,3," ");return a}async function H(){return await(0,e.b)()(arguments),{name:"let value; value = ...; // x2",example_get:async()=>{let{x:_,y:a}=await B(Z);return{input:`let value;\nvalue = '${a}';\nvalue = '${_}';\nconsole.log(value);`,answers_wrong:[a]}}}}async function Q(){return await(0,e.b)()(arguments),{name:"console.log('...');",example_get:async()=>({input:`console.log('${await Z()}');`})}}async function Y(){return await(0,e.b)()(arguments),{name:"let value; value = ...;",example_get:async()=>({input:`let value;\nvalue = ${await $()};\nconsole.log(value);`})}}var G=__webpack_require__(269);async function V(){return await(0,e.b)()(arguments),{name:"let value; value = ...; console...; // x2",example_get:async()=>{let{x:_,y:a}=await B($);return{input:`let value;\nvalue = ${a};\nconsole.log(value);\nvalue = ${_};\nconsole.log(value);`,answers_wrong:[_+"\n"+a,a+" "+_]}}}}async function X(){return await(0,e.b)()(arguments),{name:"console.log(x <= y);",example_get:async()=>{let _=await $();return{input:`console.log(${_} <= ${await(0,O.b)(_-1,_+1)});`}}}}async function __(){return await(0,e.b)()(arguments),{name:"let x = ...; if (x < y)",example_get:async()=>{let _=await $()+1;return{input:`let x = ${_};\n        if (x < ${await(0,O.b)(_-1,_+1)}) {\n          console.log('Yes, less than');\n        }`}}}}var a_=__webpack_require__(740);async function e_(){return await(0,e.b)()(arguments),{name:"if (true) ... if (false)",example_get:async()=>{let{x:_,y:a}=await B($),e=[!0,!1];return await(0,a_.$)(e),{input:`if (${e[0]}) {\n          console.log(${_});\n        }\n        if (${e[1]}) {\n          console.log(${a});\n        }`,answers_wrong:["",`${_}\n${a}`]}}}}async function n_(){return await(0,e.b)()(arguments),{name:"if (true)",example_get:async()=>({input:`if (true) {\n          console.log(${await $()});\n        }`,answers_wrong:[""]})}}async function t_(){return await(0,e.b)()(arguments),{name:"if (false)",example_get:async()=>{let _=await $();return{input:`if (false) {\n          console.log(${_});\n        }`,answers_wrong:[`${_}`]}}}}async function i_(){return await(0,e.b)()(arguments),{name:"if (x <= y)",example_get:async()=>{let _=await $()+2;return{input:`if (${_} <= ${await(0,O.b)(_-2,_+1)}) {\n          console.log('Yes, less than or equals');\n        }`}}}}async function r_(){return await(0,e.b)()(arguments),{name:"let x = ...; while (...)",example_get:async()=>{let _=await $(),a=_+1;return{input:`let x = ${_};\n        while (x <= ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:["",`${_}`,`${_}\n${a}\n${a+1}`]}}}}async function o_(){return await(0,e.b)()(arguments),{name:"let x = ...; console.log(x + y);",example_get:async()=>({input:`let x = ${await $()};\n        console.log(x + ${await $()});`})}}async function s_(){return await(0,e.b)()(arguments),{name:"let x = ..., y = ...;",example_get:async()=>{let{x:_,y:a}=await B($);return{input:`let x = ${_}, y = ${a};\n        console.log(x);\n        console.log(y);`}}}}async function c_(){return await(0,e.b)()(arguments),{name:"let x...; x++;",example_get:async()=>({input:`let x = ${await $()};\n        console.log(x);\n        x++;\n        console.log(x);`})}}async function l_(){return await(0,e.b)()(arguments),{name:"let x...; x++; x++;",example_get:async()=>({input:`let x = ${await $()};\n        console.log(x);\n        x++;\n        console.log(x);\n        x++;\n        console.log(x);`})}}async function u_(){return await(0,e.b)()(arguments),{name:"let x = ...; if (...){x++}",example_get:async()=>{let _=await $(),a=_+1;return{input:`let x = ${_};\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:[`${a}`]}}}}async function w_(){return await(0,e.b)()(arguments),{name:"let x = ...; if (...){x++} // x2",example_get:async()=>{let _=await $(),a=_+1;return{input:`let x = ${_};\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:[`${a}\n${a+1}`]}}}}async function m_(){return await(0,e.b)()(arguments),{name:"let x = ...; if (...){x++} // x3",example_get:async()=>{let _=await $(),a=_+1;return{input:`let x = ${_};\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }\n        if (x <= ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:[`${a}\n${a+1}`,`${a}\n${a+1}\n${a+2}`,`${_}\n${a}\n${a+1}`]}}}}async function y_(){return await(0,e.b)()(arguments),{name:"let x = ...; while (...) // (2)",example_get:async()=>{let _=await $(),a=_+2;return{input:`let x = ${_};\n        while (x <= ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:["",`${_}\n${_+1}`,`${_}\n${_+1}\n${a}\n${a+1}`]}}}}async function d_(){return await(0,e.b)()(arguments),{name:"let x = ...; while (...) // (3)",example_get:async()=>{let _=await $(),a=_+await(0,O.b)(0,2);return{input:`let x = ${_};\n        while (x <= ${a}) {\n          x++;\n        }\n        console.log(x);`,answers_wrong:[`${a}`,`${a+2}`]}}}}async function p_(){return await(0,e.b)()(arguments),{name:"let x = ...; while (...) // (4)",example_get:async()=>{let _=await $()+3,a=_-await(0,O.b)(1,3);return{input:`let x = ${_};\n        while (x <= ${a}) {\n          x++;\n        }\n        console.log(x);`,answers_wrong:[`${a}`]}}}}async function b_(){return await(0,e.b)()(arguments),{name:"let x = ...; while (...) // (5)",example_get:async()=>{let _=await $(),a=_+3;return{input:`let x = ${_};\n        while (x < ${a}) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:["",`${_}\n${_+1}`,`${_}\n${_+1}\n${_+2}\n${a}`]}}}}async function f_(){return await(0,e.b)()(arguments),{name:"let x = ...; for (...)",example_get:async()=>{let _=await $(),a=_+3;return{input:`let x = ${_};\n        for (; x < ${a};) {\n          console.log(x);\n          x++;\n        }`,answers_wrong:["",`${_}\n${_+1}`,`${_}\n${_+1}\n${_+2}\n${a}`]}}}}async function E_(){return await(0,e.b)()(arguments),{name:"let x = ...; for (...)",example_get:async()=>{let _=await $(),a=_+3;return{input:`let x = ${_};\n        for (; x < ${a}; x++) {\n          console.log(x);\n        }`,answers_wrong:["",`${_}\n${_+1}`,`${_}\n${_+1}\n${_+2}\n${a}`]}}}}async function x_(){return await(0,e.b)()(arguments),{name:"let x = ...; for (...)",example_get:async()=>{let _=await $(),a=_+3;return{input:`for (let x = ${_}; x < ${a}; x++) {\n          console.log(x);\n        }`,answers_wrong:["",`${_}\n${_+1}`,`${_}\n${_+1}\n${_+2}\n${a}`]}}}}async function g_(){return await(0,e.b)()(arguments),{name:"console.log(x); // x3",example_get:async()=>{let _=await $(),a=await $(),e=await $();return{input:`console.log(${_});\n        console.log(${a});\n        console.log(${e});`,answers_wrong:[a+"\n"+_+"\n"+e,_+" "+a+" "+e]}}}}async function k_(_){return await(0,e.b)(c.q)(arguments),function(a,e){return _(a,e)}}async function v_(_,a){return await(0,e.b)(W.j,W.j)(arguments),_<a?_:a}var O_=__webpack_require__(931),$_=__webpack_require__(669),M_=__webpack_require__(537);async function P_(_){return await(0,e.b)(u.s)(arguments),await(0,O_.N)(M_.J)(await(0,$_.m)(_),1),_[0]}async function D_(_,a){await(0,e.b)(u.s,c.q)(arguments);let n=await P_(_);return await(0,l._)(_,(async _=>{n=await a(n,_)})),n}async function j_(_){return await(0,e.b)(u.s)(arguments),await D_(_,await k_(v_))}var q_=__webpack_require__(602),B_=__webpack_require__(188);async function L_(_,a){return await(0,e.b)(u.s,u.s)(arguments),await(0,B_.o)(_,(async _=>!await(0,q_.P)(a,_)))}var h_=__webpack_require__(431);async function A_(){return await(0,e.b)()(arguments),{name:"function array_smallest()...",example_get:async()=>{let _=[];return await(0,h_.p)(_,3,$),{input:`function array_smallest(array) {\n          return array.reduce(smaller);\n        }\n        let array = [${_.join(", ")}];\n        console.log(array_smallest(array));`,input_review:"function smaller(a, b) {\n          if (a < b) return a;\n          return b;\n        }",answers_wrong:await L_(_,[await j_(_)])}}}}async function C_(){let _,a;await(0,e.b)()(arguments);let n=[];return await t("Output"),await(0,G.r)(_,await C()),await(0,G.r)(_,await A()),await(0,G.r)(_,await Q()),await(0,G.r)(_,await T()),await(0,G.r)(_,await g_()),await t("Variables"),await(0,G.r)(_,await Y()),await(0,G.r)(_,await V()),await(0,G.r)(_,await h()),await(0,G.r)(_,await H()),await(0,G.r)(_,await L()),await(0,G.r)(_,await s_()),await t("Assignment"),await(0,G.r)(_,await o_()),await(0,G.r)(_,await P()),await(0,G.r)(_,await M()),await(0,G.r)(_,await c_()),await(0,G.r)(_,await l_()),await(0,G.r)(_,await X()),await(0,G.r)(_,await D()),await t("Branching"),await(0,G.r)(_,await n_()),await(0,G.r)(_,await t_()),await(0,G.r)(_,await e_()),await(0,G.r)(_,await i_()),await(0,G.r)(_,await __()),await t("Looping While"),await(0,G.r)(_,await u_()),await(0,G.r)(_,await w_()),await(0,G.r)(_,await m_()),await(0,G.r)(_,await r_()),await(0,G.r)(_,await y_()),await(0,G.r)(_,await d_()),await(0,G.r)(_,await p_()),await t("Looping For"),await(0,G.r)(_,await b_()),await(0,G.r)(_,await f_()),await(0,G.r)(_,await E_()),await(0,G.r)(_,await x_()),await t("Sorting"),await(0,G.r)(_,await A_()),n;async function t(e){a={},await(0,G.r)(n,a),_=[],a.lessons=_,a.name=e}}var T_=__webpack_require__(311);async function I_(n,r){await(0,e.b)(a.d,t.z)(arguments);let c=await(0,_.J)(n,"div"),u=await C_(),m=await y(await w(u,(_=>_.lessons))),p=(await(0,k.S)(c,"h1","Lessons"),await(0,_.J)(c,"div"));return await(0,l._)(u,(async a=>{let e=await(0,o.H)(p),t=(await(0,k.S)(e,"h2",a.name),await(0,_.J)(e,"div"));await(0,l._)(a.lessons,(async _=>{let e=await(0,T_.F)(m,_);await(0,O_.N)(s.$)(e.success),e=e.index,_.select=async()=>{await r.view_set((async()=>await v(n,_,(async function(){await r.view_set((async()=>await I_(n,r)))}),(async function(){let _=m[e+1];await _.select()}),a.name)))},await(0,d.b)(t,await(0,i.B)(_,"name"),_.select)}))})),{container:c}}!async function(_){await(0,e.b)(a.d)(arguments);let n=await r(_);await n.view_set((async()=>await I_(_,n)))}(document.body)})()})();