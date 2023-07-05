import React from "react";

import {
    Inject,
    HtmlEditor,
    Link,
    Toolbar,
    RichTextEditorComponent,
    QuickToolbar,
} from "@syncfusion/ej2-react-dropdowns";
import { EditorData } from "../data/dummy";
import Header from "../components/Header";

const Editor = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Editor" />
            <RichTextEditorComponent>
                <EditorData />
                <Inject services={{ HtmlEditor, Toolbar, Image, Link, QuickToolbar }} />
            </RichTextEditorComponent>
        </div>
    );
};

export default Editor;
