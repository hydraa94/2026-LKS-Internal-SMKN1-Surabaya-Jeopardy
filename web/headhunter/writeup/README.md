# Writeup

## Walkthrough
1. Access the website. You will see a "Signal Online" interface with an "ESTABLISH CONNECTION" button.
2. Open your browser's **Developer Tools** (F12 or Ctrl+Shift+I).
3. Switch to the **Network** tab.
4. Click the **ESTABLISH CONNECTION** button on the page.
5. A new request to `/flag` will appear in the Network list.
6. Click on the `/flag` request and look at the **Response Headers** section.
7. The flag is hidden in the `X-CTF-Flag` header.

## Solution via `curl`
You can directly trigger the flag transmission using a POST request:

```bash
curl -i -X POST http://localhost:3000/flag
```

The `-i` flag ensures that the HTTP headers are included in the output.

## Solution via Burp Suite
1. Intercept the traffic or find the request in the **HTTP History** tab.
2. Look for the `POST /flag` request.
3. In the **Response** pane, inspect the headers to find `X-CTF-Flag`.