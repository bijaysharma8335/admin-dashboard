import React from "react";

import {
    ChartComponent,
    SplineAreaSeries,
    DateTime,
    Legend,
    Inject,
    SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../context/ContextProvider";
import ChartsHeader from "../../components/ChartsHeader";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";

const Area = () => {
    const { currentMode } = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chatArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : "#fff"}
                    legendSettings={{ background: "white" }}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                    <SeriesCollectionDirective>
                        {" "}
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {areaCustomSeries.map((item, index) => (
                            <SeriesCollectionDirective key={index} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Area;
