import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { SelectItem } from "@/components/ui/select";
import React from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  if (!locale) return null;

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur, index) => (
        <React.Fragment key={cur}>
          <SelectItem key={cur} value={cur} className="cursor-pointer">
            <span className="text-2xl mr-2">{t("flag", { locale: cur })}</span>
            <span className="text-sm">{t("language", { locale: cur })}</span>
          </SelectItem>
          {index === 0 && <hr className="my-2 border-t border-gray-300" />}
        </React.Fragment>
      ))}
    </LocaleSwitcherSelect>
  );
}
