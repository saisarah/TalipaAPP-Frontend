import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGroup } from "../groups";

export default function GroupInfo() {
  const { id } = useParams();
  const { data: group, isLoading } = useQuery(["groups", id], () =>
    getGroup(id)
  );

  return (
    <div className="mx-auto min-h-screen max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam maxime, rem
      iure repudiandae nostrum incidunt sequi explicabo voluptatibus assumenda.
      Distinctio aut doloribus obcaecati porro adipisci! Doloribus officia
      provident inventore nihil.
    </div>
  );
}
