import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/restaurantMenuMockData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import appStore from "../../redux/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should add 1 item to the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header/>
        </Provider>
      </BrowserRouter>
    )
  );

  const showButtons = screen.getAllByText("Show");
  fireEvent.click(showButtons[0]);
  const addButtons = screen.getAllByText("Add+");
  fireEvent.click(addButtons[0]);
  const cartItemsCountInheader = screen.getByText("Cart-1");
  expect(cartItemsCountInheader).toBeInTheDocument(); 

});


// test("Should show 1 item to the Cart component", async () => {
//     await act(async () =>
//       render(
//         <BrowserRouter>
//           <Provider store={appStore}>
//             <RestaurantMenu />
//             <Header/>
//           </Provider>
//         </BrowserRouter>
//       )
//     );
  
//     const showButtons = screen.getAllByText("Show");
//     fireEvent.click(showButtons[0]);

//     const addButtons = screen.getAllByText("Add+");
    

//     // const cartItems = screen.getAllByTestId("cart-item");
//     const cartItems = screen.getByText("Cart-1");
//     expect(cartItems).toBeInTheDocument()
  
//   });
