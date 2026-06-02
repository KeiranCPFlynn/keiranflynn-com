"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const doReveal = (el: HTMLElement) => {
      if (el.classList.contains("in")) return;
      const delay = el.getAttribute("data-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("in");
    };

    const hardReveal = (el: HTMLElement) => {
      el.classList.add("in");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const revealAllHard = () => revealEls.forEach(hardReveal);
    const vh = window.innerHeight || 800;
    let revealObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              doReveal(entry.target as HTMLElement);
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) doReveal(el);
        else revealObserver?.observe(el);
      });
    } else {
      revealEls.forEach(doReveal);
    }

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const animateCount = (el: HTMLElement) => {
      const target = Number.parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1400;
      let start: number | null = null;

      const frame = (timestamp: number) => {
        start ??= timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = `${value.toLocaleString()}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          el.textContent = `${target.toLocaleString()}${suffix}`;
        }
      };

      requestAnimationFrame(frame);
    };

    const safeCount = (el: HTMLElement) => {
      if (el.dataset.counted === "true") return;
      el.dataset.counted = "true";
      animateCount(el);
    };

    let countObserver: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              safeCount(entry.target as HTMLElement);
              countObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) safeCount(el);
        else countObserver?.observe(el);
      });
    } else {
      counters.forEach(safeCount);
    }

    const onVisibilityChange = () => {
      if (!document.hidden) window.setTimeout(revealAllHard, 400);
    };
    const onPageShow = () => window.setTimeout(revealAllHard, 1200);
    const revealTimer = window.setTimeout(revealAllHard, 1600);
    const counterTimer = window.setTimeout(() => counters.forEach(safeCount), 1700);

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      revealObserver?.disconnect();
      countObserver?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", onPageShow);
      window.clearTimeout(revealTimer);
      window.clearTimeout(counterTimer);
    };
  }, [pathname]);

  return null;
}
