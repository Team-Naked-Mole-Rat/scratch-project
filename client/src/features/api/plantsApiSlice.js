import { apiSlice } from "./apiSlice.js";

export const plantsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserPlants: builder.query({

      queryFn: (arg, queryApi, extraOptions, baseQuery) => {
        const username = queryApi.getState().auth.userInfo?.username;
        if (!username) {
          return { error: { status: 'CUSTOM_ERROR', error: 'Username not found in the state.' } };
        }
        const url = `/api/${username}/plants`;
        return baseQuery({ url, method: 'GET' });
      }

    }),

    addPlant: builder.mutation({

      queryFn: (data, queryApi, extraOptions, baseQuery) => {
        const username = queryApi.getState().auth.userInfo?.username;
        if (!username) {
          return { error: { status: 'CUSTOM_ERROR', error: 'Username not found in the state.' } };
        }
        const url = `/api/${username}/addPlant`;
        return baseQuery({ url, method: 'POST', body: data });
      }

    }),
    editPlant: builder.mutation({

      queryFn: (data, queryApi, extraOptions, baseQuery) => {
        const username = queryApi.getState().auth.userInfo?.username;
        if (!username) {
          return { error: { status: 'CUSTOM_ERROR', error: 'Username not found in the state.' } };
        }
        const url = `/api/${username}/updatePlant`;
        return baseQuery({ url, method: 'POST', body: data });
      }

    }),
    deletePlant: builder.mutation({

      queryFn: ({ username, plantId }, queryApi, extraOptions, baseQuery) => {
        if (!username) {
          return { error: { status: 'CUSTOM_ERROR', error: 'Username not found in the state.' } };
        }
        const url = `/api/${username}/deletePlant/${plantId}`;
        return baseQuery({ url, method: 'DELETE' });
      }

    }),
  }),
});

export const {
  useAddPlantMutation,
  useEditPlantMutation,
  useDeletePlantMutation,
  useGetUserPlantsQuery,
} = plantsApiSlice;
