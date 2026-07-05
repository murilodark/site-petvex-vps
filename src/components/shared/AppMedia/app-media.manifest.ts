export type AppMediaFolder =
  | "dashboard"
  | "agenda"
  | "pdv"
  | "financeiro"
  | "estoque"
  | "clientes"
  | "pets"
  | "servicos";

export type AppMediaDevice = "all" | "desktop" | "mobile";

export interface AppMediaItem {
  src: string;
  name: string;
  folder: AppMediaFolder;
  device: "desktop" | "mobile" | "unknown";
  alt: string;
}

// Automatically resolve images using import.meta.glob
const modules = (import.meta as any).glob("../../../assets/images/apppetvex/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

// Parse the matched modules into AppMediaItem array
const allMediaItems: AppMediaItem[] = Object.keys(modules).map((key) => {
  // key is like "../../../assets/images/apppetvex/dashboard/desktop-01.png"
  const parts = key.split("/");
  const folder = parts[parts.length - 2] as AppMediaFolder;
  const fileNameWithExt = parts[parts.length - 1];
  const dotIndex = fileNameWithExt.lastIndexOf(".");
  const name = dotIndex !== -1 ? fileNameWithExt.substring(0, dotIndex) : fileNameWithExt;

  let device: "desktop" | "mobile" | "unknown" = "unknown";
  if (name.startsWith("desktop-")) {
    device = "desktop";
  } else if (name.startsWith("mobile-")) {
    device = "mobile";
  }

  // Generate beautiful alt text
  const folderCap = folder.charAt(0).toUpperCase() + folder.slice(1);
  const deviceWord = device === "desktop" ? "Desktop" : device === "mobile" ? "Mobile" : "";
  const numPart = name.replace(/^(desktop|mobile)-/, "");
  const numWord = numPart ? ` ${numPart}` : "";
  const alt = `Tela ${folderCap}${deviceWord ? " " + deviceWord : ""}${numWord} do App Petvex`;

  const src = (modules[key] as any).default || modules[key];

  return {
    src,
    name,
    folder,
    device,
    alt,
  };
});

/**
 * Retrieves the items in the requested folder, optionally filtered by device.
 * Items are sorted alphabetically by their name.
 */
export function getAppMediaItems(
  folder: AppMediaFolder,
  device?: AppMediaDevice
): AppMediaItem[] {
  let items = allMediaItems.filter((item) => item.folder === folder);

  if (device && device !== "all") {
    items = items.filter((item) => item.device === device);
  }

  // Sort alphabetically by name
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
