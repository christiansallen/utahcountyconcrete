export default function SectionHeading({ title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <div className="w-9 h-1 bg-yellow rounded-full" />
      <h2 className="text-[20px] font-extrabold uppercase text-black tracking-tight leading-none">
        {title}
      </h2>
    </div>
  );
}
