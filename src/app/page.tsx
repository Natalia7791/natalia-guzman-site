'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Office Administration & Organization",
  "Inventory and Stock Management",
  "Team Coordination and Supervision",
  "Customer Service and Communication",
  "Scheduling, Planning and Reporting",
  "Microsoft Office · Google Workspace",
  "Document Handling and Data Entry",
  "Problem Solving and Adaptability",
  "Multitasking and Time Management",
  "Teamwork and Reliability",
];

const projects = [
 {
  title: "Procedure Standardization",
  description: "Development of procedural instructions and documentation to ensure consistency and efficiency across operations.",
  tags: ["Documentation", "Process Design", "Organization"],
  links: { demo: "#", code: "#" },
},

];

const education = [
   { label: "Technician in Process Industry Technologies", place: "SUETRA Institute · Argentina", years: "2010 – 2013" },
   { label: "Teaching Degree in Process Industry Technologies", place: "SUETRA Institute · Argentina", years: "2010 – 2013" },
  { label: "Physics Teaching Degree (incomplete)", place: "University of Mar del Plata · Argentina", years: "2007 – 2010" },
  { label: "High School Diploma · Auxiliary in Statistics", place: "E.D.E.M. Nº1 · Mar del Plata", years: "1991 – 1994" },
];

const certifications = [
  "Information and Communication Technologies",
  "Proofreading Techniques",
  "English for Software Development",
  "Introduction to UX Design",
];

const experience = [
  {
    role: "Store Coordinator",
    company: "Amazon · Girona",
    period: "2024 – Present",
    bullets: [
      "Coordinate daily store-floor operations and assign team tasks.",
      "Oversee stock management, safety standards, and process flow.",
      "Provide team support, communication, and performance follow-up.",
    ],
  },
  {
    role: "Associate I",
    company: "AmAmazon · Girona",
    period: "2023 – 2024",
    bullets: [
     "Experience in packing, re-binning, and induction processes within warehouse operations."
    ],
  },
  {
    role: "School Secretary",
    company: "Municipality of General Pueyrredón · Argentina",
    period: "2019 – 2021",
    bullets: [
      "Assisted school administration with document processing and communication.",
      "Managed attendance, schedules, and front-desk coordination.",
      "Maintained student and teacher records in digital and paper formats.",
    ],
  },
  {
    role: "Team Coordinator",
    company: "Elbibliote.com / SUETRA · Argentina",
    period: "2013 – 2019",
    bullets: [
 "Coordinated teaching staff: planned schedules, assigned tasks and deadlines, and monitored progress.",
    "Reviewed and corrected materials to ensure accuracy, clarity, and consistency of style and tone.",
    "Organized digital resources, version control, and content handoffs to keep workflows efficient.",
    ],
  },
];


export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Natalia Lucrecia Guzman · Portfolio</a>
          <div className="flex items-center gap-2">
        

            <Button variant="default" onClick={() => window.print()} className="gap-2">
              <Download size={18}/> Export PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
  Natalia Lucrecia Guzman <span className="text-slate-500">· Store Coordinator</span>
</h1>

            <p className="mt-4 text-slate-600 max-w-2xl">
  Organized and detail-oriented professional with solid experience in coordination, inventory management, and customer service. 
  Currently working as a <strong>Store Coordinator</strong>, managing administrative operations and daily workflows. 
  Skilled in planning, reporting, and communication, with a strong focus on improving processes, supporting team performance, 
  and enhancing overall business efficiency.
</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="gap-2"><a href="#projects"><ExternalLink size={18}/> View projects</a></Button>
              <Button variant="outline" asChild className="gap-2"><a href="#contact"><Mail size={18}/> Contact</a></Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1"><MapPin size={16}/> Girona · Spain</span>
              <span className="inline-flex items-center gap-1"><Globe size={16}/> Spanish (native) · English B2 </span>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="md:col-span-2">
            <Card className="rounded-2xl shadow-md">
              <CardHeader><CardTitle>Quick contact</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail size={16}/> natalia.lucrecia.guzman@gmail.com</p>
                <div className="pt-2 flex gap-2">
                  <Button asChild variant="outline"><a href="mailto:natalia.lucrecia.guzman@gmail.com">Send email</a></Button>
                  <Button asChild variant="secondary"><a href="#contact">Form</a></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-slate-600 mt-1">Tools and capabilities I work with.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary" className="text-sm py-1 px-3 rounded-xl">{s}</Badge>

          ))}
      
        </div>
      </section>

  {/* EDUCATION & TRAINING */}
<section id="education" className="max-w-6xl mx-auto px-4 py-10">
  <h2 className="text-2xl font-semibold">Education & Training</h2>
  <div className="mt-4 grid md:grid-cols-2 gap-6">
    <Card className="rounded-2xl">
      <CardHeader><CardTitle>Education</CardTitle></CardHeader>
      <CardContent className="text-sm text-slate-700 space-y-1">
        <p><span className="font-medium">Degree in Process Industry Technologies</span> · SUETRA Institute · Argentina · 2010 – 2013</p>
        <p><span className="font-medium">Physics Teaching Degree (60%)</span> · University of Mar del Plata · Argentina · 2007 – 2010</p>
        <p><span className="font-medium">High School Diploma · Auxiliary in Statistics</span> · E.D.E.M. Nº1 · Mar del Plata · 1991 – 1994</p>
      </CardContent>
    </Card>
    <Card className="rounded-2xl">
      <CardHeader><CardTitle>Certifications</CardTitle></CardHeader>
      <CardContent className="text-sm text-slate-700 space-y-1">
        <p>Excel for Data Management and Reporting</p>
        <p>Invoice On Hold Resolution Tool</p>
        <p>EU Ops Coupa Training</p>
        <p>Amazon Global Spending and Transaction Policy Training</p>
        <p>Information and Communication Technologies</p>
        <p>Introduction to UX Design</p>
        <p>Proofreading Techniques</p>
      </CardContent>
    </Card>
  </div>
</section>


      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          {experience.map((e, i) => (
            <div key={i} className="grid md:grid-cols-7 gap-4">
              <div className="md:col-span-2"><p className="text-sm text-slate-500">{e.period}</p></div>
              <div className="md:col-span-5">
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-slate-600">{e.company}</p>
                <ul className="list-disc list-inside text-sm mt-2 text-slate-700 space-y-1">
                  {e.bullets.map((b, k) => <li key={k}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-slate-600 mt-1">Interested in collaborating or have a role in mind?</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader><CardTitle>Send me a message</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! I will get back to you soon.");}} className="grid grid-cols-1 gap-3">
                <input required placeholder="Your name" className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"/>
                <input required type="email" placeholder="Your email" className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"/>
                <textarea required rows={5} placeholder="Your message" className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"/>
                <div className="flex gap-2">
                  <Button type="submit" className="gap-2">Send</Button>
                  <Button type="button" variant="outline" onClick={()=>window.print()} className="gap-2">
                    <Download size={16}/> Save as PDF
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Details</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p className="flex items-center gap-2"><Mail size={16}/> natalia.lucrecia.guzman@gmail.com</p>
             
          
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Natalia Lucrecia Guzman · Portfolio. Built with Next.js & Tailwind.</p>
      </footer>

      <style>{`
        @media print {
          nav, #contact form button[type="button"], #projects a[target]::after { display: none !important; }
          a { text-decoration: none; color: inherit; }
          .rounded-2xl { box-shadow: none !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
