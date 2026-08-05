const CODE = "111111"; // ganti kode rahasia di sini

const lock = document.getElementById("lockScreen");
const loading = document.getElementById("loadingScreen");
const main = document.getElementById("mainScreen");
const dots = [...document.querySelectorAll("#dots i")];
const error = document.getElementById("error");
let entered = "";

function updateDots(){
  dots.forEach((d,i)=>d.classList.toggle("filled",i<entered.length));
}
function unlock(){
  if(entered === CODE){
    lock.classList.remove("active");
    loading.classList.add("active");
    setTimeout(()=>{
      loading.classList.remove("active");
      main.classList.add("active");
    },2300);
  }else{
    error.textContent="kode belum benar, coba lagi 🌷";
    entered="";
    updateDots();
    setTimeout(()=>error.textContent="",1200);
  }
}
document.querySelectorAll(".keypad button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const key=btn.dataset.key;
    if(key==="clear") entered=entered.slice(0,-1);
    else if(key==="go") unlock();
    else if(entered.length<6) entered+=key;
    updateDots();
    if(entered.length===6) setTimeout(unlock,180);
  });
});

document.getElementById("openGift").onclick=()=>document.getElementById("giftModal").classList.add("show");
document.getElementById("openLetter").onclick=()=>document.getElementById("letterModal").classList.add("show");
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.close).classList.remove("show"));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));

// falling flowers
const petalBox=document.getElementById("petals");
const flowers=["🌸","🌷","♡","✦"];
setInterval(()=>{
  const p=document.createElement("span");
  p.className="petal";
  p.textContent=flowers[Math.floor(Math.random()*flowers.length)];
  p.style.left=Math.random()*100+"%";
  p.style.fontSize=(10+Math.random()*13)+"px";
  p.style.animationDuration=(5+Math.random()*6)+"s";
  petalBox.appendChild(p);
  setTimeout(()=>p.remove(),12000);
},650);