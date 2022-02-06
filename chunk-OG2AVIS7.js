var o=(n=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let t=r[n]&63;t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t<63?e+="_":e+="-"}return e};var p=()=>o();export{p as a};
//# sourceMappingURL=chunk-OG2AVIS7.js.map
