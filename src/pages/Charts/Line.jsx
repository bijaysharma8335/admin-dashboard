import React from "react";
import ChartsHeader from "../../components/ChartsHeader";

const Line = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="Inflation Rate" />
            <div className="w-full">
                <LineChart/>
            </div>
        </div>
    );
};

export default Line;
