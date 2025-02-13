"use client";

import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-1 sm:mx-2">
    <div className="flex items-center">
      <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="text-black mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium">
      {label}
    </span>
  </div>
);

export default function CountdownTimer() {
  const t = useTranslations();
  const targetDate = new Date("2025-02-14T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    if (savedTimeLeft) {
      setTimeLeft(JSON.parse(savedTimeLeft));
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const newTimeLeft = { days, hours, minutes, seconds };
        setTimeLeft(newTimeLeft);

        localStorage.setItem("timeLeft", JSON.stringify(newTimeLeft));
      } else {
        clearInterval(timer);
        localStorage.removeItem("timeLeft");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mx-auto mt-4 w-full px-4 sm:px-6 xl:container lg:px-80">
      <div className="flex flex-col items-center">
        <span className="text-[48px] xl:text-[76px] mt-10 sm:mt-16 md:mt-[80px] text-white text-center">
          {t("GettingReady")}
        </span>
        <div className="flex justify-center items-center w-full lg:max-w-2xl mt-6 sm:mt-8">
          <div className="bg-gray-100 p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 rounded-lg shadow-md w-full overflow-hidden h-[114px] md:h-[150px]">
            <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-4 xl:gap-6 flex-nowrap h-full">
              <TimeUnit value={timeLeft.days} label={t("CountDown.days")} />
              <span
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-black -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-5 xl:-mt-6"
                style={{ minWidth: "1rem" }}
              >
                :
              </span>
              <TimeUnit value={timeLeft.hours} label={t("CountDown.hours")} />
              <span
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-black -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-5 xl:-mt-6"
                style={{ minWidth: "1rem" }}
              >
                :
              </span>
              <TimeUnit
                value={timeLeft.minutes}
                label={t("CountDown.minutes")}
              />
              <span
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-black -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-5 xl:-mt-6"
                style={{ minWidth: "1rem" }}
              >
                :
              </span>
              <TimeUnit
                value={timeLeft.seconds}
                label={t("CountDown.seconds")}
              />
            </div>
          </div>
        </div>
        <p className="text-white text-center text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-lg mx-auto mt-10 sm:mt-16 md:mt-20 px-4">
          {t("SubscriptionMessage")}
        </p>
        <div className="flex flex-col space-y-2 mt-5">
          <div className="w-[343px] relative lg:w-[560px] max-w-md">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-[56px] pr-10 placeholder:text-[#545454] bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ArrowRight className="h-5 w-5 text-[#545454]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
