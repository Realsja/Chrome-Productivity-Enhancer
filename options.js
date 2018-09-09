var array_click = [false, false, false, false, false]; //= ["clickfb", "clicktw", "clickins", "clickyt", "clickrd"];

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clickfb").addEventListener("click", fb);
  document.getElementById("clicktw").addEventListener("click", tw);
  document.getElementById("clickins").addEventListener("click", ins);
  document.getElementById("clickyt").addEventListener("click", yt);
  document.getElementById("clickrd").addEventListener("click", rd);
});

document.getElementById("resetclick").addEventListener("click", unFilter);

function fb(){
  array_click[0] = true;
  webFilter();
  return;
}
function tw(){
  array_click[1] = true;
  webFilter();
  return;
}
function ins(){
  array_click[2] = true;
  webFilter();
  return;
}
function yt(){
  array_click[3] = true;
  webFilter();
  return;
}
function rd(){
  array_click[4] = true;
  webFilter();
  return;
}

function blockRequest(details) {
  return {cancel: true};
}

function allowRequest(details) { //use .removeListener and allowRequest after unclick of button
  return {cancel: false};
}

function unFilter() {
  chrome.webRequest.onBeforeRequest.removeListener(allowRequest, {urls: ['blocking']});
}

function webFilter(urls) {
  if (array_click[0] == true) {
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"]}, ['blocking']);
  }
  if (array_click[1] == true) {
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.twitter.com/*", "*://*.twitter.net/*"]}, ['blocking']);
  }
  if (array_click[2] == true) {
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.instagram.com/*", "*://*.instgram.net/*"]}, ['blocking']);
  }
  if (array_click[3] == true) {
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.youtube.com/*", "*://*.youtube.net/*"]}, ['blocking']);
  }
  if (array_click[4] == true) {
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.reddit.com/*", "*://*.reddit.net/*"]}, ['blocking']);
  }
  else {
    chrome.webRequest.onBeforeRequest.removeListener(allowRequest, {urls: ["*://*.reddit.com/*", "*://*.reddit.net/*"]}, ['blocking']);
  }
  console.log('Blocked!');
}





  
 