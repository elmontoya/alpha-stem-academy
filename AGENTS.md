<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep reusable sitewide space illustrations in `src/components/site/SpaceSticker.tsx` and use them decoratively with empty alt text so they never alter copy or screen-reader output.
- Keep the page-link and CTA audit as a dependency-free Python script in `scripts/audit_links.py`; it validates server-rendered destinations against a running preview so the check needs no app-code changes at runtime.
