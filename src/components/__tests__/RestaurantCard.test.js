import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import '@testing-library/jest-dom'

it("Should render RestaurantCard Component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Chinese Wok");
    console.log(name);
    expect(name).toBeInTheDocument();
})

it("Should render Restaurant Card Component with Promoted Label",()=>{
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>)
    const promotedLabel = screen.getByText("Promoted");
    console.log(promotedLabel);
    expect(promotedLabel).toBeInTheDocument();
})