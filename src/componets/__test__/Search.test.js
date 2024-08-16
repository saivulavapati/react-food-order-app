import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mockData/bodyComponentRestaurantCardsMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render 2 RestaurantCards for Search text tiffins in Body Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restaurant-card");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByText("search");

  const searchInput = screen.getByTestId("search-input-box");

  fireEvent.change(searchInput, { target: { value: "tiffin" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("restaurant-card");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should show one Restaurant Card after clicking Top Rated Restaurant Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("restaurant-card");

  expect(cardsBeforeFilter.length).toBe(8);

  const filterButton = screen.getByText("Top Rated Restaurant");

  fireEvent.click(filterButton);

  const cardsAfterFilter = screen.getAllByTestId("restaurant-card");

  expect(cardsAfterFilter.length).toBe(4);
});
