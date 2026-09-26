"use client";

import { useEffect, useRef, useState } from "react";

const AVATARS = [
  "Clippy",
  "Rover",
  "Merlin",
  "Genius",
  "Links",
  "Rocky",
  "Bonzi",
  "F1",
  "Genie",
  "Peedy",
];

const TIPS: Record<string, string> = {
  about:
    "Take a look at my About section to learn how I work — learning science first, always.",
  skills:
    "Under Skills & Tools you'll also see my AI-assisted workflow. Fast and effective.",
  projects:
    "My Function of Beauty project is fully interactive — click any card to explore.",
  contact:
    "Want to build better learning together? My contact section is one click away.",
};

declare global {
  interface Window {
    clippy?: {
      BASE_PATH?: string;
      load: (
        name: string,
        cb: (agent: ClippyAgent) => void,
        fail?: () => void
      ) => void;
    };
    $?: (...args: unknown[]) => unknown;
  }
}

interface ClippyAgent {
  show: (fast?: boolean) => void;
  hide: (fast?: boolean, callback?: () => void) => void;
  moveTo: (x: number, y: number, duration?: number) => void;
  speak: (text: string, hold?: boolean) => void;
  _el?: HTMLElement;
  _hidden?: boolean;
}

let libsPromise: Promise<void> | null = null;

function preloadImage(src: string) {
  if (document.querySelector(`link[href="${src}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
}

function loadScripts(): Promise<void> {
  if (libsPromise) return libsPromise;

  libsPromise = new Promise((resolve) => {
    const head = document.head;

    if (!document.querySelector('link[href="/clippy/clippy.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/clippy/clippy.css";
      head.appendChild(link);
    }

    const needJquery = typeof window.$ !== "function";
    const needClippy = typeof window.clippy !== "object";

    const loadOne = (src: string) =>
      new Promise<void>((ok) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          ok();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => ok();
        s.onerror = () => ok();
        head.appendChild(s);
      });

    const tasks: Promise<void>[] = [];
    if (needJquery) tasks.push(loadOne("/clippy/jquery.min.js"));
    if (needClippy) tasks.push(loadOne("/clippy/clippy.js"));

    Promise.all(tasks).then(() => {
      if (window.clippy) {
        window.clippy.BASE_PATH = "/clippy/agents/";
      }
      resolve();
    });
  });

  return libsPromise;
}

export default function ClippyAssistant() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [avatar, setAvatar] = useState("Clippy");
  const agentRef = useRef<ClippyAgent | null>(null);
  const firedRef = useRef<Set<string>>(new Set());

  const positionAgent = (agent: ClippyAgent) => {
    agent.moveTo(Math.max(16, window.innerWidth - 210), window.innerHeight - 270);
  };

  const attachHelpToggle = (agent: ClippyAgent) => {
    const el = agent._el;
    if (el) {
      el.addEventListener("click", () => setHelpOpen((v) => !v));
    }
  };

  const loadAgent = async (name: string) => {
    preloadImage(`/clippy/agents/${name}/map.png`);
    await loadScripts();
    window.clippy?.load(
      name,
      (agent: ClippyAgent) => {
        if (agentRef.current) {
          try {
            agentRef.current.hide(true);
          } catch {
            /* noop */
          }
          agentRef.current._el?.remove?.();
        }
        agentRef.current = agent;
        setAvatar(name);
        agent.show(true);
        positionAgent(agent);
        attachHelpToggle(agent);
        agent.speak(`Hi! I'm ${name}. Click me for quick links and tips.`, true);
      },
      () => {
        console.error("clippy load failed for:", name);
      }
    );
  };

  useEffect(() => {
    loadAgent("Clippy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const tip = TIPS[id];
          if (tip && !firedRef.current.has(id)) {
            firedRef.current.add(id);
            const agent = agentRef.current;
            if (agent) {
              agent.speak(tip);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const targets = ["about", "skills", "projects", "contact"];
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!helpOpen) return;

    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const inPanel = target?.closest?.(".clippy-controls");
      const inAvatar = target?.closest?.(".clippy");
      if (!inPanel && !inAvatar) {
        setHelpOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [helpOpen]);

  const go = (href: string, tip?: string) => {
    const agent = agentRef.current;
    if (agent) {
      agent.hide(true);
    }
    setHelpOpen(false);
    if (tip) {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = href;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
      }, 250);
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {helpOpen && (
        <div className="clippy-controls">
          <div className="clippy-links">
            <button type="button" onClick={() => go("#about", TIPS.about)}>
              About
            </button>
            <button type="button" onClick={() => go("#projects", TIPS.projects)}>
              Projects
            </button>
            <button type="button" onClick={() => go("#skills", TIPS.skills)}>
              Skills
            </button>
            <button type="button" onClick={() => go("/resume.pdf")}>
              Resume
            </button>
            <button type="button" onClick={() => go("#contact", TIPS.contact)}>
              Contact
            </button>
          </div>
          <div className="clippy-avatars">
            {AVATARS.map((name) => (
              <button
                key={name}
                type="button"
                className={name === avatar ? "clippy-avatar active" : "clippy-avatar"}
                onClick={() => loadAgent(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}