# Figma MCP server setup (so the remaining pages can be built pixel-exact)

Verified against Figma's official documentation on 16 Sep 2026:
<https://developers.figma.com/docs/figma-mcp-server/> and
<https://help.figma.com/hc/en-us/articles/32132100833559>.

## What it is, in one paragraph

The Figma MCP server gives an AI agent **the actual design data** — layer tree,
x/y, width/height, fills, font family/weight/size, line-height, letter-spacing and
every text string — instead of a picture. That is precisely why the Home and About
pages came out of Replit looking exact: Replit's Figma integration had this same
data. It is also the only way I can build Portfolio / Wedding Stories / the two
overlays at replica fidelity, because I cannot open your private file (403) and I
have no image input.

## Requirements (verbatim from Figma)

> The remote server is available on all seats and plans. The desktop server is
> available on a Dev or Full seat for all paid plans.

> You must use a code editor or application that supports MCP servers (i.e. VS Code,
> Cursor, Windsurf, Claude Code, Codex).

So: **use the remote server** — no desktop app, no paid seat required.

## What I already did

`~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
now has a `figma` entry (your existing filesystem server was left untouched, and a
backup was written beside it as `cline_mcp_settings.json.bak-before-figma`):

```json
{
  "mcpServers": {
    "figma": {
      "type": "streamableHttp",
      "url": "https://mcp.figma.com/mcp",
      "disabled": false,
      "autoApprove": ["whoami", "get_metadata", "get_design_context", "get_variable_defs"]
    }
  }
}
```

## What you have to do (step by step)

The only confusing part is where the buttons live, so here are the **exact labels as
they exist in your installed Cline v4.1.17** (I read them out of the extension
bundle, not from memory):

| Where | Label | Notes |
| --- | --- | --- |
| Cline sidebar top bar | **MCP Servers** | `⌘⇧P` → *MCP Servers* does the same thing (`cline.mcpButtonClicked`) |
| Inside that panel | tabs **Installed** / **Marketplace** / **Remote Servers** | your three servers show under *Installed* |
| Per-server actions | **Authenticate**, **Retry Connection**, **Restart Server**, **Configure** | `Authenticate` is the OAuth button for the remote Figma server |

1. **Reload VS Code.** `⌘⇧P` → type `reload` → pick *Developer: Reload Window*.
   Cline only reads its MCP list at startup, so without this the panel still shows the
   old list.
2. **Open the panel.** Click **MCP Servers** in the Cline sidebar (top bar), then the
   **Installed** tab. You should see three entries:
   - `github.com/modelcontextprotocol/servers/tree/main/src/filesystem` — on, do not touch
   - **`figma`** — the official remote server I added
   - `figma-framelink` — off, this is the backup path
3. **Switch `figma` on** if the toggle is off.
4. **Click Authenticate.** A browser tab opens on Figma's consent screen. Sign in if
   asked, click **Allow** / **Authorize**, then come back to VS Code.
5. **Check the status.** It should show connected/active. If it says it is not
   connected, click **Retry Connection** once.
6. **Tell me.** Say "figma is connected" — my tool list refreshes when Cline restarts,
   so I will call `whoami` to prove it works, then start on the frames.


### If `figma` shows an error instead

| Symptom | Fix |
| --- | --- |
| "Unsupported client" / OAuth refused | Figma only allowlists clients in their MCP Catalog (VS Code, Cursor, Claude Code…). Cline is not listed, so this is possible — use Option B or C. |
| Server stays "not connected" | Try `"type": "sse"` with `"url": "https://mcp.figma.com/sse"`, or add it from the UI: Cline → MCP Servers → **Remote Servers** tab → paste the URL. |
| Nothing appears after reload | Reload the window again; confirm the JSON is still valid with `python3 -m json.tool < <file>`. |

## Option D — Cline's built-in Figma MCP (marketplace, no OAuth)

Cline's own MCP Marketplace ships a Figma server (Framelink, 15.7k GitHub stars,
42k installs), and I have already added it to your config **disabled**:

```json
{
  "mcpServers": {
    "figma-framelink": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=PASTE-YOUR-FIGMA-TOKEN-HERE", "--stdio"],
      "disabled": true,
      "autoApprove": []
    }
  }
}
```

Steps:

1. Create a Figma personal access token — Figma → **Settings → Security → Personal
   access tokens → Generate new token**. Scope `File content: read` is enough.
   (Free, works on any plan — <https://help.figma.com/hc/en-us/articles/8085703771159>.)
2. Open
   `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`,
   replace `PASTE-YOUR-FIGMA-TOKEN-HERE` with the token, and set `"disabled": false`.
3. Reload VS Code. It runs `npx -y figma-developer-mcp --stdio`, so the first launch
   downloads the package (needs network).
4. Or skip all of the above: Cline → **MCP Servers → Marketplace** → search **Figma**
   → *Install*, which writes the same entry and prompts for the key.

Trade-offs, stated honestly: this server reads your file through the Figma REST API,
so **it holds your token and sees the design data** — that is why it feels like the
Replit integration. Installs count for nothing here; only you and I see the output.

## Which option should you pick?

| Option | Needs | Risk | Works with Cline? |
| --- | --- | --- | --- |
| A — official remote server | nothing (already configured) | Figma may reject non-catalog clients | probably — Cline v4.1.17 handles OAuth (`oauth`, `registerClient`, `authorization_endpoint` are all in its bundle) and `streamableHttp` is the correct type string (verified: 29 occurrences) |
| **D — Framelink via Cline marketplace** | a free Figma token | third-party server sees file data | yes — it is in Cline's catalog, no allowlist issue |
| B — VS Code native MCP | nothing | none, officially supported | no — Copilot gets the tools, not me; you would have to paste me the output |
| C — desktop app local server | paid Dev/Full seat + app install | none | yes |

**My recommendation:** try **A** first (already wired — reload and authenticate). If
Figma refuses Cline, fall to **D**, which needs only your free token.


VS Code is in Figma's catalog, so this path is guaranteed to be allowed:

1. In VS Code: `⌘⇧P` → **MCP: Open User Configuration**.
2. Paste Figma's exact snippet:

   ```json
   {
     "inputs": [],
     "servers": {
       "figma": {
         "url": "https://mcp.figma.com/mcp",
         "type": "http"
       }
     }
   }
   ```

3. Click **Start** above the server name, then **Allow Access**.
4. Paste a Figma frame link into Copilot Chat (Agent mode) and ask it for the code.
   Send me the output and I will adapt it to this codebase's conventions.

## Option C — Figma desktop app (local server, no OAuth, no client allowlist)

Needs a paid plan with a Dev or Full seat, plus the **Figma desktop app** (not
installed on this machine — I checked `/Applications` and `~/Applications`).

1. Install the Figma desktop app.
2. Open your file in it in **Dev Mode** (`⇧D`).
3. Open **Preferences** and look for the MCP / Dev Mode MCP server switch — search
   "MCP" in Preferences, because Figma has moved this label between releases, so
   confirm the wording in your version rather than trusting a screenshot.
4. It then serves locally on `http://127.0.0.1:3845/mcp`. Verify with
   `curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3845/mcp`
   (any status other than `000` means it is listening).
5. Add it to Cline as a remote server pointing at that URL, or tell me and I will
   repoint the entry I created.

## How the design data is requested

Figma's own description of the flow:

> In Figma Design, select the layer you want to get design context for. Right-click a
> frame or layer and select **Copy link to selection**. In your MCP client, paste the
> URL and prompt your client to help you implement the design. Your client won't be
> able to navigate directly to the selected URL, but it will extract the node ID that
> is required by the MCP server to identify which object to return information about.

You have already sent every node id, so nothing more is needed from you:

```
portfolio page        154-917    344-2014
portfolio overlay     390-4967   390-5239
wedding stories       178-738    344-2312
wedding detail        178-1035   344-2553
behind the scenes     181-1478   344-3243
behind the scenes ovl 393-6961   393-6740
```

Tools I will call, and what each returns:

| Tool | What it returns | Why I need it |
| --- | --- | --- |
| `get_metadata` | sparse XML outline of a selection | cheap structural map: frame names, nesting, sizes |
| `get_design_context` | full design context for a layer (layout, fills, type) | the exact geometry + type styles to rebuild |
| `get_screenshot` | image of the selection | so *you* can sanity-check my output |
| `get_variable_defs` | variables and styles used in a selection | maps straight onto the token layer in `globals.css` |
| `download_assets` | exports / original source images | any photo not already in `public/images` |

I will work **per frame, not per page** — Figma's own guidance is to avoid selecting
large, heavy frames — so: pull one node, rebuild it, then move to the next.

## Hand-off notes

- Figma ships a prompt called `create_design_system_rules` that generates an
  agent-rules file describing your design system. Running it once would make the
  "map every value to `globals.css`" step automatic.
- Figma's server returns web/React + Tailwind by default. That is what we want, but I
  will still hand-map values onto your existing tokens instead of accepting inline
  styles, so the output matches `apps/web` instead of looking generated.
- Revert path for the config change: restore
  `cline_mcp_settings.json.bak-before-figma`, or just set `"disabled": true`.

