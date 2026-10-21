import { useEffect, useRef, useState } from 'react'
import {
  Menu, X, Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, GraduationCap,
  Briefcase, Award, Trophy, Users, Zap, Droplets, ShieldAlert, Sprout, CircuitBoard, Cpu, Send, Sparkles,
} from 'lucide-react'
import { profile, nav, education, skills, projects, experience, certifications, achievements, strengths } from './data'

const icons = { Droplets, ShieldAlert, Sprout, CircuitBoard, Zap, Trophy, Users }
const id = (s) => s.toLowerCase()

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>
}

function Heading({ kicker, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan2">{kicker}</p>
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-electric to-cyan2" />
    </Reveal>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-white">
          <span className="grad-text">HV</span><span className="text-slate-400">.</span>
        </a>
        <ul className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${id(n)}`} className="text-sm text-slate-300 transition hover:text-cyan2">{n}</a></li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-navy px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${id(n)}`} className="block py-2.5 text-slate-200 hover:text-cyan2">{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="circuit absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan2/15 blur-[120px]" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 800 600">
        <path className="trace" d="M0 120 H180 L230 170 H420 L470 120 H800" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <path className="trace" d="M800 480 H620 L570 430 H380 L330 480 H0" fill="none" stroke="#2f81ff" strokeWidth="1.5" />
      </svg>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="chip mb-5 inline-flex items-center gap-2"><Sparkles size={14} /> Open to opportunities</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Hi, I'm <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-100 md:text-2xl">{profile.title}</p>
          <p className="mt-1 text-cyan-200">{profile.subtitle}</p>
          <p className="mt-5 max-w-xl text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">Explore My Work <ArrowRight size={16} /></a>
            <a href={profile.resume} download="Haritha_Venkatesan_Resume.pdf" className="btn btn-ghost"><Download size={16} /> Download Resume</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={16} /> Contact Me</a>
          </div>
        </div>
        <div className="mx-auto order-first md:order-none">
          <div className="relative h-80 w-64 overflow-hidden rounded-3xl border border-cyan2/30 bg-white/[0.04] shadow-[0_0_60px_-10px_rgba(47,129,255,0.5)] md:h-96 md:w-80">
            <img src="/haritha.jpg" alt="Portrait of Haritha Venkatesan" className="h-full w-full object-cover object-top" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-8 text-center text-xs uppercase tracking-[0.3em] text-slate-200">ECE · Embedded · IoT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about"><div className="mx-auto max-w-3xl">
      <Heading kicker="Who I am" title="About Me" />
      <Reveal><p className="glass p-8 text-center text-lg leading-relaxed text-slate-300">{profile.about}</p></Reveal>
    </div></section>
  )
}

function Education() {
  return (
    <section id="education"><div className="mx-auto max-w-4xl">
      <Heading kicker="Academics" title="Education" />
      <div className="relative space-y-6 border-l border-cyan2/30 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 100}>
            <div className="glass glass-hover relative p-6">
              <span className="absolute -left-[41px] top-7 grid h-5 w-5 place-items-center rounded-full bg-ink ring-2 ring-cyan2"><GraduationCap size={11} className="text-cyan2" /></span>
              <h3 className="font-display text-lg font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 text-slate-300">{e.place}</p>
              <div className="mt-3 flex flex-wrap gap-2"><span className="chip">{e.period}</span><span className="chip">{e.score}</span></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}

function Skills() {
  return (
    <section id="skills"><div className="mx-auto max-w-5xl">
      <Heading kicker="Toolbox" title="Technical Skills" />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.cat} delay={i * 80}>
            <div className="glass glass-hover h-full p-6">
              <h3 className="mb-4 font-display font-semibold text-cyan2">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">{s.items.map((it) => <span key={it} className="chip">{it}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])
  const Icon = icons[p.icon]
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <div className="glass max-h-[90vh] w-full max-w-lg overflow-y-auto bg-navy p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan2 text-ink"><Icon /></span>
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-white"><X /></button>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-white">{p.title}</h3>
        <h4 className="mt-5 text-xs font-semibold uppercase tracking-widest text-cyan2">Objective</h4>
        <p className="mt-1 text-slate-300">{p.objective}</p>
        <h4 className="mt-5 text-xs font-semibold uppercase tracking-widest text-cyan2">Tools & Technologies</h4>
        <div className="mt-2 flex flex-wrap gap-2">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      </div>
    </div>
  )
}

function Projects() {
  const [sel, setSel] = useState(null)
  return (
    <section id="projects"><div className="mx-auto max-w-6xl">
      <Heading kicker="Selected work" title="Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = icons[p.icon]
          return (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass glass-hover flex h-full flex-col overflow-hidden">
                <div className="circuit relative grid h-36 place-items-center bg-gradient-to-br from-electric/20 to-cyan2/10" aria-hidden="true">
                  <Icon size={52} className="text-cyan2 drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                  <p className="mt-4 flex-1 text-sm text-slate-300">{p.objective}</p>
                  <button onClick={() => setSel(p)} className="btn btn-ghost mt-5 self-start !py-2">View Details <ArrowRight size={14} /></button>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
      {sel && <ProjectModal p={sel} onClose={() => setSel(null)} />}
    </div></section>
  )
}

function Experience() {
  return (
    <section id="experience"><div className="mx-auto max-w-4xl">
      <Heading kicker="Hands-on learning" title="Traineeship & Experience" />
      <div className="space-y-6 border-l border-cyan2/30 pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 80}>
            <div className="glass glass-hover relative p-6">
              <span className="absolute -left-[41px] top-7 grid h-5 w-5 place-items-center rounded-full bg-ink ring-2 ring-cyan2"><Briefcase size={11} className="text-cyan2" /></span>
              <div className="flex flex-wrap items-center gap-2"><span className="chip">{e.date}</span><span className="chip">{e.dur}</span></div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{e.org}</h3>
              <p className="mt-1 text-slate-300">{e.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}

function Certifications() {
  return (
    <section id="certifications"><div className="mx-auto max-w-5xl">
      <Heading kicker="Learning" title="Certifications" />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div className="glass glass-hover h-full p-6">
              <Award className="mb-3 text-cyan2" />
              <h3 className="font-display font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-cyan-200">{c.issuer}</p>
              <p className="mt-3 text-sm text-slate-300">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}

function Achievements() {
  return (
    <section id="achievements"><div className="mx-auto max-w-5xl">
      <Heading kicker="Beyond the classroom" title="Achievements & Activities" />
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon]
          return (
            <Reveal key={a.title} delay={i * 80}>
              <div className="glass glass-hover h-full p-6">
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-electric/15 text-cyan2"><Icon size={22} /></span>
                <h3 className="font-display font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{a.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
      <Reveal className="mt-14">
        <h3 className="mb-5 text-center font-display text-xl font-semibold text-white">Strengths</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {strengths.map((s) => <span key={s} className="glass px-5 py-2 text-sm font-medium text-cyan-100">{s}</span>)}
        </div>
      </Reveal>
    </div></section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (f.name.trim().length < 2) x.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) x.email = 'Please enter a valid email.'
    if (f.message.trim().length < 10) x.message = 'Message should be at least 10 characters.'
    setErr(x)
    if (Object.keys(x).length) return
    // No backend configured: opens the visitor's email app with the message prefilled.
    // To send directly from the site, see "Connect a real contact form" in the README.
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.name)}&body=${body}`
    setDone(true)
  }
  const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan2 focus:outline-none'
  const rows = [
    [Mail, profile.email, `mailto:${profile.email}`],
    [Phone, profile.phone, profile.phoneHref],
    [MapPin, profile.location, null],
  ]
  return (
    <section id="contact"><div className="mx-auto max-w-5xl">
      <Heading kicker="Get in touch" title="Contact" />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal><div className="glass h-full space-y-5 p-7">
          {rows.map(([Icon, text, href]) => (
            <div key={text} className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-cyan2"><Icon size={20} /></span>
              {href ? <a href={href} className="break-all hover:text-cyan2">{text}</a> : <span>{text}</span>}
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Linkedin size={16} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>
          </div>
        </div></Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} noValidate className="glass space-y-4 p-7">
            {[['name', 'Your name', 'text'], ['email', 'Your email', 'email']].map(([k, ph, t]) => (
              <div key={k}>
                <label htmlFor={k} className="sr-only">{ph}</label>
                <input id={k} type={t} placeholder={ph} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={field} aria-invalid={!!err[k]} />
                {err[k] && <p className="mt-1 text-xs text-rose-400">{err[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows="4" placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={field} aria-invalid={!!err.message} />
              {err.message && <p className="mt-1 text-xs text-rose-400">{err.message}</p>}
            </div>
            <button className="btn btn-primary" type="submit"><Send size={16} /> Send Message</button>
            {done && <p className="text-sm text-cyan-200">Your email app should open with the message ready to send.</p>}
          </form>
        </Reveal>
      </div>
    </div></section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center">
      <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
      <p className="text-sm text-slate-400">{profile.title} | {profile.subtitle}</p>
      <ul className="my-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {nav.map((n) => <li key={n}><a href={`#${id(n)}`} className="text-sm text-slate-400 hover:text-cyan2">{n}</a></li>)}
      </ul>
      <p className="text-xs text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Education /><Skills /><Projects /><Experience /><Certifications /><Achievements /><Contact />
      </main>
      <Footer />
    </>
  )
}
