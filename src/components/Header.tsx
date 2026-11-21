import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { siteText } from '../data/siteText';

interface Route { id: string; label: string }

const mobileLabels: Record<string, string> = {
  home: 'Home',
  'web-design': 'Web',
  'digital-art': 'Art',
};

export function Header({ routes, page }: { routes: Route[]; page: string }) {
  const [departing, setDeparting] = useState<string | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const running = useRef(false);
  const wavePattern = useRef<SVGPatternElement>(null);
  const wavePath = useRef<SVGPathElement>(null);
  const animations = useRef<Animation[]>([]);

  useEffect(() => () => animations.current.forEach(animation => animation.cancel()), []);

  useEffect(() => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let phase = window.scrollY * .18;
    let target = phase;
    let amplitude = 5;
    let lastTime = 0;
    let lastScroll = 0;

    

    const dividerSelector =
      '.about-section, .areas article, .project, .art-category, footer';

    let dividerId = 0;

    const drawDividers = () => {
      document.querySelectorAll<HTMLElement>(dividerSelector)
        .forEach(element => {
          // Не нарушаем структуру footer:
          // там используются CSS-селекторы :nth-child.
          const mount = element.tagName === 'FOOTER'
            ? element.firstElementChild
            : element;

          if (!mount) return;

          let svg = mount.querySelector<SVGSVGElement>(
            ':scope > svg.section-divider-wave'
          );

          if (!svg) {
            svg = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg'
            );

            svg.classList.add('section-divider-wave');
            svg.setAttribute('aria-hidden', 'true');

            const id = `section-wave-${++dividerId}`;

            svg.innerHTML = `
              <defs>
                <pattern
                  id="${id}"
                  width="160"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="20"
                    fill="url(#${id})" />
            `;

            mount.prepend(svg);
          }

          svg.querySelector('path')?.setAttribute(
            'd',
            `M0 8
            Q40 ${8 - amplitude * 2} 80 8
            T160 8
            L160 10
            Q120 ${10 + amplitude * 2} 80 10
            T0 10 Z`
          );


          svg.querySelector('pattern')?.setAttribute(
            'patternTransform',
            `translate(${(phase - element.getBoundingClientRect().left) % 160} 0)`
          );
        });
    };

    const draw = () => {
      wavePattern.current?.setAttribute(
        'patternTransform',
        `translate(${phase % 160} 0)`
      );

      // Меню: оставляем оригинальную форму и амплитуду
      wavePath.current?.setAttribute(
        'd',
        `M0 0H160V8Q120 ${8 + amplitude * 2} 80 8T0 8Z`
      );

      // Разделители: точно такая же геометрия
      drawDividers();
    };

    const tick = (now: number) => {
      const elapsed = Math.min(now - (lastTime || now - 16), 50);
      lastTime = now;
      const ease = 1 - Math.exp(-elapsed / 95);
      phase += (target - phase) * ease;
      const desiredAmplitude = now - lastScroll < 120 ? 8 : 5;
      amplitude += (desiredAmplitude - amplitude) * ease;
      const main = document.querySelector('main');

      draw();
      if (Math.abs(target - phase) > .02 || Math.abs(desiredAmplitude - amplitude) > .02 || now - lastScroll < 120) {
        frame = requestAnimationFrame(tick);
      } else { frame = 0; lastTime = 0; }
    };
    const onScroll = () => {
      if (reducedMotion.matches) return;
      target = window.scrollY * .18;
      lastScroll = performance.now();
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMotionChange = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      phase = target = window.scrollY * .18;
      amplitude = 5;
      draw();
    };

    const main = document.querySelector('main');

    const observer = new MutationObserver(() => {
      draw();
    });

    if (main) {
      observer.observe(main, {
        childList: true,
        subtree: true
      });
    }

    draw();

    window.addEventListener('scroll', onScroll, {
      passive: true
    });

    reducedMotion.addEventListener(
      'change',
      onMotionChange
    );

    draw();
    window.addEventListener('scroll', onScroll, { passive: true });
    reducedMotion.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();

      document
        .querySelectorAll('.section-divider-wave')
        .forEach(element => element.remove());
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, [page]);

  async function navigate(event: MouseEvent<HTMLAnchorElement>, route: Route) {
    // Preserve native open-in-new-tab behavior and immediate reduced-motion navigation.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (running.current) { event.preventDefault(); return; }
    if (route.id === page || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    event.preventDefault();
    running.current = true;
    setDeparting(route.id);
    const initialHash = location.hash;
    const label = event.currentTarget.querySelector('.nav-label')!.getBoundingClientRect();
    const x = label.left + label.width / 2;
    const y = label.bottom + 10;
    const drop = circle.current!;
    const cover = overlay.current!;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y + 40, innerHeight - y - 40)) + 80;
    Object.assign(drop.style, { left: `${x}px`, top: `${y}px` });
    cover.style.visibility = 'visible';
    cover.style.opacity = '1';
    const play = async (element: HTMLElement, frames: Keyframe[], options: KeyframeAnimationOptions) => {
      const animation = element.animate(frames, { ...options, fill: 'forwards' });
      animations.current.push(animation);
      await animation.finished;
    };
    try {
      await play(drop, [
        { transform: 'translate(-50%, -50%) translateY(0) scale(.17)', borderRadius: '50%' },
        { transform: 'translate(-50%, -50%) translateY(40px) scale(1)', borderRadius: '50%' },
      ], { duration: 240, easing: 'cubic-bezier(.4, 0, .8, .5)' });
      await play(drop, [
        { transform: 'translate(-50%, -50%) translateY(40px) scale(1)' },
        { transform: `translate(-50%, -50%) translateY(40px) scale(${radius / 12})` },
      ], { duration: 520, easing: 'cubic-bezier(.65, 0, .3, 1)' });
      // Do not override Back/Forward or another navigation made during the transition.
      if (location.hash === initialHash) location.hash = `/${route.id}`;
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      await play(cover, [{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-out' });
    } catch {
      // An unmounted header cancels its animations without leaving an overlay behind.
    } finally {
      cover.style.visibility = 'hidden';
      animations.current.forEach(animation => animation.cancel());
      animations.current = [];
      running.current = false;
      setDeparting(null);
    }
  }

  return <>
    <header className="site-header">
      <nav aria-label={siteText.navigation.label}>
        {routes.map(route => <a key={route.id} href={`#/${route.id}`}
          aria-current={page === route.id ? 'page' : undefined}
          className={departing === route.id ? 'is-departing' : undefined}
          onClick={event => void navigate(event, route)}>
          <span className="nav-label">
            
          <span className="nav-text-shadow">
            <span className="nav-full-label">{route.label}</span>
            <span className="nav-short-label">
              {mobileLabels[route.id] ?? route.label}
            </span>
          </span>

          <span className="nav-text-filled" aria-hidden="true">
            <span className="nav-full-label">{route.label}</span>
            <span className="nav-short-label">
              {mobileLabels[route.id] ?? route.label}
            </span>
          </span>

            <span className="nav-water" aria-hidden="true">
              <span className="water-line"/>
            </span>
          </span>
        </a>)}
      </nav>
      <svg className="menu-edge" width="100%" height="18" aria-hidden="true" focusable="false">
        <defs><pattern ref={wavePattern} id="menu-wave-fill" width="160" height="18" patternUnits="userSpaceOnUse"><path ref={wavePath} d="M0 0H160V8Q120 18 80 8T0 8Z"/></pattern></defs>
        <rect width="100%" height="18" fill="url(#menu-wave-fill)"/>
      </svg>
    </header>
    {createPortal(<div ref={overlay} className="page-water-transition" aria-hidden="true"><div ref={circle} className="transition-drop"/></div>, document.body)}
  </>;
}
