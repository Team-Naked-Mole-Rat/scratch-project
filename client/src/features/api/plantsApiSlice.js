import { apiSlice } from "./apiSlice.js";

export const plantsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserPlants: builder.query({
      queryFn: (username, api, extraOptions, baseQuery) => {
        console.log('API called for username:', username);
        if (!username) {
            return { error: { status: 'CUSTOM_ERROR', error: 'Username not found in the state.' } };
        }
        const url = `/api/${username}/plants`;
        return baseQuery({ url, method: 'GET' });
    },
      providesTags: ['Plants'],

    }),

    addPlant:  builder.mutation({
      query: ({ username, data }) => ({
        url: `/api/${username}/addPlant`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Plants'],
    }),
    editPlant: builder.mutation({
      query: ({ username, plantId, data }) => ({
        url: `/api/${username}/updatePlant/${plantId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Plants'],
    }),
    deletePlant: builder.mutation({
      query: ({ username, plantId }) => ({
        url: `/api/${username}/deletePlant/${plantId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Plants'],
    }),
  }),
});

export const {
  useAddPlantMutation,
  useEditPlantMutation,
  useDeletePlantMutation,
  useGetUserPlantsQuery,
} = plantsApiSlice;
