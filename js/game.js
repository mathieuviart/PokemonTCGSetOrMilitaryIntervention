const $=id=>document.getElementById(id);

let deck=[], idx=0, correct=0, wrong=0, streak=0, milH=0, pokeH=0;
let lives=MAX_LIVES, mode='infinite';
let busy=false, gameActive=false;
let drag=false, sx=0, cx=0;
let flyTimer=null, revealTimer=null, flashTimer=null, goTimer=null;

function shuffle(a){
  const b=[...a];
  for(let j=b.length-1;j>0;j--){
    const k=Math.floor(Math.random()*(j+1));
    [b[j],b[k]]=[b[k],b[j]];
  }
  return b;
}

function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  $(id).classList.add('active');
}

function goMenu(){
  gameActive=false;
  busy=false;
  drag=false; cx=0;
  clearTimeout(flyTimer);
  clearTimeout(revealTimer);
  clearTimeout(flashTimer);
  clearTimeout(goTimer);
  $('reveal').classList.remove('show');
  $('gameover-overlay').classList.remove('show');
  $('flash').style.opacity='0';
  $('header').style.display='none';
  $('progress').style.width='0%';
  show('menu');
}

function startGame(m){
  mode=m;
  deck=shuffle(DATA);
  idx=correct=wrong=streak=milH=pokeH=0;
  lives=MAX_LIVES;
  gameActive=true;
  $('header').style.display='flex';
  renderLives();
  show('game');
  tick();
}

function replayMode(){ startGame(mode); }

function renderLives(){
  const el=$('lives');
  if(mode!=='survival'){ el.innerHTML=''; return; }
  el.innerHTML='';
  for(let i=0;i<MAX_LIVES;i++){
    const s=document.createElement('span');
    s.className='life'+(i>=lives?' lost':'');
    s.textContent='❤️';
    el.appendChild(s);
  }
}

function resetCardVisuals(){
  const camo=$('camo'), tint=$('poke-tint');
  const smil=$('stamp-mil'), spoke=$('stamp-poke');
  [camo,tint,smil,spoke].forEach(el=>{
    el.style.transition='none';
    el.style.opacity='0';
  });
  const hl=$('hint-left'), hr=$('hint-right');
  if(hl) hl.classList.remove('visible');
  if(hr) hr.classList.remove('visible');
}

function tick(){
  if(!gameActive) return;
  if(idx>=deck.length){ endGame('finished'); return; }
  const card=$('card');
  card.style.transition='none';
  card.style.transform='';
  card.style.opacity='0';
  resetCardVisuals();
  $('card-name').textContent=deck[idx].N;
  $('card-index').textContent=String(idx+1).padStart(2,'0')+' / '+deck.length;
  $('progress').style.width=((idx/deck.length)*100)+'%';
  $('hint').textContent=(deck.length-idx)+' cards remaining · ← → arrow keys';
  updateStats();
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    if(!gameActive) return;
    card.style.transition='opacity 0.18s ease';
    card.style.opacity='1';
    busy=false;
  }));
}

function guess(type){
  drag=false; cx=0;
  if(busy || !gameActive || idx>=deck.length) return;
  busy=true;
  const item=deck[idx];
  const ok=item.T===type;
  if(ok){
    correct++; streak++;
    if(type==='Pokemon') pokeH++; else milH++;
  } else {
    wrong++; streak=0;
    if(mode==='survival'){
      lives--;
      shakeLife();
      renderLives();
      if(lives<=0){
        updateStats();
        flashScreen(false);
        showReveal(item);
        fly(type==='Military'?-1:1, ()=>{
          if(!gameActive) return;
          triggerGameOver();
        });
        return;
      }
    }
  }
  updateStats();
  flashScreen(ok);
  showReveal(item);
  fly(type==='Military'?-1:1, ()=>{
    if(!gameActive) return;
    idx++;
    tick();
  });
}

function fly(dir, cb){
  const card=$('card');
  card.style.transition='transform 0.36s cubic-bezier(.4,0,.2,1), opacity 0.3s ease';
  card.style.transform=`translateX(${dir*480}px) rotate(${dir*16}deg)`;
  card.style.opacity='0';
  clearTimeout(flyTimer);
  flyTimer=setTimeout(cb, 350);
}

function triggerGameOver(){
  idx++;
  const overlay=$('gameover-overlay');
  overlay.classList.add('show');
  clearTimeout(goTimer);
  goTimer=setTimeout(()=>{
    if(!gameActive) return;
    overlay.classList.remove('show');
    endGame('gameover');
  }, 1800);
}

function flashScreen(ok){
  const f=$('flash');
  clearTimeout(flashTimer);
  f.style.transition='none';
  f.style.background=ok?'rgba(22,163,74,0.15)':'rgba(220,38,38,0.15)';
  f.style.opacity='1';
  flashTimer=setTimeout(()=>{
    f.style.transition='opacity 0.5s ease';
    f.style.opacity='0';
  }, 130);
}

function showReveal(item){
  const r=$('reveal');
  const isMil=item.T==='Military';
  r.className='reveal show';
  const tag=$('rev-tag');
  if(isMil){
    tag.className='reveal-tag tag-mil';
    tag.textContent='Military Operation';
  } else {
    tag.className='reveal-tag tag-poke';
    tag.textContent='Pokémon TCG Set';
  }
  $('rev-name').textContent=item.N;
  $('rev-desc').textContent=item.D;
  clearTimeout(revealTimer);
  revealTimer=setTimeout(()=>r.classList.remove('show'), 2700);
}

function shakeLife(){
  const livesEl=$('lives');
  livesEl.classList.remove('shake');
  void livesEl.offsetWidth;
  livesEl.classList.add('shake');
  setTimeout(()=>livesEl.classList.remove('shake'), 350);
}

function updateStats(){
  $('s-correct').textContent=correct;
  $('s-wrong').textContent=wrong;
  $('s-streak').textContent=streak;
  const widget=$('streak-widget');
  const flame=$('streak-flame');
  const val=$('s-streak');
  widget.classList.remove('speed-1','speed-2','speed-3','speed-4');
  if(streak===0){
    flame.textContent='';
    val.style.color='var(--muted)';
  } else {
    flame.textContent='🔥';
    if(streak<=2){
      widget.classList.add('speed-1');
      val.style.color='var(--text)';
    } else if(streak<=4){
      widget.classList.add('speed-2');
      val.style.color='#f59e0b';
    } else if(streak<=7){
      widget.classList.add('speed-3');
      val.style.color='#ea580c';
    } else {
      widget.classList.add('speed-4');
      val.style.color='#dc2626';
    }
  }
}

function endGame(reason){
  gameActive=false;
  $('header').style.display='none';
  show('result');
  const grades = mode==='survival' ? GRADES_SURV : GRADES_INF;
  const total = mode==='survival' ? idx : deck.length;
  const pct   = total>0 ? Math.round((correct/total)*100) : 0;
  const g = grades.find(x=>pct>=x.min);
  const badge=$('r-mode-badge');
  if(mode==='infinite'){
    badge.textContent='∞ Infinite Mode';
    badge.style.cssText='background:var(--badge-inf-bg);color:var(--badge-inf-color);border:1px solid var(--badge-inf-border);';
  } else {
    badge.textContent='❤️ Survival Mode';
    badge.style.cssText='background:var(--badge-surv-bg);color:var(--badge-surv-color);border:1px solid var(--badge-surv-border);';
  }
  $('r-score').textContent = mode==='survival' ? correct+' pts' : correct+'/'+total;
  $('r-score').style.color  = g.c;
  $('r-sub').textContent    = reason==='gameover'
    ? 'Out after '+idx+' cards. '+g.t
    : g.t;
  $('r-correct').textContent=correct;
  $('r-wrong').textContent=wrong;
  $('r-mil').textContent=milH;
  $('r-poke').textContent=pokeH;
  $('progress').style.width='100%';
}

document.addEventListener('keydown', e=>{
  if(!gameActive) return;
  if(e.key==='ArrowLeft')  guess('Military');
  if(e.key==='ArrowRight') guess('Pokemon');
});

const cardEl=$('card');

let hasMoved = false;

function onDragStart(e){
  if(busy||!gameActive) return;
  drag=true;
  hasMoved=false;
  sx=e.touches?e.touches[0].clientX:e.clientX;
  cx=0;
  cardEl.style.transition='none';
}

function onDragMove(e){
  if(!drag||busy) return;
  const newCx=(e.touches?e.touches[0].clientX:e.clientX)-sx;
  if(!hasMoved && Math.abs(newCx)<4) return;
  hasMoved=true;
  cx=newCx;
  cardEl.style.transform=`translateX(${cx}px) rotate(${cx*0.055}deg)`;
  const threshold=40, absX=Math.abs(cx);
  const ratio=Math.max(0, Math.min(1, (absX-threshold)/90));
  $('camo').style.transition='none';
  $('poke-tint').style.transition='none';
  if(cx < -threshold){
    $('stamp-mil').style.opacity=ratio;
    $('stamp-poke').style.opacity='0';
    $('camo').style.opacity=ratio*0.85;
    $('poke-tint').style.opacity='0';
    $('hint-left').classList.toggle('visible', ratio>0.2);
    $('hint-right').classList.remove('visible');
  } else if(cx > threshold){
    $('stamp-poke').style.opacity=ratio;
    $('stamp-mil').style.opacity='0';
    $('camo').style.opacity='0';
    $('poke-tint').style.opacity=ratio*0.9;
    $('hint-right').classList.toggle('visible', ratio>0.2);
    $('hint-left').classList.remove('visible');
  } else {
    resetCardVisuals();
  }
}

function onDragEnd(){
  if(!drag) return;
  drag=false;
  if(!hasMoved || busy){ cx=0; hasMoved=false; return; }
  hasMoved=false;
  if     (cx < -80) guess('Military');
  else if(cx >  80) guess('Pokemon');
  else {
    cardEl.style.transition='transform 0.35s cubic-bezier(.34,1.56,.64,1)';
    cardEl.style.transform='';
    resetCardVisuals();
  }
  cx=0;
}

document.addEventListener('mousedown', e=>{
  if(e.target.closest('#card')) onDragStart(e);
});
cardEl.addEventListener('touchstart', onDragStart, {passive:true});
document.addEventListener('mousemove',  onDragMove);
document.addEventListener('touchmove',  onDragMove, {passive:true});
document.addEventListener('mouseup',    onDragEnd);
document.addEventListener('touchend',   onDragEnd);

// ─── PIXEL ART SCENE — day / sunset / night based on local time ───
(function(){
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  const SCALE  = 3; // 1 logical pixel = 3 screen px
  let W, H, scene, stars=[], clouds=[], birds=[];

  /* ── helpers ── */
  function rand(a,b){ return a+Math.random()*(b-a); }
  function ri(a,b)  { return Math.floor(rand(a,b+1)); }

  /* ── time detection ── */
  let manualTheme = null; // null = auto

  function getTheme(){
    if(manualTheme) return manualTheme;
    const h = new Date().getHours();
    if(h>=6  && h<17) return 'day';
    if(h>=17 && h<21) return 'sunset';
    return 'night';
  }

  // Wire theme toggle buttons
  document.querySelectorAll('.tt-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const t = btn.dataset.theme;
      manualTheme = t==='auto' ? null : t;
      document.querySelectorAll('.tt-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      lastTheme = null; // force redraw
    });
  });

  /* ── palette per theme ── */
  const THEMES = {
    day:{
      sky1:'#78c8f0', sky2:'#b8e8f8',
      cloudFill:'#f8f8ff', cloudShadow:'#d0e8f8',
      sunMoon:'#fffff0', sunMoonGlow:'rgba(255,255,200,0.3)',
      starColor:null,
      gnd1:'#50c028', gnd2:'#3a9018', gnd3:'#289010',
      gndLine:'#68d838',
      grass1:'#68d840', grass2:'#40a820',
      flowers:['#f84040','#f8f040','#f840f0','#40f0f8','#f89040'],
      water: null,
    },
    sunset:{
      sky1:'#e04010', sky2:'#f8b030',
      cloudFill:'#f8d890', cloudShadow:'#e0a040',
      sunMoon:'#fffff8', sunMoonGlow:'rgba(255,255,200,0.5)',
      starColor:null,
      stripes: true,
      gnd1:'#988020', gnd2:'#706010', gnd3:'#504808',
      gndLine:'#b09828',
      grass1:'#a89020', grass2:'#786810',
      flowers:['#e87020','#f8c030','#e05010','#f8a020'],
      water: null,
    },
    night:{
      sky1:'#181c3c', sky2:'#2a3060',
      cloudFill:'#3a4480', cloudShadow:'#2a3468',
      sunMoon:'#e8f0ff', sunMoonGlow:'rgba(200,220,255,0.25)',
      starColor:'#ffffff',
      gnd1:'#1e2e58', gnd2:'#162040', gnd3:'#101830',
      gndLine:'#283868',
      grass1:'#243060', grass2:'#182448',
      flowers:['#4060c0','#6080e0','#3050a0'],
      water:'#161e3c',
      waterShine:'rgba(140,180,255,0.15)',
    },
  };

  function resize(){
    W = Math.ceil(window.innerWidth/SCALE);
    H = Math.ceil(window.innerHeight/SCALE);
    canvas.width=W; canvas.height=H;
    canvas.style.width=window.innerWidth+'px';
    canvas.style.height=window.innerHeight+'px';
  }

  function initScene(){
    const theme = getTheme();
    document.body.classList.remove('theme-day','theme-sunset','theme-night');
    document.body.classList.add('theme-'+theme);
    scene = THEMES[theme];

    // Stars (night only)
    stars=[];
    if(scene.starColor){
      for(let i=0;i<ri(60,90);i++){
        stars.push({x:ri(0,W),y:ri(0,H*0.55),
          size:Math.random()<0.1?2:1,
          a:rand(0.4,1),spd:rand(0.3,1.2),off:rand(0,Math.PI*2)});
      }
    }

    // Clouds
    clouds=[];
    const nc = ri(3,5);
    for(let i=0;i<nc;i++){
      const w=ri(20,38), h=ri(9,15);
      const bumpCount = Math.floor(w/6);
      const bumps=[];
      for(let b=0;b<bumpCount;b++){
        const edge = (b===0||b===bumpCount-1);
        bumps.push(Math.floor(h*(edge ? rand(0.35,0.55) : rand(0.6,1.0))));
      }
      clouds.push({x:ri(0,W), y:ri(4, Math.floor(H*0.32)),
        w, h, bumps,
        spd:rand(0.03,0.10)});
    }

    // Birds (day/sunset only)
    birds=[];
    if(theme!=='night'){
      for(let i=0;i<ri(3,6);i++){
        birds.push({x:rand(0,W),y:rand(H*0.15,H*0.45),
          spd:rand(0.15,0.4),flap:0,flapSpd:rand(2,4)});
      }
    }

    // Ground details — pre-computed positions
    const P=scene;
    const gy=Math.floor(H*0.72);
    scene._grass=[];
    for(let gx=0;gx<W;gx++){
      if(Math.random()<0.55){
        scene._grass.push({
          x:gx,
          y:ri(gy-1, gy+2),
          h:ri(2,5),
          c:Math.random()<0.5?P.grass1:P.grass2
        });
      }
    }
    scene._flowers=[];
    for(let i=0;i<ri(18,30);i++){
      scene._flowers.push({
        x:ri(0,W),
        y:ri(gy+2, gy+Math.floor((H-gy)*0.7)),
        c:P.flowers[ri(0,P.flowers.length-1)]
      });
    }
    scene._ripples=[];
    if(P.water){
      const wy=gy+Math.floor((H-gy)*0.18);
      scene._waterY=wy;
      for(let i=0;i<ri(8,14);i++){
        scene._ripples.push({x:ri(0,W),y:ri(wy,wy+Math.floor((H-wy)*0.6)),w:ri(4,14)});
      }
    }
  }

  /* ── draw helpers ── */

  function drawSkyStripes(){
    const stripeH = 2;
    const count = Math.floor(H*0.6/stripeH);
    for(let i=0;i<count;i++){
      const y = i*stripeH;
      const ratio = i/count;
      const bright = i%2===0 ? 0 : 12;
      const r = Math.floor(200 + ratio*50 + bright);
      const g = Math.floor(80 + ratio*120 + bright);
      const b = bright;
      ctx.fillStyle=`rgb(${r},${g},${b})`;
      ctx.fillRect(0, y, W, stripeH);
    }
  }

  function drawCloud(cloud, fill, shadow){
    const x=Math.floor(cloud.x), y=Math.floor(cloud.y);
    const {w, h, bumps} = cloud;
    const bumpCount = bumps.length;
    const bw = Math.floor(w/bumpCount);
    ctx.fillStyle = fill;
    ctx.fillRect(x, y + Math.floor(h*0.4), w, Math.ceil(h*0.6));
    for(let b=0;b<bumpCount;b++){
      const bx = x + b*bw;
      ctx.fillRect(bx, y + (h - bumps[b]), bw+1, bumps[b]);
    }
    ctx.fillStyle = shadow;
    ctx.fillRect(x+1, y+h-2, w-2, 2);
  }

  function drawSunMoon(theme, t){
    const P = THEMES[theme];
    const isNight = theme==='night';
    const smx = isNight ? Math.floor(W*0.72) : (theme==='sunset' ? Math.floor(W*0.15) : Math.floor(W*0.75));
    const sy = isNight ? Math.floor(H*0.12) : (theme==='sunset' ? Math.floor(H*0.55) : Math.floor(H*0.14));
    const r  = isNight ? 7 : (theme==='sunset' ? 14 : 9);

    // Glow
    ctx.fillStyle = P.sunMoonGlow;
    for(let gr=r+4; gr>r; gr--){
      ctx.globalAlpha=0.08;
      for(let py=sy-gr; py<=sy+gr; py++){
        for(let px2=smx-gr; px2<=smx+gr; px2++){
          if(Math.sqrt((px2-smx)**2+(py-sy)**2)<=gr)
            ctx.fillRect(px2,py,1,1);
        }
      }
    }
    ctx.globalAlpha=1;

    // Body
    for(let py=sy-r; py<=sy+r; py++){
      for(let px2=smx-r; px2<=smx+r; px2++){
        if(Math.sqrt((px2-smx)**2+(py-sy)**2)<=r){
          ctx.fillStyle=P.sunMoon;
          ctx.fillRect(px2,py,1,1);
        }
      }
    }
    // Crescent for moon
    if(isNight){
      for(let py=sy-r; py<=sy+r; py++){
        for(let px2=smx-r+2; px2<=smx+r+2; px2++){
          if(Math.sqrt((px2-smx-2.5)**2+(py-sy)**2)<=r*0.82){
            ctx.fillStyle=THEMES.night.sky1;
            ctx.fillRect(px2,py,1,1);
          }
        }
      }
    }
  }

  function drawBirds(){
    for(const b of birds){
      b.x += b.spd;
      if(b.x > W+4) b.x=-4;
      b.flap += b.flapSpd*0.06;
      const wing = Math.sin(b.flap)>0 ? 1 : -1;
      ctx.fillStyle='rgba(20,20,40,0.7)';
      ctx.fillRect(Math.floor(b.x),   Math.floor(b.y),           1,1);
      ctx.fillRect(Math.floor(b.x-1), Math.floor(b.y+wing),      1,1);
      ctx.fillRect(Math.floor(b.x+1), Math.floor(b.y+wing),      1,1);
    }
  }

  function drawGround(){
    const P=scene;
    const gy=Math.floor(H*0.72);

    ctx.fillStyle=P.gnd1;
    ctx.fillRect(0, gy, W, Math.ceil((H-gy)*0.35));
    ctx.fillStyle=P.gnd2;
    ctx.fillRect(0, gy+Math.ceil((H-gy)*0.35), W, Math.ceil((H-gy)*0.40));
    ctx.fillStyle=P.gnd3;
    ctx.fillRect(0, gy+Math.ceil((H-gy)*0.75), W, Math.ceil((H-gy)*0.25));

    ctx.fillStyle=P.gndLine;
    ctx.fillRect(0, gy, W, 1);

    // Water (night only)
    if(P.water && scene._waterY){
      ctx.fillStyle=P.water;
      ctx.fillRect(0, scene._waterY, W, Math.ceil((H-scene._waterY)*0.55));
      if(P.waterShine && scene._ripples){
        ctx.fillStyle=P.waterShine;
        for(const r of scene._ripples)
          ctx.fillRect(r.x, r.y, r.w, 1);
      }
    }

    // Grass tufts along horizon
    if(scene._grass){
      for(const g of scene._grass){
        ctx.fillStyle=g.c;
        ctx.fillRect(g.x, g.y-g.h, 1, g.h);
      }
    }

    // Flowers / dots
    if(scene._flowers){
      for(const f of scene._flowers){
        ctx.fillStyle=f.c;
        ctx.fillRect(f.x, f.y, 1, 1);
      }
    }
  }

  /* ── main render ── */
  let t=0, lastTheme=null;

  function draw(){
    const theme = getTheme();
    if(theme!==lastTheme){ initScene(); lastTheme=theme; }

    ctx.clearRect(0,0,W,H);

    // Sky stripes (sunset)
    if(theme==='sunset') drawSkyStripes();

    // Sun/Moon
    drawSunMoon(theme, t);

    // Stars (night)
    if(scene.starColor){
      for(const s of stars){
        const a=s.a*(0.5+0.5*Math.sin(t*s.spd+s.off));
        ctx.fillStyle=`rgba(255,255,255,${a})`;
        ctx.fillRect(s.x,s.y,s.size,s.size);
      }
    }

    // Clouds
    for(const c of clouds){
      c.x+=c.spd;
      if(c.x>W+c.w) c.x=-c.w;
      drawCloud(c, scene.cloudFill, scene.cloudShadow);
    }

    // Ground
    drawGround();

    // Birds
    drawBirds();

    t+=0.016;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize',()=>{ resize(); initScene(); lastTheme=null; });
  resize();
  initScene();
  draw();
})();
