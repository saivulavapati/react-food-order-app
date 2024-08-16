import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mockData/restaurantMockData.json"
import "@testing-library/jest-dom"

test("Should render the RestaurantCard Component",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
})

test("Should check name of the Restaurant in RestaurantCard Component",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();

})

