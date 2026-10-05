import { type DragEvent, useRef, useState } from "react";

const hasFiles = (e: DragEvent) => Array.from(e.dataTransfer?.types ?? []).includes("Files");

/**
 * Drag & drop of files on an area. Without `onDropFiles` the area ignores drags entirely.
 */
const useFileDrop = (onDropFiles?: (files: File[]) => void) => {
  const [isDraggingFiles, setIsDraggingFiles] = useState(false);
  // dragenter/dragleave also fire on every child crossed: count them to know when the pointer really left
  const depthRef = useRef(0);

  if (!onDropFiles) {
    return { dropZoneProps: {}, isDraggingFiles: false };
  }

  return {
    dropZoneProps: {
      onDragEnter: (e: DragEvent) => {
        if (!hasFiles(e)) {
          return;
        }
        e.preventDefault();
        depthRef.current += 1;
        setIsDraggingFiles(true);
      },
      onDragLeave: (e: DragEvent) => {
        if (!hasFiles(e)) {
          return;
        }
        depthRef.current = Math.max(depthRef.current - 1, 0);
        if (!depthRef.current) {
          setIsDraggingFiles(false);
        }
      },
      onDragOver: (e: DragEvent) => {
        if (hasFiles(e)) {
          // Required for the drop event to fire
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
        }
      },
      onDrop: (e: DragEvent) => {
        if (!hasFiles(e)) {
          return;
        }
        e.preventDefault();
        depthRef.current = 0;
        setIsDraggingFiles(false);
        onDropFiles(Array.from(e.dataTransfer.files));
      },
    },
    isDraggingFiles,
  };
};

export default useFileDrop;
