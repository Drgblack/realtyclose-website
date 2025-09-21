import * as React from "react";
import { Footer, FOOTER_CONFIGS } from "@drgblack/shared-ui";

export default function SiteFooter() {
  const config = FOOTER_CONFIGS["realtyclose"];
  return <Footer config={config} locale="en" />;
}
