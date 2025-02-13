"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select";
import { ReactNode, useTransition, useState } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);

  function onSelectChange(value: string) {
    const nextLocale = value;
    setSelectedLocale(nextLocale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript sẽ kiểm tra các `params` và `pathname`
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  const renderFlag = (locale: string) => {
    switch (locale) {
      case "vi":
        return "🇻🇳";
      case "en":
        return "🇺🇸";
      default:
        return "🌐";
    }
  };

  return (
    <Select
      value={selectedLocale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[80px] lg:border-none shadow-none">
        <span className="text-2xl">{renderFlag(selectedLocale)}</span>
      </SelectTrigger>
      <SelectContent className="z-[9999999]" position="popper" sideOffset={5}>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
