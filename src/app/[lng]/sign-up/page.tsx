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
      </div>
      <section className="max-w-[460px] mx-auto mt-10">
        <h1 className="text-2xl font-bold">{t("sign_up_page.title")}</h1>
      </section>
    </main>
  );
}
