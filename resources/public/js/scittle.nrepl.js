(function(){
'use strict';var Apa=function(a,b){var c,d=$APP.ma(b);d=(c="array"==d||"object"==d&&"number"==typeof b.length)?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a},Bpa=function(a,b){return $APP.Gv(a,b)},RK=function(a,b){return $APP.wK.g(a,b)},Cpa=function(a,b){b=RK(a,$APP.Hl("(keys (ns-map '%s))","%s",b));b=$APP.Ej.g(function(c){return["`",$APP.q.h(c)].join("")},b);b=["[",$APP.Kq.g(" ",b),"]"].join("");a=RK(a,b);return $APP.it.g(function(c){return $APP.Ql($APP.q.h(c),"nbb.internal")},
a)},Dpa=function(a,b,c){c=$APP.Nl.g(c,/\//);$APP.C.j(c,0,null);var d=$APP.C.j(c,1,null),e=RK(a,$APP.ck.l($APP.D([$APP.X.h($APP.w($APP.S.l(new $APP.G(null,$APP.pr,null,1,null),new $APP.G(null,$APP.ff($APP.X.h($APP.w($APP.S.g(new $APP.G(null,VM,null,1,null),new $APP.G(null,$APP.X.h($APP.w($APP.S.g(new $APP.G(null,$APP.iF,null,1,null),new $APP.G(null,$APP.X.h($APP.w($APP.S.g(new $APP.G(null,$APP.ll,null,1,null),new $APP.G(null,b,null,1,null)))),null,1,null)))),null,1,null))))),null,1,null),$APP.D([new $APP.G(null,
$APP.X.h($APP.w($APP.S.l(new $APP.G(null,$APP.jF,null,1,null),new $APP.G(null,$APP.X.h($APP.w($APP.S.g(new $APP.G(null,$APP.NH,null,1,null),new $APP.G(null,VM,null,1,null)))),null,1,null),$APP.D([new $APP.G(null,VM,null,1,null)])))),null,1,null)]))))])));if($APP.p(e)&&(a=$APP.p(d)?function(){var h=$APP.Qa(d,"."),n=$APP.Nl.g(d,/\./);h=h?n:$APP.fj(n);return new $APP.M(null,2,5,$APP.O,[[$APP.q.h(b),"/",$APP.w(h)?[$APP.Kq.g(".",h),"."].join(""):null].join(""),$APP.Dg.j(Apa,e,h)],null)}():new $APP.M(null,
2,5,$APP.O,[[$APP.q.h(b),"/"].join(""),e],null),$APP.p(a))){var f=$APP.C.j(a,0,null),g=$APP.C.j(a,1,null);a=function(){for(var h=g,n=$APP.ch;;)if($APP.p(h)){var k=Object.getPrototypeOf(h);n=$APP.Th.g(n,Object.getOwnPropertyNames(h));h=k}else return n}();return $APP.Ej.g(function(h){return new $APP.M(null,2,5,$APP.O,[null,[$APP.q.h(f),$APP.q.h(h)].join("")],null)},a)}return null},Epa=function(a){var b=$APP.gg(a);a=$APP.Te.g(b,$APP.vq);var c=$APP.Te.g(b,$APP.dt);try{var d=$APP.p(a)?Bpa(c,$APP.Nj.h(a)):
null,e=$APP.eg([$APP.jr,$APP.p(d)?d:$APP.r($APP.jr)]);$APP.mq(e);try{var f=function(){var ia=$APP.yn.h(b);return $APP.p(ia)?ia:$APP.gf.h(b)}();if($APP.p(f)){var g=-1!=f.indexOf("/"),h=g?function(){var ia=$APP.Nl.g(f,/\//);ia=null==ia?null:$APP.y(ia);return null==ia?null:$APP.Nj.h(ia)}():null,n=Cpa(c,RK(c,"(ns-name *ns*)")),k=$APP.Ej.g(function(ia){return new $APP.M(null,3,5,$APP.O,[$APP.If(ia),$APP.gj(ia),WM],null)},n),u=RK(c,"(let [m (ns-aliases *ns*)] (zipmap (keys m) (map ns-name (vals m))))"),
v=$APP.hj($APP.Si(u),$APP.Qi(u)),x=$APP.Qn.h($APP.Yg.l(function(ia){var oa=$APP.Te.g(u,ia);ia=RK(c,$APP.Hl("(keys (ns-publics '%s))","%s",oa));return $APP.Ej.g(function(la){return new $APP.M(null,3,5,$APP.O,[$APP.q.h(oa),$APP.q.h(la),XM],null)},ia)},$APP.D([$APP.Qi(u)]))),B=$APP.Ej.g(function(ia){return new $APP.M(null,3,5,$APP.O,[$APP.q.h(ia),null,XM],null)},RK(c,"(all-ns)")),F=g?Dpa(c,h,f):null,P=$APP.p(F)?null:g?function(){var ia=$APP.Te.j(u,h,h),oa=RK(c,$APP.Hl("(and (find-ns '%s)\n                                                                                         (keys (ns-publics '%s)))",
"%s",ia));return $APP.Ej.g(function(la){return new $APP.M(null,3,5,$APP.O,[$APP.q.h(ia),$APP.q.h(la),XM],null)},oa)}():null,U=$APP.S.l(k,x,$APP.D([B,P])),Z=$APP.Iq.g(function(ia){var oa=$APP.C.j(ia,0,null);var la=$APP.C.j(ia,1,null),K=$APP.C.j(ia,2,null);ia=$APP.xj(f);K=(K=$APP.A.g(WM,K))?$APP.tj(ia,la):K;K=$APP.p(K)?new $APP.M(null,2,5,$APP.O,[oa,la],null):null;$APP.p(K)?oa=K:$APP.p(oa)?(K=$APP.p($APP.tj(ia,[$APP.q.h($APP.Te.g(v,$APP.Nj.h(oa))),"/",$APP.q.h(la)].join("")))?new $APP.M(null,2,5,$APP.O,
[oa,[$APP.q.h($APP.Te.g(v,$APP.Nj.h(oa))),"/",$APP.q.h(la)].join("")],null):null,oa=$APP.p(K)?K:$APP.p($APP.tj(ia,[$APP.q.h(oa),"/",$APP.q.h(la)].join("")))?new $APP.M(null,2,5,$APP.O,[oa,[$APP.q.h(oa),"/",$APP.q.h(la)].join("")],null):null):oa=null;return oa},U),ba=$APP.S.g(Z,F),ca=$APP.ff($APP.yy.h($APP.Ej.g(function(ia){var oa=$APP.C.j(ia,0,null);ia=$APP.C.j(ia,1,null);ia=new $APP.m(null,1,["candidate",$APP.q.h(ia)],null);return $APP.p(oa)?$APP.Vi.j(ia,"ns",$APP.q.h(oa)):ia},ba)));return new $APP.m(null,
2,[YM,ca,$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null)],null)}return new $APP.m(null,1,[$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null)],null)}finally{$APP.oq()}}catch(ia){return console.error("ERROR",ia),new $APP.m(null,2,[YM,$APP.ch,$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null)],null)}},WK=function(a,b){return a.replace("%s",b)},Hpa=function(a){var b=$APP.gg(a);a=$APP.Te.g(b,$APP.vq);var c=$APP.Te.g(b,$APP.Ika);b=$APP.Te.g(b,$APP.dt);if($APP.vb(c))return new $APP.m(null,2,[$APP.Ny,new $APP.M(null,
2,5,$APP.O,["no-eldoc","done"],null),ZM,"Message should contain a `sym`"],null);a=WK(WK("(when-let [the-var (ns-resolve '%s '%s)]\n               (meta the-var))",a),c);try{var d=new $APP.M(null,2,5,$APP.O,[$M,RK(b,a)],null)}catch(h){d=new $APP.M(null,2,5,$APP.O,[aN,$APP.q.h(h)],null)}c=$APP.C.j(d,0,null);var e=$APP.C.j(d,1,null),f=$APP.gg(e);b=$APP.Te.g(f,$APP.T);a=$APP.Te.g(f,$APP.Gm);d=$APP.Te.g(f,$APP.Hm);var g=$APP.Te.g(f,$APP.V);f=$APP.Te.g(f,$APP.Y);return $APP.p($APP.p(g)?$APP.A.g(c,$M):g)?
(c=new $APP.m(null,6,[$APP.vq,function(){var h=null==e?null:$APP.vq.h(e);return null==h?null:h.name}(),$APP.Y,$APP.ck.l($APP.D([f])),bN,$APP.Hq.g(function(h){return $APP.Hq.g($APP.q,h)},f),cN,$APP.Dg.g($APP.Gb,f).join("\n"),$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null),$APP.V,g],null),c=$APP.p(b)?$APP.Vi.j(c,$APP.T,b):c,a=$APP.p(a)?$APP.Vi.j(c,$APP.Gm,a):c,$APP.p(d)?$APP.Vi.j(a,$APP.Hm,d):a):new $APP.m(null,1,[$APP.Ny,new $APP.M(null,2,5,$APP.O,["done","no-eldoc"],null)],null)},bL=function(a,
b){var c=$APP.gg(a);a=$APP.Te.g(c,$APP.br);var d=$APP.Te.g(c,dN);c=$APP.Te.g(c,eN);b=$APP.gg(b);var e=$APP.Te.g(b,$APP.vq);e=$APP.p(e)?e:$APP.q.h($APP.r(aL));a=$APP.zm.g($APP.Vi.l(b,$APP.br,a,$APP.D([dN,d,$APP.vq,e])),$APP.dt);return $APP.p(c)?c.h?c.h(a):c.call(null,a):window.ws_nrepl.send($APP.q.h(a))},cL=function(a){var b=Hpa($APP.Vi.j(a,$APP.dt,$APP.sw()));return bL(a,b)},ZM=new $APP.H(null,"err","err",-2089457205),YM=new $APP.H(null,"completions","completions",-190930179),$M=new $APP.H("sci.nrepl.info",
"success","sci.nrepl.info/success",-493835426),VM=new $APP.t(null,"resolved__32674__auto__","resolved__32674__auto__",-593044439,null),dN=new $APP.H(null,"session","session",1008279103),fN=new $APP.H(null,"lookup","lookup",1225356838),cN=new $APP.H(null,"arglists-str","arglists-str",1439431437),gN=new $APP.H(null,"load-file","load-file",-424586670),hN=new $APP.H(null,"op","op",-1882987955),WM=new $APP.H(null,"unqualified","unqualified",-98904653),iN=new $APP.H(null,"describe","describe",1369790582),
jN=new $APP.H(null,"ws","ws",86841443),kN=new $APP.H(null,"code","code",1586293142),bN=new $APP.H(null,"eldoc","eldoc",-1321421900),eN=new $APP.H(null,"send-fn","send-fn",351002041),lN=new $APP.H(null,"versions","versions",536521978),mN=new $APP.H(null,"ops","ops",1237330063),XM=new $APP.H(null,"qualified","qualified",-2065109343),nN=new $APP.H("sci.nrepl.server","success","sci.nrepl.server/success",-67357591),oN=new $APP.H(null,"clone","clone",711747572),pN=new $APP.H(null,"info","info",-317069002),
rN=new $APP.H("sci.nrepl.server","error","sci.nrepl.server/error",855827645),aN=new $APP.H("sci.nrepl.info","error","sci.nrepl.info/error",1267042764),sN=new $APP.H(null,"complete","complete",-500388775);var aL=$APP.Kg($APP.r($APP.jr)),dL=new $APP.m(null,6,[$APP.tja,function(a){a=$APP.gg(a);var b=$APP.Te.g(a,kN);try{var c=$APP.O;b:{var d=$APP.eg([$APP.jr,$APP.r(aL)]);$APP.mq(d);try{var e=$APP.Kp(b);for(d=null;;){var f=$APP.sw();var g=$APP.kw(f,e);if($APP.A.g($APP.jw,g)){$APP.Lg(aL,$APP.r($APP.jr));var h=d;break b}d=$APP.mw($APP.sw(),g)}}finally{$APP.oq()}h=void 0}var n=new $APP.M(null,2,5,c,[nN,h],null)}catch(k){n=new $APP.M(null,2,5,$APP.O,[rN,$APP.q.h(k)],null)}h=$APP.C.j(n,0,null);n=$APP.C.j(n,
1,null);h=h instanceof $APP.H?h.P:null;switch(h){case "sci.nrepl.server/success":return bL(a,new $APP.m(null,1,[$APP.xf,$APP.ck.l($APP.D([n]))],null)),bL(a,new $APP.m(null,1,[$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null)],null));case "sci.nrepl.server/error":return bL(a,new $APP.m(null,1,[ZM,$APP.ck.l($APP.D([n]))],null)),bL(a,new $APP.m(null,2,[$APP.ou,$APP.ck.l($APP.D([n])),$APP.Ny,new $APP.M(null,2,5,$APP.O,["error","done"],null)],null));default:throw Error(["No matching clause: ",$APP.q.h(h)].join(""));
}},pN,cL,bN,cL,fN,cL,iN,function(a){return bL(a,new $APP.m(null,3,[lN,new $APP.m(null,1,["sci-nrepl",new $APP.m(null,3,"major 0 minor 0 incremental 1".split(" "),null)],null),mN,$APP.hj($APP.Ej.g($APP.gj,$APP.S.l($APP.Qi(dL),new $APP.$i(null,new $APP.m(null,2,[gN,null,oN,null],null),null),$APP.D([new $APP.$i(null,new $APP.m(null,1,["close",null],null),null)]))),$APP.oo.h($APP.fg)),$APP.Ny,new $APP.M(null,1,5,$APP.O,["done"],null)],null))},sN,function(a){var b=Epa($APP.Vi.j(a,$APP.dt,$APP.sw()));return bL(a,
b)}],null);var eL=window.SCITTLE_NREPL_WEBSOCKET_PORT;if($APP.p(eL)){var tN=window,uN=WebSocket,vN;vN=["ws://",$APP.q.h(window.location.hostname),":",$APP.q.h(eL),"/",$APP.q.h("_nrepl")].join("");tN.ws_nrepl=new uN(vN)}var gL=window.ws_nrepl;
$APP.p(gL)&&($APP.Ly.l($APP.D([jN,gL])),gL.onmessage=function(a){a=$APP.ZH.h(a.data);var b=hN.h(a);b=dL.h?dL.h(b):dL.call(null,b);return $APP.p(b)?b.h?b.h(a):b.call(null,a):bL(a,$APP.ym.l($APP.D([a,new $APP.m(null,2,[$APP.Ny,new $APP.M(null,2,5,$APP.O,["error","done"],null),ZM,"unknown-op"],null)])))},gL.onerror=function(a){return console.log(a)});
}).call(this);