import { redirect } from "next/navigation";

export default function RedirectToEn({ to }: { to: string }): never {
  redirect(`/en${to.startsWith("/") ? "" : "/"}${to}`);
}