import{a as g,S as P,i as l}from"./assets/vendor-1e77685b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const $="45436364-f90a0cfe5f9b13d8d0e95a311",p=15;g.defaults.baseURL="https://pixabay.com/api/";async function h(e,o){return(await g.get("",{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:p}})).data}const y=document.querySelector(".gallery"),L=document.querySelector(".loader"),w=document.querySelector(".load-more-btn"),x=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function B({webformatURL:e,largeImageURL:o,tags:r,likes:i,views:t,comments:s,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-img" src="${e}" alt="${r}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${i}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${t}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Comments</p>
          <p class="img-info-value">${s}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${a}</p>
        </li>
      </ul>
    </li>
  `}function v(e){const o=e.map(B).join("");y.insertAdjacentHTML("beforeend",o),x.refresh()}function O(){y.innerHTML=""}function b(){L.classList.remove("is-hidden")}function S(){L.classList.add("is-hidden")}function q(){w.classList.remove("is-hidden")}function m(){w.classList.add("is-hidden")}const C="/goit-advancedjs-hw-04/assets/icon-7962080a.svg",u=document.querySelector(".form"),T=document.querySelector(".load-more-btn"),A=document.querySelector(".gallery"),c={timeout:5e3,position:"topRight",iconUrl:C};let d="",n=1,f=0;u.addEventListener("submit",D);T.addEventListener("click",R);async function D(e){e.preventDefault();const o=u.elements["search-text"].value.trim();if(!o){l.show({...c,message:"Please enter a search query!"});return}d=o,n=1,f=0,O(),m(),b();try{const{hits:r,totalHits:i}=await h(d,n);if(r.length===0){l.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"});return}f=Math.ceil(i/p),v(r),E()}catch(r){M(r)}finally{S(),u.reset()}}async function R(){n+=1,m(),b();try{const{hits:e}=await h(d,n);v(e),_(),E()}catch(e){n-=1,q(),M(e)}finally{S()}}function E(){if(n<f){q();return}m(),l.show({...c,message:"We're sorry, but you've reached the end of search results."})}function _(){const e=A.firstElementChild;if(!e)return;const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}function M(e){l.show({...c,message:`Something went wrong: ${e.message}`})}
//# sourceMappingURL=commonHelpers.js.map
