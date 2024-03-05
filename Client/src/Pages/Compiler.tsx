import Editor from "@/components/Editor";
import Headerbtn from "@/components/Headerbtn";
import OutputCode from "@/components/OutputCode";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compiler() {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel
          className="h-[calc(100dvh-60px)] min-w-[350px]"
          defaultSize={50}
        >
          <Headerbtn />
          <Editor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          className="h-[calc(100dvh-60px)] min-w-[350px]"
          defaultSize={50}
        >
          <OutputCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
