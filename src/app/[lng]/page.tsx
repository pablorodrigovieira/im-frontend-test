import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { PageProps } from "@/interfaces/app-interfaces";

export default async function Page(props: PageProps) {
  const { params } = props;
  const lng = params.lng;
  const { t } = await useTranslation(lng);

  return (
    <main className="flex flex-col flex-grow">
      <span className="text-right mb-6 mx-2">
        <span className="text-gray-600">{t("welcome_page.already_have_account")}</span>
        <Link className="text-purple-700 font-semibold" href={`/${lng}/sign-in`}>
          {t("buttons.sign_in")}
        </Link>
      </span>
      <section className="max-w-[460px] mx-auto mt-10">
        <h1 className="text-2xl font-bold">{t("welcome_page.title")}</h1>
      </section>
    </main>
  );
}
