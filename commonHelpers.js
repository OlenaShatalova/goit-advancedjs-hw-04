import{a as h,S as M,i as c}from"./assets/vendor-1e77685b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const $="45436364-f90a0cfe5f9b13d8d0e95a311",p=15,B=16;h.defaults.baseURL="https://pixabay.com/api/";async function y(e,o,r=p){return(await h.get("",{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}})).data}const w=document.querySelector(".gallery"),L=document.querySelector(".loader"),v=document.querySelector(".load-more-btn"),O=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function T({webformatURL:e,largeImageURL:o,tags:r,likes:i,views:t,comments:s,downloads:a}){return`
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
  `}function b(e){const o=e.map(T).join("");w.insertAdjacentHTML("beforeend",o),O.refresh()}function A(){w.innerHTML=""}function E(){L.classList.remove("is-hidden")}function P(){L.classList.add("is-hidden")}function S(){v.classList.remove("is-hidden")}function g(){v.classList.add("is-hidden")}const _="/goit-advancedjs-hw-04/assets/icon-7962080a.svg",d=document.querySelector(".form"),C=document.querySelector(".load-more-btn"),R=document.querySelector(".gallery"),u={timeout:5e3,position:"topRight",iconUrl:_};let m="",n=1,f=0,l=p;const D=window.matchMedia("(min-width: 768px) and (max-width: 1199px)");d.addEventListener("submit",G);C.addEventListener("click",j);async function G(e){e.preventDefault();const o=d.elements["search-text"].value.trim();if(!o){c.show({...u,message:"Please enter a search query!"});return}m=o,n=1,f=0,l=D.matches?B:p,A(),g(),E();try{const{hits:r,totalHits:i}=await y(m,n,l);if(r.length===0){c.show({...u,message:"Sorry, there are no images matching your search query. Please try again!"});return}f=Math.ceil(i/l),b(r),x()}catch(r){q(r)}finally{P(),d.reset()}}async function j(){n+=1,g(),E();try{const{hits:e}=await y(m,n,l);b(e),H(),x()}catch(e){n-=1,S(),q(e)}finally{P()}}function x(){if(n<f){S();return}g(),c.show({...u,message:"We're sorry, but you've reached the end of search results."})}function H(){const e=R.firstElementChild;if(!e)return;const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}function q(e){c.show({...u,message:`Something went wrong: ${e.message}`})}
//# sourceMappingURL=commonHelpers.js.map
