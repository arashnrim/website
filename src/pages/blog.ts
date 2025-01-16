import type { APIRoute } from "astro";

const GET: APIRoute = async ({ request, redirect }) => {
  const hostname = new URL(request.url).hostname;
  if (hostname !== "localhost") {
    return redirect(`https://blog.${hostname}`, 308);
  } else {
    return redirect(`https://blog.arash.codes`, 308);
  }
};

export { GET };
