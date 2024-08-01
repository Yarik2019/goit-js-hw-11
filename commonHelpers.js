import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(t){const s="https://pixabay.com/api/",i="45225008-7dd168b8c56fcbfbf82a602af",o=new URLSearchParams({key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m({webformatURL:t,largeImageURL:s,tags:i,likes:o,views:e,comments:r,downloads:a}){return`<li class="gallery">
            <a class="list" href="${s}">
              <img class="photo" src="${t}" alt="${i}" />
              <ul class="properties-list">
                <li>
                  <p class="prop">Likes</p>
                  <p class="prop-value">${o}</p>
                </li>
                <li>
                  <p class="prop">Views</p>
                  <p class="prop-value">${e}</p>
                </li>
                <li>
                  <p class="prop">Comments</p>
                  <p class="prop-value">${r}</p>
                </li>
                <li>
                  <p class="prop">Downloads</p>
                  <p class="prop-value">${a}</p>
                </li>
              </ul>
            </a>
          </li>`}function d(t){return t.map(m).join("")}const h="/goit-js-hw-11/assets/error-7a2045ea.svg",c=document.querySelector(".js-form"),g=document.querySelector(".js-gallery-list"),n=document.querySelector(".loader");c.addEventListener("submit",y);function y(t){t.preventDefault();const i=new FormData(c).get("search").trim();if(i==="")return l("The field cannot be empty!");n.classList.remove("hidden"),f(i).then(o=>{if(o.hits.length===0)return l("Sorry, there are no images matching your search query. Please try again!");g.innerHTML=d(o.hits),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)}).finally(()=>{n.classList.add("hidden"),t.target.reset()})}function l(t){return u.error({iconUrl:h,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:t})}
//# sourceMappingURL=commonHelpers.js.map
