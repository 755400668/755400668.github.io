/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","769c8e65767f9617577f30304da1920a"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","2fcfd3bebe5abb60e29af9461a1220d6"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","db55470362c24dc2bd398dec12e2e101"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","b1a71bf799c9dc0f3d25da96cc31d96d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","600df17da822f3c918b85c11d5d401aa"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/LinkedList/index.html","f2bda3768caa665d0c50a2495b945a63"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","aefad0ab0cd28241cb7160192c36b189"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","d3da0c5ded76410bbb267085dfd9060d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","50f1e844015611ad1c0f1760ea24e2e1"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","1304ece39bde4c43804f45bf87eab5d8"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","4137e008f7d06cac53bc4eb12e61891f"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/Sort/index.html","cca07bc6ca49669e88cab0bbb9886ccb"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/Basic improvement/index.html","f929558ebed5434f84e90c59fceeca35"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","0f0cb1ed1c996ac0faf82616ec64a5d6"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","49c0a28a6aec8731f4cc3b7897ad7abc"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","ee4ff15ccee0b99cf78c9df53d205a9f"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","49afd7183c7c0e420f28958704cb1c9d"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","08f6f7b223eaf27c8ef0db981d03fad1"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","c6ac510d558256312f263be5109f260c"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","6567d19c3ef4f1f500f7aa5edd5746d1"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","24f55801f971a8512bf6847e4a4d2c22"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","1dba5821b748a26cdc715c677e7be549"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","8b17d4fb55c23357855e9e5c17572550"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","ec26da5c8ea601e31aafcdb428050439"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","1a0872c492a855c43b3eace509ca701d"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","3a6a2f8040cbfdc732f8f59a1d7262ce"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","89ed2a0ff142020ec32d46b59dbced4e"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","a4e6f63ef7b538d46b4d154d3fe70cac"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","5f283d29a4c238fa6c6007a2eff3d6ec"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/index.html","5d332fecdf4186b7641759983376de22"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","f81b0a7e94af62390f75ba0c764c1765"],["E:/blog/灰灰爱吃小云朵/public/page/2/index.html","94c0299375d6af06c24df3d2e7c680d5"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","cf55ea019c101259087ec1d52595ab26"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","2c73a7b9cf5f72b56ac867965bfa8e7e"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","93f625d9bbecd32502485307b5e8e375"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","b3d4c6b2c79aac201ec0434a687e3a97"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","ba8f7bfa9792c57de089feceaa7b4abb"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","43a704a8200861b7c6b8bf7fdae6ee38"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","9e85fc38e017eff6c5307b6c45d8ca62"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","ab49e0b846e4ffe8c963b7d7f1e2fa36"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","094a75ffd83a59edf21929d3e2b2c51a"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","5f1a21c2e83df0e38c8ea0a3df9891b3"],["E:/blog/灰灰爱吃小云朵/public/tags/排序/index.html","473178c999654e62a43c81fbb335ff80"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","04b81c1ff9de629c17f42f1294d877e4"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","d8f49f5584d9a54ece0edb2679fe5773"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","8772cdecbddaefb9207cfb48d55336e1"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","87a38724ed19e7ea412aeafc34a3fca3"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","fc467378c71ee82238c19fe75443a142"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","c9208ee4f4aa1d5d8440878df2772128"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","2301a302f5099015a72afbe3dba39012"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







