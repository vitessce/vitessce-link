"use strict";(self.webpackChunkvitessce_Link=self.webpackChunkvitessce_Link||[]).push([[729],{9236:(r,n,e)=>{e.d(n,{a:()=>er,g:()=>nr,u:()=>tr,z:()=>ar});var a=Uint8Array,t=Uint16Array,i=Int32Array,f=new a([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),o=new a([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new a([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),u=function(r,n){for(var e=new t(31),a=0;a<31;++a)e[a]=n+=1<<r[a-1];var f=new i(e[30]);for(a=1;a<30;++a)for(var o=e[a];o<e[a+1];++o)f[o]=o-e[a]<<5|a;return{b:e,r:f}},v=u(f,2),c=v.b,s=v.r;c[28]=258,s[258]=28;for(var h=u(o,0),d=h.b,w=h.r,g=new t(32768),b=0;b<32768;++b){var m=(43690&b)>>1|(21845&b)<<1;m=(61680&(m=(52428&m)>>2|(13107&m)<<2))>>4|(3855&m)<<4,g[b]=((65280&m)>>8|(255&m)<<8)>>1}var y=function(r,n,e){for(var a=r.length,i=0,f=new t(n);i<a;++i)r[i]&&++f[r[i]-1];var o,l=new t(n);for(i=1;i<n;++i)l[i]=l[i-1]+f[i-1]<<1;if(e){o=new t(1<<n);var u=15-n;for(i=0;i<a;++i)if(r[i])for(var v=i<<4|r[i],c=n-r[i],s=l[r[i]-1]++<<c,h=s|(1<<c)-1;s<=h;++s)o[g[s]>>u]=v}else for(o=new t(a),i=0;i<a;++i)r[i]&&(o[i]=g[l[r[i]-1]++]>>15-r[i]);return o},p=new a(288);for(b=0;b<144;++b)p[b]=8;for(b=144;b<256;++b)p[b]=9;for(b=256;b<280;++b)p[b]=7;for(b=280;b<288;++b)p[b]=8;var k=new a(32);for(b=0;b<32;++b)k[b]=5;var M=y(p,9,0),z=y(p,9,1),x=y(k,5,0),A=y(k,5,1),E=function(r){for(var n=r[0],e=1;e<r.length;++e)r[e]>n&&(n=r[e]);return n},T=function(r,n,e){var a=n/8|0;return(r[a]|r[a+1]<<8)>>(7&n)&e},C=function(r,n){var e=n/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(7&n)},D=function(r){return(r+7)/8|0},I=function(r,n,e){return(null==n||n<0)&&(n=0),(null==e||e>r.length)&&(e=r.length),new a(r.subarray(n,e))},U=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(r,n,e){var a=new Error(n||U[r]);if(a.code=r,Error.captureStackTrace&&Error.captureStackTrace(a,F),!e)throw a;return a},L=function(r,n,e,t){var i=r.length,u=t?t.length:0;if(!i||n.f&&!n.l)return e||new a(0);var v=!e,s=v||2!=n.i,h=n.i;v&&(e=new a(3*i));var w=function(r){var n=e.length;if(r>n){var t=new a(Math.max(2*n,r));t.set(e),e=t}},g=n.f||0,b=n.p||0,m=n.b||0,p=n.l,k=n.d,M=n.m,x=n.n,U=8*i;do{if(!p){g=T(r,b,1);var L=T(r,b+1,3);if(b+=3,!L){var O=r[(N=D(b)+4)-4]|r[N-3]<<8,S=N+O;if(S>i){h&&F(0);break}s&&w(m+O),e.set(r.subarray(N,S),m),n.b=m+=O,n.p=b=8*S,n.f=g;continue}if(1==L)p=z,k=A,M=9,x=5;else if(2==L){var _=T(r,b,31)+257,j=T(r,b+10,15)+4,P=_+T(r,b+5,31)+1;b+=14;for(var q=new a(P),B=new a(19),G=0;G<j;++G)B[l[G]]=T(r,b+3*G,7);b+=3*j;var H=E(B),J=(1<<H)-1,K=y(B,H,1);for(G=0;G<P;){var N,Q=K[T(r,b,J)];if(b+=15&Q,(N=Q>>4)<16)q[G++]=N;else{var R=0,V=0;for(16==N?(V=3+T(r,b,3),b+=2,R=q[G-1]):17==N?(V=3+T(r,b,7),b+=3):18==N&&(V=11+T(r,b,127),b+=7);V--;)q[G++]=R}}var W=q.subarray(0,_),X=q.subarray(_);M=E(W),x=E(X),p=y(W,M,1),k=y(X,x,1)}else F(1);if(b>U){h&&F(0);break}}s&&w(m+131072);for(var Y=(1<<M)-1,Z=(1<<x)-1,$=b;;$=b){var rr=(R=p[C(r,b)&Y])>>4;if((b+=15&R)>U){h&&F(0);break}if(R||F(2),rr<256)e[m++]=rr;else{if(256==rr){$=b,p=null;break}var nr=rr-254;if(rr>264){var er=f[G=rr-257];nr=T(r,b,(1<<er)-1)+c[G],b+=er}var ar=k[C(r,b)&Z],tr=ar>>4;ar||F(3),b+=15&ar;X=d[tr];if(tr>3){er=o[tr];X+=C(r,b)&(1<<er)-1,b+=er}if(b>U){h&&F(0);break}s&&w(m+131072);var ir=m+nr;if(m<X){var fr=u-X,or=Math.min(X,ir);for(fr+m<0&&F(3);m<or;++m)e[m]=t[fr+m]}for(;m<ir;++m)e[m]=e[m-X]}}n.l=p,n.p=$,n.b=m,n.f=g,p&&(g=1,n.m=M,n.d=k,n.n=x)}while(!g);return m!=e.length&&v?I(e,0,m):e.subarray(0,m)},O=function(r,n,e){e<<=7&n;var a=n/8|0;r[a]|=e,r[a+1]|=e>>8},S=function(r,n,e){e<<=7&n;var a=n/8|0;r[a]|=e,r[a+1]|=e>>8,r[a+2]|=e>>16},_=function(r,n){for(var e=[],i=0;i<r.length;++i)r[i]&&e.push({s:i,f:r[i]});var f=e.length,o=e.slice();if(!f)return{t:J,l:0};if(1==f){var l=new a(e[0].s+1);return l[e[0].s]=1,{t:l,l:1}}e.sort((function(r,n){return r.f-n.f})),e.push({s:-1,f:25001});var u=e[0],v=e[1],c=0,s=1,h=2;for(e[0]={s:-1,f:u.f+v.f,l:u,r:v};s!=f-1;)u=e[e[c].f<e[h].f?c++:h++],v=e[c!=s&&e[c].f<e[h].f?c++:h++],e[s++]={s:-1,f:u.f+v.f,l:u,r:v};var d=o[0].s;for(i=1;i<f;++i)o[i].s>d&&(d=o[i].s);var w=new t(d+1),g=j(e[s-1],w,0);if(g>n){i=0;var b=0,m=g-n,y=1<<m;for(o.sort((function(r,n){return w[n.s]-w[r.s]||r.f-n.f}));i<f;++i){var p=o[i].s;if(!(w[p]>n))break;b+=y-(1<<g-w[p]),w[p]=n}for(b>>=m;b>0;){var k=o[i].s;w[k]<n?b-=1<<n-w[k]++-1:++i}for(;i>=0&&b;--i){var M=o[i].s;w[M]==n&&(--w[M],++b)}g=n}return{t:new a(w),l:g}},j=function(r,n,e){return-1==r.s?Math.max(j(r.l,n,e+1),j(r.r,n,e+1)):n[r.s]=e},P=function(r){for(var n=r.length;n&&!r[--n];);for(var e=new t(++n),a=0,i=r[0],f=1,o=function(r){e[a++]=r},l=1;l<=n;++l)if(r[l]==i&&l!=n)++f;else{if(!i&&f>2){for(;f>138;f-=138)o(32754);f>2&&(o(f>10?f-11<<5|28690:f-3<<5|12305),f=0)}else if(f>3){for(o(i),--f;f>6;f-=6)o(8304);f>2&&(o(f-3<<5|8208),f=0)}for(;f--;)o(i);f=1,i=r[l]}return{c:e.subarray(0,a),n:n}},q=function(r,n){for(var e=0,a=0;a<n.length;++a)e+=r[a]*n[a];return e},B=function(r,n,e){var a=e.length,t=D(n+2);r[t]=255&a,r[t+1]=a>>8,r[t+2]=255^r[t],r[t+3]=255^r[t+1];for(var i=0;i<a;++i)r[t+i+4]=e[i];return 8*(t+4+a)},G=function(r,n,e,a,i,u,v,c,s,h,d){O(n,d++,e),++i[256];for(var w=_(i,15),g=w.t,b=w.l,m=_(u,15),z=m.t,A=m.l,E=P(g),T=E.c,C=E.n,D=P(z),I=D.c,U=D.n,F=new t(19),L=0;L<T.length;++L)++F[31&T[L]];for(L=0;L<I.length;++L)++F[31&I[L]];for(var j=_(F,7),G=j.t,H=j.l,J=19;J>4&&!G[l[J-1]];--J);var K,N,Q,R,V=h+5<<3,W=q(i,p)+q(u,k)+v,X=q(i,g)+q(u,z)+v+14+3*J+q(F,G)+2*F[16]+3*F[17]+7*F[18];if(s>=0&&V<=W&&V<=X)return B(n,d,r.subarray(s,s+h));if(O(n,d,1+(X<W)),d+=2,X<W){K=y(g,b,0),N=g,Q=y(z,A,0),R=z;var Y=y(G,H,0);O(n,d,C-257),O(n,d+5,U-1),O(n,d+10,J-4),d+=14;for(L=0;L<J;++L)O(n,d+3*L,G[l[L]]);d+=3*J;for(var Z=[T,I],$=0;$<2;++$){var rr=Z[$];for(L=0;L<rr.length;++L){var nr=31&rr[L];O(n,d,Y[nr]),d+=G[nr],nr>15&&(O(n,d,rr[L]>>5&127),d+=rr[L]>>12)}}}else K=M,N=p,Q=x,R=k;for(L=0;L<c;++L){var er=a[L];if(er>255){S(n,d,K[(nr=er>>18&31)+257]),d+=N[nr+257],nr>7&&(O(n,d,er>>23&31),d+=f[nr]);var ar=31&er;S(n,d,Q[ar]),d+=R[ar],ar>3&&(S(n,d,er>>5&8191),d+=o[ar])}else S(n,d,K[er]),d+=N[er]}return S(n,d,K[256]),d+N[256]},H=new i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),J=new a(0),K=function(){for(var r=new Int32Array(256),n=0;n<256;++n){for(var e=n,a=9;--a;)e=(1&e&&-306674912)^e>>>1;r[n]=e}return r}(),N=function(){var r=-1;return{p:function(n){for(var e=r,a=0;a<n.length;++a)e=K[255&e^n[a]]^e>>>8;r=e},d:function(){return~r}}},Q=function(){var r=1,n=0;return{p:function(e){for(var a=r,t=n,i=0|e.length,f=0;f!=i;){for(var o=Math.min(f+2655,i);f<o;++f)t+=a+=e[f];a=(65535&a)+15*(a>>16),t=(65535&t)+15*(t>>16)}r=a,n=t},d:function(){return(255&(r%=65521))<<24|(65280&r)<<8|(255&(n%=65521))<<8|n>>8}}},R=function(r,n,e,l,u){if(!u&&(u={l:1},n.dictionary)){var v=n.dictionary.subarray(-32768),c=new a(v.length+r.length);c.set(v),c.set(r,v.length),r=c,u.w=v.length}return function(r,n,e,l,u,v){var c=v.z||r.length,h=new a(l+c+5*(1+Math.ceil(c/7e3))+u),d=h.subarray(l,h.length-u),g=v.l,b=7&(v.r||0);if(n){b&&(d[0]=v.r>>3);for(var m=H[n-1],y=m>>13,p=8191&m,k=(1<<e)-1,M=v.p||new t(32768),z=v.h||new t(k+1),x=Math.ceil(e/3),A=2*x,E=function(n){return(r[n]^r[n+1]<<x^r[n+2]<<A)&k},T=new i(25e3),C=new t(288),U=new t(32),F=0,L=0,O=v.i||0,S=0,_=v.w||0,j=0;O+2<c;++O){var P=E(O),q=32767&O,J=z[P];if(M[q]=J,z[P]=q,_<=O){var K=c-O;if((F>7e3||S>24576)&&(K>423||!g)){b=G(r,d,0,T,C,U,L,S,j,O-j,b),S=F=L=0,j=O;for(var N=0;N<286;++N)C[N]=0;for(N=0;N<30;++N)U[N]=0}var Q=2,R=0,V=p,W=q-J&32767;if(K>2&&P==E(O-W))for(var X=Math.min(y,K)-1,Y=Math.min(32767,O),Z=Math.min(258,K);W<=Y&&--V&&q!=J;){if(r[O+Q]==r[O+Q-W]){for(var $=0;$<Z&&r[O+$]==r[O+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var rr=Math.min(W,$-2),nr=0;for(N=0;N<rr;++N){var er=O-W+N&32767,ar=er-M[er]&32767;ar>nr&&(nr=ar,J=er)}}}W+=(q=J)-(J=M[q])&32767}if(R){T[S++]=268435456|s[Q]<<18|w[R];var tr=31&s[Q],ir=31&w[R];L+=f[tr]+o[ir],++C[257+tr],++U[ir],_=O+Q,++F}else T[S++]=r[O],++C[r[O]]}}for(O=Math.max(O,_);O<c;++O)T[S++]=r[O],++C[r[O]];b=G(r,d,g,T,C,U,L,S,j,O-j,b),g||(v.r=7&b|d[b/8|0]<<3,b-=7,v.h=z,v.p=M,v.i=O,v.w=_)}else{for(O=v.w||0;O<c+g;O+=65535){var fr=O+65535;fr>=c&&(d[b/8|0]=g,fr=c),b=B(d,b+1,r.subarray(O,fr))}v.i=c}return I(h,0,l+D(b)+u)}(r,null==n.level?6:n.level,null==n.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(r.length)))):20:12+n.mem,e,l,u)},V=function(r,n,e){for(;e;++n)r[n]=e,e>>>=8},W=function(r,n){var e=n.filename;if(r[0]=31,r[1]=139,r[2]=8,r[8]=n.level<2?4:9==n.level?2:0,r[9]=3,0!=n.mtime&&V(r,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){r[3]=8;for(var a=0;a<=e.length;++a)r[a+10]=e.charCodeAt(a)}},X=function(r){(31!=r[0]||139!=r[1]||8!=r[2])&&F(6,"invalid gzip data");var n=r[3],e=10;4&n&&(e+=2+(r[10]|r[11]<<8));for(var a=(n>>3&1)+(n>>4&1);a>0;a-=!r[e++]);return e+(2&n)},Y=function(r){var n=r.length;return(r[n-4]|r[n-3]<<8|r[n-2]<<16|r[n-1]<<24)>>>0},Z=function(r){return 10+(r.filename?r.filename.length+1:0)},$=function(r,n){var e=n.level,a=0==e?0:e<6?1:9==e?3:2;if(r[0]=120,r[1]=a<<6|(n.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,n.dictionary){var t=Q();t.p(n.dictionary),V(r,2,t.d())}},rr=function(r,n){return(8!=(15&r[0])||r[0]>>4>7||(r[0]<<8|r[1])%31)&&F(6,"invalid zlib data"),(r[1]>>5&1)==+!n&&F(6,"invalid zlib data: "+(32&r[1]?"need":"unexpected")+" dictionary"),2+(r[1]>>3&4)};function nr(r,n){n||(n={});var e=N(),a=r.length;e.p(r);var t=R(r,n,Z(n),8),i=t.length;return W(t,n),V(t,i-8,e.d()),V(t,i-4,a),t}function er(r,n){var e=X(r);return e+8>r.length&&F(6,"invalid gzip data"),L(r.subarray(e,-8),{i:2},n&&n.out||new a(Y(r)),n&&n.dictionary)}function ar(r,n){n||(n={});var e=Q();e.p(r);var a=R(r,n,n.dictionary?6:2,4);return $(a,n),V(a,a.length-4,e.d()),a}function tr(r,n){return L(r.subarray(rr(r,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var ir=typeof TextDecoder<"u"&&new TextDecoder;try{ir.decode(J,{stream:!0}),1}catch{}},4729:(r,n,e)=>{e.r(n),e.d(n,{default:()=>o});var a,t=e(9236),i=Object.defineProperty,f=(r,n,e)=>(((r,n,e)=>{n in r?i(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e})(r,"symbol"!=typeof n?n+"":n,e),e),o=(a=class{constructor(r=1){if(f(this,"level"),r<-1||r>9)throw new Error("Invalid zlib compression level, it should be between -1 and 9");this.level=r}static fromConfig({level:r}){return new a(r)}encode(r){return(0,t.z)(r,{level:this.level})}decode(r){return(0,t.u)(r)}},f(a,"codecId","zlib"),a)}}]);