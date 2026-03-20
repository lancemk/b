import PageTransition from "@/components/layout/PageTransition";
import { profile } from "@/data/profile";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="page-container max-w-3xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Contact</p>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">Interested in working together, speaking opportunities, or just want to connect.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="space-y-4 mb-8">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" /> {profile.email}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" /> {profile.location}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <div className="p-6 rounded-lg bg-card border-border h-full flex flex-col justify-center">
              <h3 className="font-mono font-semibold text-foreground mb-2">Let's Connect</h3>
              <p className="text-sm text-muted-foreground">
                The best way to reach me is via LinkedIn or other social platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
