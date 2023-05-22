import TimeSelector from "./_components/TimeSelector";
import { useTranslation } from "~/i18n";
import { PageProps } from "~/types";

export default async function Layout({
  children,
  params: { locale },
}: PageProps<{}, { children: React.ReactNode }>) {
  const { t } = await useTranslation(locale);

  return (
    <>
      {children}
      <TimeSelector />
    </>
  );
}
