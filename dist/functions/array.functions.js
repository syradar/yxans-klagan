export const range=e=>[...Array(e).keys()],chunkArray=(e,t=5)=>e.reduce((r,o,u)=>{const n=Math.floor(u/t);return r[n]||(r[n]=[]),r[n].push(o),r},[]);
