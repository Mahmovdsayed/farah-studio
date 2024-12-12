'use client';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import axiosInstance from "@/lib/axiosInstance";
import { Card, Spinner } from "@nextui-org/react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const fetchVisitorData = async () => {
    const response = await axiosInstance.get("/analytics");
    return response.data;
};

const VisitorChart = () => {
    const { data, isLoading, isError } = useQuery({
        queryFn: fetchVisitorData,
        queryKey: ["analytics"],
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    });

    if (isLoading) {
        return <div className="flex items-center justify-center my-3"><Spinner color="secondary" /></div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const barChartData = {
        labels: data.totalVisitsPerPage.map((item: any) => item._id),
        datasets: [
            {
                label: "Total Visits per Page",
                data: data.totalVisitsPerPage.map((item: any) => item.totalVisitCount),
                backgroundColor: "#FEFCE1",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                borderRadius: 10,
            },
        ],
    };



    return (
        <div className=" mt-3">
            <div >
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-sharpSansSemiBold my-3">Total Visitors</h3>
                        <Card className="w-full ">
                            <div className="flex  h-[200px] items-center justify-center font-sharpSansSemiBold text-4xl">
                                {data.totalVisitors}
                            </div>
                        </Card>
                    </div>
                    <div>
                        <h3 className="font-sharpSansSemiBold my-3">Last Visited Page</h3>
                        <Card className="w-full">
                            <div className="flex  h-[200px] items-center justify-center font-sharpSansSemiBold text-3xl">
                                {data.lastVisitor.page}
                            </div>
                        </Card>
                    </div>
                </div>
                <h3 className="font-sharpSansSemiBold my-3">Total Visits Per Page</h3>
                <Card isPressable className="w-full lg:w-2/4">
                    <Bar style={{ width: "100%" }} data={barChartData} />
                </Card>
            </div>
        </div>
    );
};

export default VisitorChart;
