export const TimelineItem = ({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="my-1">
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row timeLineTheme items-start mb-1 group-last:before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-4 after:box-content after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 chipTheme">
            {date}
          </time>
          <div className="font-medium cardTitleTheme mb-1 sm:mb-0">{title}</div>
        </div>
        <div className="textSecondaryTheme">{description}</div>
      </div>
    </div>
  );
};
