import"./assets/modulepreload-polyfill-3cfb730f.js";const r=document.querySelector(".feedback-form");document.querySelector("textarea");r.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value.trim(),a=e.currentTarget.elements.message.value.trim();n("feedback-form-state",{email:t,message:a})});function s(){const e=m("feedback-form-state");r.elements.email.value=(e==null?void 0:e.email)||"",r.elements.message.value=(e==null?void 0:e.message)||""}s();function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function n(e,t){localStorage.setItem(e,JSON.stringify(t))}r.addEventListener("submit",e=>{e.preventDefault(),e.currentTarget.elements.email.value.trim(),e.currentTarget.elements.message.value.trim(),e.target.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers2.js.map
