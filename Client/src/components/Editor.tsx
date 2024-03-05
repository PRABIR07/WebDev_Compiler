import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

export default function Editor() {
  const currentLanguage = useSelector(
    (state: Rootstate) => state.compiler.currentLanguage
  );
  const fullCode = useSelector((state: Rootstate) => state.compiler.fullCode);

  const dispatch = useDispatch();

  const onChange = useCallback((value: string) => {
    dispatch(updateCodeValue(value));
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
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
}
