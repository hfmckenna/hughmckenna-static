let timeToMakeNextRequest: number = 0;
function rafTimer(time: number) {
  if (timeToMakeNextRequest <= time) {
    const headerEl: HTMLElement | null = document.getElementById("nav-header");
    
    if (headerEl) {
      headerEl.classList.toggle("shadow-sm", window.scrollY > 100);
    }
    timeToMakeNextRequest = time + 100;
  }
  requestAnimationFrame(rafTimer);
}

requestAnimationFrame(rafTimer);

export {};
