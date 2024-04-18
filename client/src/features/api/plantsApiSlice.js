import { apiSlice } from "./apiSlice";
const PLANT_API_URL = "/users/plants";

export const plantsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPlant: builder.mutation({
      query: (data) => ({
        url: `${PLANT_API_URL}/add`,
        method: "POST",
        body: data,
      }),
      editPlant: builder.mutation({
        query: (data) => ({
          url: `${PLANT_API_URL}/edit`,
          method: "POST",
          body: data,
        }),
      }),
      deletePlant: builder.mutation({
        query: (data) => ({
          url: `${PLANT_API_URL}/delete`,
          method: "POST",
          body: data,
        }),
      }),
    }),
  }),
});

export const {
  useAddPlantMutation,
  useEditPlantMutation,
  useDeletePlantMutation,
} = plantsApiSlice;
