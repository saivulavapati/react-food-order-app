import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("Should render the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

test("Should have the Login Button in Header Component", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    const loginButton = screen.getByRole("button",{name:'Login'})
    expect(loginButton).toBeInTheDocument();
});

test("Should Change Login to Logout Button on Click of Login Button in Header Component", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    const loginButton = screen.getByRole("button",{name:'Login'})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:'Logout'})
    expect(logoutButton).toBeInTheDocument();
});

test("Should have Cart items 0 in Header Component", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    const cartItem = screen.getByText("Cart-0")
    expect(cartItem).toBeInTheDocument();
});
