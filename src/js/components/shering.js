/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/

// import html2canvas from 'html2canvas';
let img = '';
// html2canvas(document.querySelector("#cv")).then(canvas => {
//     document.body.appendChild(canvas)
//     img = encodeURI(canvas)
//     console.log(img)
//     $('head').append(`<meta property="og:image" content="${img}"/>`)
// });

const facebookBtn = document.querySelector(".facebook-btn");
const tgBtn = document.querySelector(".tg-btn");
const vkBtn = document.querySelector(".vk-btn");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
    // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  tgBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  vkBtn.setAttribute(
    "href",
    `https://vk.com/share.php?&url=${postUrl}&?title=${postTitle}&?image=${img}`
  );
}

init();