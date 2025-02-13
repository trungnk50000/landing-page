import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div
      className="w-full bg-cover bg-center text-white py-10 px-4 min-h-[446px] flex justify-center items-center"
      style={{ backgroundImage: "url('/images/bgfooter.png')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start w-[85%]">
        <div className="flex flex-col items-center w-full lg:items-start">
          <Image
            src="/images/etech.png"
            alt="Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <div className="flex space-x-4 justify-center lg:mt-0 mt-5 lg:mb-0 mb-5">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={40}
              height={40}
            />
            <Image src="/images/fb.png" alt="Facebook" width={40} height={40} />
            <Image
              src="/images/ins.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-20">
          <div className="text-left mb-10">
            <h3 className="font-bold text-2xl mb-2">{t("address")}</h3>
            <div className="flex space-x-2 items-start mb-2">
              <Image
                src="/images/address.png"
                alt="address"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-sm">{t("address1")}</span>
                <p className="text-sm mt-2">{t("address2")}</p>
              </div>
            </div>
            <p className="flex items-center space-x-2">
              <Image
                src="/images/phone.png"
                alt="phone"
                width={40}
                height={40}
              />
              <span className="text-sm">{t("phone")}</span>
            </p>
          </div>

          <div className="text-left">
            <h3 className="font-bold text-2xl mb-2">{t("subscribe")}</h3>
            <p className="mb-4 text-sm">{t("subscribeDes")}</p>
            <div className="flex">
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
    </div>
  );
}
