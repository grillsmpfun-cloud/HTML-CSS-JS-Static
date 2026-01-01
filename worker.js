export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);

    // If asset not found, return 404.html
    if (response.status === 404) {
      return env.ASSETS.fetch(
        new Request(new URL("/404.html", url), request)
      );
    }

    return response;
  }
};
