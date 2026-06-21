import { useState, useEffect } from "react";
import { Outlet, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { AMBER, AMBER_DARK, INK, PAPER, RULE, fontSerif, fontMono } from "../theme";

const navLinks = [
  { label: "About",      to: "/about"     },
  { label: "Use Cases",  to: "/use-cases" },
  { label: "Tools",      to: "/tools"     },
  { label: "Writing",    to: "/writing"   },
  { label: "Contact",    to: "/contact"   },
];

function NavItem({ label, to }) {
  const [hovered, setHovered] = useState(false);
  return (
    <RouterNavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive || hovered ? AMBER : "#777",
        textDecoration: "none",
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontFamily: fontMono,
        borderBottom: isActive || hovered ? `0.5px solid ${AMBER}` : "0.5px solid transparent",
        paddingBottom: 2,
        transition: "all 0.2s",
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </RouterNavLink>
  );
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Load fonts once
  useEffect(() => {
    if (document.getElementById("ctj-fonts")) return;
    const link = document.createElement("link");
    link.id = "ctj-fonts";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  const navTransparent = isHome && !scrolled;

  return (
    <div style={{ fontFamily: fontMono, background: PAPER, minHeight: "100vh", color: INK }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: navTransparent ? "transparent" : "rgba(250,250,248,0.96)",
        backdropFilter: navTransparent ? "none" : "blur(10px)",
        borderBottom: navTransparent ? "none" : `0.5px solid ${RULE}`,
        padding: "1.25rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.3s ease",
      }}>
        <RouterNavLink to="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            border: `1.5px solid ${AMBER}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: fontSerif,
            fontSize: 12, fontWeight: 600, color: AMBER, letterSpacing: "0.06em",
            flexShrink: 0,
          }}>CTJ</div>
          <div>
            <div style={{ fontFamily: fontSerif, fontSize: 19, fontWeight: 600, letterSpacing: "-0.3px", lineHeight: 1, color: INK }}>CT Johnson</div>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#999", lineHeight: 1, marginTop: 4, textTransform: "uppercase" }}>Executive · AI Strategist · Author</div>
          </div>
        </RouterNavLink>
        <div style={{ display: "flex", gap: 36 }}>
          {navLinks.map(l => <NavItem key={l.to} {...l} />)}
        </div>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <Outlet />

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "1.75rem 3rem",
        borderTop: `0.5px solid ${RULE}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 10, color: "#bbb", letterSpacing: "0.1em",
        fontFamily: fontMono,
      }}>
        <div>© 2026 CT Johnson · ctjohnson.ai</div>
        <div style={{ display: "flex", gap: 28 }}>
          <RouterNavLink to="/research" style={{ color: "inherit", textDecoration: "none" }}>Research</RouterNavLink>
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "ReactAI",  href: "https://reactai.tech"  },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      </footer>

    </div>
  );
}
