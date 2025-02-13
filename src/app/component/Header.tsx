"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import MenuSvg from "./MenuSvg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full z-30">
      <div className="max-w-[1600] mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <svg
              className="w-20 h-12 sm:w-24 sm:h-14 lg:w-[109px] lg:h-16"
              viewBox="0 0 109 64"
              fill="#333333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0405 63.738L43.2125 46.2359H36.5426L37.4309 42.2728H55.3729L54.4988 46.2359H48.6731L44.5011 63.738H39.0405Z"
                fill="white"
              />
              <path
                d="M51.5851 63.738L56.6312 42.2728H71.1178L70.0362 46.2077H61.3968L60.31 50.8899H68.7686L67.9087 54.6414H59.4642L58.3065 59.8032H67.3608L66.0717 63.738H51.5851Z"
                fill="white"
              />
              <path
                d="M83.8107 63.4217C83.5365 63.4875 83.1536 63.5533 82.6619 63.6192C82.1796 63.685 81.6548 63.7461 81.0875 63.8025C80.5296 63.8589 79.9623 63.9059 79.3855 63.9435C78.8182 63.9811 78.3076 63.9999 77.8537 63.9999C76.5583 63.9999 75.4047 63.873 74.3929 63.6192C73.3812 63.3653 72.5254 62.9563 71.8257 62.3922C71.126 61.828 70.5918 61.0947 70.223 60.1921C69.8542 59.28 69.6698 58.1706 69.6698 56.8637C69.6698 56.356 69.6935 55.8247 69.7408 55.27C69.788 54.7153 69.8684 54.1277 69.9819 53.5071L70.4499 51.0531C70.8092 49.1257 71.3151 47.5508 71.9676 46.3285C72.6294 45.0969 73.4332 44.1331 74.3787 43.4374C75.3243 42.7322 76.4164 42.248 77.6551 41.9847C78.9033 41.7215 80.298 41.5898 81.8392 41.5898C82.2931 41.5898 82.799 41.6086 83.3569 41.6463C83.9147 41.6839 84.4632 41.7309 85.0021 41.7873C85.5506 41.8437 86.0517 41.9095 86.5056 41.9847C86.9689 42.0506 87.7432 42.3274 87.9985 42.4026L87.1244 46.0324C86.7651 46.0042 86.1652 45.976 85.7397 45.9478C85.3142 45.9195 84.8698 45.8913 84.4064 45.8631C83.9526 45.8349 83.4892 45.8161 83.0165 45.8067C82.5531 45.7879 82.0993 45.7785 81.6548 45.7785C80.8511 45.7785 80.1372 45.8584 79.5131 46.0183C78.8985 46.1781 78.3548 46.4743 77.882 46.9068C77.4187 47.3299 77.0216 47.9175 76.6906 48.6697C76.3692 49.4125 76.0997 50.3715 75.8822 51.5468L75.4141 54.0007C75.2439 54.9597 75.1588 55.7589 75.1588 56.3983C75.1588 57.0752 75.2439 57.6347 75.4141 58.0766C75.5843 58.5091 75.8349 58.8522 76.1659 59.1061C76.5063 59.36 76.9223 59.5386 77.414 59.642C77.9151 59.7361 78.4872 59.7831 79.1302 59.7831C79.5746 59.7831 80.0332 59.7784 80.506 59.769C80.9788 59.7502 81.4468 59.7313 81.9101 59.7125C82.3735 59.6937 82.8226 59.6702 83.2576 59.642C83.6925 59.6044 84.5046 59.5715 84.864 59.5433L83.8107 63.4217Z"
                fill="white"
              />
              <path
                d="M98.9643 63.738L100.775 54.6978H92.4541L90.2431 63.738H85.1975L89.8286 42.2728H94.8742L93.1491 50.5938H101.677L103.803 42.2728H108.82L103.982 63.738H98.9643Z"
                fill="white"
              />
              <path
                d="M2.32985 7.4963C1.84531 13.8761 7.78096 17.0189 10.8094 17.7928C8.95194 17.1468 7.14163 13.9569 6.46865 12.4427C8.92501 13.9232 15.5538 16.8641 22.4182 16.7834C29.2825 16.7026 32.2773 19.9127 32.9166 21.5278L20.803 22.6383L27.1627 23.2439L29.9892 25.2629L36.1469 24.0515C47.1299 24.4553 50.8178 32.6992 51.2888 36.7707L46.2415 34.9537C37.3582 32.3695 26.6579 36.5016 22.4182 38.8906L26.6579 34.9537C10.5065 38.7493 2.2289 49.7928 0.109032 54.8401C-0.779296 61.7853 3.97864 63.7907 6.46865 63.9253H32.3109C35.0567 63.9253 36.0123 62.2429 36.1469 61.4017L37.5601 55.7487C39.0138 51.2263 35.8777 50.7013 34.128 51.0042C30.6285 50.9369 22.5999 50.8427 18.4813 51.0042C14.3627 51.1657 13.1984 49.4563 13.1311 48.5815C12.9696 44.5436 16.6306 42.8612 18.4813 42.5247L17.8756 45.1493C24.9015 37.6389 33.455 36.0305 36.8535 36.1651C36.8535 36.1651 49.9092 36.5352 52.904 38.184C51.5311 26.0704 41.6316 22.0326 36.8535 21.5278C33.381 17.167 26.5906 15.7403 23.6295 15.572C22.0144 13.7954 23.8314 13.3512 24.9418 13.3512H40.1847C42.6882 13.3512 43.3814 12.409 43.415 11.9379L46.8472 2.54993C48.3008 0.207972 46.6453 -0.108325 45.6358 0.0262709H7.57906C6.03122 -0.141973 2.8144 1.11649 2.32985 7.4963Z"
                fill="white"
              />
              <path
                d="M11.6169 18.8022C3.94499 18.8022 0.815655 13.1493 0.209976 10.3228V16.4805C3.76329 19.5493 9.29515 19.307 11.6169 18.8022Z"
                fill="white"
              />
              <path
                d="M16.2605 26.2723C7.53868 25.6262 1.92606 28.022 0.209976 29.3007V36.4679C0.209976 30.4111 10.9103 27.1471 16.2605 26.2723Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex grow">
            <ul className="hidden xl:flex grow justify-end flex-wrap items-center">
              <li>
                <a className="font-medium text-white font-sans px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer">
                  {t("about")}
                </a>
              </li>
              <li className="ml-3">
                <a className="font-medium text-white font-sans px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer">
                  {t("game")}
                </a>
              </li>
              <li className="ml-3">
                <a className="font-medium text-white font-sans px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer">
                  {t("partner")}
                </a>
              </li>
              <li className="ml-3">
                <a className="font-medium text-white font-sans px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer">
                  {t("contact")}
                </a>
              </li>
              <LocaleSwitcher />
            </ul>
          </div>
          <div className="xl:hidden">
            <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DialogTrigger asChild>
                <MenuSvg />
              </DialogTrigger>
              <DialogContent className="fixed inset-0 w-screen h-screen bg-white p-0 m-0 rounded-none border-0 transform-none translate-x-0 translate-y-0">
                <div className="flex justify-between items-center p-4">
                  <LocaleSwitcher />
                  <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </DialogClose>
                </div>
                <div className="flex flex-col p-8">
                  <ul className="flex flex-col space-y-8 mt-8">
                    <li>
                      <a className="font-bold text-2xl text-black font-sans py-2 flex items-center transition duration-150 ease-in-out">
                        {t("about")}
                      </a>
                    </li>
                    <li>
                      <a className="font-bold text-2xl text-black font-sans py-2 flex items-center transition duration-150 ease-in-out">
                        {t("game")}
                      </a>
                    </li>
                    <li>
                      <a className="font-bold text-2xl text-black font-sans py-2 flex items-center transition duration-150 ease-in-out">
                        {t("partner")}
                      </a>
                    </li>
                    <li>
                      <a className="font-bold text-2xl text-black font-sans py-2 flex items-center transition duration-150 ease-in-out">
                        {t("contact")}
                      </a>
                    </li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
