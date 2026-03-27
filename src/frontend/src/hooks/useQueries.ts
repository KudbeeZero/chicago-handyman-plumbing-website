import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Lead } from "../backend";
import { useActor } from "./useActor";

export function useGetLeads() {
  const { actor, isFetching } = useActor();
  return useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string | null;
      zip: string | null;
      serviceNeeded: string;
      details: string;
      requestType: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitLead(
        data.name,
        data.phone,
        data.email,
        data.zip,
        data.serviceNeeded,
        data.details,
        data.requestType,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
