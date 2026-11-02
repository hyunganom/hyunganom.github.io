"use strict";
const tests = [
 {image:"model-slide-3-0.png",times:["13:16:12","13:34:37","13:54:20"],note:"Stage 1·2·3의 순차 진입이 기록되었다."},
 {image:"model-slide-4-2.png",times:["11:06:05","11:07:04","11:07:45"],note:"가스·열화상 증거와 Stage 1–3의 시간 변화를 함께 표시하였다."},
 {image:"model-slide-5-2.png",times:["11:17:51","11:18:28","11:18:49"],note:"최종 단계 변화와 센서별 탐지 구간을 함께 표시하였다."},
 {image:"model-slide-6-1.png",times:["10:56:40","10:57:12","10:57:42"],note:"전이 시각은 시험 기록표 기준이며, 팩·실차 시험 차수와는 구분한다."},
 {image:"model-slide-7-1.png",times:["14:12:02","14:12:37","미탐지"],note:"Stage 3 미탐지가 기록되었다. 입력 증거 및 전이 조건에 대한 추가 분석이 필요하다."}
];
const base="../../assets/ev-fire-research/";
document.querySelectorAll("[data-test]").forEach(button=>{
 button.addEventListener("click",()=>{
  const i=Number(button.dataset.test),test=tests[i];
  document.querySelectorAll("[data-test]").forEach(b=>b.setAttribute("aria-pressed",String(b===button)));
  document.getElementById("test-title").textContent="Test "+(i+1)+" · Final Fusion";
  const img=document.getElementById("test-image");img.src=base+test.image;
  img.alt="Test "+(i+1)+" 시험 그래프: 가스·열화상 증거와 Stage 단계 변화";
  document.getElementById("test-image-link").href=base+test.image;
  test.times.forEach((v,j)=>{const el=document.getElementById("stage"+(j+1));el.textContent=v;el.classList.toggle("not-detected",v==="미탐지");});
  document.getElementById("test-note").textContent="Test "+(i+1)+": "+test.note;
 });
});
document.getElementById("print-button").addEventListener("click",()=>window.print());
