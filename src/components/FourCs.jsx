import SectionHeading from "./ui/SectionHeading";

const values = [
  {
    title: "Craftsmanship First",
    description:
      "We treat every pour as permanent work, because it is. From prep to finish, we take the time to do it right, not fast.",
  },
  {
    title: "Confidence in Proven Techniques",
    description:
      "We follow industry-tested methods for site prep, reinforcement, pouring, curing, and finishing to ensure long-lasting results.",
  },
  {
    title: "Committed to Quality",
    description:
      "We use the right materials, the right mix, and the right process. Never cutting corners that compromise durability or appearance.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Clear communication, reliable timelines, and pride in our work mean we don't consider a job done until you're confident in the result.",
  },
];

export default function FourCs() {
  return (
    <section className="px-4">
      <div className="px-4">
        <SectionHeading title="Our 4 C's" />

        <div className="flex flex-col gap-4">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-[14px] font-extrabold uppercase text-navy leading-[1.2]">
                {item.title}
              </h3>
              <p className="text-[14px] font-light text-gray-500 leading-[1.2]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
