(() => {
  'use strict';

  const measurementId = 'G-K69VCLRJP0';
  const production = location.hostname === 'ssongyc.github.io';
  window[`ga-disable-${measurementId}`] = !production;
  if (!production) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.addEventListener('error', () => {
    console.warn('[Analytics] Google tag failed to load');
  });
  document.head.appendChild(script);

  function track(eventName, parameters) {
    try {
      window.gtag('event', eventName, {
        send_to: measurementId,
        ...parameters,
      });
    } catch (error) {
      console.warn(`[Analytics] ${eventName} failed`, error);
    }
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a[href]');
    if (!link) return;

    const card = link.closest('.app-card');
    if (card && link.closest('.download-links')) {
      const appName = card.querySelector('h3')?.textContent.trim();
      const appCategory = card.querySelector('.genre')?.textContent.trim();
      if (!appName || !appCategory) {
        console.warn('[Analytics] App link metadata unavailable');
        return;
      }

      track('app_link_click', {
        app_name: appName,
        app_category: appCategory,
        destination_type: link.textContent.trim(),
        link_url: link.href,
      });
      return;
    }

    if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
      track('navigation_click', {
        section: link.hash.slice(1),
        menu_location: link.closest('.nav')
          ? 'header'
          : link.closest('.site-footer')
            ? 'footer'
            : link.closest('.brand')
              ? 'brand'
              : 'hero',
      });
    }
  });
})();
