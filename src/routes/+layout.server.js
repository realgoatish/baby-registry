import { redirect } from "@sveltejs/kit";

export const config = {
  runtime: "edge",
};

export function load() {
  redirect(
    308,
    "https://www.amazon.com/baby-reg/sahar-lamb-michael-lamb-june-2024-mountlaurel/1CV2HUWO98BF0"
  );
}
