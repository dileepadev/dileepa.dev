export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pageTitleTheme">{title}</p>
      <p className="mt-2 pageSubtitleTheme">{subTitle}</p>
    </div>
  );
}
