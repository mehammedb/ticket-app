import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import Prioritydisplay from "./Prioritydisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const timeFormat = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const dateFormat = date.toLocaleString("en-US", options);
    return dateFormat;
  };

  return (
    <Link href={`/TicketPage/${ticket._id}`}>
      <div className="flex flex-col bg-card rounded-md hover:bg-card-hover shadow-lg p-3 m-2">
        <div className="flex mb-3">
          <Prioritydisplay priority={ticket.priority} />
          <div className="ml-auto">
            <DeleteBlock id={ticket._id} />
          </div>
        </div>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-sm my-1">{timeFormat(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
