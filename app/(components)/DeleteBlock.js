"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:text-red-200 hover:cursor-pointer"
      onClick={handleClick}
    />
  );
};

export default DeleteBlock;
