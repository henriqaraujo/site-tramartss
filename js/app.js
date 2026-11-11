(()=>{var rp=0,Pu=1,op=2;var ha=1,fc=2,ro=3,Bs=0,On=1,Vi=2,ar=0,oo=1,Iu=2,Lu=3,Du=4,ap=5;var lr=100,lp=101,cp=102,hp=103,up=104,fp=200,dp=201,pp=202,mp=203,Nu=204,Uu=205,gp=206,_p=207,xp=208,vp=209,yp=210,Sp=211,Mp=212,bp=213,Tp=214,Al=0,Cl=1,Rl=2,Yr=3,Pl=4,Il=5,Ll=6,Dl=7,Ou=0,wp=1,Ep=2,Gi=0,Fu=1,Bu=2,zu=3,ua=4,ku=5,Vu=6,Gu=7;var Hu=300,cr=301,ao=302,dc=303,pc=304,Zr=1e3,Oi=1001,Nl=1002,hn=1003,Ap=1004;var fa=1005;var Nn=1006,mc=1007;var cs=1008;var qn=1009,Wu=1010,Xu=1011,lo=1012,gc=1013,Ri=1014,Pi=1015,Ii=1016,_c=1017,xc=1018,hr=1020,qu=35902,Yu=35899,Zu=1021,Ju=1022,Li=1023,rs=1026,hs=1027,$u=1028,vc=1029,zs=1030,yc=1031;var Sc=1033,da=33776,pa=33777,ma=33778,ga=33779,Mc=35840,bc=35841,Tc=35842,wc=35843,Ec=36196,Ac=37492,Cc=37496,Rc=37488,Pc=37489,_a=37490,Ic=37491,Lc=37808,Dc=37809,Nc=37810,Uc=37811,Oc=37812,Fc=37813,Bc=37814,zc=37815,kc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,Zc=36495,Jc=36283,$c=36284,xa=36285,Kc=36286;var Vo=2300,Ul=2301,wl=2302,bu=2303,Tu=2400,wu=2401,Eu=2402;var Cp=3200;var Qc=0,Rp=1,us="",Mn="srgb",Go="srgb-linear",Ho="linear",ge="srgb";var El=7680;var Pp=519,Ip=512,Lp=513,Dp=514,Ku=515,Np=516,Up=517,Qu=518,ju=519,Op=35044;var tf="300 es",pi=2e3,Jr=2001;function P_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function I_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fp(){let s=Wo("canvas");return s.style.display="block",s}var Dd={},$r=null;function ef(...s){let t="THREE."+s.shift();$r?$r("log",t,...s):console.log(t,...s)}function Bp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Bp(s);let t="THREE."+s.shift();if($r)$r("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=Bp(s);let t="THREE."+s.shift();if($r)$r("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Bo(...s){let t=s.join(" ");t in Dd||(Dd[t]=!0,Vt(...s))}function zp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kp={[Al]:Al,[Rl]:Ll,[Pl]:Pl,[Yr]:Il,[Cl]:Cl,[Ll]:Rl,[Dl]:Dl,[Il]:Yr},Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qh=Math.PI/180,Ol=180/Math.PI;function va(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function L_(s,t){return(s%t+t)%t}function jh(s,t,e){return(1-e)*s+e*t}function Vp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function D_(s,t){if(t.constructor===Float32Array)return s;let e=nf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function N_(s,t){if(t.constructor===Float32Array)return s;let e=nf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Ft=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tu.copy(this).projectOnVector(t),this.sub(tu)}reflect(t){return this.sub(tu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tu=new B,Nd=new zi,Xt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],w=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*m+a*w+l*E,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*m+h*w+d*E,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+p*T,r[5]=f*m+u*w+p*E,r[8]=f*g+u*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(t,e)),this}rotate(t){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-t)),this}translate(t,e){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},eu=new Xt,Ud=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){let s={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=qr(i.r),i.g=qr(i.g),i.b=qr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Go]:{primaries:t,whitePoint:n,transfer:Ho,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),s}var oe=U_();function ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Dr,Fl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Dr===void 0&&(Dr=Wo("canvas")),Dr.width=t.width,Dr.height=t.height;let i=Dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},O_=0,Kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nu(i[o].image)):r.push(nu(i[o]))}else r=nu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var F_=0,iu=new B,Un=class s extends Bi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Oi,i=Oi,r=Nn,o=cs,a=Li,l=qn,c=s.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=va(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Hu;Un.DEFAULT_ANISOTROPY=1;var Ie=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,x=(d+_)/4,S=(p+m)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=x/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Un({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xo=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ae=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Nr.setFromMatrixColumn(t,0).length(),r=1/Nr.setFromMatrixColumn(t,1).length(),o=1/Nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f+_*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B_,t,z_)}lookAt(t,e,n){let i=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ws.crossVectors(n,ei),ws.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ws.crossVectors(n,ei)),ws.normalize(),rl.crossVectors(ei,ws),i[0]=ws.x,i[4]=rl.x,i[8]=ei.x,i[1]=ws.y,i[5]=rl.y,i[9]=ei.y,i[2]=ws.z,i[6]=rl.z,i[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=i[0],x=i[4],S=i[8],P=i[12],A=i[1],N=i[5],D=i[9],k=i[13],I=i[2],z=i[6],H=i[10],F=i[14],et=i[3],X=i[7],R=i[11],$=i[15];return r[0]=o*E+a*A+l*I+c*et,r[4]=o*x+a*N+l*z+c*X,r[8]=o*S+a*D+l*H+c*R,r[12]=o*P+a*k+l*F+c*$,r[1]=h*E+d*A+f*I+u*et,r[5]=h*x+d*N+f*z+u*X,r[9]=h*S+d*D+f*H+u*R,r[13]=h*P+d*k+f*F+u*$,r[2]=p*E+_*A+m*I+g*et,r[6]=p*x+_*N+m*z+g*X,r[10]=p*S+_*D+m*H+g*R,r[14]=p*P+_*k+m*F+g*$,r[3]=v*E+w*A+y*I+T*et,r[7]=v*x+w*N+y*z+T*X,r[11]=v*S+w*D+y*H+T*R,r[15]=v*P+w*k+y*F+T*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*u-c*f,w=a*u-c*d,y=a*f-l*d,T=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(_*v-m*w+g*y)-n*(p*v-m*T+g*E)+i*(p*w-_*T+g*x)-r*(p*y-_*E+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-n*o,w=e*l-i*o,y=e*c-r*o,T=n*l-i*a,E=n*c-r*a,x=i*c-r*l,S=h*_-d*p,P=h*m-f*p,A=h*g-u*p,N=d*m-f*_,D=d*g-u*_,k=f*g-u*m,I=v*k-w*D+y*N+T*A-E*P+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*k-l*D+c*N)*z,t[1]=(i*D-n*k-r*N)*z,t[2]=(_*x-m*E+g*T)*z,t[3]=(f*E-d*x-u*T)*z,t[4]=(l*A-o*k-c*P)*z,t[5]=(e*k-i*A+r*P)*z,t[6]=(m*y-p*x-g*w)*z,t[7]=(h*x-f*y+u*w)*z,t[8]=(o*D-a*A+c*S)*z,t[9]=(n*A-e*D-r*S)*z,t[10]=(p*E-_*y+g*v)*z,t[11]=(d*y-h*E-u*v)*z,t[12]=(a*P-o*N-l*S)*z,t[13]=(e*N-n*P+i*S)*z,t[14]=(_*w-p*T-m*v)*z,t[15]=(h*T-d*w+f*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=a*d,v=l*c,w=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+y)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+g))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+w)*x,i[9]=(m-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Nr.set(i[0],i[1],i[2]).length(),a=Nr.set(i[4],i[5],i[6]).length(),l=Nr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=pi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===pi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Jr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===pi)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Jr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Nr=new B,wi=new Ae,B_=new B(0,0,0),z_=new B(1,1,1),ws=new B,rl=new B,ei=new B,Fd=new Ae,Bd=new zi,os=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},k_=0,zd=new B,Ur=new zi,ji=new Ae,ol=new B,No=new B,V_=new B,G_=new zi,kd=new B(1,0,0),Vd=new B(0,1,0),Gd=new B(0,0,1),Hd={type:"added"},H_={type:"removed"},Or={type:"childadded",child:null},su={type:"childremoved",child:null},bn=class s extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new os,n=new zi,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Xt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(kd,t)}rotateY(t){return this.rotateOnAxis(Vd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kd,t)}translateY(t){return this.translateOnAxis(Vd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ol.copy(t):ol.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(No,ol,this.up):ji.lookAt(ol,No,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),Ur.setFromRotationMatrix(ji),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Or.child=t,this.dispatchEvent(Or),Or.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(H_),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,V_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,G_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new B(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},al={h:0,s:0,l:0};function ru(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=L_(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ru(o,r,t+1/3),this.g=ru(o,r,t),this.b=ru(o,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let n=Gp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return oe.workingToColorSpace(Sn.copy(this),t),Math.round(ie(Sn.r*255,0,255))*65536+Math.round(ie(Sn.g*255,0,255))*256+Math.round(ie(Sn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Mn){oe.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,i=Sn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+e,Es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Es),t.getHSL(al);let n=jh(Es.h,al.h,e),i=jh(Es.s,al.s,e),r=jh(Es.l,al.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Jt;Jt.NAMES=Gp;var Yo=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new B,ts=new B,ou=new B,es=new B,Fr=new B,Br=new B,Wd=new B,au=new B,lu=new B,cu=new B,hu=new Ie,uu=new Ie,fu=new Ie,Ps=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ei.subVectors(t,e),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ei.subVectors(i,e),ts.subVectors(n,e),ou.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(ts),l=Ei.dot(ou),c=ts.dot(ts),h=ts.dot(ou),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(o,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return hu.setScalar(0),uu.setScalar(0),fu.setScalar(0),hu.fromBufferAttribute(t,e),uu.fromBufferAttribute(t,n),fu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(hu,r.x),o.addScaledVector(uu,r.y),o.addScaledVector(fu,r.z),o}static isFrontFacing(t,e,n,i){return Ei.subVectors(n,e),ts.subVectors(t,e),Ei.cross(ts).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Ei.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Fr.subVectors(i,n),Br.subVectors(r,n),au.subVectors(t,n);let l=Fr.dot(au),c=Br.dot(au);if(l<=0&&c<=0)return e.copy(n);lu.subVectors(t,i);let h=Fr.dot(lu),d=Br.dot(lu);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Fr,o);cu.subVectors(t,r);let u=Fr.dot(cu),p=Br.dot(cu);if(p>=0&&u<=p)return e.copy(r);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Br,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Wd.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Wd,a);let g=1/(m+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Is=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),cl.subVectors(this.max,Uo),zr.subVectors(t.a,Uo),kr.subVectors(t.b,Uo),Vr.subVectors(t.c,Uo),As.subVectors(kr,zr),Cs.subVectors(Vr,kr),nr.subVectors(zr,Vr);let e=[0,-As.z,As.y,0,-Cs.z,Cs.y,0,-nr.z,nr.y,As.z,0,-As.x,Cs.z,0,-Cs.x,nr.z,0,-nr.x,-As.y,As.x,0,-Cs.y,Cs.x,0,-nr.y,nr.x,0];return!du(e,zr,kr,Vr,cl)||(e=[1,0,0,0,1,0,0,0,1],!du(e,zr,kr,Vr,cl))?!1:(hl.crossVectors(As,Cs),e=[hl.x,hl.y,hl.z],du(e,zr,kr,Vr,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ns=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,ll=new Is,zr=new B,kr=new B,Vr=new B,As=new B,Cs=new B,nr=new B,Uo=new B,cl=new B,hl=new B,ir=new B;function du(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ir.fromArray(s,r);let a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=t.dot(ir),c=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new B,ul=new Ft,X_=0,Fi=class extends Bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Op,this.updateRanges=[],this.gpuType=Pi,this.version=0,this._normalizationScale=t!==void 0?nf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ul.fromBufferAttribute(this,e),ul.applyMatrix3(t),this.setXY(e,ul.x,ul.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):D_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):N_(t,this.array)}};var Zo=class extends Fi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jo=class extends Fi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Pe=class extends Fi{constructor(t,e,n){super(new Float32Array(t),e,n)}},q_=new Is,Oo=new B,pu=new B,jr=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):q_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);let e=Oo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Oo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(pu)),this.expandByPoint(Oo.copy(t.center).sub(pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y_=0,di=new Ae,mu=new bn,Gr=new B,ni=new Is,Fo=new Is,cn=new B,gi=class s extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?Jo:Zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return mu.lookAt(t),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(ni.min,Fo.min),ni.expandByPoint(cn),cn.addVectors(ni.max,Fo.max),ni.expandByPoint(cn)):(ni.expandByPoint(Fo.min),ni.expandByPoint(Fo.max))}ni.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(t,c),cn.add(Gr)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,f=new B,u=new Ft,p=new Ft,_=new Ft,m=new B,g=new B;function v(P,A,N){c[P]=c[A]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),p.sub(u),_.sub(u);let D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(m),a[A].add(m),a[N].add(m),l[P].add(g),l[A].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,A=w.length;P<A;++P){let N=w[P],D=N.start,k=N.count;for(let I=D,z=D+k;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new B,T=new B,E=new B,x=new B;function S(P){E.fromBufferAttribute(i,P),x.copy(E);let A=a[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(x,A);let D=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Fi(f,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gu=new B,Z_=new B,J_=new Xt,Ci=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=gu.subVectors(n,e).cross(Z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||J_.getNormalMatrix(t),i=this.coplanarPoint(gu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$_=0,as=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=va(),this.name="",this.type="Material",this.blending=oo,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Uu,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var is=new B,_u=new B,fl=new B,dl=new B,kl=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,e),is.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_u.copy(t).add(e).multiplyScalar(.5),fl.copy(e).sub(t).normalize(),dl.copy(this.origin).sub(_u);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fl),a=dl.dot(this.direction),l=-dl.dot(fl),c=dl.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_u).addScaledVector(fl,f),u}intersectSphere(t,e){if(t.radius<0)return null;is.subVectors(t.center,this.origin);let n=is.dot(this.direction),i=is.dot(is)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,S,P,A,N,D,k,I,z,H,F,et;if(y>=T&&y>=E?(P=l,D=d,z=p,et=g,l>=0?(x=c,S=h,A=f,N=u,k=_,I=m,H=v,F=w):(x=h,S=c,A=u,N=f,k=m,I=_,H=w,F=v)):T>=E?(P=c,D=f,z=_,et=v,c>=0?(x=h,S=l,A=u,N=d,k=m,I=p,H=w,F=g):(x=l,S=h,A=d,N=u,k=p,I=m,H=g,F=w)):(P=h,D=u,z=m,et=w,h>=0?(x=l,S=c,A=d,N=f,k=p,I=_,H=g,F=v):(x=c,S=l,A=f,N=d,k=_,I=p,H=v,F=g)),P===0)return null;let X=x/P,R=S/P,$=1/P,Mt=A-X*D,Ot=N-R*D,Z=k-X*z,ht=I-R*z,vt=H-X*et,Tt=F-R*et,Q=vt*ht-Tt*Z,at=Mt*Tt-Ot*vt,kt=Z*Ot-ht*Mt;if(i){if(Q<0||at<0||kt<0)return null}else if((Q<0||at<0||kt<0)&&(Q>0||at>0||kt>0))return null;let bt=Q+at+kt;if(bt===0)return null;let Bt=$*(Q*D+at*z+kt*et);return(bt>0?Bt<0:Bt>0)?null:this.at(Bt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vl=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xd=new Ae,sr=new kl,pl=new jr,qd=new B,ml=new B,gl=new B,_l=new B,xu=new B,xl=new B,Yd=new B,vl=new B,Ke=class extends bn{constructor(t=new gi,e=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xu.fromBufferAttribute(d,t),o?xl.addScaledVector(xu,h):xl.addScaledVector(xu.sub(e),h))}e.add(xl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),sr.copy(t.ray).recast(t.near),!(pl.containsPoint(sr.origin)===!1&&(sr.intersectSphere(pl,qd)===null||sr.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),sr.copy(t.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),S=a.getX(y+2);i=yl(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);i=yl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,S=y+2;i=yl(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=m,w=m+1,y=m+2;i=yl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function K_(s,t,e,n,i,r,o,a){let l;if(t.side===On?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Bs,a),l===null)return null;vl.copy(a),vl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(vl);return c<e.near||c>e.far?null:{distance:c,point:vl.clone(),object:s}}function yl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ml),s.getVertexPosition(l,gl),s.getVertexPosition(c,_l);let h=K_(s,t,e,n,ml,gl,_l,Yd);if(h){let d=new B;Ps.getBarycoord(Yd,ml,gl,_l,d),i&&(h.uv=Ps.getInterpolatedAttribute(i,a,l,c,d,new Ft)),r&&(h.uv1=Ps.getInterpolatedAttribute(r,a,l,c,d,new Ft)),o&&(h.normal=Ps.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};Ps.getNormal(ml,gl,_l,f.normal),h.face=f,h.barycoord=d}return h}var Gl=class extends Un{constructor(t=null,e=1,n=1,i,r,o,a,l,c=hn,h=hn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=new jr,Q_=new Ft(.5,.5),Sl=new B,Ls=class{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-p,T-v).normalize(),i[1].setComponents(c+o,u+h,g+p,T+v).normalize(),i[2].setComponents(c+a,u+d,g+_,T+w).normalize(),i[3].setComponents(c-a,u-d,g-_,T-w).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,u-f,g-m,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-m,T-y).normalize(),e===pi)i[5].setComponents(c+l,u+f,g+m,T+y).normalize();else if(e===Jr)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);let e=Q_.distanceTo(t.center);return rr.radius=.7071067811865476+e,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Sl.x=i.normal.x>0?t.max.x:t.min.x,Sl.y=i.normal.y>0?t.max.y:t.min.y,Sl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zd=new Ae,Hl=class s{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Zd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ls),n[i].setFromProjectionMatrix(Zd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ls),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var $o=class extends Un{constructor(t=[],e=cr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},to=class extends Un{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Un{constructor(t,e,n=Ri,i,r,o,a=hn,l=hn,c,h=rs,d=1){if(h!==rs&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends ls{constructor(t,e=Ri,n=cr,i,r,o=hn,a=hn,l,c=rs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},eo=class s extends gi{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2));function p(_,m,g,v,w,y,T,E,x,S,P){let A=y/x,N=T/S,D=y/2,k=T/2,I=E/2,z=x+1,H=S+1,F=0,et=0,X=new B;for(let R=0;R<H;R++){let $=R*N-k;for(let Mt=0;Mt<z;Mt++){let Ot=Mt*A-D;X[_]=Ot*v,X[m]=$*w,X[g]=I,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Mt/x),d.push(1-R/S),F+=1}}for(let R=0;R<S;R++)for(let $=0;$<x;$++){let Mt=f+$+z*R,Ot=f+$+z*(R+1),Z=f+($+1)+z*(R+1),ht=f+($+1)+z*R;l.push(Mt,Ot,ht),l.push(Ot,Z,ht),et+=6}a.addGroup(u,et,P),u+=et,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jo=class s extends gi{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new B,h=new Ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ds=class s extends gi{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,_=[],m=n/2,g=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(u,2));function v(){let y=new B,T=new B,E=0,x=(e-t)/n;for(let S=0;S<=r;S++){let P=[],A=S/r,N=A*(e-t)+t;for(let D=0;D<=i;D++){let k=D/i,I=k*l+a,z=Math.sin(I),H=Math.cos(I);T.x=N*z,T.y=-A*n+m,T.z=N*H,d.push(T.x,T.y,T.z),y.set(z,x,H).normalize(),f.push(y.x,y.y,y.z),u.push(k,1-A),P.push(p++)}_.push(P)}for(let S=0;S<i;S++)for(let P=0;P<r;P++){let A=_[P][S],N=_[P+1][S],D=_[P+1][S+1],k=_[P][S+1];(t>0||P!==0)&&(h.push(A,N,k),E+=3),(e>0||P!==r-1)&&(h.push(N,D,k),E+=3)}c.addGroup(g,E,0),g+=E}function w(y){let T=p,E=new Ft,x=new B,S=0,P=y===!0?t:e,A=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*A,0),f.push(0,A,0),u.push(.5,.5),p++;let N=p;for(let D=0;D<=i;D++){let I=D/i*l+a,z=Math.cos(I),H=Math.sin(I);x.x=P*H,x.y=m*A,x.z=P*z,d.push(x.x,x.y,x.z),f.push(0,A,0),E.x=z*.5+.5,E.y=H*.5*A+.5,u.push(E.x,E.y),p++}for(let D=0;D<i;D++){let k=T+D,I=N+D;y===!0?h.push(I,I+1,k):h.push(I+1,I,k),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],o=[],a=new B,l=new Ae;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(ie(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ta=class extends _i{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wl=class extends ta{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sf(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Jd=new B,$d=new B,vu=new sf,yu=new sf,Su=new sf,no=class extends _i{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:($d.subVectors(i[0],i[1]).add(i[0]),c=$d);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Jd.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Jd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),vu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),yu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),Su.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),yu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Su.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(vu.calc(l),yu.calc(l),Su.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function j_(s,t){let e=1-s;return e*e*t}function t0(s,t){return 2*(1-s)*s*t}function e0(s,t){return s*s*t}function zo(s,t,e,n){return j_(s,t)+t0(s,e)+e0(s,n)}function n0(s,t){let e=1-s;return e*e*e*t}function i0(s,t){let e=1-s;return 3*e*e*s*t}function s0(s,t){return 3*(1-s)*s*s*t}function r0(s,t){return s*s*s*t}function ko(s,t,e,n,i){return n0(s,t)+i0(s,e)+s0(s,n)+r0(s,i)}var Xl=class extends _i{constructor(t=new Ft,e=new Ft,n=new Ft,i=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ft){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ko(t,i.x,r.x,o.x,a.x),ko(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends _i{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ko(t,i.x,r.x,o.x,a.x),ko(t,i.y,r.y,o.y,a.y),ko(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yl=class extends _i{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends _i{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends _i{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,i.x,r.x,o.x),zo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends _i{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,i.x,r.x,o.x),zo(t,i.y,r.y,o.y),zo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$l=class extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Kd(a,l.x,c.x,h.x,d.x),Kd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ft().fromArray(i))}return this}},o0=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:no,CubicBezierCurve:Xl,CubicBezierCurve3:ql,EllipseCurve:ta,LineCurve:Yl,LineCurve3:Zl,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:ea,SplineCurve:$l});var na=class s extends gi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let w=0;w<c;w++){let y=w*d-r;p.push(y,-v,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(w,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var or=class s extends gi{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new B,u=new B,p=new B;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,w=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(g,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ia=class s extends gi{constructor(t=new ea(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new Ft,h=new B,d=[],f=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(u,2));function _(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),v(),g()}function m(w){h=t.getPointAt(w/e,h);let y=o.normals[w],T=o.binormals[w];for(let E=0;E<=i;E++){let x=E/i*Math.PI*2,S=Math.sin(x),P=-Math.cos(x);l.x=P*y.x+S*T.x,l.y=P*y.y+S*T.y,l.z=P*y.z+S*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let y=1;y<=i;y++){let T=(i+1)*(w-1)+(y-1),E=(i+1)*w+(y-1),x=(i+1)*w+y,S=(i+1)*(w-1)+y;p.push(T,E,S),p.push(E,x,S)}}function v(){for(let w=0;w<=e;w++)for(let y=0;y<=i;y++)c.x=w/e,c.y=y/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new o0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var sa=class extends as{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ur(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Qd(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Qd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Tn(s){let t={};for(let e=0;e<s.length;e++){let n=ur(s[e]);for(let i in n)t[i]=n[i]}return t}function Qd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function a0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Hp={clone:ur,merge:Tn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ki=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kl=class extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ql=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ml(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends Us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:r=t,a=2*e-n;break;case Eu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:o=t,l=2*n-e;break;case Eu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,w=(-1-u)*m+(1.5+u)*_+.5*p,y=u*m-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+w*o[l+T]+y*o[d+T];return r}},ec=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},nc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ic=class extends Us{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=u*f+p*2,v=d[g],w=d[g+1],y=t*f+p*2,T=h[y],E=h[y+1],x=u0(n,e,v,T,i);r[p]=Wp(x,_,w,E,m)}return r}};function Wp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function h0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function u0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Wp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=h0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hr(e,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hr(t.times,Array),values:Hr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ml(t.settings)&&(n.settings={inTangents:Hr(t.settings.inTangents,Array),outTangents:Hr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ic(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vo:e=this.InterpolantFactoryMethodDiscrete;break;case Ul:e=this.InterpolantFactoryMethodLinear;break;case wl:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return wl;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Ml(this.settings)&&(jd(this.settings.inTangents,t),jd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ml(this.settings)&&(tp(this.settings.inTangents,t),tp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&I_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[f+p]||_!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ml(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function jd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function tp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ul;var Os=class extends si{constructor(t,e,n){super(t,e,n)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Vo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="color";var rc=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};rc.prototype.ValueTypeName="number";var oc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)zi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ra=class extends si{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends si{constructor(t,e,n){super(t,e,n)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Vo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};ac.prototype.ValueTypeName="vector";var lc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xp=new lc,cc=class{constructor(t){this.manager=t!==void 0?t:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},aa=class extends oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mu=new Ae,ep=new B,np=new B,hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ep.setFromMatrixPosition(t.matrixWorld),e.position.copy(ep),np.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(np),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Jr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Mu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bl=new B,Tl=new zi,Ui=new B,la=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bl,Tl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(bl,Tl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rs=new B,ip=new Ft,sp=new Ft,Dn=class extends la{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,e){return this.getViewBounds(t,ip,sp),e.subVectors(sp,ip)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ca=class extends la{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Au=class extends hc{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Wr=-90,Xr=1,so=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dn(Wr,Xr,t,e);i.layers=this.layers,this.add(i);let r=new Dn(Wr,Xr,t,e);r.layers=this.layers,this.add(r);let o=new Dn(Wr,Xr,t,e);o.layers=this.layers,this.add(o);let a=new Dn(Wr,Xr,t,e);a.layers=this.layers,this.add(a);let l=new Dn(Wr,Xr,t,e);l.layers=this.layers,this.add(l);let c=new Dn(Wr,Xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},uc=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var of="\\[\\]\\.:\\/",f0=new RegExp("["+of+"]","g"),af="[^"+of+"]",d0="[^"+of.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",af),m0=/(WCOD+)?/.source.replace("WCOD",d0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",af),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",af),x0=new RegExp("^"+p0+m0+g0+_0+"$"),v0=["material","materials","bones","map"],Cu=class{constructor(t,e,n){let i=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Cu;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yT=new Float32Array(1);var Ru=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function lf(s,t,e,n){let i=y0(n);switch(e){case Zu:return s*t;case $u:return s*t/i.components*i.byteLength;case vc:return s*t/i.components*i.byteLength;case zs:return s*t*2/i.components*i.byteLength;case yc:return s*t*2/i.components*i.byteLength;case Ju:return s*t*3/i.components*i.byteLength;case Li:return s*t*4/i.components*i.byteLength;case Sc:return s*t*4/i.components*i.byteLength;case da:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bc:case wc:return Math.max(s,16)*Math.max(t,8)/4;case Mc:case Tc:return Math.max(s,8)*Math.max(t,8)/2;case Ec:case Ac:case Rc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cc:case _a:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Yc:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jc:case $c:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xa:case Kc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function y0(s){switch(s){case qn:case Wu:return{byteLength:1,components:1};case lo:case Xu:case Ii:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Ri:case gc:case Pi:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function M0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,av=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_v=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:b0,alphahash_pars_fragment:T0,alphamap_fragment:w0,alphamap_pars_fragment:E0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:N0,bsdfs:U0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:H0,color_pars_vertex:W0,color_vertex:X0,common:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:$0,emissivemap_pars_fragment:K0,colorspace_fragment:Q0,colorspace_pars_fragment:j0,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:hx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:xx,lights_physical_fragment:vx,lights_physical_pars_fragment:yx,lights_fragment_begin:Sx,lights_fragment_maps:Mx,lights_fragment_end:bx,lightprobes_pars_fragment:Tx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Ix,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ux,morphcolor_vertex:Ox,morphnormal_vertex:Fx,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:kx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Hx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:Qx,project_vertex:jx,dithering_fragment:tv,dithering_pars_fragment:ev,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:av,skinbase_vertex:lv,skinning_pars_vertex:cv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:fv,specularmap_pars_fragment:dv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:_v,uv_pars_fragment:xv,uv_pars_vertex:vv,uv_vertex:yv,worldpos_vertex:Sv,background_vert:Mv,background_frag:bv,backgroundCube_vert:Tv,backgroundCube_frag:wv,cube_vert:Ev,cube_frag:Av,depth_vert:Cv,depth_frag:Rv,distance_vert:Pv,distance_frag:Iv,equirect_vert:Lv,equirect_frag:Dv,linedashed_vert:Nv,linedashed_frag:Uv,meshbasic_vert:Ov,meshbasic_frag:Fv,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:kv,meshmatcap_frag:Vv,meshnormal_vert:Gv,meshnormal_frag:Hv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:qv,meshphysical_frag:Yv,meshtoon_vert:Zv,meshtoon_frag:Jv,points_vert:$v,points_frag:Kv,shadow_vert:Qv,shadow_frag:jv,sprite_vert:ty,sprite_frag:ey},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Wi={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Wi.physical={uniforms:Tn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var jc={r:0,b:0,g:0},ny=new Ae,pm=new Xt;pm.set(-1,0,0,0,1,0,0,0,1);function iy(s,t,e,n,i,r){let o=new Jt(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,w){let y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new Ke(new eo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:ur(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pm),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ke(new na(2,2),new ki({name:"BackgroundMaterial",uniforms:ur(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(jc,rf(s)),e.buffers.color.setClear(jc.r,jc.g,jc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function sy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,D,k,I,z){let H=!1,F=d(N,I,k,D);r!==F&&(r=F,c(r.object)),H=u(N,I,k,z),H&&p(N,I,k,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(N,D,k,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,k,I){let z=I.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let F=N.isInstancedMesh===!0?N.id:0,et=H[F];et===void 0&&(et={},H[F]=et);let X=et[k.id];X===void 0&&(X={},et[k.id]=X);let R=X[z];return R===void 0&&(R=f(l()),X[z]=R),R}function f(N){let D=[],k=[],I=[];for(let z=0;z<e;z++)D[z]=0,k[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,D,k,I){let z=r.attributes,H=D.attributes,F=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let $=z[X],Mt=H[X];if(Mt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),$===void 0||$.attribute!==Mt||Mt&&$.data!==Mt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function p(N,D,k,I){let z={},H=D.attributes,F=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let $=H[X];$===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let Mt={};Mt.attribute=$,$&&$.data&&(Mt.data=$.data),z[X]=Mt,F++}r.attributes=z,r.attributesNum=F,r.index=I}function _(){let N=r.newAttributes;for(let D=0,k=N.length;D<k;D++)N[D]=0}function m(N){g(N,0)}function g(N,D){let k=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;k[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),z[N]!==D&&(s.vertexAttribDivisor(N,D),z[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let k=0,I=D.length;k<I;k++)D[k]!==N[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function w(N,D,k,I,z,H,F){F===!0?s.vertexAttribIPointer(N,D,k,z,H):s.vertexAttribPointer(N,D,k,I,z,H)}function y(N,D,k,I){_();let z=I.attributes,H=k.getAttributes(),F=D.defaultAttributeValues;for(let et in H){let X=H[et];if(X.location>=0){let R=z[et];if(R===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let $=R.normalized,Mt=R.itemSize,Ot=t.get(R);if(Ot===void 0)continue;let Z=Ot.buffer,ht=Ot.type,vt=Ot.bytesPerElement,Tt=ht===s.INT||ht===s.UNSIGNED_INT||R.gpuType===gc;if(R.isInterleavedBufferAttribute){let Q=R.data,at=Q.isInterleavedBuffer===!0?Q.stride:Q.itemSize,kt=R.offset;if(Q.isInstancedInterleavedBuffer||Q.isInstancedBufferAttribute){for(let bt=0;bt<X.locationSize;bt++)g(X.location+bt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<X.locationSize;bt++)m(X.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let bt=0;bt<X.locationSize;bt++)w(X.location+bt,Mt/X.locationSize,ht,$,at*vt,(kt+Mt/X.locationSize*bt)*vt,Tt)}else{if(R.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)g(X.location+Q,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Q=0;Q<X.locationSize;Q++)w(X.location+Q,Mt/X.locationSize,ht,$,Mt*vt,Mt/X.locationSize*Q*vt,Tt)}}else if(F!==void 0){let $=F[et];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(X.location,$);break;case 3:s.vertexAttrib3fv(X.location,$);break;case 4:s.vertexAttrib4fv(X.location,$);break;default:s.vertexAttrib1fv(X.location,$)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let k in D){let I=D[k];for(let z in I){let H=I[z];for(let F in H)h(H[F].object),delete H[F];delete I[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let k in D){let I=D[k];for(let z in I){let H=I[z];for(let F in H)h(H[F].object),delete H[F];delete I[z]}}delete n[N.id]}function x(N){for(let D in n){let k=n[D];for(let I in k){let z=k[I];if(z[N.id]===void 0)continue;let H=z[N.id];for(let F in H)h(H[F].object),delete H[F];delete z[N.id]}}}function S(N){for(let D in n){let k=n[D],I=N.isInstancedMesh===!0?N.id:0,z=k[I];if(z!==void 0){for(let H in z){let F=z[H];for(let et in F)h(F[et].object),delete F[et];delete z[H]}delete k[I],Object.keys(k).length===0&&delete n[D]}}}function P(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ry(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function oy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Li&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==qn&&x!==Pi&&!S&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function ay(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ci,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,w=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,w,u);for(let T=0;T!==w;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Ma=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $o(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new eo(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:ar});r.uniforms.tEquirect.value=e;let o=new Ke(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Nn),new so(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},qp=256,ly=3,cy=20,mm=256,gm=16,hy=3,uy=new B,fy=new Jt,eh=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new so(1,10,null),this._boxMesh=new Ke(new eo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=uy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(fy));let m=new so(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qp,Vp(t))}_fromTexture(t,e){t.mapping===cr||t.mapping===ao?this._setSize(t.image.length===0?qp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Yp(t,!1,!1),n=Math.log2(t)-ly;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===cr||t.mapping===ao?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dy(),this._integrationMaterial=py());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-hy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(mm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=my());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Yp(s,t,e){return new Ma(s,{minFilter:cs,generateMipmaps:t,type:Ii,colorSpace:Go,depthBuffer:e})}function ba(s,t,e){return new ki({name:s,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:On,blending:ar,depthTest:!1,depthWrite:!1})}function dy(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function py(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function my(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zp(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Jp(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===dc||u===pc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ma(p.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===dc||u===pc,_=u===cr||u===ao;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new eh(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new eh(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===dc?f.mapping=cr:u===pc&&(f.mapping=ao),f}function l(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function _y(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Bo("WebGLRenderer: "+n+" extension not supported."),i}}}function xy(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?Jo:Zo,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,P=0;S<v;S+=3){let A=x[S+0],N=x[S+1],D=x[S+2];T[P++]=A,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=A}}else{g=m.version;for(let x=0,S=0;x<v;x+=3){let P=x+0,A=x+1,N=x+2;T[S++]=P,T[S++]=A,T[S++]=A,T[S++]=N,T[S++]=N,T[S++]=P}}y.version=g;let E=r.get(p);E&&t.remove(E),r.set(p,y)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function vy(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Sy(s,t,e){let n=new WeakMap,i=new Ie;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new Xo(E,y,T,d);x.type=Pi,x.needsUpdate=!0;let S=w*4;for(let A=0;A<d;A++){let N=m[A],D=g[A],k=v[A],I=y*T*4*A;for(let z=0;z<N.count;z++){let H=z*S;u===!0&&(i.fromBufferAttribute(N,z),E[I+H+0]=i.x,E[I+H+1]=i.y,E[I+H+2]=i.z,E[I+H+3]=0),p===!0&&(i.fromBufferAttribute(D,z),E[I+H+4]=i.x,E[I+H+5]=i.y,E[I+H+6]=i.z,E[I+H+7]=0),_===!0&&(i.fromBufferAttribute(k,z),E[I+H+8]=i.x,E[I+H+9]=i.y,E[I+H+10]=i.z,E[I+H+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new Ft(y,T)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function My(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var by={[Fu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[ua]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Gu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function Ty(s,t,e,n,i,r){let o=new ii(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new gi;h.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let d=new Kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ke(h,d),u=new ca(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new ii(E,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new ii(E,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&w.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ls(E,x),r===!0&&(c.format=hs,c.type=hr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<w.length;P++){let A=w[P];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===Gi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,m=!0;let x=o,S=a;for(let P=0;P<w.length;P++){let A=w[P];A.enabled!==!1&&(A.render(T,S,x,E),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,d.defines={},oe.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");let P=by[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var _m=new Un,xm=new ls(1,1),vm=new Ko(1),ym=new Xo,Sm=new zl,Mm=new $o,$p=[],Kp=[],Qp=new Float32Array(16),jp=new Float32Array(9),tm=new Float32Array(4);function ho(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=$p[i];if(r===void 0&&(r=new Float32Array(i),$p[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ih(s,t){let e=Kp[t];e===void 0&&(e=new Int32Array(t),Kp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function wy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ey(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function Ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function Cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function Ry(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;tm.set(n),s.uniformMatrix2fv(this.addr,!1,tm),rn(e,n)}}function Py(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;jp.set(n),s.uniformMatrix3fv(this.addr,!1,jp),rn(e,n)}}function Iy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Qp.set(n),s.uniformMatrix4fv(this.addr,!1,Qp),rn(e,n)}}function Ly(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function Uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function Oy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function sh(s){return s.version===0&&(s.compareFunction=ju,s.needsUpdate=!0),s}function ky(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=sh(xm):r=_m,e.setTexture2D(t||r,i)}function Vy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sm,i)}function Gy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sh(vm):r=Mm,e.setTextureCube(t||r,i)}function Hy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ym,i)}function Wy(s){switch(s){case 5126:return wy;case 35664:return Ey;case 35665:return Ay;case 35666:return Cy;case 35674:return Ry;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Hy}}function Xy(s,t){s.uniform1fv(this.addr,t)}function qy(s,t){let e=ho(t,this.size,2);s.uniform2fv(this.addr,e)}function Yy(s,t){let e=ho(t,this.size,3);s.uniform3fv(this.addr,e)}function Zy(s,t){let e=ho(t,this.size,4);s.uniform4fv(this.addr,e)}function Jy(s,t){let e=ho(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $y(s,t){let e=ho(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ky(s,t){let e=ho(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Qy(s,t){s.uniform1iv(this.addr,t)}function jy(s,t){s.uniform2iv(this.addr,t)}function tS(s,t){s.uniform3iv(this.addr,t)}function eS(s,t){s.uniform4iv(this.addr,t)}function nS(s,t){s.uniform1uiv(this.addr,t)}function iS(s,t){s.uniform2uiv(this.addr,t)}function sS(s,t){s.uniform3uiv(this.addr,t)}function rS(s,t){s.uniform4uiv(this.addr,t)}function oS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=sh(xm):o=_m;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function aS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Sm,r[o])}function lS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=sh(vm):o=Mm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function cS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ym,r[o])}function hS(s){switch(s){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return Zy;case 35674:return Jy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return Qy;case 35667:case 35671:return jy;case 35668:case 35672:return tS;case 35669:case 35673:return eS;case 5125:return nS;case 36294:return iS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}var uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wy(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hS(e.type)}},df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function em(s,t){s.seq.push(t),s.map[t.id]=t}function uS(s,t,e){let n=s.name,i=n.length;for(cf.lastIndex=0;;){let r=cf.exec(n),o=cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){em(e,c===void 0?new uf(a,s,t):new ff(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new df(a),em(e,d)),e=d}}}var co=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);uS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function nm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var fS=37297,dS=0;function pS(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var im=new Xt;function mS(s){oe._getMatrix(im,oe.workingColorSpace,s);let t=`mat3( ${im.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Ho:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pS(s.getShaderSource(t),a)}else return r}function gS(s,t){let e=mS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _S={[Fu]:"Linear",[Bu]:"Reinhard",[zu]:"Cineon",[ua]:"ACESFilmic",[Vu]:"AgX",[Gu]:"Neutral",[ku]:"Custom"};function xS(s,t){let e=_S[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var th=new B;function vS(){oe.getLuminanceCoefficients(th);let s=th.x.toFixed(4),t=th.y.toFixed(4),e=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function SS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function MS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Sa(s){return s!==""}function rm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function om(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(s){return s.replace(bS,TS)}function TS(s,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return pf(e)}var wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(s){return s.replace(wS,ES)}function ES(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var AS={[ha]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function CS(s){return AS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RS={[ao]:"ENVMAP_MODE_REFRACTION"};function PS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":RS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IS={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[wp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function LS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":IS[s.combine]||"ENVMAP_BLENDING_NONE"}function DS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=CS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=PS(e),d=LS(e),f=yS(e),u=SS(r),p=i.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Sa).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(_=[lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Gi?xS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,gS("linearToOutputTexel",e.outputColorSpace),vS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),o=pf(o),o=rm(o,e),o=om(o,e),a=pf(a),a=rm(a,e),a=om(a,e),o=am(o),a=am(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+o,w=g+m+a,y=nm(i,i.VERTEX_SHADER,v),T=nm(i,i.FRAGMENT_SHADER,w);i.attachShader(p,y),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(y)||"",k=i.getShaderInfoLog(T)||"",I=N.trim(),z=D.trim(),H=k.trim(),F=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,T);else{let X=sm(i,y,"vertex"),R=sm(i,T,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+X+`
`+R)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(et=!1);et&&(A.diagnostics={runnable:F,programLog:I,vertexShader:{log:z,prefix:_},fragmentShader:{log:H,prefix:m}})}i.deleteShader(y),i.deleteShader(T),x=new co(i,p),S=MS(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,fS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var NS=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}},gf=class{constructor(t){this.id=NS++,this.code=t,this.usedTimes=0}};function US(s){return s===zs||s===_a||s===xa}function OS(s,t,e,n,i,r){let o=new qo,a=new mf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,A,N,D){let k=A.fog,I=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||z,H),et=f[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=R!==void 0?R.length:0,Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let Ot,Z,ht,vt;if(et){let it=Wi[et];Ot=it.vertexShader,Z=it.fragmentShader}else{Ot=x.vertexShader,Z=x.fragmentShader;let it=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,it,Et),ht=it.id,vt=Et.id}let Tt=s.getRenderTarget(),Q=s.state.buffers.depth.getReversed(),at=N.isInstancedMesh===!0,kt=N.isBatchedMesh===!0,bt=!!x.map,Bt=!!x.matcap,Ct=!!F,Pt=Ct&&F.isPMREMTexture===!0,te=!!x.aoMap,ce=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,qe=!!x.displacementMap,ye=!!x.emissiveMap,ae=!!x.metalnessMap,Fe=!!x.roughnessMap,He=x.anisotropy>0,O=x.clearcoat>0,de=x.diffuseRoughness>0,he=x.dispersion>0,Wt=x.retroreflectivity>0,dt=x.iridescence>0,fe=x.sheen>0,Nt=x.transmission>0,zt=He&&!!x.anisotropyMap,C=O&&!!x.clearcoatMap,M=O&&!!x.clearcoatNormalMap,G=O&&!!x.clearcoatRoughnessMap,ot=de&&!!x.diffuseRoughnessMap,st=dt&&!!x.iridescenceMap,ft=dt&&!!x.iridescenceThicknessMap,_t=fe&&!!x.sheenColorMap,W=fe&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ut=!!x.specularColorMap,L=!!x.specularIntensityMap,j=Nt&&!!x.transmissionMap,K=Nt&&!!x.thicknessMap,pt=!!x.gradientMap,ct=!!x.alphaMap,mt=x.alphaTest>0,lt=!!x.alphaHash,gt=!!x.extensions,rt=Gi;x.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(rt=s.toneMapping);let nt=Pt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,xt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Z,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:kt,batchingColor:kt&&N._colorsTexture!==null,instancing:at,instancingColor:at&&N.instanceColor!==null,instancingMorph:at&&N.morphTexture!==null,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:Bt,envMap:Ct,envMapMode:Ct&&F.mapping,envMapPMREM:Pt,envMapMaxLod:Pt?nt.length-1:null,envMapSize:Pt?nt[0].width:null,aoMap:te,lightMap:ce,bumpMap:J,normalMap:ee,displacementMap:qe,emissiveMap:ye,normalMapObjectSpace:ee&&x.normalMapType===Rp,normalMapTangentSpace:ee&&x.normalMapType===Qc,packedNormalMap:ee&&x.normalMapType===Qc&&US(x.normalMap.format),metalnessMap:ae,roughnessMap:Fe,anisotropy:He,anisotropyMap:zt,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:de,diffuseRoughnessMap:ot,dispersion:he,retroreflection:Wt,iridescence:dt,iridescenceMap:st,iridescenceThicknessMap:ft,sheen:fe,sheenColorMap:_t,sheenRoughnessMap:W,specularMap:tt,specularColorMap:ut,specularIntensityMap:L,transmission:Nt,transmissionMap:j,thicknessMap:K,gradientMap:pt,opaque:x.transparent===!1&&x.blending===oo&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:mt,alphaHash:lt,combine:x.combine,mapUv:bt&&u(x.map.channel),aoMapUv:te&&u(x.aoMap.channel),lightMapUv:ce&&u(x.lightMap.channel),bumpMapUv:J&&u(x.bumpMap.channel),normalMapUv:ee&&u(x.normalMap.channel),displacementMapUv:qe&&u(x.displacementMap.channel),emissiveMapUv:ye&&u(x.emissiveMap.channel),metalnessMapUv:ae&&u(x.metalnessMap.channel),roughnessMapUv:Fe&&u(x.roughnessMap.channel),anisotropyMapUv:zt&&u(x.anisotropyMap.channel),clearcoatMapUv:C&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(x.sheenRoughnessMap.channel),specularMapUv:tt&&u(x.specularMap.channel),specularColorMapUv:ut&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:j&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:ct&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ee||He),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(bt||ct),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Mt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(it=>it.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&oe.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vi,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let S=f[x.type],P;if(S){let A=Wi[S];P=Hp.clone(A.uniforms)}else P=x.uniforms;return P}function w(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new DS(s,S,x,i),c.push(P),h.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function FS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function BS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,_,m,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),t++,v}function l(f,u,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let w=a(f,u,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(f,u,p,_,m,g){let v=a(f,u,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||BS),n.length>1&&n.sort(u||cm),i.length>1&&i.sort(u||cm)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function zS(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new hm,s.set(n,[o])):i>=r.length?(o=new hm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function kS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Jt};break;case"SpotLight":e={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function VS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var GS=0;function HS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function WS(s){let t=new kS,e=VS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new Ae,o=new Ae;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,v=0,w=0,y=0,T=0,E=0,x=0,S=0,P=0,A=0;c.sort(HS);for(let D=0,k=c.length;D<k;D++){let I=c[D],z=I.color,H=I.intensity,F=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zs?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*H,d+=z.g*H,f+=z.b*H;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],H);A++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=et;let Mt=R.getViewportCount();for(let Ot=0;Ot<Mt;Ot++)n.sunShadowMatrix[_+Ot]=R.getMatrix(Ot),n.sunShadowCascade[_+Ot]=R._cascadeData[Ot];_+=Mt,p++}n.sun[u]=X,u++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=F,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[v]=X;let R=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let $=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=et,x++}v++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=X,w++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(H),X.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==S||N.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=u,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=S,N.numLightProbes=A,n.version=GS++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function um(s){let t=new WS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XS(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new um(s),t.set(i,[a])):r>=o.length?(a=new um(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZS=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],JS=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],fm=new Ae,ya=new B,hf=new B;function $S(s,t,e){let n=new Ls,i=new Ft,r=new Ft,o=new Ie,a=new Ql,l=new jl,c={},h=e.maxTextureSize,d={[Bs]:On,[On]:Bs,[Vi]:Vi},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:qS,fragmentShader:YS}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new gi;p.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ke(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let g=this.type;this.render=function(E,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fc&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ha);let P=s.getRenderTarget(),A=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ar),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let H=E[I],F=H.shadow;if(F===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let et=F.getFrameExtents();i.multiply(et),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,F.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ro){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ii(i.x,i.y,{format:zs,type:Ii,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new ls(i.x,i.y,Pi),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=rs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn}else H.isPointLight?(F.map=new Ma(i.x),F.map.depthTexture=new Ko(i.x,Ri)):(F.map=new ii(i.x,i.y),F.map.depthTexture=new ls(i.x,i.y,Ri)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=rs,this.type===ha?(F.map.depthTexture.compareFunction=X?Qu:Ku,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,S);let $=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let Mt=0;Mt<R;Mt++){let Ot=F.getCamera(Mt);if(H.isPointLight){let Z=F.camera,ht=F.matrix,vt=H.distance||Z.far;vt!==Z.far&&(Z.far=vt,Z.updateProjectionMatrix()),ya.setFromMatrixPosition(H.matrixWorld),Z.position.copy(ya),hf.copy(Z.position),hf.add(ZS[Mt]),Z.up.copy(JS[Mt]),Z.lookAt(hf),Z.updateMatrixWorld(),ht.makeTranslation(-ya.x,-ya.y,-ya.z),fm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(fm,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,Mt),s.clear();else{Mt===0&&(s.setRenderTarget(F.map),s.clear());let Z=F.getViewport(Mt);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),D.viewport(o)}n=F.getFrustum(Mt),y(x,S,Ot,H,$,this.type)}F.isPointLightShadow!==!0&&this.type===ro&&v(F,S),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(P,A,N)};function v(E,x){let S=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(i.x,i.y,{format:zs,type:Ii}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,S,u,_,null)}function w(E,x,S,P){let A=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,k=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[k];z===void 0&&(z=A.clone(),I[k]=z,x.addEventListener("dispose",T)),A=z}if(A.visible=x.visible,A.wireframe=x.wireframe,P===ro?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=S}return A}function y(E,x,S,P,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ro)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let H=I.groups;for(let F=0,et=H.length;F<et;F++){let X=H[F],R=z[X.materialIndex];if(R&&R.visible){let $=w(E,R,P,N);E.onBeforeShadow(s,E,x,S,I,$,X),s.renderBufferDirect(S,null,I,$,E,X),E.onAfterShadow(s,E,x,S,I,$,X)}}}else if(z.visible){let H=w(E,z,P,N);E.onBeforeShadow(s,E,x,S,I,H,null),s.renderBufferDirect(S,null,I,H,E,null),E.onAfterShadow(s,E,x,S,I,H,null)}}let k=E.children;for(let I=0,z=k.length;I<z;I++)y(k[I],x,S,P,A,N)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let P=c[S],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function KS(s,t){function e(){let L=!1,j=new Ie,K=null,pt=new Ie(0,0,0,0);return{setMask:function(ct){K!==ct&&!L&&(s.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){L=ct},setClear:function(ct,mt,lt,gt,rt){rt===!0&&(ct*=gt,mt*=gt,lt*=gt),j.set(ct,mt,lt,gt),pt.equals(j)===!1&&(s.clearColor(ct,mt,lt,gt),pt.copy(j))},reset:function(){L=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,K=null,pt=null,ct=null;return{setReversed:function(mt){if(j!==mt){let lt=t.get("EXT_clip_control");mt?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),j=mt;let gt=ct;ct=null,this.setClear(gt)}},getReversed:function(){return j},setTest:function(mt){mt?Q(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(mt){K!==mt&&!L&&(s.depthMask(mt),K=mt)},setFunc:function(mt){if(j&&(mt=kp[mt]),pt!==mt){switch(mt){case Al:s.depthFunc(s.NEVER);break;case Cl:s.depthFunc(s.ALWAYS);break;case Rl:s.depthFunc(s.LESS);break;case Yr:s.depthFunc(s.LEQUAL);break;case Pl:s.depthFunc(s.EQUAL);break;case Il:s.depthFunc(s.GEQUAL);break;case Ll:s.depthFunc(s.GREATER);break;case Dl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){ct!==mt&&(ct=mt,j&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,K=null,pt=null,ct=null,j=!1}}}function i(){let L=!1,j=null,K=null,pt=null,ct=null,mt=null,lt=null,gt=null,rt=null;return{setTest:function(nt){L||(nt?Q(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(nt){j!==nt&&!L&&(s.stencilMask(nt),j=nt)},setFunc:function(nt,xt,it){(K!==nt||pt!==xt||ct!==it)&&(s.stencilFunc(nt,xt,it),K=nt,pt=xt,ct=it)},setOp:function(nt,xt,it){(mt!==nt||lt!==xt||gt!==it)&&(s.stencilOp(nt,xt,it),mt=nt,lt=xt,gt=it)},setLocked:function(nt){L=nt},setClear:function(nt){rt!==nt&&(s.clearStencil(nt),rt=nt)},reset:function(){L=!1,j=null,K=null,pt=null,ct=null,mt=null,lt=null,gt=null,rt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,S=new Jt(0,0,0),P=0,A=!1,N=null,D=null,k=null,I=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,et=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=et>=2);let R=null,$={},Mt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Z=new Ie().fromArray(Mt),ht=new Ie().fromArray(Ot);function vt(L,j,K,pt){let ct=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<K;lt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(j+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return mt}let Tt={};Tt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Yr),J(!1),ee(Pu),Q(s.CULL_FACE),te(ar);function Q(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function at(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function kt(L,j){return f[L]!==j?(s.bindFramebuffer(L,j),f[L]=j,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=j),!0):!1}function bt(L,j){let K=p,pt=!1;if(L){K=u.get(j),K===void 0&&(K=[],u.set(j,K));let ct=L.textures;if(K.length!==ct.length||K[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,lt=ct.length;mt<lt;mt++)K[mt]=s.COLOR_ATTACHMENT0+mt;K.length=ct.length,pt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,pt=!0);pt&&s.drawBuffers(K)}function Bt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Ct={[lr]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[cp]:s.FUNC_REVERSE_SUBTRACT};Ct[hp]=s.MIN,Ct[up]=s.MAX;let Pt={[fp]:s.ZERO,[dp]:s.ONE,[pp]:s.SRC_COLOR,[Nu]:s.SRC_ALPHA,[yp]:s.SRC_ALPHA_SATURATE,[xp]:s.DST_COLOR,[gp]:s.DST_ALPHA,[mp]:s.ONE_MINUS_SRC_COLOR,[Uu]:s.ONE_MINUS_SRC_ALPHA,[vp]:s.ONE_MINUS_DST_COLOR,[_p]:s.ONE_MINUS_DST_ALPHA,[Sp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[bp]:s.CONSTANT_ALPHA,[Tp]:s.ONE_MINUS_CONSTANT_ALPHA};function te(L,j,K,pt,ct,mt,lt,gt,rt,nt){if(L===ar){m===!0&&(at(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),L!==ap){if(L!==g||nt!==A){if((v!==lr||T!==lr)&&(s.blendEquation(s.FUNC_ADD),v=lr,T=lr),nt)switch(L){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFunc(s.ONE,s.ONE);break;case Lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Du:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",L);break}else switch(L){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,S.set(0,0,0),P=0,g=L,A=nt}return}ct=ct||j,mt=mt||K,lt=lt||pt,(j!==v||ct!==T)&&(s.blendEquationSeparate(Ct[j],Ct[ct]),v=j,T=ct),(K!==w||pt!==y||mt!==E||lt!==x)&&(s.blendFuncSeparate(Pt[K],Pt[pt],Pt[mt],Pt[lt]),w=K,y=pt,E=mt,x=lt),(gt.equals(S)===!1||rt!==P)&&(s.blendColor(gt.r,gt.g,gt.b,rt),S.copy(gt),P=rt),g=L,A=!1}function ce(L,j){L.side===Vi?at(s.CULL_FACE):Q(s.CULL_FACE);let K=L.side===On;j&&(K=!K),J(K),L.blending===oo&&L.transparent===!1?te(ar):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function ee(L){L!==rp?(Q(s.CULL_FACE),L!==D&&(L===Pu?s.cullFace(s.BACK):L===op?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),D=L}function qe(L){L!==k&&(F&&s.lineWidth(L),k=L)}function ye(L,j,K){L?(Q(s.POLYGON_OFFSET_FILL),(I!==j||z!==K)&&(I=j,z=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):at(s.POLYGON_OFFSET_FILL)}function ae(L){L?Q(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function Fe(L){L===void 0&&(L=s.TEXTURE0+H-1),R!==L&&(s.activeTexture(L),R=L)}function He(L,j,K){K===void 0&&(R===null?K=s.TEXTURE0+H-1:K=R);let pt=$[K];pt===void 0&&(pt={type:void 0,texture:void 0},$[K]=pt),(pt.type!==L||pt.texture!==j)&&(R!==K&&(s.activeTexture(K),R=K),s.bindTexture(L,j||Tt[L]),pt.type=L,pt.texture=j)}function O(){let L=$[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{s.compressedTexImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function dt(){try{s.texSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function zt(){try{s.texStorage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function C(){try{s.texStorage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function G(){try{s.texImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function st(L,j){d[L]!==j&&(s.pixelStorei(L,j),d[L]=j)}function ft(L){Z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function _t(L){ht.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function W(L,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let pt=K.get(L);pt===void 0&&(pt=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,pt,pt),K.set(L,pt))}function tt(L,j,K){let ct=c.get(j).get(L);l[ct]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,ct,K),l[ct]=K)}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,$={},f={},l={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,S=new Jt(0,0,0),P=0,A=!1,N=null,D=null,k=null,I=null,z=null,Z.set(0,0,s.canvas.width,s.canvas.height),ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:at,bindFramebuffer:kt,drawBuffers:bt,useProgram:Bt,setBlending:te,setMaterial:ce,setFlipSided:J,setCullFace:ee,setLineWidth:qe,setPolygonOffset:ye,setScissorTest:ae,activeTexture:Fe,bindTexture:He,unbindTexture:O,compressedTexImage2D:de,compressedTexImage3D:he,texImage2D:M,texImage3D:G,pixelStorei:st,getParameter:ot,updateUBOMapping:W,uniformBlockBinding:tt,texStorage2D:zt,texStorage3D:C,texSubImage2D:Wt,texSubImage3D:dt,compressedTexSubImage2D:fe,compressedTexSubImage3D:Nt,scissor:ft,viewport:_t,reset:ut}}function QS(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,_=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):Wo("canvas")}function v(C,M,G){let ot=1,st=zt(C);if((st.width>G||st.height>G)&&(ot=G/Math.max(st.width,st.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(ot*st.width),_t=Math.floor(ot*st.height);f===void 0&&(f=g(ft,_t));let W=M?g(ft,_t):f;return W.width=ft,W.height=_t,W.getContext("2d").drawImage(C,0,0,ft,_t),Vt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ft+"x"+_t+")."),W}else return"data"in C&&Vt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function w(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,M,G,ot,st,ft=!1){if(C!==null){if(s[C]!==void 0)return s[C];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=M;if(M===s.RED&&(G===s.FLOAT&&(W=s.R32F),G===s.HALF_FLOAT&&(W=s.R16F),G===s.UNSIGNED_BYTE&&(W=s.R8),G===s.UNSIGNED_SHORT&&_t&&(W=_t.R16_EXT),G===s.SHORT&&_t&&(W=_t.R16_SNORM_EXT)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(W=s.R8UI),G===s.UNSIGNED_SHORT&&(W=s.R16UI),G===s.UNSIGNED_INT&&(W=s.R32UI),G===s.BYTE&&(W=s.R8I),G===s.SHORT&&(W=s.R16I),G===s.INT&&(W=s.R32I)),M===s.RG&&(G===s.FLOAT&&(W=s.RG32F),G===s.HALF_FLOAT&&(W=s.RG16F),G===s.UNSIGNED_BYTE&&(W=s.RG8),G===s.UNSIGNED_SHORT&&_t&&(W=_t.RG16_EXT),G===s.SHORT&&_t&&(W=_t.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(W=s.RG8UI),G===s.UNSIGNED_SHORT&&(W=s.RG16UI),G===s.UNSIGNED_INT&&(W=s.RG32UI),G===s.BYTE&&(W=s.RG8I),G===s.SHORT&&(W=s.RG16I),G===s.INT&&(W=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(W=s.RGB8UI),G===s.UNSIGNED_SHORT&&(W=s.RGB16UI),G===s.UNSIGNED_INT&&(W=s.RGB32UI),G===s.BYTE&&(W=s.RGB8I),G===s.SHORT&&(W=s.RGB16I),G===s.INT&&(W=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),G===s.UNSIGNED_INT&&(W=s.RGBA32UI),G===s.BYTE&&(W=s.RGBA8I),G===s.SHORT&&(W=s.RGBA16I),G===s.INT&&(W=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_SHORT&&_t&&(W=_t.RGB16_EXT),G===s.SHORT&&_t&&(W=_t.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),M===s.RGBA){let tt=ft?Ho:oe.getTransfer(st);G===s.FLOAT&&(W=s.RGBA32F),G===s.HALF_FLOAT&&(W=s.RGBA16F),G===s.UNSIGNED_BYTE&&(W=tt===ge?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&_t&&(W=_t.RGBA16_EXT),G===s.SHORT&&_t&&(W=_t.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(C,M){let G;return C?M===null||M===Ri||M===hr?G=s.DEPTH24_STENCIL8:M===Pi?G=s.DEPTH32F_STENCIL8:M===lo&&(G=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===hr?G=s.DEPTH_COMPONENT24:M===Pi?G=s.DEPTH_COMPONENT32F:M===lo&&(G=s.DEPTH_COMPONENT16),G}function S(C,M){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){let M=new WeakRef(C);n.get(C).__ref=M,p.add(M),_.register(C,M,M)}function A(C){let M=n.get(C).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function N(C){k(C.target)}function D(C){I(C.target)}function k(C){C.removeEventListener("dispose",N),A(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",D),A(C),et(C)}function z(){for(let C of p){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):k(M))}p.clear(),d.clear()}function H(C){let M=n.get(C);if(M.__webglInit===void 0)return;let G=C.source,ot=u.get(G);if(ot){let st=ot[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&F(C),Object.keys(ot).length===0&&u.delete(G)}n.remove(C)}function F(C){let M=n.get(C);s.deleteTexture(M.__webglTexture);let G=C.source,ot=u.get(G);delete ot[M.__cacheKey],o.memory.textures--}function et(C){let M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&k(G),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(M.__webglFramebuffer[st]))for(let ft=0;ft<M.__webglFramebuffer[st].length;ft++)s.deleteFramebuffer(M.__webglFramebuffer[st][ft]);else s.deleteFramebuffer(M.__webglFramebuffer[st]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[st])}else{if(Array.isArray(M.__webglFramebuffer))for(let st=0;st<M.__webglFramebuffer.length;st++)s.deleteFramebuffer(M.__webglFramebuffer[st]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let st=0;st<M.__webglColorRenderbuffer.length;st++)M.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[st]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ot=C.textures;for(let st=0,ft=ot.length;st<ft;st++){let _t=n.get(ot[st]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(ot[st])}n.remove(C)}let X=0;function R(){X=0}function $(){return X}function Mt(C){X=C}function Ot(){let C=X;return C>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,C}function Z(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ht(C,M){let G=n.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ot=C.image;if(ot===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function vt(C,M){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ce(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Tt(C,M){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ce(G,C,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function Q(C,M){let G=n.get(C);if(C.version>0&&G.__version!==C.version){J(G,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let at={[Zr]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[Nl]:s.MIRRORED_REPEAT},kt={[hn]:s.NEAREST,[Ap]:s.NEAREST_MIPMAP_NEAREST,[fa]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},bt={[Ip]:s.NEVER,[ju]:s.ALWAYS,[Lp]:s.LESS,[Ku]:s.LEQUAL,[Dp]:s.EQUAL,[Qu]:s.GEQUAL,[Np]:s.GREATER,[Up]:s.NOTEQUAL};function Bt(C,M){if(M.type===Pi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===mc||M.magFilter===fa||M.magFilter===cs||M.minFilter===Nn||M.minFilter===mc||M.minFilter===fa||M.minFilter===cs)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,at[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,at[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,at[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,kt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,kt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==fa&&M.minFilter!==cs||M.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",N),P(M));let ot=M.source,st=u.get(ot);st===void 0&&(st={},u.set(ot,st));let ft=Z(M);if(ft!==C.__cacheKey){st[ft]===void 0&&(st[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[ft].usedTimes++;let _t=st[C.__cacheKey];_t!==void 0&&(st[C.__cacheKey].usedTimes--,_t.usedTimes===0&&F(M)),C.__cacheKey=ft,C.__webglTexture=st[ft].texture}return G}function Pt(C,M,G){return Math.floor(Math.floor(C/G)/M)}function te(C,M,G,ot){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,ot,M.data);else{ft.sort((L,j)=>L.start-j.start);let _t=0;for(let L=1;L<ft.length;L++){let j=ft[_t],K=ft[L],pt=j.start+j.count,ct=Pt(K.start,M.width,4),mt=Pt(j.start,M.width,4);K.start<=pt+1&&ct===mt&&Pt(K.start+K.count-1,M.width,4)===ct?j.count=Math.max(j.count,K.start+K.count-j.start):(++_t,ft[_t]=K)}ft.length=_t+1;let W=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ut=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,j=ft.length;L<j;L++){let K=ft[L],pt=Math.floor(K.start/4),ct=Math.ceil(K.count/4),mt=pt%M.width,lt=Math.floor(pt/M.width),gt=ct,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt),e.texSubImage2D(s.TEXTURE_2D,0,mt,lt,gt,rt,G,ot,M.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,W),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function ce(C,M,G){let ot=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=s.TEXTURE_3D);let st=Ct(C,M),ft=M.source;e.bindTexture(ot,C.__webglTexture,s.TEXTURE0+G);let _t=n.get(ft);if(ft.version!==_t.__version||st===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let rt=oe.getPrimaries(oe.workingColorSpace),nt=M.colorSpace===us?null:oe.getPrimaries(M.colorSpace),xt=M.colorSpace===us||rt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=v(M.image,!1,i.maxTextureSize);tt=Nt(M,tt);let ut=r.convert(M.format,M.colorSpace),L=r.convert(M.type),j=E(M.internalFormat,ut,L,M.normalized,M.colorSpace,M.isVideoTexture);Bt(ot,M);let K,pt=M.mipmaps,ct=M.isVideoTexture!==!0,mt=_t.__version===void 0||st===!0,lt=ft.dataReady,gt=S(M,tt);if(M.isDepthTexture)j=x(M.format===hs,M.type),mt&&(ct?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ut,L,null));else if(M.isDataTexture)if(pt.length>0){ct&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,pt[0].width,pt[0].height);for(let rt=0,nt=pt.length;rt<nt;rt++)K=pt[rt],ct?lt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,K.width,K.height,ut,L,K.data):e.texImage2D(s.TEXTURE_2D,rt,j,K.width,K.height,0,ut,L,K.data);M.generateMipmaps=!1}else ct?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,tt.width,tt.height),lt&&te(M,tt,ut,L)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ut,L,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,j,pt[0].width,pt[0].height,tt.depth);for(let rt=0,nt=pt.length;rt<nt;rt++)if(K=pt[rt],M.format!==Li)if(ut!==null)if(ct){if(lt)if(M.layerUpdates.size>0){let xt=lf(K.width,K.height,M.format,M.type);for(let it of M.layerUpdates){let Et=K.data.subarray(it*xt/K.data.BYTES_PER_ELEMENT,(it+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,it,K.width,K.height,1,ut,Et)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,tt.depth,ut,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,tt.depth,0,K.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?lt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,tt.depth,ut,L,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,tt.depth,0,ut,L,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ct&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,pt[0].width,pt[0].height);for(let rt=0,nt=pt.length;rt<nt;rt++)K=pt[rt],M.format!==Li?ut!==null?ct?lt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,K.width,K.height,ut,K.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,j,K.width,K.height,0,K.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?lt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,K.width,K.height,ut,L,K.data):e.texImage2D(s.TEXTURE_2D,rt,j,K.width,K.height,0,ut,L,K.data)}else if(M.isDataArrayTexture)if(ct){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,j,tt.width,tt.height,tt.depth),lt)if(M.layerUpdates.size>0){let rt=lf(tt.width,tt.height,M.format,M.type);for(let nt of M.layerUpdates){let xt=tt.data.subarray(nt*rt/tt.data.BYTES_PER_ELEMENT,(nt+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,ut,L,xt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,L,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ut,L,tt.data);else if(M.isData3DTexture)ct?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,j,tt.width,tt.height,tt.depth),lt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,L,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ut,L,tt.data);else if(M.isFramebufferTexture){if(mt)if(ct)e.texStorage2D(s.TEXTURE_2D,gt,j,tt.width,tt.height);else{let rt=tt.width,nt=tt.height;for(let xt=0;xt<gt;xt++)e.texImage2D(s.TEXTURE_2D,xt,j,rt,nt,0,ut,L,null),rt>>=1,nt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),d.add(M),rt.onpaint=nt=>{let xt=nt.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let xt=s.RGBA,it=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,it,Et,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ct&&mt){let rt=zt(pt[0]);e.texStorage2D(s.TEXTURE_2D,gt,j,rt.width,rt.height)}for(let rt=0,nt=pt.length;rt<nt;rt++)K=pt[rt],ct?lt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ut,L,K):e.texImage2D(s.TEXTURE_2D,rt,j,ut,L,K);M.generateMipmaps=!1}else if(ct){if(mt){let rt=zt(tt);e.texStorage2D(s.TEXTURE_2D,gt,j,rt.width,rt.height)}lt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,L,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ut,L,tt);w(M)&&M.mipmapsAutoUpdate===!0&&y(ot),_t.__version=ft.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,G){if(M.image.length!==6)return;let ot=Ct(C,M),st=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let ft=n.get(st);if(st.version!==ft.__version||ot===!0){e.activeTexture(s.TEXTURE0+G);let _t=oe.getPrimaries(oe.workingColorSpace),W=M.colorSpace===us?null:oe.getPrimaries(M.colorSpace),tt=M.colorSpace===us||_t===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,j=[];for(let it=0;it<6;it++)!ut&&!L?j[it]=v(M.image[it],!0,i.maxCubemapSize):j[it]=L?M.image[it].image:M.image[it],j[it]=Nt(M,j[it]);let K=j[0],pt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),mt=E(M.internalFormat,pt,ct,M.normalized,M.colorSpace),lt=M.isVideoTexture!==!0,gt=ft.__version===void 0||ot===!0,rt=st.dataReady,nt=S(M,K);Bt(s.TEXTURE_CUBE_MAP,M);let xt;if(M.isDepthTexture){if(mt=x(M.format===hs,M.type),gt)if(lt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,K.width,K.height);else for(let it=0;it<6;it++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,K.width,K.height,0,pt,ct,null)}else if(ut){lt&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,mt,K.width,K.height);for(let it=0;it<6;it++){xt=j[it].mipmaps;for(let Et=0;Et<xt.length;Et++){let ne=xt[Et];M.format!==Li?pt!==null?lt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,ne.width,ne.height,pt,ne.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,mt,ne.width,ne.height,0,ne.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,ne.width,ne.height,pt,ct,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,mt,ne.width,ne.height,0,pt,ct,ne.data)}}}else{if(xt=M.mipmaps,lt&&gt){xt.length>0&&nt++;let it=zt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,mt,it.width,it.height)}for(let it=0;it<6;it++)if(L){lt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,j[it].width,j[it].height,pt,ct,j[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,j[it].width,j[it].height,0,pt,ct,j[it].data);for(let Et=0;Et<xt.length;Et++){let qt=xt[Et].image[it].image;lt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,qt.width,qt.height,pt,ct,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,mt,qt.width,qt.height,0,pt,ct,qt.data)}}else{lt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt,ct,j[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,pt,ct,j[it]);for(let Et=0;Et<xt.length;Et++){let ne=xt[Et];lt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,pt,ct,ne.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,mt,pt,ct,ne.image[it])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ft.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ee(C,M,G,ot,st,ft){let _t=r.convert(G.format,G.colorSpace),W=r.convert(G.type),tt=E(G.internalFormat,_t,W,G.normalized,G.colorSpace),ut=n.get(M),L=n.get(G);if(L.__renderTarget=M,!ut.__hasExternalTextures){let j=Math.max(1,M.width>>ft),K=Math.max(1,M.height>>ft);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,ft,tt,j,K,M.depth,0,_t,W,null):e.texImage2D(st,ft,tt,j,K,0,_t,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,st,L.__webglTexture,0,Wt(M)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,st,L.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(C,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){let ot=M.depthTexture,st=ot&&ot.isDepthTexture?ot.type:null,ft=x(M.stencilBuffer,st),_t=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),ft,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,C)}else{let ot=M.textures;for(let st=0;st<ot.length;st++){let ft=ot[st],_t=r.convert(ft.format,ft.colorSpace),W=r.convert(ft.type),tt=E(ft.internalFormat,_t,W,ft.normalized,ft.colorSpace);dt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),tt,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),tt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(C,M,G){let ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(M.depthTexture);st.__renderTarget=M;let ft=ot?M.depthTexture.image[0]:M.depthTexture.image;(!st.__webglTexture||ft.width!==M.width||ft.height!==M.height)&&(ft.width=M.width,ft.height=M.height,M.depthTexture.needsUpdate=!0),ot?Q(M.depthTexture,0):ht(M.depthTexture,0);let _t=st.__webglTexture,W=Wt(M),tt=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ut=M.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===rs)dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,tt,_t,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ut,tt,_t,0);else if(M.depthTexture.format===hs)dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,tt,_t,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ut,tt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(C){let M=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){let st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",st)};ot.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=ot}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ot=0;ot<6;ot++)ye(M.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?ye(M.__webglFramebuffer[0],C,0):ye(M.__webglFramebuffer,C,0);else if(G){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=s.createRenderbuffer(),qe(M.__webglDepthbuffer[ot],C,!1);else{let st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ft)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),qe(M.__webglDepthbuffer,C,!1);else{let st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(C,M,G){let ot=n.get(C);M!==void 0&&ee(ot.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ae(C)}function He(C){let M=C.texture,G=n.get(C),ot=n.get(M);C.addEventListener("dispose",D),P(C);let st=C.textures,ft=C.isWebGLCubeRenderTarget===!0,_t=st.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=M.version,o.memory.textures++),ft){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(M.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let tt=0;tt<M.mipmaps.length;tt++)G.__webglFramebuffer[W][tt]=s.createFramebuffer()}else G.__webglFramebuffer[W]=s.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<M.mipmaps.length;W++)G.__webglFramebuffer[W]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(_t)for(let W=0,tt=st.length;W<tt;W++){let ut=n.get(st[W]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&dt(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<st.length;W++){let tt=st[W];G.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[W]);let ut=r.convert(tt.format,tt.colorSpace),L=r.convert(tt.type),j=E(tt.internalFormat,ut,L,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),K=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,G.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,M);for(let W=0;W<6;W++)if(M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)ee(G.__webglFramebuffer[W][tt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,tt);else ee(G.__webglFramebuffer[W],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);w(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let W=0,tt=st.length;W<tt;W++){let ut=st[W],L=n.get(ut),j=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),Bt(j,ut),ee(G.__webglFramebuffer,C,ut,s.COLOR_ATTACHMENT0+W,j,0),w(ut)&&y(j)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(W=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,ot.__webglTexture),Bt(W,M),M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)ee(G.__webglFramebuffer[tt],C,M,s.COLOR_ATTACHMENT0,W,tt);else ee(G.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,W,0);w(M)?y(W):M.mipmaps.length>0&&s.texParameteri(W,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ae(C)}function O(C){let M=C.textures;for(let G=0,ot=M.length;G<ot;G++){let st=M[G];if(w(st)&&st.mipmapsAutoUpdate===!0){let ft=T(C),_t=n.get(st).__webglTexture;e.bindTexture(ft,_t),y(ft),e.unbindTexture()}}}let de=[];function he(C){if(C.samples>0){if(dt(C)===!1){let M=C.textures,G=C.width,ot=C.height,st=s.COLOR_BUFFER_BIT,ft=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(C),W=M.length>1;if(W)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ut]);let L=n.get(M[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,G,ot,0,0,G,ot,st,s.NEAREST),l===!0&&(de.length=0,de.push(s.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&de.push(ft),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ut]);let L=n.get(M[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function dt(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Nt(C,M){let G=C.colorSpace,ot=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Go&&G!==us&&(oe.getTransfer(G)===ge?(ot!==Li||st!==qn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",G)),M}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ot,this.resetTextureUnits=R,this.getTextureUnits=$,this.setTextureUnits=Mt,this.setTexture2D=ht,this.setTexture2DArray=vt,this.setTexture3D=Tt,this.setTextureCube=Q,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=dt,this.dispose=z}function jS(s,t){function e(n,i=us){let r,o=oe.getTransfer(i);if(n===qn)return s.UNSIGNED_BYTE;if(n===_c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return s.BYTE;if(n===Xu)return s.SHORT;if(n===lo)return s.UNSIGNED_SHORT;if(n===gc)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Pi)return s.FLOAT;if(n===Ii)return s.HALF_FLOAT;if(n===Zu)return s.ALPHA;if(n===Ju)return s.RGB;if(n===Li)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===$u)return s.RED;if(n===vc)return s.RED_INTEGER;if(n===zs)return s.RG;if(n===yc)return s.RG_INTEGER;if(n===Sc)return s.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===bc||n===Tc||n===wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Ac||n===Cc||n===Rc||n===Pc||n===_a||n===Ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Ac)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rc)return r.COMPRESSED_R11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===$c||n===xa||n===Kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ki({vertexShader:tM,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends Bi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new _f,g={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new Ft,S=null,P=null,A=new Dn;A.viewport=new Ie;let N=new Dn;N.viewport=new Ie;let D=[A,N],k=new uc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=T[Z];return ht===void 0&&(ht=new Qr,T[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=T[Z];return ht===void 0&&(ht=new Qr,T[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=T[Z];return ht===void 0&&(ht=new Qr,T[Z]=ht),ht.getHandSpace()};function H(Z){let ht=E.indexOf(Z.inputSource);if(ht===-1)return;let vt=T[ht];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",et);for(let Z=0;Z<T.length;Z++){let ht=E[Z];ht!==null&&(E[Z]=null,T[Z].disconnect(ht))}I=null,z=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(w),u=null,f=null,d=null,i=null,y=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",F),i.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Tt=null,Q=null;v.depth&&(Q=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?hs:rs,Tt=v.stencil?hr:Ri);let at={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(at),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ii(f.textureWidth,f.textureHeight,{format:Li,type:qn,depthTexture:new ls(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ii(u.framebufferWidth,u.framebufferHeight,{format:Li,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let ht=0;ht<Z.removed.length;ht++){let vt=Z.removed[ht],Tt=E.indexOf(vt);Tt>=0&&(E[Tt]=null,T[Tt].disconnect(vt))}for(let ht=0;ht<Z.added.length;ht++){let vt=Z.added[ht],Tt=E.indexOf(vt);if(Tt===-1){for(let at=0;at<T.length;at++)if(at>=E.length){E.push(vt),Tt=at;break}else if(E[at]===null){E[at]=vt,Tt=at;break}if(Tt===-1)break}let Q=T[Tt];Q&&Q.connect(vt)}}function X(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ht=Z.near,vt=Z.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),k.near=N.near=A.near=ht,k.far=N.far=A.far=vt,(I!==k.near||z!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,z=k.far),k.layers.mask=Z.layers.mask|6,A.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Tt=Z.parent,Q=k.cameras;X(k,Tt);for(let at=0;at<Q.length;at++)X(Q[at],Tt);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),R(Z,k,Tt)};function R(Z,ht,vt){vt===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ol*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return g[Z]};let $=null;function Mt(Z,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let vt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Tt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,Tt=!0);for(let bt=0;bt<vt.length;bt++){let Bt=vt[bt],Ct=null;if(u!==null)Ct=u.getViewport(Bt);else{let te=d.getViewSubImage(f,Bt);Ct=te.viewport,bt===0&&(t.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(y))}let Pt=D[bt];Pt===void 0&&(Pt=new Dn,Pt.layers.enable(bt),Pt.viewport=new Ie,D[bt]=Pt),Pt.matrix.fromArray(Bt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Bt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),bt===0&&(k.matrix.copy(Pt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Tt===!0&&k.cameras.push(Pt)}let Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let bt=d.getDepthInformation(vt[0]);bt&&bt.isValid&&bt.texture&&m.init(bt,i.renderState)}if(Q&&Q.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let bt=0;bt<vt.length;bt++){let Bt=vt[bt].camera;if(Bt){let Ct=g[Bt];Ct||(Ct=new Qo,g[Bt]=Ct);let Pt=d.getCameraImage(Bt);Ct.sourceTexture=Pt}}}}for(let vt=0;vt<T.length;vt++){let Tt=E[vt],Q=T[vt];Tt!==null&&Q!==void 0&&Q.update(Tt,ht,c||o)}$&&$(Z,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let Ot=new dm;Ot.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){$=Z},this.dispose=function(){}}},nM=new Ae,bm=new Xt;bm.set(-1,0,0,0,1,0,0,0,1);function iM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,rf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===On&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===On&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sM(s,t,e,n){let i={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,w){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let S=y[E];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],E,P,T);else h(S,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(f(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],N=_(A,!0);d(A,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let S=T[x],P=!1;for(let A=0;A<E.length;A++)u(E[A],S,A)===!0&&(P=!0);return P}return u(E,T,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let w=v.uniforms,y=0,T=16;for(let x=0,S=w.length;x<S;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,N=P.length;A<N;A++){let D=P[A],k=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(w[x])||Array.isArray(D.value),z=y;for(let F=0,et=k.length;F<et;F++){let X=k[F],R=_(X,I),$=y%T,Mt=$%R.boundary,Ot=$+Mt;y+=Mt,Ot!==0&&T-Ot<R.storage&&(y+=T-Ot),F===0&&(z=y),y+=R.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let w=v.target;w.removeEventListener("dispose",m),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var rM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function oM(){return Hi===null&&(Hi=new Gl(rM,16,16,zs,Ii),Hi.name="DFG_LUT",Hi.minFilter=Nn,Hi.magFilter=Nn,Hi.wrapS=Oi,Hi.wrapT=Oi,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var nh=class{constructor(t={}){let{canvas:e=Fp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=qn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=u,m=new Set([Sc,yc,vc]),g=new Set([qn,Ri,lo,hr,_c,xc]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,D=null,k=null,I=null,z=null;this._outputColorSpace=Mn;let H=0,F=0,et=null,X=-1,R=null,$=new Ie,Mt=new Ie,Ot=null,Z=new Jt(0),ht=0,vt=e.width,Tt=e.height,Q=1,at=null,kt=null,bt=new Ie(0,0,vt,Tt),Bt=new Ie(0,0,vt,Tt),Ct=!1,Pt=new Ls,te=new Hl,ce=!1,J=!1,ee=new Ae,qe=new B,ye=new Ie,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function He(){return et===null?Q:1}let O=n;function de(b,U){return e.getContext(b,U)}let he,Wt,dt,fe,Nt,zt,C,M,G,ot,st,ft,_t,W,tt,ut,L,j,K,pt,ct,mt,lt;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",it,!1),O===null){let U="webgl2";if(O=de(U,b),O===null)throw de(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Gt("WebGLRenderer: "+b.message),b}function gt(){he=new _y(O),he.init(),ct=new jS(O,he),Wt=new oy(O,he,t,ct),dt=new KS(O,he),Wt.reversedDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),k=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),fe=new yy(O),Nt=new FS,zt=new QS(O,he,dt,Nt,Wt,ct,fe),C=new gy(A),M=new M0(O),mt=new sy(O,M),G=new xy(O,M,fe,mt),ot=new My(O,G,M,mt,fe),j=new Sy(O,Wt,zt),tt=new ay(Nt),st=new OS(A,C,he,Wt,mt,tt),ft=new iM(A,Nt),_t=new zS,W=new XS(he),L=new iy(A,C,dt,ot,p,l),ut=new $S(A,ot,Wt),lt=new sM(O,fe,Wt,dt),K=new ry(O,he,fe),pt=new vy(O,he,fe),fe.programs=st.programs,A.capabilities=Wt,A.extensions=he,A.properties=Nt,A.renderLists=_t,A.shadowMap=ut,A.state=dt,A.info=fe}_!==qn&&(P=new Ty(_,e.width,e.height,a,i,r));let rt=new xf(A,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(vt,Tt,!1))},this.getSize=function(b){return b.set(vt,Tt)},this.setSize=function(b,U,Y=!0){if(rt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=b,Tt=U,e.width=Math.floor(b*Q),e.height=Math.floor(U*Q),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(vt*Q,Tt*Q).floor()},this.setDrawingBufferSize=function(b,U,Y){vt=b,Tt=U,Q=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===qn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,U,Y,V){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,U,Y,V),dt.viewport($.copy(bt).multiplyScalar(He()).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,U,Y,V){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,U,Y,V),dt.scissor(Mt.copy(Bt).multiplyScalar(He()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){dt.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let V=0;if(b){let q=!1;if(et!==null){let St=et.texture.format;q=m.has(St)}if(q){let St=et.texture.type,It=g.has(St),yt=L.getClearColor(),At=L.getClearAlpha(),Ut=yt.r,Yt=yt.g,se=yt.b;It?(v[0]=Ut,v[1]=Yt,v[2]=se,v[3]=At,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Ut,w[1]=Yt,w[2]=se,w[3]=At,O.clearBufferiv(O.COLOR,0,w))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),L.dispose(),_t.dispose(),W.dispose(),zt.dispose(),Nt.dispose(),C.dispose(),ot.dispose(),G.dispose(),mt.dispose(),lt.dispose(),st.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Se),rt.removeEventListener("sessionend",me),tn.stop()};function nt(b){b.preventDefault(),ef("WebGLRenderer: Context Lost."),N=!0}function xt(){ef("WebGLRenderer: Context Restored."),N=!1;let b=fe.autoReset,U=ut.enabled,Y=ut.autoUpdate,V=ut.needsUpdate,q=ut.type;gt(),fe.autoReset=b,ut.enabled=U,ut.autoUpdate=Y,ut.needsUpdate=V,ut.type=q}function it(b){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){let U=b.target;U.removeEventListener("dispose",Et),ne(U)}function ne(b){qt(b),Nt.remove(b)}function qt(b){let U=Nt.get(b).programs;U!==void 0&&(U.forEach(function(Y){st.releaseProgram(Y)}),b.isShaderMaterial&&st.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,V,q,St){U===null&&(U=ae);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,yt=fi(b,U,Y,V,q);dt.setMaterial(V,It);let At=Y.index,Ut=1;if(V.wireframe===!0){if(At=G.getWireframeAttribute(Y),At===void 0)return;Ut=2}let Yt=Y.drawRange,se=Y.attributes.position,Lt=Yt.start*Ut,re=(Yt.start+Yt.count)*Ut;St!==null&&(Lt=Math.max(Lt,St.start*Ut),re=Math.min(re,(St.start+St.count)*Ut)),At!==null?(Lt=Math.max(Lt,0),re=Math.min(re,At.count)):se!=null&&(Lt=Math.max(Lt,0),re=Math.min(re,se.count));let Je=re-Lt;if(Je<0||Je===1/0)return;mt.setup(q,V,yt,Y,At);let we,be=K;if(At!==null&&(we=M.get(At),be=pt,be.setIndex(we)),q.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*He()),be.setMode(O.LINES)):be.setMode(O.TRIANGLES);else if(q.isLine){let xn=V.linewidth;xn===void 0&&(xn=1),dt.setLineWidth(xn*He()),q.isLineSegments?be.setMode(O.LINES):q.isLineLoop?be.setMode(O.LINE_LOOP):be.setMode(O.LINE_STRIP)}else q.isPoints?be.setMode(O.POINTS):q.isSprite&&be.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(he.get("WEBGL_multi_draw"))be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let xn=q._multiDrawStarts,Dt=q._multiDrawCounts,Ln=q._multiDrawCount,pe=At?M.get(At).bytesPerElement:1,tr=Nt.get(V).currentProgram.getUniforms();for(let vn=0;vn<Ln;vn++)tr.setValue(O,"_gl_DrawID",vn),be.render(xn[vn]/pe,Dt[vn])}else if(q.isInstancedMesh)be.renderInstances(Lt,Je,q.count);else if(Y.isInstancedBufferGeometry){let xn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Dt=Math.min(Y.instanceCount,xn);be.renderInstances(Lt,Je,Dt)}else be.render(Lt,Je)};function Ce(b,U,Y,V){D!==null&&b.isNodeMaterial&&D.setObject(V,b),ce===!0&&tt.setState(b,Y,!1),b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,ti(b,U,V),b.side=Bs,b.needsUpdate=!0,ti(b,U,V),b.side=Vi):ti(b,U,V)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),D!==null&&D.renderStart(b,U,Y),E=W.get(Y),E.init(U),S.push(E),Y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),b!==Y&&b.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),J=this.localClippingEnabled,ce=tt.init(this.clippingPlanes,J),ce===!0&&tt.setGlobalState(this.clippingPlanes,U),D!==null&&ut.render(E.state.shadowsArray,Y,U);let V=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let yt=St[It];Ce(yt,Y,U,q),V.add(yt)}else Ce(St,Y,U,q),V.add(St)}),E=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(b,U,Y=null){let V=this.compile(b,U,Y);return new Promise(q=>{function St(){if(V.forEach(function(It){let At=Nt.get(It).currentProgram;(At===void 0||At.isReady())&&V.delete(It)}),V.size===0){q(b);return}setTimeout(St,10)}he.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ye=null;function Re(b){Ye&&Ye(b)}function Se(){tn.stop()}function me(){tn.start()}let tn=new dm;tn.setAnimationLoop(Re),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(b){Ye=b,rt.setAnimationLoop(b),b===null?tn.stop():tn.start()},rt.addEventListener("sessionstart",Se),rt.addEventListener("sessionend",me),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(b,U);let Y=rt.enabled===!0&&rt.isPresenting===!0,V=P!==null&&(et===null||Y)&&P.begin(A,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,U,et),E=W.get(b,S.length),E.init(U),E.state.textureUnits=zt.getTextureUnits(),S.push(E),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?te.setFromArrayCamera(U):Pt.setFromProjectionMatrix(ee,pi,U.reversedDepth),J=this.localClippingEnabled,ce=tt.init(this.clippingPlanes,J),T=_t.get(b,x.length),T.init(),x.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let It=A.xr.getDepthSensingMesh();It!==null&&Me(It,U,-1/0,A.sortObjects)}Me(b,U,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(at,kt),Fe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Fe&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ce===!0&&tt.beginShadows();let q=E.state.shadowsArray;if(ut.render(q,b,U),ce===!0&&tt.endShadows(),(V&&P.hasRenderPass())===!1){let It=T.opaque,yt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let At=U.cameras;if(yt.length>0)for(let Ut=0,Yt=At.length;Ut<Yt;Ut++){let se=At[Ut];jn(It,yt,b,se)}Fe&&L.render(b);for(let Ut=0,Yt=At.length;Ut<Yt;Ut++){let se=At[Ut];_n(T,b,se,se.viewport)}}else yt.length>0&&jn(It,yt,b,U),Fe&&L.render(b),_n(T,b,U)}et!==null&&F===0&&(zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et)),V&&P.end(A),b.isScene===!0&&b.onAfterRender(A,b,U),mt.resetDefaultState(),X=-1,R=null,S.pop(),S.length>0?(E=S[S.length-1],zt.setTextureUnits(E.state.textureUnits),ce===!0&&tt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Me(b,U,Y,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let It=U.isArrayCamera?te:Pt;if(!b.frustumCulled||b.intersectsFrustum(It)){V&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);let yt=ot.update(b),At=b.material;At.visible&&T.push(b,yt,At,Y,ye.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let It=U.isArrayCamera?te:Pt;if(!b.frustumCulled||b.intersectsFrustum(It)){let yt=ot.update(b),At=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ye.copy(yt.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(At)){let Ut=yt.groups;for(let Yt=0,se=Ut.length;Yt<se;Yt++){let Lt=Ut[Yt],re=At[Lt.materialIndex];re&&re.visible&&T.push(b,yt,re,Y,ye.z,Lt,U)}}else At.visible&&T.push(b,yt,At,Y,ye.z,null,U)}}}let St=b.children;for(let It=0,yt=St.length;It<yt;It++)Me(St[It],U,Y,V)}function _n(b,U,Y,V){let{opaque:q,transmissive:St,transparent:It}=b;E.setupLightsView(Y),ce===!0&&tt.setGlobalState(A.clippingPlanes,Y),V&&dt.viewport($.copy(V)),q.length>0&&Be(q,U,Y),St.length>0&&Be(St,U,Y),It.length>0&&Be(It,U,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function jn(b,U,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Lt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ii(1,1,{generateMipmaps:!0,type:Lt?Ii:qn,minFilter:cs,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let St=E.state.transmissionRenderTarget[V.id],It=V.viewport||$;St.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);let yt=A.getRenderTarget(),At=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(Z),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&L.render(Y);let Yt=A.toneMapping;A.toneMapping=Gi;let se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ce===!0&&tt.setGlobalState(A.clippingPlanes,V),Be(b,Y,V),zt.updateMultisampleRenderTarget(St),zt.updateRenderTargetMipmap(St),he.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let re=0,Je=U.length;re<Je;re++){let we=U[re],{object:be,geometry:xn,material:Dt,group:Ln}=we;if(Dt.side===Vi&&be.layers.test(V.layers)){let pe=Dt.side;Dt.side=On,Dt.needsUpdate=!0,Ze(be,Y,V,xn,Dt,Ln),Dt.side=pe,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(zt.updateMultisampleRenderTarget(St),zt.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,At,Ut),A.setClearColor(Z,ht),se!==void 0&&(V.viewport=se),A.toneMapping=Yt}function Be(b,U,Y){let V=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=b.length;q<St;q++){let It=b[q],{object:yt,geometry:At,group:Ut}=It,Yt=It.material;Yt.allowOverride===!0&&V!==null&&(Yt=V),yt.layers.test(Y.layers)&&Ze(yt,U,Y,At,Yt,Ut)}}function Ze(b,U,Y,V,q,St){D!==null&&q.isNodeMaterial&&D.setObject(b,q),b.onBeforeRender(A,U,Y,V,q,St),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(A,U,Y,V,b,St),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,A.renderBufferDirect(Y,U,V,q,b,St),q.side=Bs,q.needsUpdate=!0,A.renderBufferDirect(Y,U,V,q,b,St),q.side=Vi):A.renderBufferDirect(Y,U,V,q,b,St),b.onAfterRender(A,U,Y,V,q,St)}function en(b){let U=0;for(let Y of b)Y.texture!==null&&U++;return U}function ti(b,U,Y){U.isScene!==!0&&(U=ae);let V=Nt.get(b),q=E.state.lights,St=E.state.shadowsArray,It=q.state.version,yt=st.getParameters(b,q.state,St,U,Y,E.state.lightProbeGridArray),At=st.getProgramCacheKey(yt),Ut=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=C.get(b.envMap||V.environment,Yt),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Et),Ut=new Map,V.programs=Ut,V.programVariants=new Map);let se=Ut.get(At);if(se!==void 0){if(V.currentProgram===se&&V.lightsStateVersion===It)return ze(b,yt),se}else yt.uniforms=st.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Y,yt),b.onBeforeCompile(yt,A),se=st.acquireProgram(yt,At),Ut.set(At,se),V.uniforms=yt.uniforms;let Lt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=tt.uniform),ze(b,yt),V.needsLights=il(b),V.lightsStateVersion=It,V.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=en(E.state.lightProbeGridArray),V.currentProgram=se,V.uniformsList=null,se}function Lr(b,U,Y,V,q){let St=Nt.get(b),It=St.currentProgram.id+","+V+","+q,yt=St.programVariants.get(It);return yt===void 0?(yt=ti(b,U,Y),St.programVariants.set(It,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=V,St.toneMapping=q),yt}function nn(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=co.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ze(b,U){let Y=Nt.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function fi(b,U,Y,V,q){U.isScene!==!0&&(U=ae),zt.resetTextureUnits();let St=U.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,yt=et===null?A.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:oe.workingColorSpace,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=C.get(V.envMap||It,At),Yt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!Y.morphAttributes.position,re=!!Y.morphAttributes.normal,Je=!!Y.morphAttributes.color,we=Gi;V.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(we=A.toneMapping);let be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xn=be!==void 0?be.length:0,Dt=Nt.get(V),Ln=E.state.lights;if(ce===!0&&(J===!0||b!==R)){let De=b===R&&V.id===X;tt.setState(V,b,De)}let pe=!1,tr=!1;V.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Ln.state.version||q.isBatchedMesh&&Dt.batching===!1||!q.isBatchedMesh&&Dt.batching===!0||q.isBatchedMesh&&Dt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Dt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||q.isInstancedMesh&&Dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Dt.instancingMorph===!1&&q.morphTexture!==null||Dt.envMap!==Ut||V.fog===!0&&Dt.fog!==St||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==tt.numPlanes||Dt.numIntersection!==tt.numIntersection)||Dt.vertexAlphas!==Yt||Dt.vertexTangents!==se||Dt.morphTargets!==Lt||Dt.morphNormals!==re||Dt.morphColors!==Je||Dt.morphTargetsCount!==xn||Dt.numLightProbeGrids!==en(E.state.lightProbeGridArray)?pe=!0:(Dt.outputColorSpace!==yt||Dt.toneMapping!==we)&&(tr=!0):(pe=!0,Dt.__version=V.version);let vn=Dt.currentProgram;(pe===!0||tr===!0)&&(vn=tr===!0?Lr(V,U,q,yt,we):ti(V,U,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,vn,Dt));let sl=!1,Ts=!1,er=!1,ue=vn.getUniforms(),dn=Dt.uniforms;if(dt.useProgram(vn.program)&&(sl=!0,Ts=!0,er=!0),V.id!==X&&(X=V.id,Ts=!0),sl||R!==b){dt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",b.projectionMatrix),ue.setValue(O,"viewMatrix",b.matrixWorldInverse);let ln=ue.map.cameraPosition;ln!==void 0&&ln.setValue(O,qe.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ts=!0,er=!0)}if(Dt.needsLights&&(Ln.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,zt),Ln.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,zt),Ln.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,zt),Ln.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,zt)),q.isSkinnedMesh){ue.setOptional(O,q,"bindMatrix"),ue.setOptional(O,q,"bindMatrixInverse");let De=q.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ue.setValue(O,"boneTexture",De.boneTexture,zt))}q.isBatchedMesh&&(ue.setOptional(O,q,"batchingTexture"),ue.setValue(O,"batchingTexture",q._matricesTexture,zt),ue.setOptional(O,q,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",q._indirectTexture,zt),ue.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",q._colorsTexture,zt));let Ti=Y.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&j.update(q,Y,vn),(Ts||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,ue.setValue(O,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=oM()),Ts){if(ue.setValue(O,"toneMappingExposure",A.toneMappingExposure),Dt.needsLights&&Do(dn,er),St&&V.fog===!0&&ft.refreshFogUniforms(dn,St),ft.refreshMaterialUniforms(dn,V,Q,Tt,E.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let De=y,ln=0;for(let Qi of E.state.lightProbeGridArray)Qi.texture!==null&&(De.textures[ln]=Qi.texture,De.min[ln]=Qi.boundingBox.min,De.max[ln]=Qi.boundingBox.max,De.resolution[ln]=Qi.resolution,ln++);for(let Qi in De)De[Qi].length=ln;dn.probesSH.value=De.textures,dn.probesMin.value=De.min,dn.probesMax.value=De.max,dn.probesResolution.value=De.resolution}co.upload(O,nn(Dt),dn,zt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(co.upload(O,nn(Dt),dn,zt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(O,"center",q.center),ue.setValue(O,"modelViewMatrix",q.modelViewMatrix),ue.setValue(O,"normalMatrix",q.normalMatrix),ue.setValue(O,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let De=V.uniformsGroups;for(let ln=0,Qi=De.length;ln<Qi;ln++){let Ld=De[ln];lt.update(Ld,vn),lt.bind(Ld,vn)}}return vn}function Do(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function il(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,U,Y){let V=Nt.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=U,Nt.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=Nt.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){et=b,H=U,F=Y;let V=null,q=!1,St=!1;if(b){let yt=Nt.get(b);if(yt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,yt.__webglFramebuffer),$.copy(b.viewport),Mt.copy(b.scissor),Ot=b.scissorTest,dt.viewport($),dt.scissor(Mt),dt.setScissorTest(Ot),X=-1;return}else if(yt.__webglFramebuffer===void 0)zt.setupRenderTarget(b);else if(yt.__hasExternalTextures)zt.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Yt=b.depthTexture;if(yt.__boundDepthTexture!==Yt){if(Yt!==null&&Nt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Ut=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?V=Ut[U][Y]:V=Ut[U],q=!0):b.samples>0&&zt.useMultisampledRTT(b)===!1?V=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[Y]:V=Ut,$.copy(b.viewport),Mt.copy(b.scissor),Ot=b.scissorTest}else $.copy(bt).multiplyScalar(Q).floor(),Mt.copy(Bt).multiplyScalar(Q).floor(),Ot=Ct;if(Y!==0&&(V=k),dt.bindFramebuffer(O.FRAMEBUFFER,V)&&dt.drawBuffers(b,V),dt.viewport($),dt.scissor(Mt),dt.setScissorTest(Ot),q){let yt=Nt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Y)}else if(St){let yt=U;for(let At=0;At<b.textures.length;At++){let Ut=Nt.get(b.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Ut.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){let yt=Nt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,Y)}X=-1};function bs(b){let U=Nt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Wt.textureFormatReadable(b.format),U.__typeReadable=Wt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,V,q,St,It,yt=0){if(!(b&&b.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At){dt.bindFramebuffer(O.FRAMEBUFFER,At);try{let Ut=b.textures[yt],Yt=Ut.format,se=Ut.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Lt=bs(Ut);if(Lt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&Y>=0&&Y<=b.height-q&&O.readPixels(U,Y,V,q,ct.convert(Yt),ct.convert(se),St)}finally{let Ut=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,V,q,St,It,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At)if(U>=0&&U<=b.width-V&&Y>=0&&Y<=b.height-q){dt.bindFramebuffer(O.FRAMEBUFFER,At);let Ut=b.textures[yt],Yt=Ut.format,se=Ut.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Lt=bs(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.bufferData(O.PIXEL_PACK_BUFFER,St.byteLength,O.STREAM_READ),O.readPixels(U,Y,V,q,ct.convert(Yt),ct.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Je=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Je);let we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zp(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,St),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(re),O.deleteSync(we),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let V=Math.pow(2,-Y),q=Math.floor(b.image.width*V),St=Math.floor(b.image.height*V),It=U!==null?U.x:0,yt=U!==null?U.y:0;zt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,It,yt,q,St),dt.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,V=null,q=0,St=0){let It,yt,At,Ut,Yt,se,Lt,re,Je,we=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Y!==null)It=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,Yt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let ue=Math.pow(2,-q);It=Math.floor(we.width*ue),yt=Math.floor(we.height*ue),b.isDataArrayTexture?At=we.depth:b.isData3DTexture?At=Math.floor(we.depth*ue):At=1,Ut=0,Yt=0,se=0}V!==null?(Lt=V.x,re=V.y,Je=V.z):(Lt=0,re=0,Je=0);let be=ct.convert(U.format),xn=ct.convert(U.type),Dt;U.isData3DTexture?(zt.setTexture3D(U,0),Dt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),Dt=O.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),Dt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=dt.getParameter(O.UNPACK_ROW_LENGTH),pe=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),tr=dt.getParameter(O.UNPACK_SKIP_PIXELS),vn=dt.getParameter(O.UNPACK_SKIP_ROWS),sl=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,se);let Ts=b.isDataArrayTexture||b.isData3DTexture,er=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ue=Nt.get(b),dn=Nt.get(U),Ti=Nt.get(ue.__renderTarget),De=Nt.get(dn.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,Ti.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ln=0;ln<At;ln++)Ts&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,q,se+ln),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,St,Je+ln)),O.blitFramebuffer(Ut,Yt,Ut+It,Yt+yt,Lt,re,Lt+It,re+yt,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Nt.has(b)){let ue=Nt.get(b),dn=Nt.get(U);dt.bindFramebuffer(O.READ_FRAMEBUFFER,I),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Ti=0;Ti<At;Ti++)Ts?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ue.__webglTexture,q,se+Ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,q),er?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,St,Je+Ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,St),q!==0?O.blitFramebuffer(Ut,Yt,Ut+It,Yt+yt,Lt,re,Lt+It,re+yt,O.COLOR_BUFFER_BIT,O.NEAREST):er?O.copyTexSubImage3D(Dt,St,Lt,re,Je+Ti,Ut,Yt,It,yt):O.copyTexSubImage2D(Dt,St,Lt,re,Ut,Yt,It,yt);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else er?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Dt,St,Lt,re,Je,It,yt,At,be,xn,we.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,St,Lt,re,Je,It,yt,At,be,we.data):O.texSubImage3D(Dt,St,Lt,re,Je,It,yt,At,be,xn,we):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,St,Lt,re,It,yt,be,xn,we.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,St,Lt,re,we.width,we.height,be,we.data):O.texSubImage2D(O.TEXTURE_2D,St,Lt,re,It,yt,be,xn,we);dt.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,tr),dt.pixelStorei(O.UNPACK_SKIP_ROWS,vn),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,sl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Dt),dt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&zt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?zt.setTextureCube(b,0):b.isData3DTexture?zt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?zt.setTexture2DArray(b,0):zt.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){H=0,F=0,et=null,dt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function fs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Lm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ra={duration:.5,overwrite:!1,delay:0},Nf,pn,Le,vi=1e8,ve=1/vi,Ef=Math.PI*2,aM=Ef/4,lM=0,Dm=Math.sqrt,cM=Math.cos,hM=Math.sin,on=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},gh=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},Jn=function(t){return t!==!1},Uf=function(){return typeof window<"u"},rh=function(t){return ke(t)||on(t)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,uM=/random\([^)]+\)/g,fM=/,\s*/g,Tm=/(?:-?\.?\d|\.)+/gi,Of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ff=/[+-]=-?[.\d]+/,dM=/[^,'"\[\]\s]+/gi,pM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Xi,Af,Bf,oi={},ch={},Um,Om=function(t){return(ch=fo(t,oi))&&An},_h=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Pa=function(t,e){return!e&&console.warn(t)},Fm=function(t,e){return t&&(oi[t]=e)&&ch&&(ch[t]=e)||oi},Ia=function(){return 0},mM={suppressEvents:!0,isStart:!0,kill:!1},oh={suppressEvents:!0,kill:!1},gM={suppressEvents:!0},zf={},Vs=[],Cf={},Bm,Yn={},yf={},wm=30,ah=[],kf="",Vf=function(t){var e=t[0],n,i;if(Yi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ah.length;i--&&!ah[i].targetTest(e););n=ah[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Xf(t[i],n)))||t.splice(i,1);return t},Gs=function(t){return t._gsap||Vf(yi(t))[0]._gsap},Gf=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():gh(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},gr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_M=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hh=function(){var t=Vs.length,e=Vs.slice(0),n,i;for(Cf={},Vs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hf=function(t){return!!(t._initted||t._startAt||t.add)},zm=function(t,e,n,i){Vs.length&&!pn&&hh(),t.render(e,n,i||!!(pn&&e<0&&Hf(t))),Vs.length&&!pn&&hh()},km=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(dM).length<2?e:on(t)?t.trim():t},Vm=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fo=function(t,e){for(var n in e)t[n]=e[n];return t},Em=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},uh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ea=function(t){var e=t.parent||Ue,n=t.keyframes?xM(En(t.keyframes)):ai;if(Jn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},vM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Hs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},yM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rf=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(oh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},SM=function s(t){return!t||t._ts&&s(t.parent)},Am=function(t){return t._repeat?po(t._tTime,t=t.duration()+t._rDelay)*t:0},po=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},fh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vh=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},yh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vh(t),n._dirty||fr(n,t)),t},Hm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fh(t.rawTime(),e),(!e._dur||Ua(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},qi=function(t,e,n,i){return e.parent&&Hs(e),e._start=Ne((ps(n)?n:!n&&dh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ue?xi(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gm(t,e,"_first","_last",t._sort?"_start":0),dh(e)||(t._recent=e),i||Hm(t,e),t._ts<0&&yh(t,t._tTime),t},Wm=function(t,e){return(oi.ScrollTrigger||_h("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},Xm=function(t,e,n,i,r){if(Zf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bm!==Zn.frame)return Vs.push(t),t._lazy=[r,i],1},MM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},bM=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&MM(t)&&!(!t._initted&&dh(t))||(t._ts<0||t._dp._ts<0)&&!dh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ua(0,t._tDur,e),h=po(l,a),t._yoyo&&h&1&&(o=1-o),h!==po(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||pn||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&Xm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Rf(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Hs(t,1),!n&&!pn&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},TM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},mo=function(t,e,n,i){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!i&&yh(t,t._tTime=t._tDur*a),t.parent&&vh(t),n||fr(t.parent,t),t},Cm=function(t){return t instanceof wn?fr(t):mo(t,t._dur)},wM={_start:0,endTime:Ia,totalDuration:Ia},xi=function s(t,e,n){var i=t.labels,r=t._recent||wM,o=t.duration()>=vi?r.endTime(!1):t._dur,a,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Aa=function(t,e,n){var i=ps(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;o.immediateRender=Jn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new We(e[0],o,e[r+1])},Ws=function(t,e){return t||t===0?e(t):e},Ua=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!on(t)||!(e=pM.exec(t))?"":e[1]},EM=function(t,e,n){return Ws(n,function(i){return Ua(t,e,i)})},Pf=[].slice,qm=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Xi},AM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return on(i)&&!e||qm(i,1)?(r=n).push.apply(r,yi(i)):n.push(i)})||n},yi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):on(t)&&!n&&(Af||!go())?Pf.call((e||Bf).querySelectorAll(t),0):En(t)?AM(t,n):qm(t)?Pf.call(t,0):t?[t]:[]},If=function(t){return t=yi(t)[0]||Pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?Pa("Invalid scope")||Bf.createElement("div"):t)}},Ym=function(t){return t.sort(function(){return .5-Math.random()})},Zm=function(t){if(ke(t))return t;var e=Yi(t)?t:{each:t},n=dr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return on(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,p){var _=(p||e).length,m=o[_],g,v,w,y,T,E,x,S,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,vi])[1],!P){for(x=-vi;x<(x=p[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(m=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===vi?0:l?_*d/P-.5:i/P|0,x=0,S=vi,E=0;E<_;E++)w=E%P-g,y=v-(E/P|0),m[E]=T=c?Math.abs(c==="y"?y:w):Dm(w*w+y*y),T>x&&(x=T),T<S&&(S=T);i==="random"&&Ym(m),m.max=x-S,m.min=S,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=mn(e.amount||e.each)||0,n=n&&_<0?kM(n):n}return _=(m[f]-m.min)/m.max||0,Ne(m.b+(n?n(_):_)*m.v)+m.u}},Lf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ps(n)?0:mn(n))}},Jm=function(t,e){var n=En(t),i,r;return!n&&Yi(t)&&(i=n=t.radius||vi,t.values?(t=yi(t.values),(r=!ps(t[0]))&&(i*=i)):t=Lf(t.increment)),Ws(e,n?ke(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=vi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ps(o)?h:h+mn(o)}:Lf(t))},$m=function(t,e,n,i){return Ws(En(t)?!e:n===!0?!!(n=0):!i,function(){return En(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},CM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},RM=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},PM=function(t,e,n){return Qm(t,e,0,1,n)},Km=function(t,e,n){return Ws(n,function(i){return t[~~e(i)]})},IM=function s(t,e,n){var i=e-t;return En(t)?Km(t,s(0,t.length),e):Ws(n,function(r){return(i+(r-t)%i)%i+t})},LM=function s(t,e,n){var i=e-t,r=i*2;return En(t)?Km(t,s(0,t.length-1),e):Ws(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},_o=function(t){return t.replace(uM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(fM);return $m(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qm=function(t,e,n,i,r){var o=e-t,a=i-n;return Ws(r,function(l){return n+((l-t)/o*a||0)})},DM=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=on(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(En(t)&&!En(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(f,~~p);return h[_](p-_)},n=e}else i||(t=fo(En(t)?[]:{},t));if(!h){for(l in e)qf.call(a,t,l,"get",e[l]);r=function(p){return Kf(p,a)||(o?t.p:t)}}}return Ws(n,r)},Rm=function(t,e,n){var i=t.labels,r=vi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ri=function(t,e,n){var i=t.vars,r=i[e],o=Le,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Vs.length&&hh(),a&&(Le=a),h=l?r.apply(c,l):r.call(c),Le=o,h},Ta=function(t){return Hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&ri(t,"onInterrupt"),t},uo,jm=[],tg=function(t){if(t)if(t=!t.name&&t.default||t,Uf()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ia,render:Kf,add:qf,kill:$M,modifier:JM,rawVars:0},o={targetTest:0,get:0,getSetter:Sh,aliases:{},register:0};if(go(),t!==i){if(Yn[e])return;ai(i,ai(uh(t,r),o)),fo(i.prototype,fo(r,uh(t,o))),Yn[i.prop=e]=i,t.targetTest&&(ah.push(i),zf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fm(e,i),t.register&&t.register(An,i,Bn)}else jm.push(t)},Te=255,wa={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},Sf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},eg=function(t,e,n){var i=t?ps(t)?[t>>16,t>>8&Te,t&Te]:0:wa.black,r,o,a,l,c,h,d,f,u,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wa[t])i=wa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Tm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Sf(l+1/3,r,o),i[1]=Sf(l,r,o),i[2]=Sf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Of),n&&i.length<4&&(i[3]=1),i}else i=t.match(Tm)||wa.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Te,o=i[1]/Te,a=i[2]/Te,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ng=function(t){var e=[],n=[],i=-1;return t.split(ds).forEach(function(r){var o=r.match(mr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pm=function(t,e,n){var i="",r=(t+i).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=eg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ng(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ds,"1").split(mr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ds),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ds=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),NM=/hsl[a]?\(/,Wf=function(t){var e=t.join(" "),n;if(ds.lastIndex=0,ds.test(e))return n=NM.test(e),t[1]=Pm(t[1],n),t[0]=Pm(t[0],n,ng(t[1])),!0},La,Zn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function _(m){var g=s()-i,v=m===!0,w,y,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,w=T-o,(w>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=w+(w>=r?0:r-w),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,f,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Um&&(!Af&&Uf()&&(Xi=Af=window,Bf=Xi.document||{},oi.gsap=An,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(An.version),Om(ch||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),jm.forEach(tg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},La=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),La=0,c=Ia},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,v){var w=g?function(y,T,E,x){m(y,T,E,x),d.remove(w)}:m;return d.remove(m),a[v?"unshift":"push"](w),go(),w},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),go=function(){return!La&&Zn.wake()},le={},UM=/^[\d.\-M][\d.\-,\s]/,OM=/["']/g,FM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(OM,"").trim():+c,i=l.substr(a+1).trim();return e},BM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},zM=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[FM(e[1])]:BM(t).split(",").map(km)):le._CE&&UM.test(t)?le._CE("",t):n},kM=function(t){return function(e){return 1-t(1-e)}},dr=function(t,e){return t&&(ke(t)?t:le[t]||zM(t))||e},_r=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){le[a]=oi[a]=r,le[o=a.toLowerCase()]=n;for(var l in r)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=r[l]}),r},ig=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Ef*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*hM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ig(a);return r=Ef/r,l.config=function(c,h){return s(t,c,h)},l},bf=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ig(n);return i.config=function(r){return s(t,r)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;_r(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;_r("Elastic",Mf("in"),Mf("out"),Mf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};_r("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);_r("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});_r("Circ",function(s){return-(Dm(1-s*s)-1)});_r("Sine",function(s){return s===1?1:-cM(s*aM)+1});_r("Back",bf("in"),bf("out"),bf());le.SteppedEase=le.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ve;return function(a){return((i*Ua(0,o,a)|0)+r)*n}}};Ra.ease=le["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return kf+=s+","+s+"Params,"});var Xf=function(t,e){this.id=lM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Gf,this.set=e?e.getSetter:Sh},Da=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,mo(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),La||Zn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,mo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(go(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yh(this,n),!r._dp||r.parent||Hm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Am(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Am(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?po(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?fh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ua(-Math.abs(this._delay),a,r),i!==!1),vh(this),yM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{go(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==ve,o;if(r)for(this._tTime-=ve,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+ve){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=gM);var i=pn;return pn=n,Hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xi(this,n),Jn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ve)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=ke(n)?n:Vm,l=function(){var h=i.then;i.then=null,r&&r(),ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ta(this)},s})();ai(Da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var wn=(function(s){Lm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Jn(n.sortChildren),Ue&&qi(n.parent||Ue,fs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Wm(fs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Aa(0,arguments,this),this},e.from=function(i,r,o){return Aa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Aa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ea(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new We(i,r,xi(this,o),1),this},e.call=function(i,r,o){return qi(this,We.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new We(i,o,xi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ea(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ea(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ne(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,p,_,m,g,v,w,y,T,E,x;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Ne(h%m),h===l?(_=this._repeat,f=c):(T=Ne(h/m),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=po(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var S=E&&T&1,P=S===(E&&_&1);if(_<T&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ne(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=TM(this,Ne(a),Ne(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(ri(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-ve);break}}u=p}else{u=this._last;for(var A=i<0?i:f;u;){if(p=u._prev,(u._act||A<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,o||pn&&Hf(u)),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=A?-ve:ve);break}}u=p}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-ve)._zTime=f>=a?1:-1,this._ts))return this._start=y,vh(this),this.render(i,r,o);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Hs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ps(r)||(r=xi(this,r,i)),!(i instanceof Da)){if(En(i))return i.forEach(function(a){return o.add(a,r)}),this;if(on(i))return this.addLabel(i,r);if(ke(i))i=We.delayedCall(0,i);else return this}return this!==i?qi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return on(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&xh(this,i),i===this._recent&&(this._recent=this._last),fr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=xi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=We.delayedCall(0,r||Ia,o);return a.data="isPause",this._hasPause=1,qi(this,a,xi(this,i))},e.removePause=function(i){var r=this._first;for(i=xi(this,i);r;)r._start===i&&r.data==="isPause"&&Hs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ks!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=yi(i),l=this._first,c=ps(r),h;l;)l instanceof We?_M(l._targets,a)&&(c?(!ks||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=xi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=We.to(o,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&mo(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ai({startAt:{time:xi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rm(this,xi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rm(this,xi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ne(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return fr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=vi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ne(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;mo(o,o===Ue&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(zm(Ue,fh(i,Ue)),Bm=Zn.frame),Zn.frame>=wm){wm+=$n.autoSleep||120;var r=Ue._first;if((!r||!r._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Zn.sleep()}}},t})(Da);ai(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var VM=function(t,e,n,i,r,o,a){var l=new Bn(this._pt,t,e,0,1,$f,null,r),c=0,h=0,d,f,u,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=_o(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(vf)||[];d=vf.exec(i);)p=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?gr(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=vf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ff.test(i)||g)&&(l.e=0),this._pt=l,l},qf=function(t,e,n,i,r,o,a,l,c,h){ke(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=ke(d)?c?qM:rg:Jf,p;if(on(i)&&(~i.indexOf("random(")&&(i=_o(i)),i.charAt(1)==="="&&(p=gr(f,i)+(mn(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Df)return!isNaN(f*i)&&i!==""?(p=new Bn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?ZM:og,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&_h(e,i),VM.call(this,t,e,f,i,u,l||$n.stringFilter,c))},GM=function(t,e,n,i,r){if(ke(t)&&(t=Ca(t,r,e,n,i)),!Yi(t)||t.style&&t.nodeType||En(t)||Nm(t))return on(t)?Ca(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ca(t[a],r,e,n,i);return o},Yf=function(t,e,n,i,r,o){var a,l,c,h;if(Yn[t]&&(a=new Yn[t]).init(r,a.rawVars?e[t]:GM(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==uo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ks,Df,Zf=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,w=t._overwrite==="auto"&&!Nf,y=t.timeline,T=i.easeReverse||d,E,x,S,P,A,N,D,k,I,z,H,F,et;if(y&&(!f||!r)&&(r="none"),t._ease=dr(r,Ra.ease),t._rEase=T&&(dr(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(k=m[0]?Gs(m[0]).harness:0,F=k&&i[k.prop],E=uh(i,zf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&p?oh:mM),_._lazy=0),o){if(Hs(t._startAt=We.set(m,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!u)&&t._startAt.revert(oh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),S=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Jn(l),immediateRender:a,stagger:0,parent:g},E),F&&(S[k.prop]=F),Hs(t._startAt=We.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(oh):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Jn(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],D=A._gsap||Vf(m)[x]._gsap,t._ptLookup[x]=z={},Cf[D.id]&&Vs.length&&hh(),H=v===m?x:v.indexOf(A),k&&(I=new k).init(A,F||E,t,H,v)!==!1&&(t._pt=P=new Bn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){z[X]=P}),I.priority&&(N=1)),!k||F)for(S in E)Yn[S]&&(I=Yf(S,E,t,H,A,v))?I.priority&&(N=1):z[S]=P=qf.call(t,A,S,"get",E[S],H,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),w&&t._pt&&(ks=t,Ue.killTweensOf(A,z,t.globalTime(e)),et=!t.parent,ks=0),t._pt&&l&&(Cf[D.id]=1)}N&&Qf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,f&&e<=0&&y.render(vi,!0,!0)},HM=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Df=1,t.vars[e]="+=0",Zf(t,a),Df=0,l?Pa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ve(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},WM=function(t,e){var n=t[0]?Gs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=fo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},XM=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(En(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ca=function(t,e,n,i,r){return ke(t)?t.call(e,n,i,r):on(t)&&~t.indexOf("random(")?_o(t):t},ph=kf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sg={};Fn(ph+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return sg[s]=1});ph=ph.split(",");var We=(function(s){Lm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ea(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Ue,v=(En(n)||Nm(n)?ps(n[0]):"length"in i)?[n]:yi(n),w,y,T,E,x,S,P,A;if(a._targets=v.length?Vf(v):Pa("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||rh(c)||rh(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(w=a.timeline=new wn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),w.kill(),w.parent=w._dp=fs(a),w._start=0,f||rh(c)||rh(h)){if(E=v.length,P=f&&Zm(f),Yi(f))for(x in f)~ph.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(y=0;y<E;y++)T=uh(i,sg),T.stagger=0,N&&(T.easeReverse=N),A&&fo(T,A),S=v[y],T.duration=+Ca(c,fs(a),y,S,v),T.delay=(+Ca(h,fs(a),y,S,v)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(S,T,P?P(y,S,v):0),w._ease=le.none;w.duration()?c=h=0:a.timeline=0}else if(p){Ea(ai(w.vars.defaults,{ease:"none"})),w._ease=dr(p.ease||i.ease||"none");var D=0,k,I,z;if(En(p))p.forEach(function(H){return w.to(v,H,">")}),w.duration();else{T={};for(x in p)x==="ease"||x==="easeEach"||XM(x,p[x],T,p.easeEach);for(x in T)for(k=T[x].sort(function(H,F){return H.t-F.t}),D=0,y=0;y<k.length;y++)I=k[y],z={ease:I.e,duration:(I.t-(y?k[y-1].t:0))/100*c},z[x]=I.v,w.to(v,z,D),D+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return u===!0&&!Nf&&(ks=fs(a),Ue.killTweensOf(v),ks=0),qi(g,fs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ne(g._time)&&Jn(d)&&SM(fs(a))&&g.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),m&&Wm(fs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ve&&!h?l:i<ve?0:i,f,u,p,_,m,g,v,w;if(!c)bM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Ne(d%_),d===l?(p=this._repeat,f=c):(m=Ne(d/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=po(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ne(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Xm(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(ri(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Rf(this,i,r,o),ri(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Rf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){La||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Zf(this,c),h=this._ease(c/this._dur),HM(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(yh(this,0),this.parent||Gm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ks&&ks.vars.overwrite!==!0)._first||Ta(this),this.parent&&o!==this.timeline.totalDuration()&&mo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,h=this._pt,d,f,u,p,_,m,g;if((!r||r==="all")&&vM(a,l))return r==="all"&&(this._pt=0),Ta(this);for(d=this._op=this._op||[],r!=="all"&&(on(r)&&(_={},Fn(r,function(v){return _[v]=1}),r=_),r=WM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,u={}):(u=d[g]=d[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xh(this,m,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ta(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Aa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Aa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ue.killTweensOf(i,r,o)},t})(Da);ai(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(s){We[s]=function(){var t=new wn,e=Pf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Jf=function(t,e,n){return t[e]=n},rg=function(t,e,n){return t[e](n)},qM=function(t,e,n,i){return t[e](i.fp,n)},YM=function(t,e,n){return t.setAttribute(e,n)},Sh=function(t,e){return ke(t[e])?rg:gh(t[e])&&t.setAttribute?YM:Jf},og=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ZM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$f=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Kf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},JM=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},$M=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},KM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Qf=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Bn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||og,this.d=l||this,this.set=c||Jf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=KM,this.m=n,this.mt=r,this.tween=i},s})();Fn(kf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return zf[s]=1});oi.TweenMax=oi.TweenLite=We;oi.TimelineLite=oi.TimelineMax=wn;Ue=new wn({sortChildren:!1,defaults:Ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Wf;var pr=[],lh={},QM=[],Im=0,jM=0,Tf=function(t){return(lh[t]||QM).map(function(e){return e()})},Na=function(){var t=Date.now(),e=[];t-Im>2&&(Tf("matchMediaInit"),pr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Xi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Tf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Im=t,Tf("matchMedia"))},ag=(function(){function s(e,n){this.selector=n&&If(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jM++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ke(n)&&(r=i,i=n,n=ke);var o=this,a=function(){var c=Le,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=If(r)),Le=o,d=i.apply(o,arguments),ke(d)&&o._r.push(d),Le=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=pr.length;o--;)pr[o].id===this.id&&pr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Na):a.removeEventListener("change",Na)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),tb=(function(){function s(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Yi(n)||(n={matches:n});var o=new ag(0,r||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Xi.matchMedia(n[c]),l&&(pr.indexOf(o)<0&&pr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Na):l.addEventListener("change",Na),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),mh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return tg(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=yi(t)[0]);var r=Gs(t||{}).get,o=n?Vm:km;return n==="native"&&(n=""),t&&(e?o((Yn[e]&&Yn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Yn[a]&&Yn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var i=t.map(function(h){return An.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Yn[e],a=Gs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;uo._pt=0,d.init(t,n?h+n:h,uo,0,[t]),d.render(1,d),uo._pt&&Kf(1,uo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=An.to(t,ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=dr(t.ease,Ra.ease)),Em(Ra,t||{})},config:function(t){return Em($n,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Yn[a]&&!oi[a]&&Pa(e+" effect requires "+a+" plugin.")}),yf[e]=function(a,l,c){return n(yi(a),ai(l||{},r),c)},o&&(wn.prototype[e]=function(a,l,c){return this.add(yf[e](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=dr(e)},parseEase:function(t,e){return arguments.length?dr(t,e):le},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,r;for(n.smoothChildTiming=Jn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)r=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&qi(n,i,i._start-i._delay),i=r;return qi(Ue,n,0),n},context:function(t,e){return t?new ag(t,e):Le},matchMedia:function(t){return new tb(t)},matchMediaRefresh:function(){return pr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Na()},addEventListener:function(t,e){var n=lh[t]||(lh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=lh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:IM,wrapYoyo:LM,distribute:Zm,random:$m,snap:Jm,normalize:PM,getUnit:mn,clamp:EM,splitColor:eg,toArray:yi,selector:If,mapRange:Qm,pipe:CM,unitize:RM,interpolate:DM,shuffle:Ym},install:Om,effects:yf,ticker:Zn,updateRoot:wn.updateRoot,plugins:Yn,globalTimeline:Ue,core:{PropTween:Bn,globals:Fm,Tween:We,Timeline:wn,Animation:Da,getCache:Gs,_removeLinkedListItem:xh,reverting:function(){return pn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Nf=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return mh[s]=We[s]});Zn.add(wn.updateRoot);uo=mh.to({},{duration:0});var eb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},nb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=eb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},wf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(on(r)&&(l={},Fn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}nb(a,r)}}}},An=mh.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wf("roundProps",Lf),wf("modifiers"),wf("snap",Jm))||mh;We.version=wn.version=An.version="3.15.1";Um=1;Uf()&&go();var ib=le.Power0,sb=le.Power1,rb=le.Power2,ob=le.Power3,ab=le.Power4,lb=le.Linear,cb=le.Quad,hb=le.Cubic,ub=le.Quart,fb=le.Quint,db=le.Strong,pb=le.Elastic,mb=le.Back,gb=le.SteppedEase,_b=le.Bounce,xb=le.Sine,vb=le.Expo,yb=le.Circ;var lg,Xs,vo,sd,Sr,Sb,cg,rd,Mb=function(){return typeof window<"u"},gs={},yr=180/Math.PI,yo=Math.PI/180,xo=Math.atan2,hg=1e8,od=/([A-Z])/g,bb=/(left|right|width|margin|padding|x)/i,Tb=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},td=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Eb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ab=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},xg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rb=function(t,e,n){return t.style[e]=n},Pb=function(t,e,n){return t.style.setProperty(e,n)},Ib=function(t,e,n){return t._gsap[e]=n},Lb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Db=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Nb=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Oe="transform",Kn=Oe+"Origin",Ub=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ms(i,a)}):this.tfm[t]=o.x?o[t]:ms(i,t),t===Kn&&(this.tfm.zOrigin=o.zOrigin);else return Zi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Oe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=Oe}(r||e)&&this.props.push(t,e,r[t])},yg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ob=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(od,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=rd(),(!r||!r.isStart)&&!n[Oe]&&(yg(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Sg=function(t,e){var n={target:t,props:[],revert:Ob,save:Ub};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Mg,ed=function(t,e){var n=Xs.createElementNS?Xs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xs.createElement(t);return n&&n.style?n:Xs.createElement(t)},li=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(od,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,So(e)||e,1)||""},ug="O,Moz,ms,Ms,Webkit".split(","),So=function(t,e,n){var i=e||Sr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ug[o]+t in r););return o<0?null:(o===3?"ms":o>=0?ug[o]:"")+t},nd=function(){Mb()&&window.document&&(lg=window,Xs=lg.document,vo=Xs.documentElement,Sr=ed("div")||{style:{}},Sb=ed("div"),Oe=So(Oe),Kn=Oe+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mg=!!So("perspective"),rd=An.core.reverting,sd=1)},fg=function(t){var e=t.ownerSVGElement,n=ed("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),vo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),vo.removeChild(n),r},dg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},bg=function(t){var e,n;try{e=t.getBBox()}catch{e=fg(t),n=1}return e&&(e.width||e.height)||n||(e=fg(t)),e&&!e.width&&!e.x&&!e.y?{x:+dg(t,["x","cx","x1"])||0,y:+dg(t,["y","cy","y1"])||0,width:0,height:0}:e},Tg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bg(t))},Ys=function(t,e){if(e){var n=t.style,i;e in gs&&e!==Kn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(od,"-$1").toLowerCase())):n.removeAttribute(e)}},qs=function(t,e,n,i,r,o){var a=new Bn(t._pt,e,n,0,1,o?vg:xg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},pg={deg:1,rad:1,turn:1},Fb={grid:1,flex:1},Zs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Sr.style,l=bb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",p,_,m,g;if(i===o||!r||pg[i]||pg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&Tg(t),(u||o==="%")&&(gs[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Ve(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Xs||!_.appendChild)&&(_=Xs.body),m=_._gsap,m&&u&&m.width&&l&&m.time===Zn.time&&!m.uncache)return Ve(r/m.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,p=t[h],v?t.style[e]=v:Ys(t,e)}else(u||o==="%")&&!Fb[li(_,"display")]&&(a.position=li(t,"position")),_===t&&(a.position="static"),_.appendChild(Sr),p=Sr[h],_.removeChild(Sr),a.position="absolute";return l&&u&&(m=Gs(_),m.time=Zn.time,m.width=_[h]),Ve(f?p*r/d:p&&r?d/p*r:0)},ms=function(t,e,n,i){var r;return sd||nd(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=Ba(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:bh(li(t,Kn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Mh[e]&&Mh[e](t,e,n)||li(t,e)||Gf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zs(t,e,r,n)+n:r},Bb=function(t,e,n,i){if(!n||n==="none"){var r=So(e,t,1),o=r&&li(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=li(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,$f),l=0,c=0,h,d,f,u,p,_,m,g,v,w,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=li(t,e)||i,_?t.style[e]=_:Ys(t,e)),h=[n,i],Wf(h),n=h[0],i=h[1],f=n.match(mr)||[],T=i.match(mr)||[],T.length){for(;d=mr.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),m.charAt(1)==="="&&(m=gr(u,m)+y),g=parseFloat(m),w=m.substr((g+"").length),l=mr.lastIndex-w.length,w||(w=w||$n.units[e]||y,l===i.length&&(i+=w,a.e+=w)),y!==w&&(u=Zs(t,e,_,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?vg:xg;return Ff.test(i)&&(a.e=0),this._pt=a,a},mg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=mg[n]||n,e[1]=mg[i]||i,e.join(" ")},kb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gs[a]&&(l=1,a=a==="transformOrigin"?Kn:Oe),Ys(n,a);l&&(Ys(n,Oe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),o.uncache=1,yg(i)))}},Mh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,kb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Fa=[1,0,0,1,0,0],wg={},Eg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gg=function(t){var e=li(t,Oe);return Eg(e)?Fa:e.substr(7).match(Of).map(Ve)},ad=function(t,e){var n=t._gsap||Gs(t),i=t.style,r=gg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Fa:r):(r===Fa&&!t.offsetParent&&t!==vo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,vo.appendChild(t)),r=gg(t),l?i.display=l:Ys(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):vo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},id=function(t,e,n,i,r,o){var a=t._gsap,l=r||ad(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,S,P;n?l!==Fa&&(x=u*m-p*_)&&(S=y*(m/x)+T*(-_/x)+(_*v-m*g)/x,P=y*(-p/x)+T*(u/x)-(u*v-p*g)/x,y=S,T=P):(E=bg(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Kn]="0px 0px",o&&(qs(o,a,"xOrigin",c,y),qs(o,a,"yOrigin",h,T),qs(o,a,"xOffset",d,a.xOffset),qs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Ba=function(t,e){var n=t._gsap||new Xf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=li(t,Kn)||"0",h,d,f,u,p,_,m,g,v,w,y,T,E,x,S,P,A,N,D,k,I,z,H,F,et,X,R,$,Mt,Ot,Z,ht;return h=d=f=_=m=g=v=w=y=0,u=p=1,n.svg=!!(t.getCTM&&Tg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),x=ad(t,n.svg),n.svg&&(n.uncache?(et=t.getBBox(),c=n.xOrigin-et.x+"px "+(n.yOrigin-et.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),id(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==Fa&&(N=x[0],D=x[1],k=x[2],I=x[3],h=z=x[4],d=H=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),p=Math.sqrt(I*I+k*k),_=N||D?xo(D,N)*yr:0,v=k||I?xo(k,I)*yr+_:0,v&&(p*=Math.abs(Math.cos(v*yo))),n.svg&&(h-=T-(T*N+E*k),d-=E-(T*D+E*I))):(ht=x[6],Ot=x[7],R=x[8],$=x[9],Mt=x[10],Z=x[11],h=x[12],d=x[13],f=x[14],S=xo(ht,Mt),m=S*yr,S&&(P=Math.cos(-S),A=Math.sin(-S),F=z*P+R*A,et=H*P+$*A,X=ht*P+Mt*A,R=z*-A+R*P,$=H*-A+$*P,Mt=ht*-A+Mt*P,Z=Ot*-A+Z*P,z=F,H=et,ht=X),S=xo(-k,Mt),g=S*yr,S&&(P=Math.cos(-S),A=Math.sin(-S),F=N*P-R*A,et=D*P-$*A,X=k*P-Mt*A,Z=I*A+Z*P,N=F,D=et,k=X),S=xo(D,N),_=S*yr,S&&(P=Math.cos(S),A=Math.sin(S),F=N*P+D*A,et=z*P+H*A,D=D*P-N*A,H=H*P-z*A,N=F,z=et),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),u=Ve(Math.sqrt(N*N+D*D+k*k)),p=Ve(Math.sqrt(H*H+ht*ht)),S=xo(z,H),v=Math.abs(S)>2e-4?S*yr:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Eg(li(t,Oe)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ve(u),n.scaleY=Ve(p),n.rotation=Ve(_)+a,n.rotationX=Ve(m)+a,n.rotationY=Ve(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Kn]=bh(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?Gb:Mg?Ag:Vb,n.uncache=0,n},bh=function(t){return(t=t.split(" "))[0]+" "+t[1]},jf=function(t,e,n){var i=mn(e);return Ve(parseFloat(e)+parseFloat(Zs(t,"x",n+"px",i)))+i},Vb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ag(t,e)},xr="0deg",Oa="0px",vr=") ",Ag=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==xr||h!==xr)){var E=parseFloat(h)*yo,x=Math.sin(E),S=Math.cos(E),P;E=parseFloat(d)*yo,P=Math.cos(E),o=jf(v,o,x*P*-w),a=jf(v,a,-Math.sin(E)*-w),l=jf(v,l,S*P*-w+w)}m!==Oa&&(y+="perspective("+m+vr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Oa||a!==Oa||l!==Oa)&&(y+=l!==Oa||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vr),c!==xr&&(y+="rotate("+c+vr),h!==xr&&(y+="rotateY("+h+vr),d!==xr&&(y+="rotateX("+d+vr),(f!==xr||u!==xr)&&(y+="skew("+f+", "+u+vr),(p!==1||_!==1)&&(y+="scale("+p+", "+_+vr),v.style[Oe]=y||"translate(0, 0)"},Gb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),y=parseFloat(a),T,E,x,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yo,c*=yo,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=yo,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=Ve(T),E=Ve(E),x=Ve(x),S=Ve(S)):(T=d,S=f,E=x=0),(w&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=Zs(u,"x",o,"px"),y=Zs(u,"y",a,"px")),(p||_||m||g)&&(w=Ve(w+p-(p*T+_*x)+m),y=Ve(y+_-(p*E+_*S)+g)),(i||r)&&(P=u.getBBox(),w=Ve(w+i/100*P.width),y=Ve(y+r/100*P.height)),P="matrix("+T+","+E+","+x+","+S+","+w+","+y+")",u.setAttribute("transform",P),v&&(u.style[Oe]=P)},Hb=function(t,e,n,i,r){var o=360,a=on(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?yr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*hg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*hg)%o-~~(c/o)*o)),t._pt=f=new Bn(t._pt,e,n,i,c,wb),f.e=h,f.u="deg",t._props.push(n),f},_g=function(t,e){for(var n in e)t[n]=e[n];return t},Wb=function(t,e,n){var i=_g({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Oe]=e,a=Ba(n,1),Ys(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],o[Oe]=e,a=Ba(n,1),o[Oe]=c);for(l in gs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=mn(c),p=mn(h),d=u!==p?Zs(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new Bn(t._pt,a,l,d,f-d,td),t._pt.u=p||0,t._props.push(l));_g(a,i)};Fn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Mh[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return ms(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,_){return u[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var ld={name:"css",register:nd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,p,_,m,g,v,w,y,T,E,x,S,P;sd||nd(),this.styles=this.styles||Sg(t),S=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Yn[_]&&Yf(_,e,n,i,t,r)))){if(u=typeof h,p=Mh[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=_o(h)),p)p(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(m=mn(c),g=mn(h),g?m!==g&&(c=Zs(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),S.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],on(c)&&~c.indexOf("random(")&&(c=_o(c)),mn(c+"")||c==="auto"||(c+=$n.units[_]||mn(ms(t,_))||""),(c+"").charAt(1)==="="&&(c=ms(t,_))):c=ms(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Zi&&(_==="autoAlpha"&&(f===1&&ms(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),qs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in gs,w){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=li(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=li(t,"perspective"),A?t.style.perspective=A:Ys(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ba(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Bn(this._pt,a,Oe,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(v?gr(T.scaleY,v+d):d)-T.scaleY||0,td),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Kn,0,a[Kn]),h=zb(h),T.svg?id(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&qs(this,T,"zOrigin",T.zOrigin,g),qs(this,a,_,bh(c),bh(h)));continue}else if(_==="svgOrigin"){id(t,h,1,E,0,this);continue}else if(_ in wg){Hb(this,T,_,f,v?gr(f,v+h):h);continue}else if(_==="smoothOrigin"){qs(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Wb(this,h,t);continue}}else _ in a||(_=So(_)||_);if(w||(d||d===0)&&(f||f===0)&&!Tb.test(h)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),g=mn(h)||(_ in $n.units?$n.units[_]:m),m!==g&&(f=Zs(t,_,c,g)),this._pt=new Bn(this._pt,w?T:a,_,f,(v?gr(f,v+d):d)-f,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Cb:td),this._pt.u=g||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Ab):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Eb);else if(_ in a)Bb.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){_h(_,h);continue}w||(_ in a?S.push(_,0,a[_]):typeof t[_]=="function"?S.push(_,2,t[_]()):S.push(_,1,c||t[_])),o.push(_)}}x&&Qf(this)},render:function(t,e){if(e.tween._time||!rd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ms,aliases:Zi,getSetter:function(t,e,n){var i=Zi[e];return i&&i.indexOf(",")<0&&(e=i),e in gs&&e!==Kn&&(t._gsap.x||ms(t,"x"))?n&&cg===n?e==="scale"?Lb:Ib:(cg=n||{})&&(e==="scale"?Db:Nb):t.style&&!gh(t.style[e])?Rb:~e.indexOf("-")?Pb:Sh(t,e)},core:{_removeProperty:Ys,_getMatrix:ad}};An.utils.checkPrefix=So;An.core.getStyleSaver=Sg;(function(s,t,e,n){var i=Fn(s+","+t+","+e,function(r){gs[r]=1});Fn(t,function(r){$n.units[r]="deg",wg[r]=1}),Zi[i[13]]=s+","+t,Fn(n,function(r){var o=r.split(":");Zi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){$n.units[s]="px"});An.registerPlugin(ld);var Ht=An.registerPlugin(ld)||An,$E=Ht.core.Tween;function Cg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Xb(s,t,e){return t&&Cg(s.prototype,t),e&&Cg(s,e),s}var gn,Eh,qb,Qn,Js,$s,bo,Pg,Mr,To,Ig,_s,Di,Lg,Dg=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},Ng=1,Mo=[],Kt=[],Ni=[],ka=Date.now,cd=function(t,e){return e},Yb=function(){var t=To.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Kt),i.push.apply(i,Ni),Kt=n,Ni=i,cd=function(o,a){return e[o](a)}},vs=function(t,e){return~Ni.indexOf(t)&&Ni[Ni.indexOf(t)+1][e]},Va=function(t){return!!~Ig.indexOf(t)},kn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Th="scrollLeft",wh="scrollTop",hd=function(){return _s&&_s.isPressed||Kt.cache++},Ah=function(t,e){var n=function i(r){if(r||r===0){Ng&&Qn.history.scrollRestoration!=="manual"&&(Qn.history.scrollRestoration="manual");var o=_s&&_s.isPressed;r=i.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),i.cacheID=Kt.cache,o&&cd("ss",r)}else(e||Kt.cache!==i.cacheID||cd("ref"))&&(i.cacheID=Kt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Cn={s:Th,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ah(function(s){return arguments.length?Qn.scrollTo(s,Qe.sc()):Qn.pageXOffset||Js[Th]||$s[Th]||bo[Th]||0})},Qe={s:wh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:Ah(function(s){return arguments.length?Qn.scrollTo(Cn.sc(),s):Qn.pageYOffset||Js[wh]||$s[wh]||bo[wh]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Zb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},xs=function(t,e){var n=e.s,i=e.sc;Va(t)&&(t=Js.scrollingElement||$s);var r=Kt.indexOf(t),o=i===Qe.sc?1:2;!~r&&(r=Kt.push(t)-1),Kt[r+o]||kn(t,"scroll",hd);var a=Kt[r+o],l=a||(Kt[r+o]=Ah(vs(t,n),!0)||(Va(t)?i:Ah(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},Ch=function(t,e,n){var i=t,r=t,o=ka(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=ka();_||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(p){var _=a,m=r,g=ka();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},za=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Rg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Ug=function(){To=gn.core.globals().ScrollTrigger,To&&To.core&&Yb()},Og=function(t){return gn=t||Dg(),!Eh&&gn&&typeof document<"u"&&document.body&&(Qn=window,Js=document,$s=Js.documentElement,bo=Js.body,Ig=[Qn,Js,$s,bo],qb=gn.utils.clamp,Lg=gn.core.context||function(){},Mr="onpointerenter"in bo?"pointer":"mouse",Pg=Ge.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Ge.eventTypes=("ontouchstart"in $s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ng=0},500),Eh=1),To||Ug(),Eh};Cn.op=Qe;Kt.cache=0;var Ge=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Eh||Og(gn)||console.warn("Please gsap.registerPlugin(Observer)"),To||Ug();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,D=n.onToggleX,k=n.onToggleY,I=n.onHover,z=n.onHoverEnd,H=n.onMove,F=n.ignoreCheck,et=n.isNormalizer,X=n.onGestureStart,R=n.onGestureEnd,$=n.onWheel,Mt=n.onEnable,Ot=n.onDisable,Z=n.onClick,ht=n.scrollSpeed,vt=n.capture,Tt=n.allowClicks,Q=n.lockAxis,at=n.onLockAxis;this.target=a=Vn(a)||$s,this.vars=n,u&&(u=gn.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(bo).lineHeight)||22);var kt,bt,Bt,Ct,Pt,te,ce,J=this,ee=0,qe=0,ye=n.passive||!h&&n.passive!==!1,ae=xs(a,Cn),Fe=xs(a,Qe),He=ae(),O=Fe(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",he=Va(a),Wt=a.ownerDocument||Js,dt=[0,0,0],fe=[0,0,0],Nt=0,zt=function(){return Nt=ka()},C=function(gt,rt){return(J.event=gt)&&u&&Zb(gt.target,u)||rt&&de&&gt.pointerType!=="touch"||F&&F(gt,rt)},M=function(){J._vx.reset(),J._vy.reset(),bt.pause(),d&&d(J)},G=function(){var gt=J.deltaX=Rg(dt),rt=J.deltaY=Rg(fe),nt=Math.abs(gt)>=i,xt=Math.abs(rt)>=i;N&&(nt||xt)&&N(J,gt,rt,dt,fe),nt&&(T&&J.deltaX>0&&T(J),E&&J.deltaX<0&&E(J),P&&P(J),D&&J.deltaX<0!=ee<0&&D(J),ee=J.deltaX,dt[0]=dt[1]=dt[2]=0),xt&&(S&&J.deltaY>0&&S(J),x&&J.deltaY<0&&x(J),A&&A(J),k&&J.deltaY<0!=qe<0&&k(J),qe=J.deltaY,fe[0]=fe[1]=fe[2]=0),(Ct||Bt)&&(H&&H(J),Bt&&(m&&Bt===1&&m(J),v&&v(J),Bt=0),Ct=!1),te&&!(te=!1)&&at&&at(J),Pt&&($(J),Pt=!1),kt=0},ot=function(gt,rt,nt){dt[nt]+=gt,fe[nt]+=rt,J._vx.update(gt),J._vy.update(rt),c?kt||(kt=requestAnimationFrame(G)):G()},st=function(gt,rt){Q&&!ce&&(J.axis=ce=Math.abs(gt)>Math.abs(rt)?"x":"y",te=!0),ce!=="y"&&(dt[2]+=gt,J._vx.update(gt,!0)),ce!=="x"&&(fe[2]+=rt,J._vy.update(rt,!0)),c?kt||(kt=requestAnimationFrame(G)):G()},ft=function(gt){if(!C(gt,1)){gt=za(gt,h);var rt=gt.clientX,nt=gt.clientY,xt=rt-J.x,it=nt-J.y,Et=J.isDragging;J.x=rt,J.y=nt,(Et||(xt||it)&&(Math.abs(J.startX-rt)>=r||Math.abs(J.startY-nt)>=r))&&(Bt||(Bt=Et?2:1),Et||(J.isDragging=!0),st(xt,it))}},_t=J.onPress=function(lt){C(lt,1)||lt&&lt.button||(J.axis=ce=null,bt.pause(),J.isPressed=!0,lt=za(lt),ee=qe=0,J.startX=J.x=lt.clientX,J.startY=J.y=lt.clientY,J._vx.reset(),J._vy.reset(),kn(et?a:Wt,Di[1],ft,ye,!0),J.deltaX=J.deltaY=0,w&&w(J))},W=J.onRelease=function(lt){if(!C(lt,1)){zn(et?a:Wt,Di[1],ft,!0);var gt=!isNaN(J.y-J.startY),rt=J.isDragging,nt=rt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),xt=za(lt);!nt&&gt&&(J._vx.reset(),J._vy.reset(),h&&Tt&&gn.delayedCall(.08,function(){if(ka()-Nt>300&&!lt.defaultPrevented){if(lt.target.click)lt.target.click();else if(Wt.createEvent){var it=Wt.createEvent("MouseEvents");it.initMouseEvent("click",!0,!0,Qn,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),lt.target.dispatchEvent(it)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&rt&&!et&&bt.restart(!0),Bt&&G(),g&&rt&&g(J),y&&y(J,nt)}},tt=function(gt){return gt.touches&&gt.touches.length>1&&(J.isGesturing=!0)&&X(gt,J.isDragging)},ut=function(){return(J.isGesturing=!1)||R(J)},L=function(gt){if(!C(gt)){var rt=ae(),nt=Fe();ot((rt-He)*ht,(nt-O)*ht,1),He=rt,O=nt,d&&bt.restart(!0)}},j=function(gt){if(!C(gt)){gt=za(gt,h),$&&(Pt=!0);var rt=(gt.deltaMode===1?l:gt.deltaMode===2?Qn.innerHeight:1)*p;ot(gt.deltaX*rt,gt.deltaY*rt,0),d&&!et&&bt.restart(!0)}},K=function(gt){if(!C(gt)){var rt=gt.clientX,nt=gt.clientY,xt=rt-J.x,it=nt-J.y;J.x=rt,J.y=nt,Ct=!0,d&&bt.restart(!0),(xt||it)&&st(xt,it)}},pt=function(gt){J.event=gt,I(J)},ct=function(gt){J.event=gt,z(J)},mt=function(gt){return C(gt)||za(gt,h)&&Z(J)};bt=J._dc=gn.delayedCall(f||.25,M).pause(),J.deltaX=J.deltaY=0,J._vx=Ch(0,50,!0),J._vy=Ch(0,50,!0),J.scrollX=ae,J.scrollY=Fe,J.isDragging=J.isGesturing=J.isPressed=!1,Lg(this),J.enable=function(lt){return J.isEnabled||(kn(he?Wt:a,"scroll",hd),o.indexOf("scroll")>=0&&kn(he?Wt:a,"scroll",L,ye,vt),o.indexOf("wheel")>=0&&kn(a,"wheel",j,ye,vt),(o.indexOf("touch")>=0&&Pg||o.indexOf("pointer")>=0)&&(kn(a,Di[0],_t,ye,vt),kn(Wt,Di[2],W),kn(Wt,Di[3],W),Tt&&kn(a,"click",zt,!0,!0),Z&&kn(a,"click",mt),X&&kn(Wt,"gesturestart",tt),R&&kn(Wt,"gestureend",ut),I&&kn(a,Mr+"enter",pt),z&&kn(a,Mr+"leave",ct),H&&kn(a,Mr+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Ct=Bt=!1,J._vx.reset(),J._vy.reset(),He=ae(),O=Fe(),lt&&lt.type&&_t(lt),Mt&&Mt(J)),J},J.disable=function(){J.isEnabled&&(Mo.filter(function(lt){return lt!==J&&Va(lt.target)}).length||zn(he?Wt:a,"scroll",hd),J.isPressed&&(J._vx.reset(),J._vy.reset(),zn(et?a:Wt,Di[1],ft,!0)),zn(he?Wt:a,"scroll",L,vt),zn(a,"wheel",j,vt),zn(a,Di[0],_t,vt),zn(Wt,Di[2],W),zn(Wt,Di[3],W),zn(a,"click",zt,!0),zn(a,"click",mt),zn(Wt,"gesturestart",tt),zn(Wt,"gestureend",ut),zn(a,Mr+"enter",pt),zn(a,Mr+"leave",ct),zn(a,Mr+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Ot&&Ot(J))},J.kill=J.revert=function(){J.disable();var lt=Mo.indexOf(J);lt>=0&&Mo.splice(lt,1),_s===J&&(_s=0)},Mo.push(J),et&&Va(a)&&(_s=J),J.enable(_)},Xb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ge.version="3.15.1";Ge.create=function(s){return new Ge(s)};Ge.register=Og;Ge.getAll=function(){return Mo.slice()};Ge.getById=function(s){return Mo.filter(function(t){return t.vars.id===s})[0]};Dg()&&gn.registerPlugin(Ge);var Rt,Co,jt,xe,ui,_e,Td,Wh,tl,Za,Ha,Rh,Rn,Yh,_d,Hn,Fg,Bg,Ro,t_,ud,e_,Gn,xd,n_,i_,Ks,vd,wd,Po,Ed,Qs,yd,fd,Ph=1,Pn=Date.now,dd=Pn(),bi=0,Wa=0,zg=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},kg=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Jb=function s(){return Wa&&requestAnimationFrame(s)},Vg=function(){return Yh=1},Gg=function(){return Yh=0},Ji=function(t){return t},Xa=function(t){return Math.round(t*1e5)/1e5||0},s_=function(){return typeof window<"u"},r_=function(){return Rt||s_()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Cr=function(t){return!!~Td.indexOf(t)},o_=function(t){return(t==="Height"?Ed:jt["inner"+t])||ui["client"+t]||_e["client"+t]},a_=function(t){return vs(t,"getBoundingClientRect")||(Cr(t)?function(){return Hh.width=jt.innerWidth,Hh.height=Ed,Hh}:function(){return ys(t)})},$b=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?o_(r):t["client"+r])||0}},Kb=function(t,e){return!e||~Ni.indexOf(t)?a_(t):function(){return Hh}},$i=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=vs(t,n))?o()-a_(t)()[r]:Cr(t)?(ui[n]||_e[n])-o_(i):t[n]-t["offset"+i])},Ih=function(t,e){for(var n=0;n<Ro.length;n+=3)(!e||~e.indexOf(Ro[n+1]))&&t(Ro[n],Ro[n+1],Ro[n+2])},hi=function(t){return typeof t=="string"},In=function(t){return typeof t=="function"},qa=function(t){return typeof t=="number"},br=function(t){return typeof t=="object"},Ga=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},wo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Eo=Math.abs,l_="left",c_="top",Ad="right",Cd="bottom",wr="width",Er="height",Ja="Right",$a="Left",Ka="Top",Qa="Bottom",je="padding",Si="margin",Lo="Width",Rd="Height",an="px",Mi=function(t){return jt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Qb=function(t){var e=Mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Hg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ys=function(t,e){var n=e&&Mi(t)[_d]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},h_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},jb=function(t){return function(e){return Rt.utils.snap(h_(t),e)}},Pd=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},tT=function(t){return function(e,n){return Pd(h_(t))(e,n.direction)}},Lh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},fn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Dh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Wg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nh={toggleActions:"play",anticipatePin:0},qh={top:0,left:0,center:.5,bottom:1,right:1},zh=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in qh?qh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Uh=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=xe.createElement("div"),_=Cr(n)||vs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Qe?Ad:Cd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],kh(p,0,i,v),p},kh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Lo]=1,r["border"+a+Lo]=0,r[n.p]=e+"px",Rt.set(t,r)},Qt=[],Sd={},el,Xg=function(){return Pn()-bi>34&&(el||(el=requestAnimationFrame(Ss)))},Ao=function(){(!Gn||!Gn.isPressed||Gn.startX>_e.clientWidth)&&(Kt.cache++,Gn?el||(el=requestAnimationFrame(Ss)):Ss(),bi||Pr("scrollStart"),bi=Pn())},pd=function(){i_=jt.innerWidth,n_=jt.innerHeight},Ya=function(t){Kt.cache++,(t===!0||!Rn&&!e_&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!xd||i_!==jt.innerWidth||Math.abs(jt.innerHeight-n_)>jt.innerHeight*.25))&&Wh.restart(!0)},Rr={},eT=[],u_=function s(){return un(Zt,"scrollEnd",s)||Tr(!0)},Pr=function(t){return Rr[t]&&Rr[t].map(function(e){return e()})||eT},ci=[],f_=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},d_=function(){Kt.cache++,Kt.forEach(function(t){return In(t)&&(t.rec=t())})},Id=function(t,e){var n;for(Hn=0;Hn<Qt.length;Hn++)n=Qt[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Qs=!0,e&&f_(e),e||Pr("revert")},p_=function(t,e){Kt.cache++,(e||!Wn)&&Kt.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(wd=t,jt.history.scrollRestoration!==t&&(jt.history.scrollRestoration=t))},Wn,Ar=0,qg,nT=function(){if(qg!==Ar){var t=qg=Ar;requestAnimationFrame(function(){return t===Ar&&Tr(!0)})}},m_=function(){_e.appendChild(Po),Ed=!Gn&&Po.offsetHeight||jt.innerHeight,_e.removeChild(Po)},Yg=function(t){return tl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Tr=function(t,e){if(ui=xe.documentElement,_e=xe.body,Td=[jt,xe,ui,_e],bi&&!t&&!Qs){fn(Zt,"scrollEnd",u_);return}m_(),Wn=Zt.isRefreshing=!0,Qs||d_();var n=Pr("refreshInit");t_&&Zt.sort(),e||Id(),Kt.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),Qs=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),yd=1,Yg(!0),Qt.forEach(function(i){var r=$i(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Yg(!1),yd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Kt.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),p_(wd,1),Wh.pause(),Ar++,Wn=2,Ss(2),Qt.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=Zt.isRefreshing=!1,Pr("refresh")},Md=0,Vh=1,ja,Ss=function(t){if(t===2||!Wn&&!Qs){Zt.isUpdating=!0,ja&&ja.update(0);var e=Qt.length,n=Pn(),i=n-dd>=50,r=e&&Qt[0].scroll();if(Vh=Md>r?-1:1,Wn||(Md=r),i&&(bi&&!Yh&&n-bi>200&&(bi=0,Pr("scrollEnd")),Ha=dd,dd=n),Vh<0){for(Hn=e;Hn-- >0;)Qt[Hn]&&Qt[Hn].update(0,i);Vh=1}else for(Hn=0;Hn<e;Hn++)Qt[Hn]&&Qt[Hn].update(0,i);Zt.isUpdating=!1}el=0},bd=[l_,c_,Cd,Ad,Si+Qa,Si+Ja,Si+Ka,Si+$a,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gh=bd.concat([wr,Er,"boxSizing","max"+Lo,"max"+Rd,"position",Si,je,je+Ka,je+Ja,je+Qa,je+$a]),iT=function(t,e,n){Io(n);var i=t._gsap;if(i.spacerIsNative)Io(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},md=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=bd.length,o=e.style,a=t.style,l;r--;)l=bd[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Cd]=a[Ad]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=Xh(t,Cn)+an,o[Er]=Xh(t,Qe)+an,o[je]=a[Si]=a[c_]=a[l_]="0",Io(i),a[wr]=a["max"+Lo]=n[wr],a[Er]=a["max"+Rd]=n[Er],a[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},sT=/([A-Z])/g,Io=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(sT,"-$1").toLowerCase())}},Oh=function(t){for(var e=Gh.length,n=t.style,i=[],r=0;r<e;r++)i.push(Gh[r],n[Gh[r]]);return i.t=t,i},rT=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Hh={left:0,top:0},Zg=function(t,e,n,i,r,o,a,l,c,h,d,f,u,p){In(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?zh("0"+t.substr(3),n):0));var _=u?u.time():0,m,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),qa(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&kh(a,n,i,!0);else{In(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=Vn(e,l)||_e,y=ys(v)||{},(!y||!y.left&&!y.top)&&Mi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=ys(v),x?v.style.display=x:v.style.removeProperty("display")),T=zh(w[0],y[i.d]),E=zh(w[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-E,a&&kh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+n,P=o._isStart;m="scroll"+i.d2,kh(o,S,i,P&&S>20||!P&&(d?Math.max(_e[m],ui[m]):o.parentNode[m])<=S+1),d&&(c=ys(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return u&&v&&(m=ys(v),u.seek(f),g=ys(v),u._caScrollDist=m[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},oT=/(webkit|moz|length|cssText|inset)/i,Jg=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===_e){t._stOrig=r.cssText,a=Mi(t);for(o in a)!+o&&!oT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},g_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Fh=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},$g=function(t,e){var n=xs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||n();var _=g_(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Kt.cache++,o.tween&&Ss()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(t,"wheel",n.wheelHandler),Zt.isTouch&&fn(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){Co||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=Ji;return}n=Hg(hi(n)||qa(n)||n.nodeType?{trigger:n}:n,Nh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,w=r.once,y=r.snap,T=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,P=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Qe,N=!d&&d!==0,D=Vn(n.scroller||jt),k=Rt.core.getCache(D),I=Cr(D),z=("pinType"in n?n.pinType:vs(D,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),et="markers"in n?n.markers:Nh.markers,X=I?0:parseFloat(Mi(D)["border"+A.p2+Lo])||0,R=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Mt=$b(D,I,A),Ot=Kb(D,I),Z=0,ht=0,vt=0,Tt=xs(D,A),Q,at,kt,bt,Bt,Ct,Pt,te,ce,J,ee,qe,ye,ae,Fe,He,O,de,he,Wt,dt,fe,Nt,zt,C,M,G,ot,st,ft,_t,W,tt,ut,L,j,K,pt,ct;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=D,R.scroll=x?x.time.bind(x):Tt,bt=Tt(),Qs&&Tt.rec==null&&(Tt.rec=bt),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(t_=1,n.refreshPriority===-9999&&(ja=R)),k.tweenScroll=k.tweenScroll||{top:$g(D,Qe),left:$g(D,Cn)},R.tweenTo=Q=k.tweenScroll[A.p],R.scrubDuration=function(nt){tt=qa(nt)&&nt,tt?W?W.duration(nt):W=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ft=0,l||(l=i.vars.id)),y&&((!br(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&Rt.set(I?[_e,ui]:D,{scrollBehavior:"auto"}),Kt.forEach(function(nt){return In(nt)&&nt.target===(I?xe.scrollingElement||ui:D)&&(nt.smooth=!1)}),kt=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?jb(i):y.snapTo==="labelsDirectional"?tT(i):y.directional!==!1?function(nt,xt){return Pd(y.snapTo)(nt,Pn()-ht<500?0:xt.direction)}:Rt.utils.snap(y.snapTo),ut=y.duration||{min:.1,max:2},ut=br(ut)?Za(ut.min,ut.max):Za(ut,ut),L=Rt.delayedCall(y.delay||tt/2||.1,function(){var nt=Tt(),xt=Pn()-ht<500,it=Q.tween;if((xt||Math.abs(R.getVelocity())<10)&&!it&&!Yh&&Z!==nt){var Et=(nt-Ct)/ae,ne=i&&!N?i.totalProgress():Et,qt=xt?0:(ne-_t)/(Pn()-Ha)*1e3||0,Ce=Rt.utils.clamp(-Et,1-Et,Eo(qt/2)*qt/.185),Ye=Et+(y.inertia===!1?0:Ce),Re,Se,me=y,tn=me.onStart,Me=me.onInterrupt,_n=me.onComplete;if(Re=kt(Ye,R),qa(Re)||(Re=Ye),Se=Math.max(0,Math.round(Ct+Re*ae)),nt<=Pt&&nt>=Ct&&Se!==nt){if(it&&!it._initted&&it.data<=Eo(Se-nt))return;y.inertia===!1&&(Ce=Re-Et),Q(Se,{duration:ut(Eo(Math.max(Eo(Ye-ne),Eo(Re-ne))*.185/qt/.05||0)),ease:y.ease||"power3",data:Eo(Se-nt),onInterrupt:function(){return L.restart(!0)&&Me&&wo(R,Me)},onComplete:function(){R.update(),Z=Tt(),i&&!N&&(W?W.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),ft=_t=i&&!N?i.totalProgress():R.progress,v&&v(R),_n&&wo(R,_n)}},nt,Ce*ae,Se-nt-Ce*ae),tn&&wo(R,tn,Q.tween)}}else R.isActive&&Z!==nt&&L.restart(!0)}).pause()),l&&(Sd[l]=R),f=R.trigger=Vn(f||u!==!0&&u),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(R)),u=u===!0?f:Vn(u),hi(a)&&(a={targets:f,className:a}),u&&(p===!1||p===Si||(p=!p&&u.parentNode&&u.parentNode.style&&Mi(u.parentNode).display==="flex"?!1:je),R.pin=u,at=Rt.core.getCache(u),at.spacer?Fe=at.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),at.spacerIsNative=!!E,E&&(at.spacerState=Oh(E))),at.spacer=de=E||xe.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),at.pinState=Fe=Oh(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),R.spacer=de=at.spacer,st=Mi(u),zt=st[p+A.os2],Wt=Rt.getProperty(u),dt=Rt.quickSetter(u,A.a,an),md(u,de,st),O=Oh(u)),et){qe=br(et)?Hg(et,Wg):Wg,J=Uh("scroller-start",l,D,A,qe,0),ee=Uh("scroller-end",l,D,A,qe,0,J),he=J["offset"+A.op.d2];var mt=Vn(vs(D,"content")||D);te=this.markerStart=Uh("start",l,mt,A,qe,he,0,x),ce=this.markerEnd=Uh("end",l,mt,A,qe,he,0,x),x&&(pt=Rt.quickSetter([te,ce],A.a,an)),!z&&!(Ni.length&&vs(D,"fixedMarkers")===!0)&&(Qb(I?_e:D),Rt.set([J,ee],{force3D:!0}),M=Rt.quickSetter(J,A.a,an),ot=Rt.quickSetter(ee,A.a,an))}if(x){var lt=x.vars.onUpdate,gt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),lt&&lt.apply(x,gt||[])})}if(R.previous=function(){return Qt[Qt.indexOf(R)-1]},R.next=function(){return Qt[Qt.indexOf(R)+1]},R.revert=function(nt,xt){if(!xt)return R.kill(!0);var it=nt!==!1||!R.enabled,Et=Rn;it!==R.isReverted&&(it&&(j=Math.max(Tt(),R.scroll.rec||0),vt=R.progress,K=i&&i.progress()),te&&[te,ce,J,ee].forEach(function(ne){return ne.style.display=it?"none":"block"}),it&&(Rn=R,R.update(it)),u&&(!T||!R.isActive)&&(it?iT(u,de,Fe):md(u,de,Mi(u),C)),it||R.update(it),Rn=Et,R.isReverted=it)},R.refresh=function(nt,xt,it,Et){if(!((Rn||!R.enabled)&&!xt)){if(u&&nt&&bi){fn(s,"scrollEnd",u_);return}!Wn&&$&&$(R),Rn=R,Q.tween&&!it&&(Q.tween.kill(),Q.tween=0),W&&W.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ne=Mt(),qt=Ot(),Ce=x?x.duration():$i(D,A),Ye=ae<=.01||!ae,Re=0,Se=Et||0,me=br(it)?it.end:n.end,tn=n.endTrigger||f,Me=br(it)?it.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,R),jn=f&&Math.max(0,Qt.indexOf(R))||0,Be=jn,Ze,en,ti,Lr,nn,ze,fi,Do,il,bs,b,U,Y;for(et&&br(it)&&(U=Rt.getProperty(J,A.p),Y=Rt.getProperty(ee,A.p));Be-- >0;)ze=Qt[Be],ze.end||ze.refresh(0,1)||(Rn=R),fi=ze.pin,fi&&(fi===f||fi===u||fi===_n)&&!ze.isReverted&&(bs||(bs=[]),bs.unshift(ze),ze.revert(!0,!0)),ze!==Qt[Be]&&(jn--,Be--);for(In(Me)&&(Me=Me(R)),Me=zg(Me,"start",R),Ct=Zg(Me,f,ne,A,Tt(),te,J,R,qt,X,z,Ce,x,R._startClamp&&"_startClamp")||(u?-.001:0),In(me)&&(me=me(R)),hi(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(hi(Me)?Me.split(" ")[0]:"")+me:(Re=zh(me.substr(2),ne),me=hi(Me)?Me:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ct):Ct)+Re,tn=f)),me=zg(me,"end",R),Pt=Math.max(Ct,Zg(me||(tn?"100% 0":Ce),tn,ne,A,Tt()+Re,ce,ee,R,qt,X,z,Ce,x,R._endClamp&&"_endClamp"))||-.001,Re=0,Be=jn;Be--;)ze=Qt[Be]||{},fi=ze.pin,fi&&ze.start-ze._pinPush<=Ct&&!x&&ze.end>0&&(Ze=ze.end-(R._startClamp?Math.max(0,ze.start):ze.start),(fi===f&&ze.start-ze._pinPush<Ct||fi===_n)&&isNaN(Me)&&(Re+=Ze*(1-ze.progress)),fi===u&&(Se+=Ze));if(Ct+=Re,Pt+=Re,R._startClamp&&(R._startClamp+=Re),R._endClamp&&!Wn&&(R._endClamp=Pt||-.001,Pt=Math.min(Pt,$i(D,A))),ae=Pt-Ct||(Ct-=.01)&&.001,Ye&&(vt=Rt.utils.clamp(0,1,Rt.utils.normalize(Ct,Pt,j))),R._pinPush=Se,te&&Re&&(Ze={},Ze[A.a]="+="+Re,_n&&(Ze[A.p]="-="+Tt()),Rt.set([te,ce],Ze)),u&&!(yd&&R.end>=$i(D,A)))Ze=Mi(u),Lr=A===Qe,ti=Tt(),fe=parseFloat(Wt(A.a))+Se,!Ce&&Pt>1&&(b=(I?xe.scrollingElement||ui:D).style,b={style:b,value:b["overflow"+A.a.toUpperCase()]},I&&Mi(_e)["overflow"+A.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+A.a.toUpperCase()]="scroll")),md(u,de,Ze),O=Oh(u),en=ys(u,!0),Do=z&&xs(D,Lr?Cn:Qe)(),p?(C=[p+A.os2,ae+Se+an],C.t=de,Be=p===je?Xh(u,A)+ae+Se:0,Be&&(C.push(A.d,Be+an),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Be+an)),Io(C),_n&&Qt.forEach(function(V){V.pin===_n&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),z&&Tt(j)):(Be=Xh(u,A),Be&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Be+an)),z&&(nn={top:en.top+(Lr?ti-Ct:Do)+an,left:en.left+(Lr?Do:ti-Ct)+an,boxSizing:"border-box",position:"fixed"},nn[wr]=nn["max"+Lo]=Math.ceil(en.width)+an,nn[Er]=nn["max"+Rd]=Math.ceil(en.height)+an,nn[Si]=nn[Si+Ka]=nn[Si+Ja]=nn[Si+Qa]=nn[Si+$a]="0",nn[je]=Ze[je],nn[je+Ka]=Ze[je+Ka],nn[je+Ja]=Ze[je+Ja],nn[je+Qa]=Ze[je+Qa],nn[je+$a]=Ze[je+$a],He=rT(Fe,nn,T),Wn&&Tt(0)),i?(il=i._initted,ud(1),i.render(i.duration(),!0,!0),Nt=Wt(A.a)-fe+ae+Se,G=Math.abs(ae-Nt)>1,z&&G&&He.splice(He.length-2,2),i.render(0,!0,!0),il||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ud(0)):Nt=ae,b&&(b.value?b.style["overflow"+A.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+A.a));else if(f&&Tt()&&!x)for(en=f.parentNode;en&&en!==_e;)en._pinOffset&&(Ct-=en._pinOffset,Pt-=en._pinOffset),en=en.parentNode;bs&&bs.forEach(function(V){return V.revert(!1,!0)}),R.start=Ct,R.end=Pt,bt=Bt=Wn?j:Tt(),!x&&!Wn&&!Qs&&(bt<j&&Tt(j),R.scroll.rec=0),R.revert(!1,!0),ht=Pn(),L&&(Z=-1,L.restart(!0)),Rn=0,i&&N&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ye||vt!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||vt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ct<-.001&&!vt?Rt.utils.normalize(Ct,Pt,0):vt,!0),R.progress=Ye||(bt-Ct)/ae===vt?0:vt),u&&p&&(de._pinOffset=Math.round(R.progress*Nt)),W&&W.invalidate(),isNaN(U)||(U-=Rt.getProperty(J,A.p),Y-=Rt.getProperty(ee,A.p),Fh(J,A,U),Fh(te,A,U-(Et||0)),Fh(ee,A,Y),Fh(ce,A,Y-(Et||0))),Ye&&!Wn&&R.update(),h&&!Wn&&!ye&&(ye=!0,h(R),ye=!1)}},R.getVelocity=function(){return(Tt()-Bt)/(Pn()-Ha)*1e3||0},R.endAnimation=function(){Ga(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?N||Ga(i,R.direction<0,1):Ga(i,i.reversed()))},R.labelToScroll=function(nt){return i&&i.labels&&(Ct||R.refresh()||Ct)+i.labels[nt]/i.duration()*ae||0},R.getTrailing=function(nt){var xt=Qt.indexOf(R),it=R.direction>0?Qt.slice(0,xt).reverse():Qt.slice(xt+1);return(hi(nt)?it.filter(function(Et){return Et.vars.preventOverlaps===nt}):it).filter(function(Et){return R.direction>0?Et.end<=Ct:Et.start>=Pt})},R.update=function(nt,xt,it){if(!(x&&!it&&!nt)){var Et=Wn===!0?j:R.scroll(),ne=nt?0:(Et-Ct)/ae,qt=ne<0?0:ne>1?1:ne||0,Ce=R.progress,Ye,Re,Se,me,tn,Me,_n,jn;if(xt&&(Bt=bt,bt=x?Tt():Et,y&&(_t=ft,ft=i&&!N?i.totalProgress():qt)),m&&u&&!Rn&&!Ph&&bi&&(!qt&&Ct<Et+(Et-Bt)/(Pn()-Ha)*m?qt=1e-4:qt===1&&Pt>Et+(Et-Bt)/(Pn()-Ha)*m&&(qt=.9999)),qt!==Ce&&R.enabled){if(Ye=R.isActive=!!qt&&qt<1,Re=!!Ce&&Ce<1,Me=Ye!==Re,tn=Me||!!qt!=!!Ce,R.direction=qt>Ce?1:-1,R.progress=qt,tn&&!Rn&&(Se=qt&&!Ce?0:qt===1?1:Ce===1?2:3,N&&(me=!Me&&F[Se+1]!=="none"&&F[Se+1]||F[Se],jn=i&&(me==="complete"||me==="reset"||me in i))),P&&(Me||jn)&&(jn||d||!i)&&(In(P)?P(R):R.getTrailing(P).forEach(function(ti){return ti.endAnimation()})),N||(W&&!Rn&&!Ph?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",qt,i._tTime/i._tDur):(W.vars.totalProgress=qt,W.invalidate().restart())):i&&i.totalProgress(qt,!!(Rn&&(ht||nt)))),u){if(nt&&p&&(de.style[p+A.os2]=zt),!z)dt(Xa(fe+Nt*qt));else if(tn){if(_n=!nt&&qt>Ce&&Pt+1>Et&&Et+1>=$i(D,A),T)if(!nt&&(Ye||_n)){var Be=ys(u,!0),Ze=Et-Ct;Jg(u,_e,Be.top+(A===Qe?Ze:0)+an,Be.left+(A===Qe?0:Ze)+an)}else Jg(u,de);Io(Ye||_n?He:O),G&&qt<1&&Ye||dt(fe+(qt===1&&!_n?Nt:0))}}y&&!Q.tween&&!Rn&&!Ph&&L.restart(!0),a&&(Me||w&&qt&&(qt<1||!fd))&&tl(a.targets).forEach(function(ti){return ti.classList[Ye||w?"add":"remove"](a.className)}),o&&!N&&!nt&&o(R),tn&&!Rn?(N&&(jn&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(R)),(Me||!fd)&&(c&&Me&&wo(R,c),H[Se]&&wo(R,H[Se]),w&&(qt===1?R.kill(!1,1):H[Se]=0),Me||(Se=qt===1?1:3,H[Se]&&wo(R,H[Se]))),S&&!Ye&&Math.abs(R.getVelocity())>(qa(S)?S:2500)&&(Ga(R.callbackAnimation),W?W.progress(1):Ga(i,me==="reverse"?1:!qt,1))):N&&o&&!Rn&&o(R)}if(ot){var en=x?Et/x.duration()*(x._caScrollDist||0):Et;M(en+(J._isFlipped?1:0)),ot(en)}pt&&pt(-Et/x.duration()*(x._caScrollDist||0))}},R.enable=function(nt,xt){R.enabled||(R.enabled=!0,fn(D,"resize",Ya),I||fn(D,"scroll",Ao),$&&fn(s,"refreshInit",$),nt!==!1&&(R.progress=vt=0,bt=Bt=Z=Tt()),xt!==!1&&R.refresh())},R.getTween=function(nt){return nt&&Q?Q.tween:W},R.setPositions=function(nt,xt,it,Et){if(x){var ne=x.scrollTrigger,qt=x.duration(),Ce=ne.end-ne.start;nt=ne.start+Ce*nt/qt,xt=ne.start+Ce*xt/qt}R.refresh(!1,!1,{start:kg(nt,it&&!!R._startClamp),end:kg(xt,it&&!!R._endClamp)},Et),R.update()},R.adjustPinSpacing=function(nt){if(C&&nt){var xt=C.indexOf(A.d)+1;C[xt]=parseFloat(C[xt])+nt+an,C[1]=parseFloat(C[1])+nt+an,Io(C)}},R.disable=function(nt,xt){if(nt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xt||W&&W.pause(),j=0,at&&(at.uncache=1),$&&un(s,"refreshInit",$),L&&(L.pause(),Q.tween&&Q.tween.kill()&&(Q.tween=0)),!I)){for(var it=Qt.length;it--;)if(Qt[it].scroller===D&&Qt[it]!==R)return;un(D,"resize",Ya),I||un(D,"scroll",Ao)}},R.kill=function(nt,xt){R.disable(nt,xt),W&&!xt&&W.kill(),l&&delete Sd[l];var it=Qt.indexOf(R);it>=0&&Qt.splice(it,1),it===Hn&&Vh>0&&Hn--,it=0,Qt.forEach(function(Et){return Et.scroller===R.scroller&&(it=1)}),it||Wn||Qs||(R.scroll.rec=0),i&&(i.scrollTrigger=null,nt&&i.revert({kill:!1}),xt||i.kill()),te&&[te,ce,J,ee].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),ja===R&&(ja=0),u&&(at&&(at.uncache=1),it=0,Qt.forEach(function(Et){return Et.pin===u&&it++}),it||(at.spacer=0)),n.onKill&&n.onKill(R)},Qt.push(R),R.enable(!1,!1),ct&&ct(R),i&&i.add&&!ae){var rt=R.update;R.update=function(){R.update=rt,Kt.cache++,Ct||Pt||R.refresh()},Rt.delayedCall(.01,R.update),ae=.01,Ct=Pt=0}else R.refresh();u&&nT()},s.register=function(n){return Co||(Rt=n||r_(),s_()&&window.document&&s.enable(),Co=Wa),Co},s.defaults=function(n){if(n)for(var i in n)Nh[i]=n[i];return Nh},s.disable=function(n,i){Wa=0,Qt.forEach(function(o){return o[i?"kill":"disable"](n)}),un(jt,"wheel",Ao),un(xe,"scroll",Ao),clearInterval(Rh),un(xe,"touchcancel",Ji),un(_e,"touchstart",Ji),Lh(un,xe,"pointerdown,touchstart,mousedown",Vg),Lh(un,xe,"pointerup,touchend,mouseup",Gg),Wh.kill(),Ih(un);for(var r=0;r<Kt.length;r+=3)Dh(un,Kt[r],Kt[r+1]),Dh(un,Kt[r],Kt[r+2])},s.enable=function(){if(jt=window,xe=document,ui=xe.documentElement,_e=xe.body,Rt){if(tl=Rt.utils.toArray,Za=Rt.utils.clamp,vd=Rt.core.context||Ji,ud=Rt.core.suppressOverwrites||Ji,wd=jt.history.scrollRestoration||"auto",Md=jt.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),_e){Wa=1,Po=document.createElement("div"),Po.style.height="100vh",Po.style.position="absolute",m_(),Jb(),Ge.register(Rt),s.isTouch=Ge.isTouch,Ks=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xd=Ge.isTouch===1,fn(jt,"wheel",Ao),Td=[jt,xe,ui,_e],Rt.matchMedia?(s.matchMedia=function(h){var d=Rt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Rt.addEventListener("matchMediaInit",function(){d_(),Id()}),Rt.addEventListener("matchMediaRevert",function(){return f_()}),Rt.addEventListener("matchMedia",function(){Tr(0,1),Pr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return pd(),pd})):console.warn("Requires GSAP 3.11.0 or later"),pd(),fn(xe,"scroll",Ao);var n=_e.hasAttribute("style"),i=_e.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ys(_e),Qe.m=Math.round(a.top+Qe.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Rh=setInterval(Xg,250),Rt.delayedCall(.5,function(){return Ph=0}),fn(xe,"touchcancel",Ji),fn(_e,"touchstart",Ji),Lh(fn,xe,"pointerdown,touchstart,mousedown",Vg),Lh(fn,xe,"pointerup,touchend,mouseup",Gg),_d=Rt.utils.checkPrefix("transform"),Gh.push(_d),Co=Pn(),Wh=Rt.delayedCall(.2,Tr).pause(),Ro=[xe,"visibilitychange",function(){var h=jt.innerWidth,d=jt.innerHeight;xe.hidden?(Fg=h,Bg=d):(Fg!==h||Bg!==d)&&Ya()},xe,"DOMContentLoaded",Tr,jt,"load",Tr,jt,"resize",Ya],Ih(fn),Qt.forEach(function(h){return h.enable(0,1)}),l=0;l<Kt.length;l+=3)Dh(un,Kt[l],Kt[l+1]),Dh(un,Kt[l],Kt[l+2])}else if(xe){var c=function h(){s.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(fd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rh)||(Rh=i)&&setInterval(Xg,i),"ignoreMobileResize"in n&&(xd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ih(un)||Ih(fn,n.autoRefreshEvents||"none"),e_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Vn(n),o=Kt.indexOf(r),a=Cr(r);~o&&Kt.splice(o,a?6:2),i&&(a?Ni.unshift(jt,i,_e,i,ui,i):Ni.unshift(r,i))},s.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(hi(n)?Vn(n):n).getBoundingClientRect(),a=o[r?wr:Er]*i||0;return r?o.right-a>0&&o.left+a<jt.innerWidth:o.bottom-a>0&&o.top+a<jt.innerHeight},s.positionInViewport=function(n,i,r){hi(n)&&(n=Vn(n));var o=n.getBoundingClientRect(),a=o[r?wr:Er],l=i==null?a/2:i in qh?qh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/jt.innerWidth:(o.top+l)/jt.innerHeight},s.killAll=function(n){if(Qt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Rr.killAll||[];Rr={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?tl(s).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),vd())}}):ci};Zt.revert=function(s,t){return Id(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?Ya(!0):(Co||Zt.register())&&Tr(!0)};Zt.update=function(s){return++Kt.cache&&Ss(s===!0?2:0)};Zt.clearScrollMemory=p_;Zt.maxScroll=function(s,t){return $i(s,t?Cn:Qe)};Zt.getScrollFunc=function(s,t){return xs(Vn(s),t?Cn:Qe)};Zt.getById=function(s){return Sd[s]};Zt.getAll=function(){return Qt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!bi};Zt.snapDirectional=Pd;Zt.addEventListener=function(s,t){var e=Rr[s]||(Rr[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Rr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Rt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&In(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return In(r)&&(r=r(),fn(Zt,"refresh",function(){return r=t.batchMax()})),tl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var Kg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},gd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===ui&&s(_e,e)},Bh={auto:1,scroll:1},aT=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=Pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==_e&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bh[(l=Mi(r)).overflowY]||Bh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Cr(r)&&(Bh[(l=Mi(r)).overflowY]||Bh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},__=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&aT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(xe,Ge.eventTypes[0],jg,!1,!0)},onDisable:function(){return un(xe,Ge.eventTypes[0],jg,!0)}})},lT=/(input|label|select|textarea)/i,Qg,jg=function(t){var e=lT.test(t.target.tagName);(e||Qg)&&(t._gsapAllow=!0,Qg=e)},cT=function(t){br(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Vn(t.target)||ui,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),f=Ks&&(t.content&&Vn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=xs(c,Qe),p=xs(c,Cn),_=1,m=(Ge.isTouch&&jt.visualViewport?jt.visualViewport.scale*jt.visualViewport.width:jt.outerWidth)/jt.innerWidth,g=0,v=In(i)?function(){return i(a)}:function(){return i||2.8},w,y,T=__(c,t.type,!0,r),E=function(){return y=!1},x=Ji,S=Ji,P=function(){l=$i(c,Qe),S=Za(Ks?1:0,l),n&&(x=Za(0,$i(c,Cn))),w=Ar},A=function(){f._gsap.y=Xa(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var et=Xa(a.deltaY/2),X=S(u.v-et);if(f&&X!==u.v+u.offset){u.offset=X-u.v;var R=Xa((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=Kt.cache,Ss()}return!0}u.offset&&A(),y=!0},D,k,I,z,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return Ks&&F.type==="touchmove"&&N(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=Xa((jt.visualViewport&&jt.visualViewport.scale||1)/m),D.pause(),F!==_&&gd(c,_>1.01?!0:n?!1:"x"),k=p(),I=u(),P(),w=Ar},t.onRelease=t.onGestureStart=function(F,et){if(u.offset&&A(),!et)z.restart(!0);else{Kt.cache++;var X=v(),R,$;n&&(R=p(),$=R+X*.05*-F.velocityX/.227,X*=Kg(p,R,$,$i(c,Cn)),D.vars.scrollX=x($)),R=u(),$=R+X*.05*-F.velocityY/.227,X*=Kg(u,R,$,$i(c,Qe)),D.vars.scrollY=S($),D.invalidate().duration(X).play(.01),(Ks&&D.vars.scrollY>=l||R>=l-1)&&Rt.to({},{onUpdate:H,duration:X})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),Pn()-g>1e3&&(w=0,g=Pn())},t.onChange=function(F,et,X,R,$){if(Ar!==w&&P(),et&&n&&p(x(R[2]===et?k+(F.startX-F.x):p()+et-R[1])),X){u.offset&&A();var Mt=$[2]===X,Ot=Mt?I+F.startY-F.y:u()+X-$[1],Z=S(Ot);Mt&&Ot!==Z&&(I+=Z-Ot),u(Z)}(X||et)&&Ss()},t.onEnable=function(){gd(c,n?!1:"x"),Zt.addEventListener("refresh",H),fn(jt,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){gd(c,!0),un(jt,"resize",H),Zt.removeEventListener("refresh",H),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=Ks,Ks&&!u()&&u(1),Ks&&Rt.ticker.add(Ji),z=a._dc,D=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:g_(u,u(),function(){return D.pause()})},onUpdate:Ss,onComplete:z.vars.onComplete}),a};Zt.sort=function(s){if(In(s))return Qt.sort(s);var t=jt.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+jt.innerHeight}),Qt.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new Ge(s)};Zt.normalizeScroll=function(s){if(typeof s>"u")return Gn;if(s===!0&&Gn)return Gn.enable();if(s===!1){Gn&&Gn.kill(),Gn=s;return}var t=s instanceof Ge?s:cT(s);return Gn&&Gn.target===t.target&&Gn.kill(),Cr(t.target)&&(Gn=t),t};Zt.core={_getVelocityProp:Ch,_inputObserver:__,_scrollers:Kt,_proxies:Ni,bridge:{ss:function(){bi||Pr("scrollStart"),bi=Pn()},ref:function(){return Rn}}};r_()&&Rt.registerPlugin(Zt);var x_="1.3.27";function S_(s,t,e){return Math.max(s,Math.min(t,e))}function hT(s,t,e){return(1-e)*s+e*t}function uT(s,t,e,n){return hT(s,t,1-Math.exp(-e*n))}function fT(s,t){return(s%t+t)%t}var dT=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=S_(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=uT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function pT(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var mT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=s,this.content=t,e&&(this.debouncedResize=pT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},M_=class{events={};emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},gT=100/6,js={passive:!1};function v_(s,t){return s===1?gT:s===2?t:1}var _T=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new M_;constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,js),this.element.addEventListener("touchstart",this.onTouchStart,js),this.element.addEventListener("touchmove",this.onTouchMove,js),this.element.addEventListener("touchend",this.onTouchEnd,js)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,js),this.element.removeEventListener("touchstart",this.onTouchStart,js),this.element.removeEventListener("touchmove",this.onTouchMove,js),this.element.removeEventListener("touchend",this.onTouchEnd,js)}onTouchStart=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=v_(n,this.window.width),r=v_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},y_=s=>Math.min(1,1.001-2**(-10*s)),b_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new dT;emitter=new M_;dimensions;virtualScroll;constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:w=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:S=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){window.lenisVersion=x_,window.lenis||(window.lenis={}),window.lenis.version=x_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=y_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:v,autoRaf:w,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:S,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new mT(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new _T(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=S_(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=y_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,p;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(s);if(i.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=d>u,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,w,y,T;if(_==="horizontal")m=Math.round(s.scrollLeft),g=d-u,v=t,w=r,y=a,T=c;else if(_==="vertical")m=Math.round(s.scrollTop),g=f-p,v=e,w=o,y=l,T=h;else return!1;return!T&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&w&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?fT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Ht.registerPlugin(Zt);var C_=matchMedia("(prefers-reduced-motion: reduce)").matches,$h=matchMedia("(hover: hover) and (pointer: fine)").matches,R_=()=>matchMedia("(min-width: 900px)").matches,Xe=(s,t=document)=>t.querySelector(s),Xn=(s,t=document)=>Array.from(t.querySelectorAll(s)),Ir=null;!C_&&$h&&(Ir=new b_({anchors:!0,lerp:.09}),Ir.on("scroll",Zt.update),Ht.ticker.add(s=>Ir.raf(s*1e3)),Ht.ticker.lagSmoothing(0));var Kh=Xe("#nav"),T_=Xe(".hero");Kh&&T_&&new IntersectionObserver(s=>Kh.classList.toggle("is-solid",!s[0].isIntersecting),{rootMargin:"-68px 0px 0px 0px"}).observe(T_);var Zh=Xe("#menuBtn"),w_=Xe("#menu");if(Zh&&w_){let s=t=>{Kh.classList.toggle("is-open",t),Zh.setAttribute("aria-expanded",String(t)),Zh.textContent=t?"Fechar":"Menu",document.body.style.overflow=t?"hidden":""};Zh.addEventListener("click",()=>s(!Kh.classList.contains("is-open"))),Xn("a",w_).forEach(t=>t.addEventListener("click",()=>s(!1)))}var Ms=Xe("#lightbox"),E_=Xe("#lightboxImg"),xT=s=>{!Ms||!Ms.showModal||(E_.src=s.currentSrc||s.src,E_.alt=s.alt,Ms.showModal(),Ir&&Ir.stop())};Ms&&(Xe("#lightboxClose").addEventListener("click",()=>Ms.close()),Ms.addEventListener("click",s=>{s.target===Ms&&Ms.close()}),Ms.addEventListener("close",()=>{Ir&&Ir.start()}));Xn(".g").forEach(s=>s.addEventListener("click",()=>xT(Xe("img",s))));function Jh(s){s.setAttribute("aria-label",s.textContent.trim().replace(/\s+/g," "));let t=e=>{Array.from(e.childNodes).forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(!r)return;if(/^\s+$/.test(r)){i.appendChild(document.createTextNode(" "));return}let o=document.createElement("span");o.className="word",o.setAttribute("aria-hidden","true"),Array.from(r).forEach(a=>{let l=document.createElement("span");l.className="char",l.textContent=a,o.appendChild(l)}),i.appendChild(o)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};return t(s),Xn(".char",s)}function A_(s){return s.setAttribute("aria-label",s.textContent.trim().replace(/\s+/g," ")),Array.from(s.childNodes).forEach(t=>{if(t.nodeType!==3)return;let e=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){e.appendChild(document.createTextNode(" "));return}let i=document.createElement("span");i.className="w",i.setAttribute("aria-hidden","true"),i.textContent=n,e.appendChild(i)}),t.replaceWith(e)}),Xn(".w",s)}var Ki=(()=>{let s=Xe("#stage"),t=Xe(".weave__sticky");if(!s||!t)return null;let e;try{e=new nh({canvas:s,antialias:!0,powerPreference:"high-performance"})}catch{return null}let n=new Jt("#e8ede6");e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.outputColorSpace=Mn,e.toneMapping=ua,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=fc;let i=new Yo;i.background=n;let r=new Dn(32,1,.1,80);i.add(new aa("#ffffff","#b9c7bb",1.35));let o=new io("#fff4e2",2.6);o.position.set(3.5,7,4),o.castShadow=!0,o.shadow.mapSize.set(1536,1536),o.shadow.camera.left=-4,o.shadow.camera.right=4,o.shadow.camera.top=4,o.shadow.camera.bottom=-4,o.shadow.radius=5,o.shadow.bias=-4e-4,i.add(o);let a=new io("#d7e8dc",.8);a.position.set(-5,3,2),i.add(a);let l=new Ke(new jo(30,48),new sa({opacity:.2,color:"#1e3a2e"}));l.rotation.x=-Math.PI/2,l.position.y=-.02,l.receiveShadow=!0,i.add(l);let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.fillStyle="#777",h.fillRect(0,0,64,64),h.strokeStyle="#fff",h.lineWidth=9;for(let Q=-64;Q<128;Q+=21)h.beginPath(),h.moveTo(Q,64),h.lineTo(Q+64,0),h.stroke();h.strokeStyle="#111",h.lineWidth=3;for(let Q=-54;Q<128;Q+=21)h.beginPath(),h.moveTo(Q,64),h.lineTo(Q+64,0),h.stroke();let d=new to(c);d.wrapS=d.wrapT=Zr,d.repeat.set(1,26);let f=document.createElement("canvas");f.width=256,f.height=64;let u=f.getContext("2d");u.fillStyle="#b07a45",u.fillRect(0,0,256,64);for(let Q=0;Q<90;Q++){u.strokeStyle=`rgba(${90+Math.random()*40},${50+Math.random()*30},20,${.08+Math.random()*.18})`,u.lineWidth=.6+Math.random()*1.6;let at=Math.random()*64;u.beginPath(),u.moveTo(0,at),u.bezierCurveTo(80,at+(Math.random()-.5)*6,170,at+(Math.random()-.5)*6,256,at),u.stroke()}let p=new to(f);p.colorSpace=Mn;let _=Q=>new Ns({color:Q,roughness:.88,metalness:0,bumpMap:d,bumpScale:1.4}),m=_("#2f3a35"),g=_("#3d4a44"),v=new Ns({color:"#39433f",roughness:.5,metalness:.35}),w=new Ns({color:"#e0b27a",map:p,roughness:.55}),y=new Ns({color:"#cf9a60",map:p,roughness:.55}),T=new mi;i.add(T);let E=new mi,x=new mi,S=new mi;T.add(E,x,S);let P=Q=>.92+.14*Math.sin(Math.PI*Q),A=1.05,N=new Ke(new or(.9,.045,14,72),v);N.rotation.x=Math.PI/2,N.position.y=.05,N.castShadow=!0;let D=new Ke(new Ds(.86,.86,.04,56),v);D.position.y=.03,D.castShadow=!0,E.add(N,D);for(let Q=0;Q<4;Q++){let at=Q/4*Math.PI*2+Math.PI/4,kt=new Ke(new Ds(.05,.06,.07,16),v);kt.position.set(Math.cos(at)*.72,-.015,Math.sin(at)*.72),E.add(kt)}let k=[],I=R_()?72:56;for(let Q=0;Q<I;Q++){let at=Q/I*Math.PI*2,kt=[];for(let Ct=0;Ct<=26;Ct++){let Pt=Ct/26,te=P(Pt)+(Q%2?1:-1)*.028*Math.cos(Pt*Math.PI*2*3.5);kt.push(new B(Math.cos(at)*te,.08+Pt*A,Math.sin(at)*te))}let bt=new ia(new no(kt),52,.044,8,!1),Bt=new Ke(bt,Q%2?m:g);Bt.castShadow=!0,Bt.userData.count=bt.index.count,bt.setDrawRange(0,0),x.add(Bt),k.push(Bt)}[.3,.62].forEach(Q=>{let at=new Ke(new or(P(Q)+.05,.032,10,90),m);at.rotation.x=Math.PI/2,at.position.y=.08+Q*A,at.castShadow=!0,x.add(at)});let z=new Ke(new or(.93,.05,14,72),v);z.rotation.x=Math.PI/2,z.position.y=.08+A+.02,z.castShadow=!0,S.add(z);let H=22,F=.012;for(let Q=0;Q<H;Q++){let at=Math.PI*2/H,kt=new Ke(new Ds(.94,.94,.075,1,1,!1,Q*at,at-F),Q%2?w:y);kt.position.y=.08+A+.085,kt.castShadow=!0,kt.receiveShadow=!0,S.add(kt)}let et=new Ke(new Ds(.16,.16,.085,36),v);et.position.y=.08+A+.09,S.add(et),T.position.y=0;let X=Xn(".pin").map((Q,at)=>({el:Q,y:[.08+A+.12,.08+A*.5,.06][at]})),R=new B,$={p:0,on:!1,mx:0,my:0,tx:0,ty:0,t0:performance.now(),woven:!1},Mt=1,Ot=()=>{let Q=t.clientWidth,at=t.clientHeight;e.setSize(Q,at,!1),Mt=Q/at,r.aspect=Mt,r.updateProjectionMatrix()};Ot(),window.addEventListener("resize",Ot),$h&&t.addEventListener("pointermove",Q=>{let at=t.getBoundingClientRect();$.tx=(Q.clientX-at.left)/at.width*2-1,$.ty=(Q.clientY-at.top)/at.height*2-1},{passive:!0});let Z=(Q,at,kt)=>{let bt=Math.min(1,Math.max(0,(kt-Q)/(at-Q)));return bt*bt*(3-2*bt)},ht=new B,vt=()=>{let Q=(performance.now()-$.t0)/1e3;$.mx+=($.tx-$.mx)*.05,$.my+=($.ty-$.my)*.05;let at=$.p,kt=Z(.14,.52,at);S.position.y=kt*1.15,E.position.y=-kt*.28,x.position.y=kt*.32,T.rotation.y=.4+at*2.4+$.mx*.35+Math.sin(Q*.15)*.05;let bt=Math.max(7.4,5.9/Mt);r.position.set(0,3.2+kt*.6-$.my*.3,bt),ht.set(0,.7+kt*.5,0),r.lookAt(ht),X.forEach((Bt,Ct)=>{R.set(1.5,Bt.y+[S.position.y,x.position.y,E.position.y][Ct],0).project(r);let Pt=(R.x*.5+.5)*t.clientWidth,te=(-R.y*.5+.5)*t.clientHeight;Bt.el.style.transform=`translate(${Pt.toFixed(1)}px, ${te.toFixed(1)}px)`,Bt.el.style.opacity=String(Z(.4+Ct*.04,.55+Ct*.04,at)*(1-Z(.97,1,at)))}),e.render(i,r)};return{st:$,frame:vt,intro:Q=>{$.woven||($.woven=!0,k.forEach((at,kt)=>{if(Q){at.geometry.setDrawRange(0,at.userData.count);return}let bt={v:0};Ht.to(bt,{v:1,duration:1.6,ease:"power2.inOut",delay:kt*.018,onUpdate:()=>at.geometry.setDrawRange(0,Math.floor(bt.v*at.userData.count/3)*3)})}))},tick:()=>{$.on&&vt()}}})(),nl=Xe("#loader");C_?(nl&&nl.remove(),Ki&&(Ki.intro(!0),Ki.st.p=.6,Ki.frame(),window.addEventListener("resize",()=>Ki.frame()))):vT();function vT(){Ki&&(Ht.ticker.add(Ki.tick),Zt.create({trigger:".weave",start:"top bottom",end:"bottom top",scrub:!0,onUpdate:u=>{Ki.st.p=Math.min(1,Math.max(0,(u.progress-.27)/.45))},onToggle:u=>{Ki.st.on=u.isActive}}),Zt.create({trigger:".weave",start:"top 75%",once:!0,onEnter:()=>Ki.intro(!1)}));let s=Xe("#heroTitle"),t=s?Xn(".line",s).flatMap(u=>Jh(u)):[];s&&s.setAttribute("aria-label","M\xF3veis artesanais para viver ao ar livre.");let e="inset(34% 37% 34% 37% round 18px)",n="inset(0% 0% 0% 0% round 0px)";Ht.set(t,{yPercent:115,rotationX:-80,opacity:0,transformOrigin:"50% 100%"}),Ht.set(".hero__row",{opacity:0,y:24}),Ht.set("#heroMedia",{clipPath:e}),Ht.set("#heroMedia img",{scale:1.35}),Ht.set("#nav",{opacity:0,y:-20});let i=Ht.timeline({defaults:{ease:"power4.out"}});if(nl){let u=Jh(Xe("#loaderName"));i.from(u,{yPercent:120,duration:.8,stagger:.04}).to(u,{yPercent:-120,duration:.6,stagger:.025,ease:"power3.in"},"+=0.3").to(nl,{opacity:0,duration:.5,ease:"power2.out"}).add(()=>nl.remove())}i.to("#heroMedia",{clipPath:n,duration:1.7,ease:"expo.inOut"},"-=0.2").to("#heroMedia img",{scale:1,duration:2.2,ease:"power3.out"},"<").to(t,{yPercent:0,rotationX:0,opacity:1,duration:1.2,stagger:.018},"-=1.1").to(".hero__row",{opacity:1,y:0,duration:.9},"-=0.9").to("#nav",{opacity:1,y:0,duration:.9,clearProps:"transform"},"<").add(()=>{Ht.fromTo("#heroMedia",{clipPath:n},{clipPath:"inset(0% 3% 8% 3% round 34px)",ease:"none",immediateRender:!1,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}})}),Ht.to("#heroMedia img",{yPercent:10,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Ht.to(".hero__content",{yPercent:-30,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"65% top",scrub:!0}});let r=Xe("#intro");r&&(Ht.fromTo(A_(r),{opacity:.16},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:r,start:"top 80%",end:"bottom 55%",scrub:!0}}),Xn(".inl",r).forEach(u=>{Ht.from(u,{width:0,duration:1.3,ease:"expo.out",scrollTrigger:{trigger:u,start:"top 78%",once:!0}})})),Ht.from(".fact",{opacity:0,y:36,duration:1,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:".facts",start:"top 85%",once:!0}});let o=Xe("#statement");o&&Ht.fromTo(A_(o),{opacity:.18},{opacity:1,stagger:.12,ease:"none",scrollTrigger:{trigger:".weave",start:"top 15%",end:"bottom 90%",scrub:!0}}),Xn(".reveal-img").forEach(u=>{Ht.from(u,{clipPath:"inset(100% 0% 0% 0% round 22px)",duration:1.4,ease:"power4.inOut",scrollTrigger:{trigger:u,start:"top 82%",once:!0}}),Ht.fromTo(Xe("img",u),{scale:1.25},{scale:1,ease:"none",scrollTrigger:{trigger:u,start:"top bottom",end:"bottom top",scrub:!0}})}),Xn(".mat li, .kit__text > *").forEach(u=>{Ht.from(u,{opacity:0,y:34,duration:1,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 90%",once:!0}})}),Xn(".sec-title").forEach(u=>{let p=Jh(u);Ht.from(p,{yPercent:115,duration:1,stagger:.018,ease:"power4.out",scrollTrigger:{trigger:u,start:"top 88%",once:!0}})}),Ht.from(".prow",{opacity:0,y:50,duration:1,stagger:.07,ease:"power3.out",scrollTrigger:{trigger:"#plist",start:"top 85%",once:!0}});let a=Xe("#pfloat"),l=Xe("#plist");if(a&&l&&$h){let u=Xe("img",a);Ht.set(a,{xPercent:-50,yPercent:-50,scale:.6});let p=Ht.quickTo(a,"x",{duration:.55,ease:"power3"}),_=Ht.quickTo(a,"y",{duration:.55,ease:"power3"}),m=Ht.quickTo(a,"rotation",{duration:.7,ease:"power3"}),g=0;l.addEventListener("pointermove",v=>{p(v.clientX+160),_(v.clientY),m(Ht.utils.clamp(-14,14,(v.clientX-g)*.9)),g=v.clientX}),Xn(".prow",l).forEach(v=>{v.addEventListener("pointerenter",()=>{R_()&&(u.src=v.dataset.img,Ht.fromTo(u,{scale:1.3},{scale:1,duration:.9,ease:"power3.out",overwrite:!0}),Ht.to(a,{opacity:1,scale:1,duration:.5,ease:"power3.out",overwrite:"auto"}))})}),l.addEventListener("pointerleave",()=>{Ht.to(a,{opacity:0,scale:.6,duration:.4,ease:"power3.in",overwrite:"auto"}),m(0)})}let c=Xe("#marquee");if(c){let u=Ht.to(c,{xPercent:-50,ease:"none",duration:38,repeat:-1}),p=Ht.delayedCall(.2,()=>Ht.to(u,{timeScale:1,duration:.8})).pause();Zt.create({trigger:".marquee",start:"top bottom",end:"bottom top",onUpdate:_=>{Ht.to(u,{timeScale:1+Math.min(6,Math.abs(_.getVelocity())/260),duration:.3,overwrite:!0}),p.restart(!0)}})}let h=Xn(".zoom__el");if(h.length){let u=[4,4.6,5,4.6,5,5.6,6],p=Ht.timeline({scrollTrigger:{trigger:".zoom",start:"top top",end:"bottom bottom",scrub:!0}});h.forEach((_,m)=>p.fromTo(_,{scale:.25},{scale:(u[m]||5)/4,ease:"none",duration:1},0)),p.fromTo("#zoomCap",{opacity:0},{opacity:1,ease:"none",duration:.25},.72),p.fromTo("#zoomCap h2",{yPercent:40},{yPercent:0,ease:"none",duration:.28},.72)}let d=["0% 100%","100% 100%","0% 0%","100% 0%"];Xn(".g").forEach((u,p)=>{Ht.fromTo(u,{scale:.15,opacity:.4,transformOrigin:d[p%4]},{scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:u,start:"top bottom",end:"top 45%",scrub:!0}})}),Xn(".step").forEach((u,p)=>{Ht.from(u,{"--line":0,duration:1.2,delay:p*.08,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 88%",once:!0}}),Ht.from(u.children,{y:24,opacity:0,duration:.9,stagger:.08,delay:.15+p*.08,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 88%",once:!0}})}),Ht.from("#states span",{yPercent:110,duration:1.2,stagger:.09,ease:"power4.out",scrollTrigger:{trigger:"#states",start:"top 85%",once:!0}}),Ht.from(".faq details",{opacity:0,y:26,duration:.8,stagger:.07,ease:"power3.out",scrollTrigger:{trigger:".faq__list",start:"top 86%",once:!0}});let f=Xe(".contact h2");f&&Ht.from(Jh(f),{yPercent:110,opacity:0,duration:1.1,stagger:.02,ease:"power4.out",scrollTrigger:{trigger:".contact",start:"top 65%",once:!0}}),Ht.from(".contact__card",{scale:.94,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 30%",scrub:!0}}),$h&&Xn(".btn").forEach(u=>{let p=Ht.quickTo(u,"x",{duration:.5,ease:"power3"}),_=Ht.quickTo(u,"y",{duration:.5,ease:"power3"});u.addEventListener("pointermove",m=>{let g=u.getBoundingClientRect();p((m.clientX-g.left-g.width/2)*.25),_((m.clientY-g.top-g.height/2)*.35)}),u.addEventListener("pointerleave",()=>{p(0),_(0)})}),window.addEventListener("load",()=>Zt.refresh())}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
