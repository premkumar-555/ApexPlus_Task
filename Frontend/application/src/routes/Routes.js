import Home from "../pages/Home";
import AddScenarios from "../pages/Scenarios/InputForm";
import ScenariosList from "../pages/Scenarios/List";
import AddVehicle from "../pages/Vehicles/InputForm";
import VehiclesList from "../pages/Vehicles/List";

export const routes_data = [
    {path: '/', element: Home},
    {path: '/scenarios', element: ScenariosList},
    {path: '/add_scenarios', element: AddScenarios},
    {path: '/vehicles', element: VehiclesList},
    {path: '/add_vehicles', element: AddVehicle},
]