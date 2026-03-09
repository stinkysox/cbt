import { motion } from "framer-motion";
import { Clock, MapPin, Globe, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { siteData } from "@/data/content";

const OfficePulse = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: siteData.officePulse.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
      
      <div className="relative bg-background border border-border/50 rounded-[2rem] p-8 overflow-hidden">
        <div className="flex flex-col gap-10">
          <div>
            <span className="text-xs font-display font-medium text-accent tracking-[0.3em] uppercase block mb-6">Office Pulse</span>
            <h3 className="text-3xl font-display font-bold mb-2">{siteData.officePulse.location}</h3>
            <p className="text-muted-foreground font-body text-sm flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              {siteData.officePulse.coordinates}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-foreground/[0.03] rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-accent">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-display font-medium text-muted-foreground uppercase tracking-widest">Local Time</p>
                <p className="text-xl font-display font-bold text-foreground">{time}</p>
              </div>
            </div>

            <div className="bg-foreground/[0.03] rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-amber-500">
                <Sun size={18} />
              </div>
              <div>
                <p className="text-[10px] font-display font-medium text-muted-foreground uppercase tracking-widest">Weather</p>
                <p className="text-xl font-display font-bold text-foreground">Sunny</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-sm font-body text-muted-foreground tracking-tight">Open for collaboration</p>
            </div>
            <Globe size={18} className="text-muted-foreground/30" />
          </div>
        </div>

        {/* Pulsing map background placeholder */}
        <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default OfficePulse;
