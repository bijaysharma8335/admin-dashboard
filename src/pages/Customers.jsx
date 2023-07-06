import React from "react";
import {
    ColumnDirective,
    ColumnsDirective,
    Edit,
    Filter,
    GridComponent,
    Inject,
    Page,
    Selection,
    Sort,
    Toolbar,
} from "@syncfusion/ej2-react-grids";
import Header from "../components/Header";

import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
    const selectionSettings = { persistSelection: true };
    const toolbarOptions = ["Delete"];
    const editing = { allowDeleting: true, alowEditing: true };
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                enableHover={true}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionSettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting
            >
                <ColumnsDirective>
                    {" "}
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    );
};

export default Customers;
