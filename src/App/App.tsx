import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PricingPage } from "../Pages/Pricing";
import { RatesPage } from "@/Pages/Rates";
import { InsightsPage } from "@/Pages/Insights";
import { BidsPage } from "@/Pages/Bids";
import { BatchPage } from "@/Pages/Batch";
import { RootLayout } from "./Layout";

export function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    index: true,
                    element: <PricingPage />,
                },
                {
                    path: "rates",
                    element: <RatesPage />,
                },
                {
                    path: "insights",
                    element: <InsightsPage />,
                },
                {
                    path: "bids",
                    element: <BidsPage />,
                },
                {
                    path: "batch",
                    element: <BatchPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
