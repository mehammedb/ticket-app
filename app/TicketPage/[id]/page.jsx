import TicketForm from "@/app/(components)/TicketForm";

const getUpdateData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: "no-store",
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Error in finding tickets");
  }
  return res.json();
};

const TicketPage = async ({ params }) => {
  // Use async to wait for params before accessing its values
  const { id } = await params;
  const editMode = id === "new" ? false : true;

  let updateData = { _id: "new" };
  if (editMode) {
    updateData = await getUpdateData(id);
    updateData = updateData.ticketFound[0];
  }

  return (
    <div>
      <TicketForm ticket={updateData} />
    </div>
  );
};

export default TicketPage;
