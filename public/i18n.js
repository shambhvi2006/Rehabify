const dict = {
  en: { title:"Rehabify", score:"Score", streak:"Streak", energy:"Energy", progress:"Progress", community:"Community" },
  hi: { title:"रीहैबिफ़ाई", score:"स्कोर", streak:"स्ट्रिक", energy:"ऊर्जा", progress:"प्रगति", community:"समुदाय" }
};

let lang = 'en';
function setLang(l) {
  lang = l;
  document.getElementById('t_title').textContent = dict[l].title;
  document.getElementById('t_score').textContent = dict[l].score;
  document.getElementById('t_streak').textContent = dict[l].streak;
  document.getElementById('t_energy').textContent = dict[l].energy;
  document.getElementById('t_progress').textContent = dict[l].progress;
  document.getElementById('t_community').textContent = dict[l].community;
}
window.addEventListener('DOMContentLoaded', ()=>{
  setLang('en');
  document.getElementById('langToggle').onclick = ()=> setLang(lang==='en' ? 'hi':'en');
});
