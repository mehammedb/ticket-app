import DeleteBlock from "./DeleteBlock";
import Prioritydisplay from "./Prioritydisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card rounded-md hover:bg-card-hover shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Prioritydisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description! please do this ticket!
      </p>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-sm my-1">08/31/2024 10:43PM</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
