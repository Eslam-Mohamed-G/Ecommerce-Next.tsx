"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const [time, setTime] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const target = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // مثال: بعد 3 أيام

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(interval);
                return;
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTime({
                hours: String(h).padStart(2, "0"),
                minutes: String(m).padStart(2, "0"),
                seconds: String(s).padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-3 text-center text-textColor">
            <div className="">
                <p className="text-xs font-semibold w-fit">Days</p>
                <p className="text-4xl font-bold">02</p>
            </div>
            <Colon/>
            <TimeBox label="Hours" value={time.hours} />
            <Colon/>
            <TimeBox label="Minutes" value={time.minutes} />
            <Colon/>
            <TimeBox label="Seconds" value={time.seconds} />
        </div>
    );
}

function TimeBox({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs font-semibold">{label}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
}

function Colon() {
    return (
        <div className="flex flex-col gap-2 mt-5">
            <div className="bg-buttonColor w-1 h-1 rounded-full" />
            <div className="bg-buttonColor w-1 h-1 rounded-full" />
        </div>
    );
}