import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[150px] lg:mt-0">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold">{t("aboutUs")}</h1>

        <p className="text-gray-600 leading-relaxed">{t("description")}</p>

        <div className="space-y-6 flex flex-row lg:flex-col justify-start lg:justify-between items-end lg:items-start">
          <div>
            <div className="text-6xl font-bold text-blue-400">600M+</div>
            <div className="text-xl font-semibold mt-0 md:mt-2">
              {t("users")}
            </div>
          </div>

          <div className="ml-10 lg:ml-0">
            <div className="text-6xl font-bold text-blue-400">135+</div>
            <div className="text-xl font-semibold mt-0 md:mt-2">
              {t("games")}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-[#E3FCFF] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t("hourAccess")}</h3>
            <p className="text-gray-600">{t("hourDescription")}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-[#E3FCFF] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t("design")}</h3>
            <p className="text-gray-600">{t("designDescription")}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-[#E3FCFF] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t("team")}</h3>
            <p className="text-gray-600">{t("teamDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
