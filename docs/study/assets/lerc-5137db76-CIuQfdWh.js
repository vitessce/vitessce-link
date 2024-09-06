import{b as se}from"./pako.esm-a0be47a3-uimzD4ZM.js";import{w as le,D as fe,L as $,f as oe}from"./index-C5HvPDkI.js";var ee={exports:{}};(function(q){/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */(function(){var X=function(){var S={};S.defaultNoDataValue=-34027999387901484e22,S.decode=function(t,o){o=o||{};var n=o.encodedMaskData||o.encodedMaskData===null,a=s(t,o.inputOffset||0,n),d=o.noDataValue!==null?o.noDataValue:S.defaultNoDataValue,i=A(a,o.pixelType||Float32Array,o.encodedMaskData,d,o.returnMask),r={width:a.width,height:a.height,pixelData:i.resultPixels,minValue:i.minValue,maxValue:a.pixels.maxValue,noDataValue:d};return i.resultMask&&(r.maskData=i.resultMask),o.returnEncodedMask&&a.mask&&(r.encodedMaskData=a.mask.bitset?a.mask.bitset:null),o.returnFileInfo&&(r.fileInfo=F(a),o.computeUsedBitDepths&&(r.fileInfo.bitDepths=N(a))),r};var A=function(t,o,n,a,d){var i=0,r=t.pixels.numBlocksX,h=t.pixels.numBlocksY,u=Math.floor(t.width/r),c=Math.floor(t.height/h),g=2*t.maxZError,f=Number.MAX_VALUE,l;n=n||(t.mask?t.mask.bitset:null);var p,y;p=new o(t.width*t.height),d&&n&&(y=new Uint8Array(t.width*t.height));for(var D=new Float32Array(u*c),x,V,w=0;w<=h;w++){var M=w!==h?c:t.height%h;if(M!==0)for(var k=0;k<=r;k++){var m=k!==r?u:t.width%r;if(m!==0){var v=w*t.width*c+k*u,b=t.width-m,U=t.pixels.blocks[i],B,I,P;U.encoding<2?(U.encoding===0?B=U.rawData:(e(U.stuffedData,U.bitsPerPixel,U.numValidPixels,U.offset,g,D,t.pixels.maxValue),B=D),I=0):U.encoding===2?P=0:P=U.offset;var T;if(n)for(V=0;V<M;V++){for(v&7&&(T=n[v>>3],T<<=v&7),x=0;x<m;x++)v&7||(T=n[v>>3]),T&128?(y&&(y[v]=1),l=U.encoding<2?B[I++]:P,f=f>l?l:f,p[v++]=l):(y&&(y[v]=0),p[v++]=a),T<<=1;v+=b}else if(U.encoding<2)for(V=0;V<M;V++){for(x=0;x<m;x++)l=B[I++],f=f>l?l:f,p[v++]=l;v+=b}else for(f=f>P?P:f,V=0;V<M;V++){for(x=0;x<m;x++)p[v++]=P;v+=b}if(U.encoding===1&&I!==U.numValidPixels)throw"Block and Mask do not match";i++}}}return{resultPixels:p,resultMask:y,minValue:f}},F=function(t){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,noDataValue:t.noDataValue}}},N=function(t){for(var o=t.pixels.numBlocksX*t.pixels.numBlocksY,n={},a=0;a<o;a++){var d=t.pixels.blocks[a];d.encoding===0?n.float32=!0:d.encoding===1?n[d.bitsPerPixel]=!0:n[0]=!0}return Object.keys(n)},s=function(t,o,n){var a={},d=new Uint8Array(t,o,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,d),a.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+a.fileIdentifierString;o+=10;var i=new DataView(t,o,24);if(a.fileVersion=i.getInt32(0,!0),a.imageType=i.getInt32(4,!0),a.height=i.getUint32(8,!0),a.width=i.getUint32(12,!0),a.maxZError=i.getFloat64(16,!0),o+=24,!n)if(i=new DataView(t,o,16),a.mask={},a.mask.numBlocksY=i.getUint32(0,!0),a.mask.numBlocksX=i.getUint32(4,!0),a.mask.numBytes=i.getUint32(8,!0),a.mask.maxValue=i.getFloat32(12,!0),o+=16,a.mask.numBytes>0){var r=new Uint8Array(Math.ceil(a.width*a.height/8));i=new DataView(t,o,a.mask.numBytes);var h=i.getInt16(0,!0),u=2,c=0;do{if(h>0)for(;h--;)r[c++]=i.getUint8(u++);else{var g=i.getUint8(u++);for(h=-h;h--;)r[c++]=g}h=i.getInt16(u,!0),u+=2}while(u<a.mask.numBytes);if(h!==-32768||c<r.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=r,o+=a.mask.numBytes}else a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue||(a.mask.bitset=new Uint8Array(Math.ceil(a.width*a.height/8)));i=new DataView(t,o,16),a.pixels={},a.pixels.numBlocksY=i.getUint32(0,!0),a.pixels.numBlocksX=i.getUint32(4,!0),a.pixels.numBytes=i.getUint32(8,!0),a.pixels.maxValue=i.getFloat32(12,!0),o+=16;var f=a.pixels.numBlocksX,l=a.pixels.numBlocksY,p=f+(a.width%f>0?1:0),y=l+(a.height%l>0?1:0);a.pixels.blocks=new Array(p*y);for(var D=0,x=0;x<y;x++)for(var V=0;V<p;V++){var w=0,M=t.byteLength-o;i=new DataView(t,o,Math.min(10,M));var k={};a.pixels.blocks[D++]=k;var m=i.getUint8(0);if(w++,k.encoding=m&63,k.encoding>3)throw"Invalid block encoding ("+k.encoding+")";if(k.encoding===2){o++;continue}if(m!==0&&m!==2){if(m>>=6,k.offsetType=m,m===2)k.offset=i.getInt8(1),w++;else if(m===1)k.offset=i.getInt16(1,!0),w+=2;else if(m===0)k.offset=i.getFloat32(1,!0),w+=4;else throw"Invalid block offset type";if(k.encoding===1)if(m=i.getUint8(w),w++,k.bitsPerPixel=m&63,m>>=6,k.numValidPixelsType=m,m===2)k.numValidPixels=i.getUint8(w),w++;else if(m===1)k.numValidPixels=i.getUint16(w,!0),w+=2;else if(m===0)k.numValidPixels=i.getUint32(w,!0),w+=4;else throw"Invalid valid pixel count type"}if(o+=w,k.encoding!==3){var v,b;if(k.encoding===0){var U=(a.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(U*4),b=new Uint8Array(v),b.set(new Uint8Array(t,o,U*4));var B=new Float32Array(v);k.rawData=B,o+=U*4}else if(k.encoding===1){var I=Math.ceil(k.numValidPixels*k.bitsPerPixel/8),P=Math.ceil(I/4);v=new ArrayBuffer(P*4),b=new Uint8Array(v),b.set(new Uint8Array(t,o,I)),k.stuffedData=new Uint32Array(v),o+=I}}}return a.eofOffset=o,a},e=function(t,o,n,a,d,i,r){var h=(1<<o)-1,u=0,c,g=0,f,l,p=Math.ceil((r-a)/d),y=t.length*4-Math.ceil(o*n/8);for(t[t.length-1]<<=8*y,c=0;c<n;c++){if(g===0&&(l=t[u++],g=32),g>=o)f=l>>>g-o&h,g-=o;else{var D=o-g;f=(l&h)<<D&h,l=t[u++],g=32-D,f+=l>>>g}i[c]=f<p?a+f*d:r}return i};return S}(),te=function(){var S={unstuff:function(s,e,t,o,n,a,d,i){var r=(1<<t)-1,h=0,u,c=0,g,f,l,p,y=s.length*4-Math.ceil(t*o/8);if(s[s.length-1]<<=8*y,n)for(u=0;u<o;u++)c===0&&(f=s[h++],c=32),c>=t?(g=f>>>c-t&r,c-=t):(l=t-c,g=(f&r)<<l&r,f=s[h++],c=32-l,g+=f>>>c),e[u]=n[g];else for(p=Math.ceil((i-a)/d),u=0;u<o;u++)c===0&&(f=s[h++],c=32),c>=t?(g=f>>>c-t&r,c-=t):(l=t-c,g=(f&r)<<l&r,f=s[h++],c=32-l,g+=f>>>c),e[u]=g<p?a+g*d:i},unstuffLUT:function(s,e,t,o,n,a){var d=(1<<e)-1,i=0,r=0,h=0,u=0,c=0,g,f=[],l=s.length*4-Math.ceil(e*t/8);s[s.length-1]<<=8*l;var p=Math.ceil((a-o)/n);for(r=0;r<t;r++)u===0&&(g=s[i++],u=32),u>=e?(c=g>>>u-e&d,u-=e):(h=e-u,c=(g&d)<<h&d,g=s[i++],u=32-h,c+=g>>>u),f[r]=c<p?o+c*n:a;return f.unshift(o),f},unstuff2:function(s,e,t,o,n,a,d,i){var r=(1<<t)-1,h=0,u,c=0,g=0,f,l,p;if(n)for(u=0;u<o;u++)c===0&&(l=s[h++],c=32,g=0),c>=t?(f=l>>>g&r,c-=t,g+=t):(p=t-c,f=l>>>g&r,l=s[h++],c=32-p,f|=(l&(1<<p)-1)<<t-p,g=p),e[u]=n[f];else{var y=Math.ceil((i-a)/d);for(u=0;u<o;u++)c===0&&(l=s[h++],c=32,g=0),c>=t?(f=l>>>g&r,c-=t,g+=t):(p=t-c,f=l>>>g&r,l=s[h++],c=32-p,f|=(l&(1<<p)-1)<<t-p,g=p),e[u]=f<y?a+f*d:i}return e},unstuffLUT2:function(s,e,t,o,n,a){var d=(1<<e)-1,i=0,r=0,h=0,u=0,c=0,g=0,f,l=[],p=Math.ceil((a-o)/n);for(r=0;r<t;r++)u===0&&(f=s[i++],u=32,g=0),u>=e?(c=f>>>g&d,u-=e,g+=e):(h=e-u,c=f>>>g&d,f=s[i++],u=32-h,c|=(f&(1<<h)-1)<<e-h,g=h),l[r]=c<p?o+c*n:a;return l.unshift(o),l},originalUnstuff:function(s,e,t,o){var n=(1<<t)-1,a=0,d,i=0,r,h,u,c=s.length*4-Math.ceil(t*o/8);for(s[s.length-1]<<=8*c,d=0;d<o;d++)i===0&&(h=s[a++],i=32),i>=t?(r=h>>>i-t&n,i-=t):(u=t-i,r=(h&n)<<u&n,h=s[a++],i=32-u,r+=h>>>i),e[d]=r;return e},originalUnstuff2:function(s,e,t,o){var n=(1<<t)-1,a=0,d,i=0,r=0,h,u,c;for(d=0;d<o;d++)i===0&&(u=s[a++],i=32,r=0),i>=t?(h=u>>>r&n,i-=t,r+=t):(c=t-i,h=u>>>r&n,u=s[a++],i=32-c,h|=(u&(1<<c)-1)<<t-c,r=c),e[d]=h;return e}},A={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(s){for(var e=65535,t=65535,o=s.length,n=Math.floor(o/2),a=0;n;){var d=n>=359?359:n;n-=d;do e+=s[a++]<<8,t+=e+=s[a++];while(--d);e=(e&65535)+(e>>>16),t=(t&65535)+(t>>>16)}return o&1&&(t+=e+=s[a]<<8),e=(e&65535)+(e>>>16),t=(t&65535)+(t>>>16),(t<<16|e)>>>0},readHeaderInfo:function(s,e){var t=e.ptr,o=new Uint8Array(s,t,6),n={};if(n.fileIdentifierString=String.fromCharCode.apply(null,o),n.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+n.fileIdentifierString;t+=6;var a=new DataView(s,t,8),d=a.getInt32(0,!0);n.fileVersion=d,t+=4,d>=3&&(n.checksum=a.getUint32(4,!0),t+=4),a=new DataView(s,t,12),n.height=a.getUint32(0,!0),n.width=a.getUint32(4,!0),t+=8,d>=4?(n.numDims=a.getUint32(8,!0),t+=4):n.numDims=1,a=new DataView(s,t,40),n.numValidPixel=a.getUint32(0,!0),n.microBlockSize=a.getInt32(4,!0),n.blobSize=a.getInt32(8,!0),n.imageType=a.getInt32(12,!0),n.maxZError=a.getFloat64(16,!0),n.zMin=a.getFloat64(24,!0),n.zMax=a.getFloat64(32,!0),t+=40,e.headerInfo=n,e.ptr=t;var i,r;if(d>=3&&(r=d>=4?52:48,i=this.computeChecksumFletcher32(new Uint8Array(s,t-r,n.blobSize-14)),i!==n.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(s,e){var t=e.headerInfo,o=this.getDataTypeArray(t.imageType),n=t.numDims*this.getDataTypeSize(t.imageType),a=this.readSubArray(s,e.ptr,o,n),d=this.readSubArray(s,e.ptr+n,o,n);e.ptr+=2*n;var i,r=!0;for(i=0;i<t.numDims;i++)if(a[i]!==d[i]){r=!1;break}return t.minValues=a,t.maxValues=d,r},readSubArray:function(s,e,t,o){var n;if(t===Uint8Array)n=new Uint8Array(s,e,o);else{var a=new ArrayBuffer(o),d=new Uint8Array(a);d.set(new Uint8Array(s,e,o)),n=new t(a)}return n},readMask:function(s,e){var t=e.ptr,o=e.headerInfo,n=o.width*o.height,a=o.numValidPixel,d=new DataView(s,t,4),i={};if(i.numBytes=d.getUint32(0,!0),t+=4,(a===0||n===a)&&i.numBytes!==0)throw"invalid mask";var r,h;if(a===0)r=new Uint8Array(Math.ceil(n/8)),i.bitset=r,h=new Uint8Array(n),e.pixels.resultMask=h,t+=i.numBytes;else if(i.numBytes>0){r=new Uint8Array(Math.ceil(n/8)),d=new DataView(s,t,i.numBytes);var u=d.getInt16(0,!0),c=2,g=0,f=0;do{if(u>0)for(;u--;)r[g++]=d.getUint8(c++);else for(f=d.getUint8(c++),u=-u;u--;)r[g++]=f;u=d.getInt16(c,!0),c+=2}while(c<i.numBytes);if(u!==-32768||g<r.length)throw"Unexpected end of mask RLE encoding";h=new Uint8Array(n);var l=0,p=0;for(p=0;p<n;p++)p&7?(l=r[p>>3],l<<=p&7):l=r[p>>3],l&128&&(h[p]=1);e.pixels.resultMask=h,i.bitset=r,t+=i.numBytes}return e.ptr=t,e.mask=i,!0},readDataOneSweep:function(s,e,t,o){var n=e.ptr,a=e.headerInfo,d=a.numDims,i=a.width*a.height,r=a.imageType,h=a.numValidPixel*A.getDataTypeSize(r)*d,u,c=e.pixels.resultMask;if(t===Uint8Array)u=new Uint8Array(s,n,h);else{var g=new ArrayBuffer(h),f=new Uint8Array(g);f.set(new Uint8Array(s,n,h)),u=new t(g)}if(u.length===i*d)o?e.pixels.resultPixels=A.swapDimensionOrder(u,i,d,t,!0):e.pixels.resultPixels=u;else{e.pixels.resultPixels=new t(i*d);var l=0,p=0,y=0,D=0;if(d>1){if(o){for(p=0;p<i;p++)if(c[p])for(D=p,y=0;y<d;y++,D+=i)e.pixels.resultPixels[D]=u[l++]}else for(p=0;p<i;p++)if(c[p])for(D=p*d,y=0;y<d;y++)e.pixels.resultPixels[D+y]=u[l++]}else for(p=0;p<i;p++)c[p]&&(e.pixels.resultPixels[p]=u[l++])}return n+=h,e.ptr=n,!0},readHuffmanTree:function(s,e){var t=this.HUFFMAN_LUT_BITS_MAX,o=new DataView(s,e.ptr,16);e.ptr+=16;var n=o.getInt32(0,!0);if(n<2)throw"unsupported Huffman version";var a=o.getInt32(4,!0),d=o.getInt32(8,!0),i=o.getInt32(12,!0);if(d>=i)return!1;var r=new Uint32Array(i-d);A.decodeBits(s,e,r);var h=[],u,c,g,f;for(u=d;u<i;u++)c=u-(u<a?0:a),h[c]={first:r[u-d],second:null};var l=s.byteLength-e.ptr,p=Math.ceil(l/4),y=new ArrayBuffer(p*4),D=new Uint8Array(y);D.set(new Uint8Array(s,e.ptr,l));var x=new Uint32Array(y),V=0,w,M=0;for(w=x[0],u=d;u<i;u++)c=u-(u<a?0:a),f=h[c].first,f>0&&(h[c].second=w<<V>>>32-f,32-V>=f?(V+=f,V===32&&(V=0,M++,w=x[M])):(V+=f-32,M++,w=x[M],h[c].second|=w>>>32-V));var k=0,m=0,v=new F;for(u=0;u<h.length;u++)h[u]!==void 0&&(k=Math.max(k,h[u].first));k>=t?m=t:m=k;var b=[],U,B,I,P,T,z;for(u=d;u<i;u++)if(c=u-(u<a?0:a),f=h[c].first,f>0)if(U=[f,c],f<=m)for(B=h[c].second<<m-f,I=1<<m-f,g=0;g<I;g++)b[B|g]=U;else for(B=h[c].second,z=v,P=f-1;P>=0;P--)T=B>>>P&1,T?(z.right||(z.right=new F),z=z.right):(z.left||(z.left=new F),z=z.left),P===0&&!z.val&&(z.val=U[1]);return{decodeLut:b,numBitsLUTQick:m,numBitsLUT:k,tree:v,stuffedData:x,srcPtr:M,bitPos:V}},readHuffman:function(s,e,t,o){var n=e.headerInfo,a=n.numDims,d=e.headerInfo.height,i=e.headerInfo.width,r=i*d,h=this.readHuffmanTree(s,e),u=h.decodeLut,c=h.tree,g=h.stuffedData,f=h.srcPtr,l=h.bitPos,p=h.numBitsLUTQick,y=h.numBitsLUT,D=e.headerInfo.imageType===0?128:0,x,V,w,M=e.pixels.resultMask,k,m,v,b,U,B,I,P=0;l>0&&(f++,l=0);var T=g[f],z=e.encodeMode===1,R=new t(r*a),O=R,C;if(a<2||z){for(C=0;C<a;C++)if(a>1&&(O=new t(R.buffer,r*C,r),P=0),e.headerInfo.numValidPixel===i*d)for(B=0,b=0;b<d;b++)for(U=0;U<i;U++,B++){if(V=0,k=T<<l>>>32-p,m=k,32-l<p&&(k|=g[f+1]>>>64-l-p,m=k),u[m])V=u[m][1],l+=u[m][0];else for(k=T<<l>>>32-y,m=k,32-l<y&&(k|=g[f+1]>>>64-l-y,m=k),x=c,I=0;I<y;I++)if(v=k>>>y-I-1&1,x=v?x.right:x.left,!(x.left||x.right)){V=x.val,l=l+I+1;break}l>=32&&(l-=32,f++,T=g[f]),w=V-D,z?(U>0?w+=P:b>0?w+=O[B-i]:w+=P,w&=255,O[B]=w,P=w):O[B]=w}else for(B=0,b=0;b<d;b++)for(U=0;U<i;U++,B++)if(M[B]){if(V=0,k=T<<l>>>32-p,m=k,32-l<p&&(k|=g[f+1]>>>64-l-p,m=k),u[m])V=u[m][1],l+=u[m][0];else for(k=T<<l>>>32-y,m=k,32-l<y&&(k|=g[f+1]>>>64-l-y,m=k),x=c,I=0;I<y;I++)if(v=k>>>y-I-1&1,x=v?x.right:x.left,!(x.left||x.right)){V=x.val,l=l+I+1;break}l>=32&&(l-=32,f++,T=g[f]),w=V-D,z?(U>0&&M[B-1]?w+=P:b>0&&M[B-i]?w+=O[B-i]:w+=P,w&=255,O[B]=w,P=w):O[B]=w}}else for(B=0,b=0;b<d;b++)for(U=0;U<i;U++)if(B=b*i+U,!M||M[B])for(C=0;C<a;C++,B+=r){if(V=0,k=T<<l>>>32-p,m=k,32-l<p&&(k|=g[f+1]>>>64-l-p,m=k),u[m])V=u[m][1],l+=u[m][0];else for(k=T<<l>>>32-y,m=k,32-l<y&&(k|=g[f+1]>>>64-l-y,m=k),x=c,I=0;I<y;I++)if(v=k>>>y-I-1&1,x=v?x.right:x.left,!(x.left||x.right)){V=x.val,l=l+I+1;break}l>=32&&(l-=32,f++,T=g[f]),w=V-D,O[B]=w}e.ptr=e.ptr+(f+1)*4+(l>0?4:0),e.pixels.resultPixels=R,a>1&&!o&&(e.pixels.resultPixels=A.swapDimensionOrder(R,r,a,t))},decodeBits:function(s,e,t,o,n){{var a=e.headerInfo,d=a.fileVersion,i=0,r=s.byteLength-e.ptr>=5?5:s.byteLength-e.ptr,h=new DataView(s,e.ptr,r),u=h.getUint8(0);i++;var c=u>>6,g=c===0?4:3-c,f=(u&32)>0,l=u&31,p=0;if(g===1)p=h.getUint8(i),i++;else if(g===2)p=h.getUint16(i,!0),i+=2;else if(g===4)p=h.getUint32(i,!0),i+=4;else throw"Invalid valid pixel count type";var y=2*a.maxZError,D,x,V,w,M,k,m,v,b,U=a.numDims>1?a.maxValues[n]:a.zMax;if(f){for(e.counter.lut++,v=h.getUint8(i),i++,w=Math.ceil((v-1)*l/8),M=Math.ceil(w/4),x=new ArrayBuffer(M*4),V=new Uint8Array(x),e.ptr+=i,V.set(new Uint8Array(s,e.ptr,w)),m=new Uint32Array(x),e.ptr+=w,b=0;v-1>>>b;)b++;w=Math.ceil(p*b/8),M=Math.ceil(w/4),x=new ArrayBuffer(M*4),V=new Uint8Array(x),V.set(new Uint8Array(s,e.ptr,w)),D=new Uint32Array(x),e.ptr+=w,d>=3?k=S.unstuffLUT2(m,l,v-1,o,y,U):k=S.unstuffLUT(m,l,v-1,o,y,U),d>=3?S.unstuff2(D,t,b,p,k):S.unstuff(D,t,b,p,k)}else e.counter.bitstuffer++,b=l,e.ptr+=i,b>0&&(w=Math.ceil(p*b/8),M=Math.ceil(w/4),x=new ArrayBuffer(M*4),V=new Uint8Array(x),V.set(new Uint8Array(s,e.ptr,w)),D=new Uint32Array(x),e.ptr+=w,d>=3?o==null?S.originalUnstuff2(D,t,b,p):S.unstuff2(D,t,b,p,!1,o,y,U):o==null?S.originalUnstuff(D,t,b,p):S.unstuff(D,t,b,p,!1,o,y,U))}},readTiles:function(s,e,t,o){var n=e.headerInfo,a=n.width,d=n.height,i=a*d,r=n.microBlockSize,h=n.imageType,u=A.getDataTypeSize(h),c=Math.ceil(a/r),g=Math.ceil(d/r);e.pixels.numBlocksY=g,e.pixels.numBlocksX=c,e.pixels.ptr=0;var f=0,l=0,p=0,y=0,D=0,x=0,V=0,w=0,M=0,k=0,m=0,v=0,b=0,U=0,B=0,I=0,P,T,z,R,O,C,j=new t(r*r),ie=d%r||r,ne=a%r||r,G,_,Q=n.numDims,Y,E=e.pixels.resultMask,L=e.pixels.resultPixels,re=n.fileVersion,W=re>=5?14:15,H,J=n.zMax,Z;for(p=0;p<g;p++)for(D=p!==g-1?r:ie,y=0;y<c;y++)for(x=y!==c-1?r:ne,m=p*a*r+y*r,v=a-x,Y=0;Y<Q;Y++){if(Q>1?(Z=L,m=p*a*r+y*r,L=new t(e.pixels.resultPixels.buffer,i*Y*u,i),J=n.maxValues[Y]):Z=null,V=s.byteLength-e.ptr,P=new DataView(s,e.ptr,Math.min(10,V)),T={},I=0,w=P.getUint8(0),I++,H=n.fileVersion>=5?w&4:0,M=w>>6&255,k=w>>2&W,k!==(y*r>>3&W)||H&&Y===0)throw"integrity issue";if(C=w&3,C>3)throw e.ptr+=I,"Invalid block encoding ("+C+")";if(C===2){if(H)if(E)for(f=0;f<D;f++)for(l=0;l<x;l++)E[m]&&(L[m]=Z[m]),m++;else for(f=0;f<D;f++)for(l=0;l<x;l++)L[m]=Z[m],m++;e.counter.constant++,e.ptr+=I;continue}else if(C===0){if(H)throw"integrity issue";if(e.counter.uncompressed++,e.ptr+=I,b=D*x*u,U=s.byteLength-e.ptr,b=b<U?b:U,z=new ArrayBuffer(b%u===0?b:b+u-b%u),R=new Uint8Array(z),R.set(new Uint8Array(s,e.ptr,b)),O=new t(z),B=0,E)for(f=0;f<D;f++){for(l=0;l<x;l++)E[m]&&(L[m]=O[B++]),m++;m+=v}else for(f=0;f<D;f++){for(l=0;l<x;l++)L[m++]=O[B++];m+=v}e.ptr+=B*u}else if(G=A.getDataTypeUsed(H&&h<6?4:h,M),_=A.getOnePixel(T,I,G,P),I+=A.getDataTypeSize(G),C===3)if(e.ptr+=I,e.counter.constantoffset++,E)for(f=0;f<D;f++){for(l=0;l<x;l++)E[m]&&(L[m]=H?Math.min(J,Z[m]+_):_),m++;m+=v}else for(f=0;f<D;f++){for(l=0;l<x;l++)L[m]=H?Math.min(J,Z[m]+_):_,m++;m+=v}else if(e.ptr+=I,A.decodeBits(s,e,j,_,Y),I=0,H)if(E)for(f=0;f<D;f++){for(l=0;l<x;l++)E[m]&&(L[m]=j[I++]+Z[m]),m++;m+=v}else for(f=0;f<D;f++){for(l=0;l<x;l++)L[m]=j[I++]+Z[m],m++;m+=v}else if(E)for(f=0;f<D;f++){for(l=0;l<x;l++)E[m]&&(L[m]=j[I++]),m++;m+=v}else for(f=0;f<D;f++){for(l=0;l<x;l++)L[m++]=j[I++];m+=v}}Q>1&&!o&&(e.pixels.resultPixels=A.swapDimensionOrder(e.pixels.resultPixels,i,Q,t))},formatFileInfo:function(s){return{fileIdentifierString:s.headerInfo.fileIdentifierString,fileVersion:s.headerInfo.fileVersion,imageType:s.headerInfo.imageType,height:s.headerInfo.height,width:s.headerInfo.width,numValidPixel:s.headerInfo.numValidPixel,microBlockSize:s.headerInfo.microBlockSize,blobSize:s.headerInfo.blobSize,maxZError:s.headerInfo.maxZError,pixelType:A.getPixelType(s.headerInfo.imageType),eofOffset:s.eofOffset,mask:s.mask?{numBytes:s.mask.numBytes}:null,pixels:{numBlocksX:s.pixels.numBlocksX,numBlocksY:s.pixels.numBlocksY,maxValue:s.headerInfo.zMax,minValue:s.headerInfo.zMin,noDataValue:s.noDataValue}}},constructConstantSurface:function(s,e){var t=s.headerInfo.zMax,o=s.headerInfo.zMin,n=s.headerInfo.maxValues,a=s.headerInfo.numDims,d=s.headerInfo.height*s.headerInfo.width,i=0,r=0,h=0,u=s.pixels.resultMask,c=s.pixels.resultPixels;if(u)if(a>1){if(e)for(i=0;i<a;i++)for(h=i*d,t=n[i],r=0;r<d;r++)u[r]&&(c[h+r]=t);else for(r=0;r<d;r++)if(u[r])for(h=r*a,i=0;i<a;i++)c[h+a]=n[i]}else for(r=0;r<d;r++)u[r]&&(c[r]=t);else if(a>1&&o!==t)if(e)for(i=0;i<a;i++)for(h=i*d,t=n[i],r=0;r<d;r++)c[h+r]=t;else for(r=0;r<d;r++)for(h=r*a,i=0;i<a;i++)c[h+i]=n[i];else for(r=0;r<d*a;r++)c[r]=t},getDataTypeArray:function(s){var e;switch(s){case 0:e=Int8Array;break;case 1:e=Uint8Array;break;case 2:e=Int16Array;break;case 3:e=Uint16Array;break;case 4:e=Int32Array;break;case 5:e=Uint32Array;break;case 6:e=Float32Array;break;case 7:e=Float64Array;break;default:e=Float32Array}return e},getPixelType:function(s){var e;switch(s){case 0:e="S8";break;case 1:e="U8";break;case 2:e="S16";break;case 3:e="U16";break;case 4:e="S32";break;case 5:e="U32";break;case 6:e="F32";break;case 7:e="F64";break;default:e="F32"}return e},isValidPixelValue:function(s,e){if(e==null)return!1;var t;switch(s){case 0:t=e>=-128&&e<=127;break;case 1:t=e>=0&&e<=255;break;case 2:t=e>=-32768&&e<=32767;break;case 3:t=e>=0&&e<=65536;break;case 4:t=e>=-2147483648&&e<=2147483647;break;case 5:t=e>=0&&e<=4294967296;break;case 6:t=e>=-34027999387901484e22&&e<=34027999387901484e22;break;case 7:t=e>=-17976931348623157e292&&e<=17976931348623157e292;break;default:t=!1}return t},getDataTypeSize:function(s){var e=0;switch(s){case 0:case 1:e=1;break;case 2:case 3:e=2;break;case 4:case 5:case 6:e=4;break;case 7:e=8;break;default:e=s}return e},getDataTypeUsed:function(s,e){var t=s;switch(s){case 2:case 4:t=s-e;break;case 3:case 5:t=s-2*e;break;case 6:e===0?t=s:e===1?t=2:t=1;break;case 7:e===0?t=s:t=s-2*e+1;break;default:t=s;break}return t},getOnePixel:function(s,e,t,o){var n=0;switch(t){case 0:n=o.getInt8(e);break;case 1:n=o.getUint8(e);break;case 2:n=o.getInt16(e,!0);break;case 3:n=o.getUint16(e,!0);break;case 4:n=o.getInt32(e,!0);break;case 5:n=o.getUInt32(e,!0);break;case 6:n=o.getFloat32(e,!0);break;case 7:n=o.getFloat64(e,!0);break;default:throw"the decoder does not understand this pixel type"}return n},swapDimensionOrder:function(s,e,t,o,n){var a=0,d=0,i=0,r=0,h=s;if(t>1)if(h=new o(e*t),n)for(a=0;a<e;a++)for(r=a,i=0;i<t;i++,r+=e)h[r]=s[d++];else for(a=0;a<e;a++)for(r=a,i=0;i<t;i++,r+=e)h[d++]=s[r];return h}},F=function(s,e,t){this.val=s,this.left=e,this.right=t},N={decode:function(s,e){e=e||{};var t=e.noDataValue,o=0,n={};if(n.ptr=e.inputOffset||0,n.pixels={},!!A.readHeaderInfo(s,n)){var a=n.headerInfo,d=a.fileVersion,i=A.getDataTypeArray(a.imageType);if(d>5)throw"unsupported lerc version 2."+d;A.readMask(s,n),a.numValidPixel!==a.width*a.height&&!n.pixels.resultMask&&(n.pixels.resultMask=e.maskData);var r=a.width*a.height;n.pixels.resultPixels=new i(r*a.numDims),n.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var h=!e.returnPixelInterleavedDims;if(a.numValidPixel!==0)if(a.zMax===a.zMin)A.constructConstantSurface(n,h);else if(d>=4&&A.checkMinMaxRanges(s,n))A.constructConstantSurface(n,h);else{var u=new DataView(s,n.ptr,2),c=u.getUint8(0);if(n.ptr++,c)A.readDataOneSweep(s,n,i,h);else if(d>1&&a.imageType<=1&&Math.abs(a.maxZError-.5)<1e-5){var g=u.getUint8(1);if(n.ptr++,n.encodeMode=g,g>2||d<4&&g>1)throw"Invalid Huffman flag "+g;g?A.readHuffman(s,n,i,h):A.readTiles(s,n,i,h)}else A.readTiles(s,n,i,h)}n.eofOffset=n.ptr;var f;e.inputOffset?(f=n.headerInfo.blobSize+e.inputOffset-n.ptr,Math.abs(f)>=1&&(n.eofOffset=e.inputOffset+n.headerInfo.blobSize)):(f=n.headerInfo.blobSize-n.ptr,Math.abs(f)>=1&&(n.eofOffset=n.headerInfo.blobSize));var l={width:a.width,height:a.height,pixelData:n.pixels.resultPixels,minValue:a.zMin,maxValue:a.zMax,validPixelCount:a.numValidPixel,dimCount:a.numDims,dimStats:{minValues:a.minValues,maxValues:a.maxValues},maskData:n.pixels.resultMask};if(n.pixels.resultMask&&A.isValidPixelValue(a.imageType,t)){var p=n.pixels.resultMask;for(o=0;o<r;o++)p[o]||(l.pixelData[o]=t);l.noDataValue=t}return n.noDataValue=t,e.returnFileInfo&&(l.fileInfo=A.formatFileInfo(n)),l}},getBandCount:function(s){var e=0,t=0,o={};for(o.ptr=0,o.pixels={};t<s.byteLength-58;)A.readHeaderInfo(s,o),t+=o.headerInfo.blobSize,e++,o.ptr=t;return e}};return N}(),ae=function(){var S=new ArrayBuffer(4),A=new Uint8Array(S),F=new Uint32Array(S);return F[0]=1,A[0]===1}(),K={decode:function(S,A){if(!ae)throw"Big endian system is not supported.";A=A||{};var F=A.inputOffset||0,N=new Uint8Array(S,F,10),s=String.fromCharCode.apply(null,N),e,t;if(s.trim()==="CntZImage")e=X,t=1;else if(s.substring(0,5)==="Lerc2")e=te,t=2;else throw"Unexpected file identifier string: "+s;for(var o=0,n=S.byteLength-10,a,d=[],i,r,h={width:0,height:0,pixels:[],pixelType:A.pixelType,mask:null,statistics:[]},u=0;F<n;){var c=e.decode(S,{inputOffset:F,encodedMaskData:a,maskData:r,returnMask:o===0,returnEncodedMask:o===0,returnFileInfo:!0,returnPixelInterleavedDims:A.returnPixelInterleavedDims,pixelType:A.pixelType||null,noDataValue:A.noDataValue||null});F=c.fileInfo.eofOffset,r=c.maskData,o===0&&(a=c.encodedMaskData,h.width=c.width,h.height=c.height,h.dimCount=c.dimCount||1,h.pixelType=c.pixelType||c.fileInfo.pixelType,h.mask=r),t>1&&(r&&d.push(r),c.fileInfo.mask&&c.fileInfo.mask.numBytes>0&&u++),o++,h.pixels.push(c.pixelData),h.statistics.push({minValue:c.minValue,maxValue:c.maxValue,noDataValue:c.noDataValue,dimStats:c.dimStats})}var g,f,l;if(t>1&&u>1){for(l=h.width*h.height,h.bandMasks=d,r=new Uint8Array(l),r.set(d[0]),g=1;g<d.length;g++)for(i=d[g],f=0;f<l;f++)r[f]=r[f]&i[f];h.maskData=r}return h}};q.exports?q.exports=K:this.Lerc=K})()})(ee);var ue=ee.exports;const he=oe(ue);class me extends le{constructor(X){super(),this.planarConfiguration=typeof X.PlanarConfiguration<"u"?X.PlanarConfiguration:1,this.samplesPerPixel=typeof X.SamplesPerPixel<"u"?X.SamplesPerPixel:1,this.addCompression=X.LercParameters[fe.AddCompression]}decodeBlock(X){switch(this.addCompression){case $.None:break;case $.Deflate:X=se(new Uint8Array(X)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${this.addCompression}`)}return he.decode(X,{returnPixelInterleavedDims:this.planarConfiguration===1}).pixels[0].buffer}}export{me as default};
