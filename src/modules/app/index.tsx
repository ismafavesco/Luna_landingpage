import { useEffect } from "react";
import { getMobileOperatingSystem } from "utils/common";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
}

function AppRedirectionPage({ config }: Props) {
  const { googlePlayLink, appStoreLink } = config;

  useEffect(() => {
    const platform = getMobileOperatingSystem();
    if (platform === "ios" && appStoreLink) window.location.href = appStoreLink;
    else if (platform === "android" && googlePlayLink)
      window.location.href = googlePlayLink;
    else window.location.href = "/registro";
  }, [googlePlayLink, appStoreLink]);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <span className="loading loading-dots w-16"></span>
      <h2 className="text-center max-w-xs md:max-w-md">
        Te estamos llevando a Luna. Si no pasa nada en unos segundos, te
        redirigimos al pre-registro.
      </h2>
    </main>
  );
}

export default AppRedirectionPage;
