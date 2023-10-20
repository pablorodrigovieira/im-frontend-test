import Link from "next/link";
import { PageProps } from "@/interfaces/app-interfaces";
import { useTranslation } from "@/app/i18n";
import { ChevronLeft } from "lucide-react";

export default async function Page(props: PageProps) {
  const { params } = props;
  const lng = params.lng;
  const { t } = await useTranslation(lng);

  return (
    <main className="flex flex-col flex-grow">
      <div className="flex justify-between">
        <Link className="text-gray-600 flex gap-2" href={`/${params.lng}`}>
          <ChevronLeft />
          {t("buttons.back")}
        </Link>

        <span className="text-right mb-6 mx-2">
          <span className="text-gray-600">{t("sign_in_page.new_here")}</span>
          <Link className="text-purple-700 font-semibold" href={`/${params.lng}/sign-up`}>
            {t("buttons.create_an_account")}
          </Link>
        </span>
      </div>
      <section className="max-w-[460px] mx-auto mt-10">
        <h1 className="text-2xl font-bold">{t("sign_in_page.title")}</h1>
      </section>
    </main>
  );
}
