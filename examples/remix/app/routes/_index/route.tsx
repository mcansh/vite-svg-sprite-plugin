import type { LinksFunction, MetaFunction } from "@remix-run/node";
import spriteUrl from "virtual:@mcansh/vite-plugin-svg-sprite";
import beakerIconHref from "heroicons/24/outline/beaker.svg";
import eyeIconHref from "lucide-static/icons/eye.svg";
import homeIconHref from "lucide-static/icons/home.svg";
import archiveBoxArrowDownIconHref from "~/assets/archive-box-arrow-down.svg";
import { Icon } from "./icon";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "preload", as: "image", href: spriteUrl, type: "image/svg+xml" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h2>{spriteUrl}</h2>

      <Icon icon={archiveBoxArrowDownIconHref} width={100} height={100} />
      <Icon icon={beakerIconHref} width={100} height={100} />
      <Icon icon={eyeIconHref} width={100} height={100} />
      <Icon icon={homeIconHref} width={100} height={100} />
    </div>
  );
}
