import { redirect } from "@sveltejs/kit";

export const config = {
  runtime: "edge",
};

export function load() {
  redirect(
    308,
    "https://www.amazon.com/baby-reg/lauren-bukenas-february-2025-woodbury/1I3D58YPGZAE6"
  );
}
