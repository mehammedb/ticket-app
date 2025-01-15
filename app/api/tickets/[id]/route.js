import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    // if (!deletedTicket) {
    //   return NextResponse.json(
    //     { message: "Ticket not found" },
    //     { status: 404 }
    //   );
    // }
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const ticketFound = await Ticket.find({ _id: id });
    if (!ticketFound || ticketFound.length === 0) {
      return NextResponse.json({ error: "Ticket not found!" }, { status: 404 });
    }
    return NextResponse.json({ ticketFound }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const updatedData = body.formData;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, {
      ...updatedData,
    });
    if (!updatedTicket) {
      return NextResponse.json(
        { message: "Ticket not updated" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
