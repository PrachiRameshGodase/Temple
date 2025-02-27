import React, { useEffect, useState, useRef } from "react";
import "./StatsSection.scss";

const statsData = [
    { id: 1, value: 50, suffix: "+", label: "Years of Spiritual Service", icon: "🙏" },
    { id: 2, value: 5000, suffix: "+", label: "Daily Visitors", icon: "🙏" },
    { id: 3, value: 20000, suffix: "+", label: "Poojas & Aartis Conducted", icon: "🕉️" },
    { id: 4, value: 34000, suffix: "k+", label: "Donations Received Annually", icon: "💰" },
    { id: 5, value: 150, suffix: "+", label: "Active Volunteers", icon: "👥" },
    { id: 6, value: 250, suffix: "+", label: "Medical Camps Held", icon: "🏥" },
    { id: 7, value: 15, suffix: "+", label: "Infrastructure Development Projects", icon: "🏗️" },
    { id: 8, value: 1000, suffix: "+", label: "Bhajans & Kirtans Organized", icon: "🎵" },
];

const StatsSection = () => {
    const [counters, setCounters] = useState(statsData.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    startCounting();
                }
            },
            { threshold: 0.5 } // 50% section dikhai de tabhi start ho
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const startCounting = () => {
        const duration = 6000; // 6 sec
        const steps = 60;
        const interval = duration / steps;

        const updateCounters = () => {
            setCounters((prevCounters) =>
                prevCounters.map((count, index) =>
                    Math.min(statsData[index].value , count + statsData[index].value / steps)
                )
            );
        };

        const intervalId = setInterval(updateCounters, interval);
        setTimeout(() => clearInterval(intervalId), duration);
    };

    return (
        <section ref={sectionRef} className="stats-section">
            {statsData.map((stat, index) => (
                <div key={stat.id} className="stat-item">
                    <h2>{Math.round(counters[index])}{stat.suffix}</h2>
                    <p>{stat.icon} {stat.label}</p>
                </div>
            ))}
        </section>
    );
};

export default StatsSection;
