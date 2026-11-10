// بيانات عامة بس: الإعلانات المتاحة والبروفايلات (مفتاح anon العام، والحماية بقواعد قاعدة البيانات).
const SB='https://noalmrqqlotcyczvfisn.supabase.co/rest/v1/';
const KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vYWxtcnFxbG90Y3ljenZmaXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5OTM3MzgsImV4cCI6MjEwOTU2OTczOH0.da1e7Sqsh095USgJhavXZdfyfWsczYwi9DUklrGpU2I';
async function sb(path){const r=await fetch(SB+path,{headers:{apikey:KEY,Authorization:'Bearer '+KEY}});if(!r.ok)throw new Error(r.status);return r.json();}
const TYPES={apartment:'شقة',villa:'فيلا',shop:'محل',office:'مكتب / عيادة',garage:'جراج',land:'أرض'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const price=l=>Number(l.price).toLocaleString('ar-EG')+' ج.م'+(l.purpose==='rent'?' / شهر':'');
const place=l=>[l.area,l.governorate].filter(Boolean).join('، ');
const qid=()=>{const id=new URLSearchParams(location.search).get('id')||'';return /^[0-9a-f-]{36}$/i.test(id)?id:null;};
const card=l=>`<a class="lc" href="l.html?id=${l.id}"><div class="ph"${l.images&&l.images[0]?` style="background-image:url('${esc(l.images[0])}')"`:''}><span>${l.purpose==='rent'?'إيجار':'بيع'}</span></div><b>${esc(price(l))}</b><div>${esc(l.title)}</div><small>${esc(place(l))}</small></a>`;
