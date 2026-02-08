export default function ServiceCard({ image, icon, title, description }) {
  return (
    <div className="overflow-hidden rounded-xl">
      {/* Card Image */}
      <div className="w-full aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Card Body */}
      <div className="bg-white px-6 pt-4 pb-6 rounded-b-xl flex flex-col gap-4">
        {/* Icon Badge */}
        <div className="w-fit bg-gray-200 p-2 rounded flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-extrabold uppercase text-navy leading-[1.2]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] font-light text-gray-500 leading-[1.2]">
          {description}
        </p>

        {/* Learn More Link */}
        <a
          href="#"
          className="text-[14px] font-medium text-yellow inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          Learn More
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
