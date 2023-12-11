import axios from "axios";

const PayoutsEndpoint =
  "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test";

export const fetchPayoutsAPI = async (page: number, limit: number) => {
  try {
    const data = await axios.get(`${PayoutsEndpoint}/payouts`, {
      params: {
        page,
        limit,
      },
    });

    return data.data;
  } catch (error) {
    console.error("[fetchPayoutsAPI] => ", error);
    throw error;
  }
};

export const fetchSearchedPayoutsAPI = async (search: string) => {
  try {
    const data = await axios.get(`${PayoutsEndpoint}/search`, {
      params: { query: search },
    });
    return data.data;
  } catch (error) {
    console.error("[fetchSearchedPayoutsAPI] => ", error);
    throw error;
  }
};
