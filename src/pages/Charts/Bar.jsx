import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import ChartsHeader from "../../components/ChartsHeader";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    ColumnSeries,
    DataLabel,
} from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";

const Bar = () => {
    const { currentMode } = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chatArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : "#fff"}
                    legendSettings={{ background: "white" }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {" "}
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {barCustomSeries.map((item, index) => (
                            <SeriesDirective key={index} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Bar;
