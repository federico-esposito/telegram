(this.webpackJsonptelegram=this.webpackJsonptelegram||[]).push([[4],{618:function(e,t,n){},620:function(e,t,n){},621:function(e,t,n){},622:function(e,t,n){},624:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),s=n(19),i=n(3),c=n(2),o=n(5),l=n(6),u=n(7),d=n(0),p=n.n(d),f=n(21),h=n.n(f),k=n(33),m=n(134),S=n.n(m),v=n(15),b=n(276),g=n(492),w=n(226),E=n(623),j=n(162),y=n(40),C=n(41),O=n(619),P=n.n(O),M=n(76),R=n(10),x=(n(618),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.props,a=r.info;return r.theme!==e.theme||a!==e.info}},{key:"render",value:function(){var e=this.props,t=e.info,n=e.onSelect,r=e.onMouseDown,a=e.onMouseEnter,s=e.onDeleteClick;if(!t)return null;var i=t.title,c=t.stickers.map((function(e,t){return p.a.createElement("div",{className:"sticker-set-item",key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return n(e)},onMouseEnter:a,onMouseDown:r,style:{width:R.lb,height:R.lb}},p.a.createElement(M.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:R.lb-6,preview:!0,source:M.a.PICKER}))}));return p.a.createElement("div",{className:"sticker-set"},p.a.createElement("div",{className:"sticker-set-title"},p.a.createElement("div",{className:"sticker-set-title-wrapper"},p.a.createElement("span",null,i)),s&&p.a.createElement(g.a,{"aria-label":"delete",classes:{root:"sticker-set-icon-root"},size:"small",onClick:s},p.a.createElement(P.a,{fontSize:"inherit"}))),p.a.createElement("div",{className:"sticker-set-content"},c))}}]),t}(p.a.Component)),U=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(i.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,r=n.duration;n.start=e,n.end=t+r,n.draw(e)},this.draw=function(t){var r=n.stopped,a=n.duration,s=n.start,i=n.options;if(t-s>a&&i.every((function(e){return e.to===e.last}))&&(n.stopped=!0),!r){var c=Math.min(t-s,a),o=0===a?1:c/a,l=e.outSine(o);i.forEach((function(e){var t=e.from,n=e.to,r=e.func;e.last=t+(n-t)*l,r(e.last)})),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=r,this.duration=t}return Object(c.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}(),D=n(55),T=(n(620),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateStickerSetPosition=function(e){var t=e.position;n.setState({position:t})},n.scrollToPosition=function(){var e=n.state.position,t=Object(y.a)(n),r=t.animator,a=t.anchorRef,s=t.scrollRef.current,i=a.current,c=C.findDOMNode(i),o=s.scrollLeft,l=44*e-147,u=Number(c.style.left.replace("px","")),d=44*e;r&&r.stop(),n.animator=new U(0,[{from:o,to:l,func:function(e){return s.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return c.style.left=e+"px"}}]),setTimeout((function(){n.animator&&n.animator.start()}),0)},n.handleWheel=function(e){var t=Object(y.a)(n).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},n.handleSelect=function(e){var t=n.props,r=t.stickers;(0,t.onSelect)(r.indexOf(e))},n.scrollRef=p.a.createRef(),n.anchorRef=p.a.createRef(),n.state={position:0},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){D.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){D.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props.stickers.map((function(t){return p.a.createElement(M.b,{key:t.sticker.id,className:"stickers-picker-header-sticker",style:{width:32,height:32},sticker:t,play:!1,autoplay:!1,blur:!1,displaySize:32,preview:!0,source:M.a.PICKER_HEADER,openMedia:function(){return e.handleSelect(t)}})}));return p.a.createElement("div",{className:"stickers-picker-header"},p.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll",onWheel:this.handleWheel},p.a.createElement("div",{className:"stickers-picker-header-items"},t),p.a.createElement("div",{ref:this.anchorRef,className:"stickers-picker-header-anchor"})))}}]),t}(p.a.Component)),I=n(24),N=n(20),L=n(46),_=n(4),V=n(1),A=(n(621),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onUpdateInstalledStickerSets=function(e){var t=e.is_masks;e.sticker_set_ids;t&&n.filterSets()},n.onUpdateRecentStickers=function(e){n.reloadRecentContent()},n.scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(s.a)(a.a.mark((function e(t,r,s){var i,c,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,V.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:t=e.sent;case 4:if(s){e.next=13;break}return e.next=7,V.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return i=e.sent,c=[],i.sets.forEach((function(e){c.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=12,Promise.all(c);case 12:s=e.sent;case 13:o=s.slice(0,5),l=s.reduce((function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e}),[]),n.setState({recent:t,stickerSets:r,sets:o,fullSets:s,headerStickers:l}),n.setsLength=o.length;case 17:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,r=n.state.sets,a=[];r.forEach((function(r){var s=n.itemsMap.get(r.id),i=C.findDOMNode(s);if(i){var c=t.scrollTop-e,o=t.scrollTop+t.offsetHeight+e,l=i.offsetTop,u=i.offsetTop+i.clientHeight;(l>=c&&i.offsetTop<=o||u>=c&&u<=o||l<=c&&u>=o)&&a.push(r)}})),a.forEach((function(e){var t=_.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(N.x)(t,e))}))},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,r=e.scrollHeight,a=0,s=0;t.forEach((function(t,i){var c=n.itemsMap.get(t.id);if(c){var o=C.findDOMNode(c);if(o){s=0===i?o.offsetTop:s;var l=o.offsetTop-s;if(o&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=r&&(r=u,a=i)}}}})),V.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:a})},n.handleScroll=Object(s.a)(a.a.mark((function e(){var t,r,s,i,c,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=5;break}return e.abrupt("return");case 5:if(r=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(r=!0),r){e.next=9;break}return e.abrupt("return",!1);case 9:if(s=n.state,i=s.sets,(c=s.stickerSets).sets.length!==i.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,o=[],c.sets.slice(n.setsLength,n.setsLength+5).forEach((function(e){o.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=17,Promise.all(o).finally((function(){n.loadingChunk=!1}));case 17:l=e.sent,n.setsLength+=l.length,n.setState({sets:i.concat(l)});case 20:case"end":return e.stop()}}),e)}))),n.loadPreviewContent=function(e){var t=n.state,r=t.recent,a=t.sets,s=Object(L.g)([r].concat(a)).find((function(t){return t.sticker.id===e}));if(s){var i=_.a.getStore();Object(N.w)(i,s,null);Object(L.f)(s,a,5).forEach((function(e){Object(N.w)(i,e,null)}))}},n.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var r=n.props.onPreview,a=n.state,s=a.recent,i=a.sets;r(Object(L.g)([s].concat(i)).find((function(e){return e.sticker.id===t})))}},n.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t){n.mouseDownStickerId=t;var r=Date.now();return n.setState({previewStickerId:t,timestamp:r,showPreview:!1,cancelSend:!1}),setTimeout((function(){n.state.timestamp===r&&n.setState({showPreview:!0,cancelSend:!0},(function(){var e=n.props.onPreview,r=n.state,a=r.recent,s=r.sets;e(Object(L.g)([a].concat(s)).find((function(e){return e.sticker.id===t})))}))}),500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,s,i,c,o,l,u,d,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.state,s=r.sets,i=r.stickerSets,c=Object(y.a)(n),o=c.scrollRef,!(t<s.length)){e.next=7;break}(l=n.itemsMap.get(s[t].id))&&(u=C.findDOMNode(l))&&(o.current.scrollTop=u.offsetTop),e.next=21;break;case 7:if(!(t<i.sets.length)){e.next=21;break}if(!n.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(i.sets.length!==s.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,d=[],i.sets.slice(n.setsLength,t+1).forEach((function(e){d.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=17,Promise.all(d).finally((function(){return n.loadingChunk=!1}));case 17:p=e.sent,n.setsLength+=p.length,f=s.concat(p),n.setState({sets:f},(function(){t<f.length&&n.handleSelectSet(t)}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteRecent=function(){V.a.send({"@type":"clearRecentStickers",is_attached:!1})},n.handleDeleteStickerSet=function(e){V.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},n.scrollRef=p.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(I.c)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(I.x)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(I.x)(n.updatePosition,250),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.state,a=r.position,s=r.recent,i=r.stickerSets,c=r.sets,o=r.showPreview;return t.recent!==s||(t.stickerSets!==i||(t.sets!==c||(t.showPreview!==o||t.position!==a)))}},{key:"componentDidMount",value:function(){D.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),D.a.on("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"componentWillUnmount",value:function(){D.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),D.a.off("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"filterSets",value:function(e){var t=this.state;t.sets,t.stickerSets}},{key:"reloadRecentContent",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:t=e.sent,this.setState({recent:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.t,n=this.state,r=n.recent,a=(n.stickerSets,n.sets),s=n.headerStickers;this.itemsMap.clear();var i=a.map((function(t){return p.a.createElement(x,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter})})),c=r&&r.stickers.length>0?{stickers:r.stickers,title:t("RecentStickers")}:null;return p.a.createElement("div",{className:"stickers-picker"},p.a.createElement(T,{onSelect:this.handleSelectSet,stickers:s}),p.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},Boolean(c)&&p.a.createElement(x,{info:c,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),i))}}]),t}(p.a.Component)),F=Object(k.a)(Object(k.d)(),Object(v.c)(),Object(k.c)())(A),B=n(12),H=n(99),W=(n(622),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout((function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets())}),R.f)},n.loadStickerSets=Object(s.a)(a.a.mark((function e(){var t,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,V.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return n.recent=e.sent,e.next=7,V.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach((function(e){t.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=12,Promise.all(t);case 12:n.sets=e.sent,r=n.stickersPickerRef.current,s=_.a.getStore(),Object(N.v)(s,n.recent),n.sets.slice(0,5).reverse().forEach((function(e){Object(N.x)(s,e),r.loadedSets.set(e.id,e.id)})),n.sets.reduce((function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e}),[]).forEach((function(e){Object(N.y)(s,e)}));case 20:case"end":return e.stop()}}),e)}))),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout((function(){n.tryClosePicker()}),R.f)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout((function(){n.tryClosePicker()}),R.f)},n.updatePicker=function(e){n.setState({open:e})},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;e.loadContent(n.recent,n.stickerSets,n.sets),n.setState({tab:1}),1===t&&e.scrollTop()},n.handleStickerSend=function(e){e&&(V.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),V.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=p.a.createRef(),n.stickersPickerRef=p.a.createRef(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){B.a.on("clientUpdateThemeChange",this.onClientUpdateChange),H.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){B.a.off("clientUpdateThemeChange",this.onClientUpdateChange),H.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.t,r=this.state,a=r.open,s=r.tab,i=r.sticker;if(a&&!this.picker){var c={search:n("Search"),notfound:n("NotEmojiFound"),skintext:n("ChooseDefaultSkinTone"),categories:{search:n("SearchResults"),recent:n("Recent"),people:n("SmileysPeople"),nature:n("AnimalsNature"),foods:n("FoodDrink"),activity:n("Activity"),places:n("TravelPlaces"),objects:n("Objects"),symbols:n("Symbols"),flags:n("Flags"),custom:n("Custom")}};this.picker=p.a.createElement(E.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:t.palette.primary.dark,i18n:c,native:Object(I.o)(),style:{width:338,overflowX:"hidden"}}),this.stickersPicker=p.a.createElement(F,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview})}return p.a.createElement(p.a.Fragment,null,p.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===t.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),p.a.createElement(g.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},p.a.createElement(w.a,null)),p.a.createElement("div",{className:h()("emoji-picker-root",{"emoji-picker-root-opened":a}),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},p.a.createElement("div",{className:"emoji-picker-header"},p.a.createElement(b.a,{color:0===s?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},n("Emoji")),p.a.createElement(b.a,{color:1===s?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},n("Stickers"))),p.a.createElement("div",{className:h()("emoji-picker-content",{"emoji-picker-content-stickers":1===s})},this.picker,this.stickersPicker),Boolean(i)&&p.a.createElement(j.a,{sticker:i})))}}]),t}(p.a.Component)),z=Object(k.a)(Object(v.c)(),S.a);t.default=z(W)}}]);
//# sourceMappingURL=4.1572f2ff.chunk.js.map