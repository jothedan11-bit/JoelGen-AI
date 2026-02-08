import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// We use the @shared alias we set up in babel.config.js
import { api } from "../../shared/routes";
import { type Image } from "../../shared/schema"; 

// --- PHASE 2: THE CLOUD MOVE ---
// NOTE: For the APK to actually work, you will eventually need your 
// Replit URL here (e.g., "https://your-project.replit.app")
const BASE_URL = ""; 

export function useImages() {
  return useQuery({
    queryKey: [api.images.list.path],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}${api.images.list.path}`);
      if (!res.ok) throw new Error("Failed to fetch images");
      const json = await res.json();
      
      // We parse the data to ensure it matches our Zod schema
      return api.images.list.responses[200].parse(json);
    },
  });
}

export function useGenerateImage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { prompt: string; aspectRatio?: string; style?: string }) => {
      const res = await fetch(`${BASE_URL}${api.images.generate.path}`, {
        method: api.images.generate.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const json = await res.json();

      if (!res.ok) {
        if (res.status === 400) {
           const error = api.images.generate.responses[400].parse(json);
           throw new Error(error.message);
        }
        if (res.status === 500) {
           const error = api.images.generate.responses[500].parse(json);
           throw new Error(error.message);
        }
        throw new Error("Failed to generate image");
      }
      
      return api.images.generate.responses[201].parse(json);
    },
    onSuccess: (newImage) => {
      queryClient.setQueryData([api.images.list.path], (old: any[] | undefined) => {
        if (!old) return [newImage];
        return [newImage, ...old];
      });
      queryClient.invalidateQueries({ queryKey: [api.images.list.path] });
    },
  });
}