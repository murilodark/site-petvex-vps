import React from "react";
import { getAppMediaItems, AppMediaFolder, AppMediaDevice } from "./app-media.manifest";

export interface AppScreenshotProps {
  folder: AppMediaFolder;
  device?: Exclude<AppMediaDevice, "all">;
  index?: number;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export const AppScreenshot: React.FC<AppScreenshotProps> = ({
  folder,
  device = "desktop",
  index = 0,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
}) => {
  const items = getAppMediaItems(folder, device as AppMediaDevice);

  if (items.length === 0 || index < 0 || index >= items.length) {
    return null;
  }

  const item = items[index];

  return (
    <div className={`overflow-hidden rounded-2xl bg-slate-950/5 shadow-md ${className}`}>
      <img
        src={item.src}
        alt={alt || item.alt}
        className={`w-full h-auto object-cover block transition-opacity duration-300 ${imageClassName}`}
        loading={priority ? "eager" : "lazy"}
        referrerPolicy="no-referrer"
        {...({ fetchPriority: priority ? "high" : "auto" } as any)}
      />
    </div>
  );
};
