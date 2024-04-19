import { apiSlice } from "./apiSlice.js";
const PLANT_API_URL = "/api/user";

export const plantsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserPlants: builder.query({
      query: (data) => ({
        url: `${PLANT_API_URL}/plants`,
        method: "GET",
        // Currently harded coded in userPlant controller
        // body: { user: { username: "user a" } },
      }),
    }),
    addPlant: builder.mutation({
      query: (data) => ({
        url: `${PLANT_API_URL}/addPlant`,
        method: "POST",
        body: data,
      }),
    }),
    editPlant: builder.mutation({
      query: (data) => ({
        url: `${PLANT_API_URL}/updatePlant`,
        method: "POST",
        body: data,
      }),
    }),
    deletePlant: builder.mutation({
      query: (data) => ({
        url: `${PLANT_API_URL}/deletePlant`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddPlantMutation,
  useEditPlantMutation,
  useDeletePlantMutation,
  useGetUserPlantsQuery,
} = plantsApiSlice;
