import massagerCatalog from "@/components/MassagerCatalog";
import massageshopCatalog from "@/components/MassageshopCatalog";
import { render, screen , waitFor} from "@testing-library/react";
import {MassagerJson, MassageshopJson}  from "../interface";

const mockData = {
    "success": true,
    "count": 4,
    "pagination": {},
    "data": [
        {
            "_id": "66025891881c4e37ca7e93b5",
            "name": "Happy Trails Park",
            "address": "456 Park Ave",
            "district": "Central",
            "province": "NY",
            "postalcode": "10001",
            "tel": "(666) 666-4567",
            "region": "New York City",
            "opentime": "08:00 AM",
            "closetime": "06:00 PM",
            "price": "999999",
            "__v": 0,
            "picture": "https://drive.google.com/uc?export=download&id=12wA_f3LjWoxM9TCp0N9YvrhqQ56P8IQ8",
            "appointments": [
                {
                    "_id": "66037ec3ce80cf9a59e3ec93",
                    "apptDate": "2024-03-27T17:00:00.000Z",
                    "user": "6602fa78da672f3f398e6c96",
                    "massageshop": "66025891881c4e37ca7e93b5",
                    "createdAt": "2024-03-27T02:04:51.908Z",
                    "__v": 0
                },
                {
                    "_id": "66037eccce80cf9a59e3ec98",
                    "apptDate": "2024-04-03T17:00:00.000Z",
                    "user": "6602fa78da672f3f398e6c96",
                    "massageshop": "66025891881c4e37ca7e93b5",
                    "createdAt": "2024-03-27T02:05:00.563Z",
                    "__v": 0
                },
                {
                    "_id": "66037ed4ce80cf9a59e3ec9d",
                    "apptDate": "2024-05-03T17:00:00.000Z",
                    "user": "6602fa78da672f3f398e6c96",
                    "massageshop": "66025891881c4e37ca7e93b5",
                    "createdAt": "2024-03-27T02:05:08.687Z",
                    "__v": 0
                },
                {
                    "_id": "6603b8337a0a3e8efc56c892",
                    "apptDate": "2024-04-29T17:00:00.000Z",
                    "user": "6603b7a77a0a3e8efc56c86f",
                    "massageshop": "66025891881c4e37ca7e93b5",
                    "createdAt": "2024-03-27T06:09:55.101Z",
                    "__v": 0
                }
            ],
            "massagers": [],
            "id": "66025891881c4e37ca7e93b5"
        },
        {
            "_id": "6601474ca3742e17e357026e",
            "name": "La de France",
            "address": "2223 Birch Avenue",
            "district": "Old Town",
            "province": "AZ",
            "postalcode": "85001",
            "tel": "(480) 333-3333",
            "region": "Phoenix",
            "opentime": "10:00",
            "closetime": "18:00",
            "price": "100000000000000",
            "__v": 0,
            "picture": "https://drive.google.com/uc?export=download&id=1sgoYCFEn4A54XJKhTObxjmIjdEbV62BK",
            "appointments": [
                {
                    "_id": "6603b82c7a0a3e8efc56c88d",
                    "apptDate": "2024-03-29T17:00:00.000Z",
                    "user": "6603b7a77a0a3e8efc56c86f",
                    "massageshop": "6601474ca3742e17e357026e",
                    "createdAt": "2024-03-27T06:09:48.164Z",
                    "__v": 0
                }
            ],
            "massagers": [],
            "id": "6601474ca3742e17e357026e"
        },
        {
            "_id": "6602591a881c4e37ca7e93b6",
            "name": "Mountain View Library",
            "address": "789 Elm St",
            "district": "Uptown",
            "province": "WA",
            "postalcode": "98101",
            "tel": "(777) 777-7890",
            "region": "Seattle",
            "opentime": "10:00 AM",
            "closetime": "08:00 PM",
            "price": "Free",
            "__v": 0,
            "picture": "https://drive.google.com/uc?export=download&id=1me_1EnSbsLcoKrLLZ434i_Tu9g3AzC1r",
            "appointments": [],
            "massagers": [],
            "id": "6602591a881c4e37ca7e93b6"
        },
        {
            "_id": "6601471ca3742e17e357026b",
            "name": "Poseidon",
            "address": "2223 Birch Avenue",
            "district": "Old Town",
            "province": "AZ",
            "postalcode": "85001",
            "tel": "(480) 333-3333",
            "region": "Phoenix",
            "opentime": "10:00",
            "closetime": "18:00",
            "price": "100000000000000",
            "__v": 0,
            "picture": "https://drive.google.com/uc?export=download&id=1MtOXlRS4dR9JzFVV8USIxdkkFT28lCA4",
            "appointments": [
                {
                    "_id": "6603b83c7a0a3e8efc56c897",
                    "apptDate": "2024-07-10T17:00:00.000Z",
                    "user": "6603b7a77a0a3e8efc56c86f",
                    "massageshop": "6601471ca3742e17e357026b",
                    "createdAt": "2024-03-27T06:10:04.259Z",
                    "__v": 0
                },
                {
                    "_id": "66042c1f6720875d208c6614",
                    "apptDate": "2024-03-29T17:00:00.000Z",
                    "user": "6602faaceb9d107b09f554e2",
                    "massageshop": "6601471ca3742e17e357026b",
                    "createdAt": "2024-03-27T14:24:31.774Z",
                    "__v": 0
                }
            ],
            "massagers": [],
            "id": "6601471ca3742e17e357026b"
        }
    ]
}

describe("massageshopCatalog", () => {
  it("should render massageshopCatalog", async() => {
    const mas = await massageshopCatalog({ massageshopsJson: mockData});
    render(mas);
    await waitFor(
        ()=> {
        const carImages = screen.queryAllByRole('img')
        expect(carImages).toHaveLength(4)
        }
    )
    // expect(element).toBeInTheDocument();
  });
});