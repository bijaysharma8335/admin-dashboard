import React, { useState } from "react";
import Header from "../components/Header";
import {
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    Inject,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Resize,
    DragDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Calendar = () => {
    const [scheduleObj, setScheduleObj] = useState();
    const onChangeHandler = (args) => {
        scheduleObj.selctedDate = args.value;
        scheduleObj.dataBind();
    };
    const onDragStart = (arg) => {
        // eslint-disable-next-line no-param-reassign
        arg.navigation.enable = true;
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Calendar" />
            <ScheduleComponent
                height="650px"
                ref={(schedule) => setScheduleObj(schedule)}
                selectedDate={new Date(2023, 1, 20)}
                eventSettings={{ dataSource: scheduleData }}
                dragStart={onDragStart}
            >
                <ViewsDirective>
                    {["Day", "Week", "Month", "Agenda"].map((item) => (
                        <ViewDirective ikey={item} option={item} />
                    ))}
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragDrop]} />
            </ScheduleComponent>
            <PropertyPane>
                <table style={{ width: "100%", background: "white" }}>
                    <tbody>
                        <tr style={{ height: "50px" }}>
                            <td style={{ width: "100%" }}>
                                <DatePickerComponent
                                    value={new Date(2023, 1, 20)}
                                    showClearButton={false}
                                    placeholder="Current Date"
                                    floatLabelType="Always"
                                    change={onChangeHandler}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </PropertyPane>
        </div>
    );
};

export default Calendar;
