import CodeMirror from "@uiw/react-codemirror";

import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

import React from "react";

export default function Editor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
      value={value}
      height="100vh"
      extensions={[loadLanguage("javascript")!]}
      onChange={onChange}
    />
  );
}
