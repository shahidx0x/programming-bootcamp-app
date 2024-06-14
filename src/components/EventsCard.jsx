import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Link } from "react-router-dom";
import { useGetEventsQuery } from "@/redux/services/AppServices";

export function EventsCard() {
  const { data } = useGetEventsQuery();

  return (
    <div id="events">
      <BentoGrid className="">
        {data?.map((item, i) => (
          <Link
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            key={i}
            to={{
              pathname: `/event/details/${encodeURIComponent(item.header)}`,
            }}
            state={{ data: item }}
          >
            <BentoGridItem
              title={item.header}
              description={item?.programming_bootcamp?.description}
              header={item.header_image}
              icon={item.icon}
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
}
