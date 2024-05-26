import axios from "axios";
import { createClient } from "@supabase/supabase-js";

export const axiosInstance = axios.create({
  baseURL: "https://boifsagljnxhmudjteza.supabase.co/rest/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaWZzYWdsam54aG11ZGp0ZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NzE4NDIsImV4cCI6MjAzMjI0Nzg0Mn0.R_waJr69LIVUQJYLczUZ8Qj6SL-S1002Gxuq2n07Aoo",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaWZzYWdsam54aG11ZGp0ZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NzE4NDIsImV4cCI6MjAzMjI0Nzg0Mn0.R_waJr69LIVUQJYLczUZ8Qj6SL-S1002Gxuq2n07Aoo",
  },
});

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://boifsagljnxhmudjteza.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaWZzYWdsam54aG11ZGp0ZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NzE4NDIsImV4cCI6MjAzMjI0Nzg0Mn0.R_waJr69LIVUQJYLczUZ8Qj6SL-S1002Gxuq2n07Aoo"
);
