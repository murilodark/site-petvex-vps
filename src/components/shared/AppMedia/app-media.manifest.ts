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

// ALTERADO: import: 'default' faz o glob retornar diretamente a URL resolvida (string)
const modules = (import.meta as any).glob("../../../assets/images/apppetvex/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: 'default'
});

// Parse the matched modules into AppMediaItem array
const allMediaItems: AppMediaItem[] = Object.keys(modules).map((key) => {
  // key é algo como: "../../../assets/images/apppetvex/dashboard/desktop-01.png"
  
  // Regex para extrair a pasta e o nome do arquivo puro (sem caminhos relativos)
  const match = key.match(/\/([^/]+)\/([^/]+)\.(png|jpg|jpeg|webp)$/i);
  
  if (!match) return null as any;

  const folder = match[1] as AppMediaFolder;
  const fileNameWithExt = match[2];
  
  // Remove a extensão para pegar o nome original (ex: "mobile-02")
  const dotIndex = fileNameWithExt.lastIndexOf(".");
  const name = dotIndex !== -1 ? fileNameWithExt.substring(0, dotIndex) : fileNameWithExt;

  let device: "desktop" | "mobile" | "unknown" = "unknown";
  if (name.startsWith("desktop-")) {
    device = "desktop";
  } else if (name.startsWith("mobile-")) {
    device = "mobile";
  }

  // Gera o alt text usando o nome limpo original
  const folderCap = folder.charAt(0).toUpperCase() + folder.slice(1);
  const deviceWord = device === "desktop" ? "Desktop" : device === "mobile" ? "Mobile" : "";
  const numPart = name.replace(/^(desktop|mobile)-/, "");
  const numWord = numPart ? ` ${numPart}` : "";
  const alt = `Tela ${folderCap}${deviceWord ? " " + deviceWord : ""}${numWord} do App Petvex`;

  // Com o import: 'default', modules[key] já é a URL estática final resolvida pelo Vite!
  // Em Dev: "/src/assets/images/..."
  // Em Produção: "/assets/mobile-02-C_JARUqw.png"
  const src = modules[key] as string;

  return {
    src,
    name,
    folder,
    device,
    alt,
  };
}).filter(Boolean); // Limpa possíveis nulos

export function getAppMediaItems(
  folder: AppMediaFolder,
  device?: AppMediaDevice
): AppMediaItem[] {
  let items = allMediaItems.filter((item) => item.folder === folder);

  if (device && device !== "all") {
    items = items.filter((item) => item.device === device);
  }

  // Ordena pelo nome original preservando a coerência entre Dev e Production
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
