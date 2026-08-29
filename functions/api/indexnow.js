/**
 * Cloudflare Edge Worker: IndexNow Protocol Dispatcher
 * Instantly pings Google-allied & Bing-allied search engines (Bing, Yandex, Seznam, Naver)
 * whenever new real estate inventory, prices or pages are published.
 */
export async function onRequestPost(context) {
  try {
    const { request } = context;
    const body = await request.json().catch(() => ({}));
    const host = 'siddhashila-eevva.co.in';
    const key = 'e8b82e3b2e5a4b7f9a1c8d0e2f4a6b8c';
    const keyLocation = `https://${host}/${key}.txt`;

    const urlList = body.urls || [
      `https://${host}/`,
      `https://${host}/sitemap.xml`,
      `https://${host}/sitemap-index.xml`
    ];

    const payload = {
      host: host,
      key: key,
      keyLocation: keyLocation,
      urlList: urlList
    };

    // Dispatch to IndexNow API (Bing / Yandex / IndexNow network)
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'IndexNow edge dispatch completed to search engine consortium.',
      status: indexNowResponse.status,
      submittedUrls: urlList.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
