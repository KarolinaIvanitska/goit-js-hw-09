import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");document.querySelector("textarea");a.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim();o("feedback-form-state",{email:t,message:r})});function n(){const e=m("feedback-form-state");a.elements.email.value=(e==null?void 0:e.email)||"",a.elements.message.value=(e==null?void 0:e.message)||""}n();function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function o(e,t){localStorage.setItem(e,JSON.stringify(t))}a.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim(),s={email:t,message:r};if(!t||!r){alert("All form fields must be filled in");return}console.log(s),localStorage.removeItem("feedback-form-state"),e.target.reset()});
//# sourceMappingURL=commonHelpers2.js.map