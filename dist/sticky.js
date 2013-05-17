define("arale/sticky/1.1.0/sticky",["$","arale/events/1.1.0/events","./utils"],function(e){function t(e){var t=this;t.options=e}function i(e){var t=this;t.options=e}var o=e("$"),r=e("arale/events/1.1.0/events"),n=e("./utils"),s=o(document),p=n.checkPositionFixedSupported(),d=n.checkPositionStickySupported(),a=n.stickyPrefix;return r.mixTo(t),t.prototype.render=function(){var e=this,t=e.elem=o(e.options.element);if(t.length&&!t.data("bind-fixed")){e._originTop=t.offset().top,e.marginTop=o.isNumeric(e.options.marginTop)?Math.min(e.options.marginTop,e._originTop):e._originTop,e._originStyles={position:null,top:null};for(var i in e._originStyles)e._originStyles.hasOwnProperty(i)&&(e._originStyles[i]=t.css(i));var r=p?o.proxy(e._supportFixed,e):o.proxy(e._supportAbsolute,e);return r(),o(window).on("scroll",function(){t.is(":visible")&&r()}),t.data("bind-fixed",!0),e}},t.prototype._supportFixed=function(){var e=this,t=e.elem,i=e._originTop,o=e.marginTop,r=i-s.scrollTop();!t.data("_fixed")&&o>=r?(e._addPlaceholder(),t.css({position:"fixed",top:o}),t.data("_fixed",!0),e.trigger("stick",t)):t.data("_fixed")&&r>o&&e._restore()},t.prototype._supportAbsolute=function(){var e=this,t=e.elem,i=e._originTop,o=e.marginTop,r=i-s.scrollTop();o>=r?(e._addPlaceholder(),t.css({position:"absolute",top:o+s.scrollTop()}),t.data("_fixed",!0),e.trigger("stick",t)):t.data("_fixed")&&r>o&&e._restore()},t.prototype._restore=function(){var e=this,t=e.elem;e._removePlaceholder(),t.css(e._originStyles),t.data("_fixed",!1),e.trigger("restored",t)},t.prototype._addPlaceholder=function(){var e=this,t=e.elem,i=!1,r=t.css("float"),s=t.css("position"),p=t.css("display");-1!==n.indexOf(["static","relative"],s)&&(i=!0),"block"!==p&&(i=!1),i&&(e._placeholder=o('<div style="visibility: hidden;margin:0;padding:0;"></div>'),e._placeholder.width(t.outerWidth(!0)).height(t.outerHeight(!0)).css("float",r).insertAfter(t))},t.prototype._removePlaceholder=function(){var e=this;e._placeholder&&e._placeholder.remove()},t.prototype.destory=function(){var e=this;e.off(),e._removePlaceholder()},r.mixTo(i),i.prototype.render=function(){var e=this,t=e.elem=o(e.options.element),i="";if(t.length&&!t.data("bind-fixed")){e._originTop=t.offset().top,e.marginTop=o.isNumeric(e.options.marginTop)?Math.min(e.options.marginTop,e._originTop):e._originTop;for(var r=0;a.length>r;r++)i+="position:"+a[r]+"sticky;";return t[0].style.cssText+=i+"top: "+e.marginTop+"px;",e._supportSticky(),o(window).on("scroll",function(){t.is(":visible")&&e._supportSticky()}),t.data("bind-fixed",!0),e}},i.prototype._supportSticky=function(){var e=this,t=e.elem,i=e._originTop,o=e.marginTop,r=i-s.scrollTop();!t.data("_fixed")&&o>=r?(t.data("_fixed",!0),e.trigger("stick",t)):t.data("_fixed")&&r>o&&(t.data("_fixed",!1),e.trigger("restored",t))},i.prototype.destory=function(){this.off()},{stick:function(e,o){var r=d?i:t;return new r({element:e,marginTop:o})},fix:function(e){return new t({element:e}).render()}}}),define("arale/sticky/1.1.0/utils",["$"],function(e){var t=(e("$"),document),i=["-webkit-","-ms-","-o-","-moz-",""],o=(window.navigator.userAgent||"").toLowerCase(),r=-1!==o.indexOf("msie"),n=-1!==o.indexOf("msie 6");return{checkPositionFixedSupported:function(){if(6==n)return!1;var e,t=document.createElement("div"),i=t.cloneNode(!1),o=document.body,r=o.style.cssText;return o.style.cssText="padding:0;margin:0",t.style.cssText="position:fixed;top:42px",o.appendChild(t),o.appendChild(i),e=t.offsetTop!==i.offsetTop,t.parentNode.removeChild(t),i.parentNode.removeChild(i),o.style.cssText=r,e},checkPositionStickySupported:function(){if(r)return!1;var e=t.body;if(t.createElement&&e&&e.appendChild&&e.removeChild){var o,n=t.createElement("div"),s=function(e){return window.getComputedStyle?window.getComputedStyle(n).getPropertyValue(e):n.currentStyle.getAttribute(e)};e.appendChild(n);for(var p=0;i.length>p&&(n.style.cssText="position:"+i[p]+"sticky;visibility:hidden;",!(o=-1!==s("position").indexOf("sticky")));p++);return n.parentNode.removeChild(n),o}return!1},indexOf:function(e,t){if(null==e)return-1;var i=Array.prototype;if(i&&e.indexOf===i)return e.indexOf(t);for(var o=0;e.length>o;o++)if(e[o]===t)return o;return-1},stickyPrefix:i}});
