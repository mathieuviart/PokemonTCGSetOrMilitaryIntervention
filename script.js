const DATA=[{N:"Rolling Thunder",T:"Military",D:"U.S. bombing campaign in North Vietnam (1965–68)"},{N:"Urgent Fury",T:"Military",D:"U.S.-led invasion of Grenada (1983)"},{N:"Infinite Reach",T:"Military",D:"U.S. missile strikes on al-Qaeda sites (1998)"},{N:"Epic Fury",T:"Military",D:"U.S.-led strikes on Iranian military targets (2026)"},{N:"Crimson Tide",T:"Military",D:"Single-day U.S. SEAL raid in Vietnam (1967)"},{N:"Emerald Warrior",T:"Military",D:"Annual U.S. Special Forces exercise (since 2014)"},{N:"Ocean Shield",T:"Military",D:"NATO anti-piracy operation off Somalia (2009–2016)"},{N:"Thunder Bolt",T:"Military",D:"Israeli raid to rescue hostages in Uganda (1976)"},{N:"Artic Edge",T:"Military",D:"Joint U.S.-Canada Arctic defense exercise (2022)"},{N:"Phantom Phoenix",T:"Military",D:"U.S.-led surge in Iraq (2008)"},{N:"Solar Sunrise",T:"Military",D:"U.S. counter-intelligence op targeting Pentagon hackers"},{N:"Celestial Balance",T:"Military",D:"JSOC raid killing Al-Shabaab leader in Somalia (2009)"},{N:"Iron Swords",T:"Military",D:"Israeli operation in Gaza against Hamas (2023–24)"},{N:"Pillar of Defense",T:"Military",D:"Israeli campaign in Gaza targeting Hamas (2012)"},{N:"Talisman Sabre",T:"Military",D:"Biennial U.S.-Australia joint exercise (since 2005)"},{N:"Sky Shield",T:"Military",D:"NORAD air-defense exercises simulating Soviet attacks (1960–62)"},{N:"Unified Protector",T:"Military",D:"NATO air campaign in Libya (2011)"},{N:"Frostbite",T:"Military",D:"U.S. Arctic naval/air exercise (1946)"},{N:"Desert Storm",T:"Military",D:"U.S.-led Gulf War — liberation of Kuwait (1991)"},{N:"Phantom Fury",T:"Military",D:"Second Battle of Fallujah (2004)"},{N:"Tidal Wave",T:"Military",D:"WWII U.S. air raid on Ploiești oil refineries (1943)"},{N:"Fireball",T:"Military",D:"Nigerian offensive against Boko Haram (2020)"},{N:"Infinite Justice",T:"Military",D:"U.S.-led invasion of Afghanistan (2001)"},{N:"Stellar Wind",T:"Military",D:"U.S. warrantless domestic surveillance program (2001–2011)"},{N:"Dark Night",T:"Military",D:"U.S. special forces training exercise (2011)"},{N:"Sea Dragon",T:"Military",D:"U.S. Navy interdiction off North Vietnam (1966–68)"},{N:"Neptune Spear",T:"Military",D:"U.S. SEAL raid killing Osama bin Laden in Pakistan (2011)"},{N:"Silver Wake",T:"Military",D:"U.S. Marine evacuation of ~900 people in Albania (1997)"},{N:"Ruby",T:"Military",D:"U.S. Army op securing a village in Afghanistan (2011)"},{N:"Totalize",T:"Military",D:"Allied offensive south of Caen in Normandy (1944)"},{N:"Shining Hope",T:"Military",D:"U.S. humanitarian mission in Kosovo (1999)"},{N:"Desert Strike",T:"Military",D:"U.S. retaliatory strikes on Iraqi air defenses (1996)"},{N:"Scorched Earth",T:"Military",D:"Yemeni/Saudi offensive against Houthis (2009–2010)"},{N:"Demon Digger",T:"Military",D:"U.S.-Iraqi raid finding weapons caches in Baghdad (2005)"},{N:"Odyssey Dawn",T:"Military",D:"U.S.-led Libyan no-fly zone intervention (2011)"},{N:"Snowbound",T:"Military",D:"U.S. Army disaster relief after Midwest blizzards (1949)"},{N:"Blizzard",T:"Military",D:"U.S. artillery operation in Kunar, Afghanistan (2004)"},{N:"Red Dawn",T:"Military",D:"Delta Force op capturing Saddam Hussein (2003)"},{N:"Restore Hope",T:"Military",D:"U.S./UN mission securing famine aid in Somalia (1992–93)"},{N:"Allied Force",T:"Military",D:"NATO air campaign in Kosovo (1999)"},{N:"Inherent Resolve",T:"Military",D:"Ongoing coalition campaign against ISIS (2014–present)"},{N:"Swift Retort",T:"Military",D:"Pakistani air strikes in response to Indian attack (2019)"},{N:"Juniper Shield",T:"Military",D:"U.S.-led counter-terrorism program in the Sahel (since 2013)"},{N:"Rough Rider",T:"Military",D:"U.S./UK air campaign against Houthi rebels (2025)"},{N:"Midnight Hammer",T:"Military",D:"U.S. B-2 airstrikes on Iranian nuclear sites (2025)"},{N:"Hawkeye Strike",T:"Military",D:"U.S.-Jordanian strikes against ISIS in Syria (2025)"},{N:"Wrath of God",T:"Military",D:"Mossad covert op targeting Munich Olympic attackers (1972–73)"},{N:"Frequent Wind",T:"Military",D:"Final helicopter evacuation of Saigon (1975)"},{N:"Flea Flicker",T:"Military",D:"U.S.-Iraqi sweep in Baghdad before referendum (2005)"},{N:"Skyridge",T:"Pokemon",D:"Pokémon TCG expansion set · May 2003"},{N:"Sandstorm",T:"Pokemon",D:"Pokémon TCG expansion set · September 2003"},{N:"Unseen Forces",T:"Pokemon",D:"Pokémon TCG expansion set · August 2005"},{N:"Crystal Guardians",T:"Pokemon",D:"Pokémon TCG expansion set · August 2006"},{N:"Power Keepers",T:"Pokemon",D:"Pokémon TCG expansion set · February 2007"},{N:"Stormfront",T:"Pokemon",D:"Pokémon TCG expansion set · November 2008"},{N:"Rising Rivals",T:"Pokemon",D:"Pokémon TCG expansion set · May 2009"},{N:"Supreme Victors",T:"Pokemon",D:"Pokémon TCG expansion set · August 2009"},{N:"Boundaries Crossed",T:"Pokemon",D:"Pokémon TCG expansion set · November 2012"},{N:"Plasma Storm",T:"Pokemon",D:"Pokémon TCG expansion set · February 2013"},{N:"Emerging Powers",T:"Pokemon",D:"Pokémon TCG expansion set · August 2011"},{N:"Noble Victories",T:"Pokemon",D:"Pokémon TCG expansion set · November 2011"},{N:"Roaring Skies",T:"Pokemon",D:"Pokémon TCG expansion set · May 2015"},{N:"Fates Collide",T:"Pokemon",D:"Pokémon TCG expansion set · May 2016"},{N:"Celestial Storm",T:"Pokemon",D:"Pokémon TCG expansion set · August 2018"},{N:"Unbroken Bonds",T:"Pokemon",D:"Pokémon TCG expansion set · May 2019"},{N:"Silver Tempest",T:"Pokemon",D:"Pokémon TCG expansion set · November 2022"},{N:"Lost Thunder",T:"Pokemon",D:"Pokémon TCG expansion set · November 2018"},{N:"Crimson Invasion",T:"Pokemon",D:"Pokémon TCG expansion set · November 2017"},{N:"Surging Sparks",T:"Pokemon",D:"Pokémon TCG expansion set · November 2024"},{N:"Aquapolis",T:"Pokemon",D:"Pokémon TCG expansion set · January 2003"},{N:"Dragon Frontiers",T:"Pokemon",D:"Pokémon TCG expansion set · November 2006"},{N:"Great Encounter",T:"Pokemon",D:"Pokémon TCG expansion set · February 2008"},{N:"Dragon Exalted",T:"Pokemon",D:"Pokémon TCG expansion set · August 2012"},{N:"Plasma Blast",T:"Pokemon",D:"Pokémon TCG expansion set · August 2013"},{N:"XY",T:"Pokemon",D:"Pokémon TCG expansion set · February 2014"},{N:"Breakpoint",T:"Pokemon",D:"Pokémon TCG expansion set · February 2016"},{N:"Steam Siege",T:"Pokemon",D:"Pokémon TCG expansion set · August 2016"},{N:"Unified Minds",T:"Pokemon",D:"Pokémon TCG expansion set · August 2019"},{N:"Cosmic Eclipse",T:"Pokemon",D:"Pokémon TCG expansion set · November 2019"},{N:"Brilliant Stars",T:"Pokemon",D:"Pokémon TCG expansion set · February 2022"},{N:"Astral Radiance",T:"Pokemon",D:"Pokémon TCG expansion set · May 2022"},{N:"Journey Together",T:"Pokemon",D:"Pokémon TCG expansion set · March 2025"},{N:"Black Bolt",T:"Pokemon",D:"Pokémon TCG expansion set · July 2025"},{N:"White Flare",T:"Pokemon",D:"Pokémon TCG expansion set · July 2025"},{N:"Ascended Heroes",T:"Pokemon",D:"Pokémon TCG expansion set · January 2026"},{N:"Perfect Order",T:"Pokemon",D:"Pokémon TCG expansion set · March 2026"},{N:"Darkness Ablaze",T:"Pokemon",D:"Pokémon TCG expansion set · August 2020"},{N:"Rebel Clash",T:"Pokemon",D:"Pokémon TCG expansion set · May 2020"},{N:"Forbidden Light",T:"Pokemon",D:"Pokémon TCG expansion set · May 2018"},{N:"Flashfire",T:"Pokemon",D:"Pokémon TCG expansion set · May 2014"},{N:"Call of Legends",T:"Pokemon",D:"Pokémon TCG expansion set · February 2011"},{N:"Majestic Dawn",T:"Pokemon",D:"Pokémon TCG expansion set · May 2008"},{N:"Delta Species",T:"Pokemon",D:"Pokémon TCG expansion set · October 2005"},{N:"Sword and Shield",T:"Pokemon",D:"Pokémon TCG expansion set · February 2020"},{N:"Neo Discovery",T:"Pokemon",D:"Pokémon TCG expansion set · June 2001"},{N:"Holon Phantom",T:"Pokemon",D:"Pokémon TCG expansion set · May 2006"},{N:"Legends Awakened",T:"Pokemon",D:"Pokémon TCG expansion set · August 2008"},{N:"Crown Zenith",T:"Pokemon",D:"Pokémon TCG expansion set · January 2023"}];

const GRADES_INF=[
  {min:90,t:"Classified-level knowledge. You know your ops and your sets.",c:"#16a34a"},
  {min:75,t:"Sharp. You clearly collect cards and follow world events.",c:"#16a34a"},
  {min:60,t:"Decent. A few misses, but mostly on target.",c:"#d97706"},
  {min:45,t:"50/50. Might be guessing more than thinking.",c:"#d97706"},
  {min:0, t:"You couldn't tell a Charizard from a B-2 bomber. Try again.",c:"#dc2626"}
];
const GRADES_SURV=[
  {min:80,t:"Flawless. You survived with barely a scratch.",c:"#16a34a"},
  {min:50,t:"Solid run. Kept your cool under pressure.",c:"#16a34a"},
  {min:25,t:"Decent effort before the lives ran out.",c:"#d97706"},
  {min:0, t:"Eliminated early. The cards got the better of you.",c:"#dc2626"}
];

const MAX_LIVES = 3;
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
  // PATCH v1 — gestion scroll body selon l'écran actif
  const scrollableScreens = ['menu', 'result'];
  document.body.classList.toggle('scrollable', scrollableScreens.includes(id));
  if (scrollableScreens.includes(id)) window.scrollTo(0, 0);
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
  // Tout couper instantanément — aucune transition pendant le reset
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
  // 1. Reset position sans transition, carte encore invisible
  card.style.transition='none';
  card.style.transform='';
  card.style.opacity='0';
  // 2. Reset tous les overlays sans transition (coupe tout flash)
  resetCardVisuals();
  // 3. Mettre à jour le contenu
  $('card-name').textContent=deck[idx].N;
  $('card-index').textContent=String(idx+1).padStart(2,'0')+' / '+deck.length;
  $('progress').style.width=((idx/deck.length)*100)+'%';
  const _isMobile='ontouchstart' in window||window.matchMedia('(max-width:480px)').matches;
  $('hint').textContent=(deck.length-idx)+' cards remaining · '+(_isMobile?'swipe left / right':'← → arrow keys');
  updateStats();
  // 4. Seulement après 2 frames (overlays propres), rendre la carte visible
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
    tag.innerHTML='Military Operation';
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
  // Remove all speed classes
  widget.classList.remove('speed-1','speed-2','speed-3','speed-4');
  if(streak===0){
    flame.textContent='';
    val.style.color='var(--muted)';
  } else if(streak<=2){
    flame.textContent='🔥';
    widget.classList.add('speed-1');
    val.style.color='var(--text)';
  } else if(streak<=4){
    flame.textContent='🔥';
    widget.classList.add('speed-2');
    val.style.color='#f59e0b';
  } else if(streak<=7){
    flame.textContent='🔥';
    widget.classList.add('speed-3');
    val.style.color='#ea580c';
  } else {
    flame.textContent='🔥';
    widget.classList.add('speed-4');
    val.style.color='#dc2626';
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
    badge.style.cssText='background:rgba(80,180,80,0.1);color:#3a8c3a;border:1px solid rgba(80,180,80,0.3);';
  } else {
    badge.textContent='❤️ Survival Mode';
    badge.style.cssText='background:rgba(220,60,60,0.1);color:#b03030;border:1px solid rgba(220,60,60,0.25);';
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
  // Ignorer les micro-mouvements < 4px (bruit du clic)
  if(!hasMoved && Math.abs(newCx)<4) return;
  hasMoved=true;
  cx=newCx;
  cardEl.style.transform=`translateX(${cx}px) rotate(${cx*0.055}deg)`;
  const threshold=40, absX=Math.abs(cx);
  const ratio=Math.max(0, Math.min(1, (absX-threshold)/90));
  // S'assurer que les transitions sont désactivées pendant le drag (contrôle manuel)
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
  // Pas de mouvement réel ou busy → reset état proprement sans toucher aux visuels
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
  const SCALE  = 2; // 1 logical pixel = 2 screen px
  let W, H, scene, stars=[], clouds=[], birds=[];

  /* ── helpers ── */
  function rand(a,b){ return a+Math.random()*(b-a); }
  function ri(a,b)  { return Math.floor(rand(a,b+1)); }
  function px(x,y,c,s=1){ ctx.fillStyle=c; ctx.fillRect(x,y,s,s); }

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
      // Ground
      gnd1:'#50c028', gnd2:'#3a9018', gnd3:'#289010',
      gndLine:'#68d838',
      grass1:'#68d840', grass2:'#40a820',
      flowers:['#f84040','#f8f040','#f840f0','#40f0f8','#f89040'],
      water: null,
      treeTrunk:'#7b4220', treeLeaf:'#2d8020', treeLeaf2:'#1a5810',
      city:'#8090a0', cityDark:'#607080',
    },
    sunset:{
      sky1:'#e04010', sky2:'#f8b030',
      cloudFill:'#f8d890', cloudShadow:'#e0a040',
      sunMoon:'#fffff8', sunMoonGlow:'rgba(255,255,200,0.5)',
      starColor:null,
      stripes: true,
      // Ground
      gnd1:'#988020', gnd2:'#706010', gnd3:'#504808',
      gndLine:'#b09828',
      grass1:'#a89020', grass2:'#786810',
      flowers:['#e87020','#f8c030','#e05010','#f8a020'],
      water: null,
      treeTrunk:'#5a2800', treeLeaf:'#4a7820', treeLeaf2:'#285810',
      city:'#8a6030', cityDark:'#5a4020',
    },
    night:{
      sky1:'#181c3c', sky2:'#2a3060',
      cloudFill:'#3a4480', cloudShadow:'#2a3468',
      sunMoon:'#e8f0ff', sunMoonGlow:'rgba(200,220,255,0.25)',
      starColor:'#ffffff',
      // Ground
      gnd1:'#1e2e58', gnd2:'#162040', gnd3:'#101830',
      gndLine:'#283868',
      grass1:'#243060', grass2:'#182448',
      flowers:['#4060c0','#6080e0','#3050a0'],
      water:'#161e3c',
      waterShine:'rgba(140,180,255,0.15)',
      treeTrunk:'#1a2030', treeLeaf:'#1a3040', treeLeaf2:'#101828',
      city:'#181c38', cityDark:'#0a1020',
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

    // Clouds — shape pre-computed at init to avoid per-frame randomness glitches
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
    // Grass tufts: {x, y, h, col}
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
    // Flowers/dots scattered on ground
    scene._flowers=[];
    for(let i=0;i<ri(18,30);i++){
      scene._flowers.push({
        x:ri(0,W),
        y:ri(gy+2, gy+Math.floor((H-gy)*0.7)),
        c:P.flowers[ri(0,P.flowers.length-1)]
      });
    }
    // Water ripples for night
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

  function drawSkyStripes(t){ // sunset only
    // Horizontal orange stripes like in the reference
    const stripeH = 2;
    const count = Math.floor(H*0.6/stripeH);
    for(let i=0;i<count;i++){
      const y = i*stripeH;
      const ratio = i/count;
      // alternate lighter/darker
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
    // Draw base rectangle first (bottom half) — no gaps
    ctx.fillStyle = fill;
    ctx.fillRect(x, y + Math.floor(h*0.4), w, Math.ceil(h*0.6));
    // Draw bumps on top
    for(let b=0;b<bumpCount;b++){
      const bx = x + b*bw;
      ctx.fillStyle = fill;
      ctx.fillRect(bx, y + (h - bumps[b]), bw+1, bumps[b]);
    }
    // Shadow bottom strip
    ctx.fillStyle = shadow;
    ctx.fillRect(x+1, y+h-2, w-2, 2);
  }

  function drawCity(theme){
    const P = THEMES[theme];
    if(!scene.cityBuildings) return;
    for(const b of scene.cityBuildings){
      ctx.fillStyle = P.city;
      ctx.fillRect(b.x, b.y, b.w-1, b.h);
      ctx.fillStyle = P.cityDark;
      ctx.fillRect(b.x, b.y, 1, b.h);
      ctx.fillRect(b.x, b.y, b.w-1, 1);
    }
    if(theme==='night' && scene.cityWindows){
      for(const w of scene.cityWindows){
        const a = (0.35 + 0.55*(Math.sin(t*w.spd + w.phase)*0.5+0.5)).toFixed(2);
        ctx.fillStyle = `rgba(255,240,180,${a})`;
        ctx.fillRect(w.x, w.y, 2, 2);
      }
    }
  }

  function drawTree(theme){
    const P = THEMES[theme];
    if(!scene.treeCanopy) return;
    const groundY = Math.floor(H*0.72);
    ctx.fillStyle = P.treeTrunk;
    ctx.fillRect(scene.treeTx, groundY - scene.treeTh, scene.treeTw, scene.treeTh);
    for(const px of scene.treeCanopy){
      ctx.fillStyle = px.inner ? P.treeLeaf2 : P.treeLeaf;
      ctx.fillRect(px.x, px.y, 1, 1);
    }
  }

  
  function drawSunMoon(theme, t){
    const P = THEMES[theme];
    const isNight = theme==='night';
    const sx = isNight ? Math.floor(W*0.72) : (theme==='sunset' ? Math.floor(W*0.15) : Math.floor(W*0.75));
    const sy = isNight ? Math.floor(H*0.12) : (theme==='sunset' ? Math.floor(H*0.55) : Math.floor(H*0.14));
    const r  = isNight ? 7 : (theme==='sunset' ? 14 : 9);

    // Glow
    ctx.fillStyle = P.sunMoonGlow;
    for(let gr=r+4; gr>r; gr--){
      ctx.globalAlpha=0.08;
      for(let py=sy-gr; py<=sy+gr; py++){
        for(let px2=sx-gr; px2<=sx+gr; px2++){
          if(Math.sqrt((px2-sx)**2+(py-sy)**2)<=gr)
            ctx.fillRect(px2,py,1,1);
        }
      }
    }
    ctx.globalAlpha=1;

    // Body
    for(let py=sy-r; py<=sy+r; py++){
      for(let px2=sx-r; px2<=sx+r; px2++){
        if(Math.sqrt((px2-sx)**2+(py-sy)**2)<=r){
          ctx.fillStyle=P.sunMoon;
          ctx.fillRect(px2,py,1,1);
        }
      }
    }
    // Crescent for moon
    if(isNight){
      for(let py=sy-r; py<=sy+r; py++){
        for(let px2=sx-r+2; px2<=sx+r+2; px2++){
          if(Math.sqrt((px2-sx-2.5)**2+(py-sy)**2)<=r*0.82){
            ctx.fillStyle=THEMES.night.sky1;
            ctx.fillRect(px2,py,1,1);
          }
        }
      }
    }
  }

  function drawBirds(t){
    for(const b of birds){
      b.x += b.spd * 0.35;
      if(b.x > W+4) b.x=-4;
      b.flap += b.flapSpd*0.06;
      // simple 2-pixel bird: v-shape
      const wing = Math.sin(b.flap)>0 ? 1 : -1;
      ctx.fillStyle='rgba(20,20,40,0.7)';
      ctx.fillRect(Math.floor(b.x),   Math.floor(b.y),           1,1);
      ctx.fillRect(Math.floor(b.x-1), Math.floor(b.y+wing),      1,1);
      ctx.fillRect(Math.floor(b.x+1), Math.floor(b.y+wing),      1,1);
    }
  }

  function drawGround(theme){
    const P=scene;
    const gy=Math.floor(H*0.72);

    // Base ground fill — 3 layers darkening downward
    ctx.fillStyle=P.gnd1;
    ctx.fillRect(0, gy, W, Math.ceil((H-gy)*0.35));
    ctx.fillStyle=P.gnd2;
    ctx.fillRect(0, gy+Math.ceil((H-gy)*0.35), W, Math.ceil((H-gy)*0.40));
    ctx.fillStyle=P.gnd3;
    ctx.fillRect(0, gy+Math.ceil((H-gy)*0.75), W, Math.ceil((H-gy)*0.25));

    // Horizon highlight line
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

    // Grass tufts along horizon (pre-computed, static)
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



  // ═══════════════════════════════════════
  // POKÉMON SPRITES – vintage Game Boy vibes
  // ═══════════════════════════════════════
  const POKE_DEFS = {
  pikachu: {pal:{"_": null, "Y": "#f8d030", "b": "#281800", "R": "#e83030", "T": "#b87818"},art:["__bb____bb__", "_bYYb__bYYb_", "bYYYbbbbYYYb", "bYYYYYYYYYYb", "bYbYYYYYbYYb", "bYYRRYYRRYYb", "bYYYYYYYYYYb", "_bYYYYYYYYb_", "__bYYYYYYb__", "___bbYYbb___", "____bbbb____"]},
  gengar: {pal:{"_": null, "P": "#9838d8", "p": "#5810a0", "W": "#f8f8f8", "b": "#180820", "r": "#d02020"},art:["__ppPPPPpp__", "_pPPPPPPPPp_", "pPPPPPPPPPPp", "pPPWWpPWWPPp", "pPPWbpPWbPPp", "pPPPPPPPPPPp", "pPPWPpPPWPPp", "_ppbbbbbbpp_", "_ppPPPPPPpp_", "__pppppppp__", "___p____p___"]},
  jigglypuff: {pal:{"_": null, "P": "#f878b0", "p": "#c04878", "B": "#4878e8", "b": "#181830", "r": "#e86080"},art:["__pppppp__", "_pPPPPPPp_", "pPPbBPBbPp", "pPPPPPPPPp", "pPPPrPPPPp", "_pPPPPPPp_", "__ppPPpp__", "___pppp___", "____pp____"]},
  eevee: {pal:{"_": null, "B": "#704828", "b": "#381808", "C": "#f8e8c0", "T": "#a06838"},art:["__bbBBBBbb__", "_bBBBBBBBBb_", "bBBTbBBbTBBb", "_bBBBBBBBBb_", "bBBBbBBbBBBb", "bBBBBBBBBBBb", "_bCCCCCCCCb_", "__bCCCCCCb__", "___bBBBBb___", "____bBBb____"]},
  snorlax: {pal:{"_": null, "S": "#4890c0", "s": "#204860", "C": "#e8d8a0", "b": "#181820"},art:["__ssSSSSSSSss_", "_sSSSSSSSSSSs_", "sSSSSSSSSSSSSs", "sSSCCCCCCCCSSs", "sSCCbCCCCbCCSs", "sSCCCCCbCCCCSs", "sSSCCCCCCCCSSs", "sSSSSSSSSSSSSs", "sSbSSSSSSSbSSs", "_sSSSSSSSSSs__", "__ssSSSSSss___", "____ssssss____"]},
  pokeball: {pal:{"_": null, "R": "#e02020", "b": "#181820", "W": "#f8f8f8"},art:["__bbbbbb__", "_bRRRRRRb_", "bRRRRRRRRb", "bRRRRRRRRb", "bRRRRRRRRb", "bbbbbbbbbb", "bbbbWWbbbb", "bbbbbbbbbb", "bWWWWWWWWb", "_bWWWWWWb_", "__bbbbbb__"]}
  };

  let pokemons = [];

  function initPokemons() {
    const configs = [
      {key:'pikachu',    vx: 0.12, yPct:0.18, phase:0.0, flip:false},
      {key:'gengar',     vx:-0.09, yPct:0.35, phase:1.2, flip:true},
      {key:'jigglypuff', vx: 0.07, yPct:0.52, phase:2.4, flip:false},
      {key:'eevee',      vx:-0.14, yPct:0.22, phase:3.6, flip:false},
      {key:'snorlax',    vx: 0.06, yPct:0.60, phase:4.8, flip:true},
      {key:'pokeball',   vx:-0.10, yPct:0.42, phase:1.8, flip:false},
      {key:'pikachu',    vx: 0.08, yPct:0.28, phase:5.5, flip:true},
      {key:'pokeball',   vx: 0.15, yPct:0.15, phase:0.7, flip:false},
    ];
    pokemons = configs.map(cfg => {
      const def = POKE_DEFS[cfg.key];
      const w = def.art[0].length;
      const startX = ri(0, Math.max(W - w, 1));
      return { def, x: startX, y: Math.round(H * cfg.yPct), vx: cfg.vx, phase: cfg.phase, flip: cfg.flip };
    });
  }

  function drawSprite(def, ox, oy, flip, ps=1) {
    const {pal, art} = def;
    const h = art.length, w = art[0].length;
    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        const c = pal[art[row][flip ? (w-1-col) : col]];
        if (!c) continue;
        ctx.fillStyle = c;
        ctx.fillRect(Math.round(ox + col*ps), Math.round(oy + row*ps), ps, ps);
      }
    }
  }

  function drawPokemons(tt) {
    ctx.save();
    ctx.globalAlpha = 0.52;
    for (const p of pokemons) {
      p.x += p.vx * 1.2;
      const w = p.def.art[0].length;
      if (p.vx > 0 && p.x > W + w) p.x = -w;
      if (p.vx < 0 && p.x < -w)   p.x = W + w;
      const bobY = p.y + Math.sin(tt * 0.7 + p.phase) * 2.5;
      drawSprite(p.def, p.x, bobY, p.flip);
    }
    ctx.restore();
  }

  function drawScanlines() {
    ctx.save();
    ctx.globalAlpha = 0.035;
    ctx.fillStyle = '#000000';
    for (let sy = 0; sy < H; sy += 2) ctx.fillRect(0, sy, W, 1);
    ctx.restore();
  }

  // ═══════════════════════════════════════
  // MILITARY SPRITES – Vietnam War vibes
  // ═══════════════════════════════════════
  const MIL_DEFS = {
  tank: {pal:{"_": null, "G": "#4a5228", "g": "#6a7838", "T": "#3a4820", "b": "#181810"},art:["___________bbbbb", "___________bbbbb", "_____bggggggb___", "___bGGGGGGGGGGb_", "__bGGGGGGGGGGGGb", "bTbTbTbTbTbTbTbT", "TbTbTbTbTbTbTbTb", "_bbbbbbbbbbbbbb_"]},
  soldier: {pal:{"_": null, "G": "#4a5228", "g": "#6a7838", "b": "#281808", "C": "#d4a868", "H": "#383818", "r": "#707058"},art:["____HHH___", "___HHHHb__", "___bCCCb__", "___GGGGG__", "rrrGGGGGb_", "rr_GGGGGb_", "___GGGGG__", "___G__G___", "___G__G___", "__bG__Gb__", "__bb__bb__"]},
  helicopter: {pal:{"_": null, "G": "#4a5228", "g": "#6a7838", "b": "#181810", "w": "#88c8d8", "r": "#c0c0b0"},art:["_rrrrrrrrrrrrrrrrrr_", "_________bb_________", "__bGwwGGGGGGGGGGGb__", "_bGwwGGGGGGGGGGGGb__", "_bGGGGGGGGGGGGGGGb__", "__bGGGGGGGGGGGGbbb__", "____bbbGGGGGGGbb____", "__b_____________b___"]},
  jet: {pal:{"_": null, "G": "#4a5228", "g": "#3a3a20", "b": "#181810", "w": "#88c8d8", "r": "#e83020", "o": "#e87020"},art:["_______bbbbbbbbb__", "bbbbbbGGGwGGGGGGb_", "GGGGGGGGGGGGGGGGGb", "gGGGGGGGGGGGGGGGgg", "____rr__________r_", "____oo__________o_"]},
  explosion: {pal:{"_": null, "r": "#e83020", "o": "#e87020", "Y": "#f8d020", "w": "#fff8d0"},art:["____rYr___", "___roYYor_", "__rooYYoor", "_roooooooo", "roooooooor", "_rroooorr_", "__rrrrrr__", "___rrrr___"]},
  sniper: {pal:{"_":null,"G":"#4a5228","g":"#6a7838","b":"#281808","C":"#d4a868","H":"#383818","r":"#707058","R":"#e03020"},
    art:["_HHH_","_HHHHb","_bCCCb","_GGGGG","_rGGGGGb","_rGGGGb","_GGGGG","bRRRRRRRRRRRb","_GG__","_GG__","bGGGb","_bbb_"]},
  artillery: {pal:{"_":null,"G":"#4a5228","g":"#3a4820","b":"#181810","T":"#2a3018","w":"#a0a890"},
    art:["____bbb__","___bGGGGb_","__bGGGGGGb","_bGGGGGGGGb","bTbTbTbTbTbTb","TbTbTbTbTbTbTb","bbbbbbbbbbbbb","__bwwwwwwwb__"]},
  bomb: {pal:{"_": null, "b": "#181810", "G": "#707058", "Y": "#d0b828", "r": "#e83020"},art:["_bGGb_", "bGGGGb", "bGGGGb", "bGYYGb", "bGGGGb", "_bGGb_", "__bb__", "__r___"]}
  };

  let milUnits = [];
  let bombs = []; // active explosions on ground
  let fallingBombs = []; // bombs in flight

  function initMilUnits() {
    // Ground units scroll through the grass layer (y ≈ H*0.72-0.80)
    // Air units patrol the sky
    milUnits = [
      // === GROUND ===
      {def:MIL_DEFS.tank,     vx: 0.13, baseYpct:0.76, phase:0.0,  flip:false, layer:'ground'},
      {def:MIL_DEFS.tank,     vx:-0.09, baseYpct:0.80, phase:2.1,  flip:true,  layer:'ground'},
      {def:MIL_DEFS.soldier,  vx: 0.18, baseYpct:0.74, phase:1.1,  flip:false, layer:'ground'},
      {def:MIL_DEFS.soldier,  vx: 0.22, baseYpct:0.74, phase:3.3,  flip:false, layer:'ground'},
      {def:MIL_DEFS.soldier,  vx:-0.15, baseYpct:0.77, phase:4.7,  flip:true,  layer:'ground'},
      // === SKY ===
      {def:MIL_DEFS.helicopter, vx:-0.11, baseYpct:0.38, phase:0.8, flip:true,  layer:'sky'},
      {def:MIL_DEFS.helicopter, vx: 0.08, baseYpct:0.48, phase:2.9, flip:false, layer:'sky'},
      {def:MIL_DEFS.jet,        vx: 0.28, baseYpct:0.18, phase:0.0, flip:false, layer:'sky', bombCooldown:0},
      {def:MIL_DEFS.jet,        vx:-0.22, baseYpct:0.25, phase:1.5, flip:true,  layer:'sky', bombCooldown:120},
      // === EXTRA GROUND ===
      {def:MIL_DEFS.sniper,    vx: 0.10, baseYpct:0.75, phase:5.2, flip:false, layer:'ground'},
      {def:MIL_DEFS.sniper,    vx:-0.12, baseYpct:0.78, phase:0.6, flip:true,  layer:'ground'},
      {def:MIL_DEFS.artillery, vx: 0.07, baseYpct:0.76, phase:2.8, flip:false, layer:'ground'},
    ].map(u => {
      const w = u.def.art[0].length;
      const startX = ri(0, Math.max(W - w, 1));
      return { ...u, x: startX, y: Math.round(H * u.baseYpct) };
    });

    bombs = [];        // will be populated dynamically by falling bombs
    fallingBombs = []; // will be populated by jets
  }

  function drawMilUnits(tt) {
    ctx.save();

    // === Falling bombs + explosions (only during ground pass) ===
    {
    const groundExpY = Math.floor(H * 0.70);
    for (let i = fallingBombs.length - 1; i >= 0; i--) {
      const fb = fallingBombs[i];
      fb.y  += fb.vy;
      fb.vy += 0.008; // gravity acceleration (gentle)
      if (fb.y >= groundExpY) {
        // Impact → spawn animated explosion
        bombs.push({ x: fb.x, y: groundExpY, frame: 0, maxFrames: 55 });
        fallingBombs.splice(i, 1);
      } else {
        ctx.globalAlpha = 0.88;
        drawSprite(MIL_DEFS.bomb, fb.x - 3, Math.round(fb.y), false);
      }
    }

    // === Animated explosions ===
    for (let i = bombs.length - 1; i >= 0; i--) {
      const ex = bombs[i];
      ex.frame++;
      if (ex.frame >= ex.maxFrames) { bombs.splice(i, 1); continue; }
      const p = ex.frame / ex.maxFrames;
      // Alpha envelope: quick fade-in, hold, then fade-out
      const alpha = p < 0.18 ? p / 0.18 : p < 0.65 ? 1.0 : 1 - (p - 0.65) / 0.35;
      const spread = Math.floor(p * 10); // radial spread in pixels
      // Central fireball
      ctx.globalAlpha = alpha * 0.92;
      drawSprite(MIL_DEFS.explosion, ex.x - 3, ex.y - spread - 4, false);
      // Left and right sub-explosions
      if (p > 0.12) {
        ctx.globalAlpha = alpha * 0.72;
        drawSprite(MIL_DEFS.explosion, ex.x - 9, ex.y - Math.floor(spread * 0.55), false);
        drawSprite(MIL_DEFS.explosion, ex.x + 3, ex.y - Math.floor(spread * 0.55), false);
      }
      // Top flare
      if (p > 0.22 && p < 0.65) {
        ctx.globalAlpha = alpha * 0.55;
        drawSprite(MIL_DEFS.explosion, ex.x - 1, ex.y - spread - 10, false);
      }
    }
    ctx.globalAlpha = 1;
    }

    // === Draw units ===
    for (const u of milUnits) {
      u.x += u.vx * 1.2;
      const w = u.def.art[0].length;
      if (u.vx > 0 && u.x > W + w) u.x = -w;
      if (u.vx < 0 && u.x < -w)   u.x = W + w;

      const bob = u.layer === 'sky' ? Math.sin(tt * 0.65 + u.phase) * 2 : 0;
      const drawY = u.y + bob;

      // Jet drops bombs periodically
      if (u.bombCooldown !== undefined) {
        u.bombCooldown--;
        if (u.bombCooldown <= 0) {
          // Faster cadence: 60-150 frames (~1-2.5s at 60fps)
          u.bombCooldown = 120 + Math.floor(Math.random() * 180);
          // Spawn a real falling bomb object
          fallingBombs.push({
            x: Math.round(u.x + w / 2),
            y: Math.round(drawY + u.def.art.length),
            vy: 0.15,  // initial fall speed (px/frame, slowed)
          });
        }
      }

      ctx.globalAlpha = u.layer === 'ground' ? 0.82 : 0.55;
      drawSprite(u.def, u.x, drawY, u.flip, u.def === MIL_DEFS.tank ? 2 : 1);
    }

    ctx.restore();
  }

  function draw(){
    const theme = getTheme();
    if(theme!==lastTheme){ initScene(); lastTheme=theme; }

    ctx.clearRect(0,0,W,H);

    // Sky stripes (sunset)
    if(theme==='sunset') drawSkyStripes(t);

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
      c.x += c.spd * 0.28;
      if(c.x>W+c.w) c.x=-c.w;
      drawCloud(c, scene.cloudFill, scene.cloudShadow);
    }

    // Pokémon sprites
    drawPokemons(t);

    // Ground layers (painted before military so units appear ON TOP)
    drawGround(theme);
    drawTree(theme);
    drawCity(theme);

    // ALL military units drawn AFTER ground (tanks/soldiers visible on ground)
    drawMilUnits(t);

    // Birds
    drawBirds(t);

    drawScanlines();
    t+=0.006;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize',()=>{ resize(); initScene(); initPokemons(); initMilUnits(); lastTheme=null; });
  resize();
  initScene();
  initPokemons();
  initMilUnits();
  draw();
})();