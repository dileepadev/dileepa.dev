export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-16 pageSubtitleTheme">{title}</p>
    </div>
  );
}
