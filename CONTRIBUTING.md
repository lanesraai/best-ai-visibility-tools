# Contributing

Thanks for helping keep this list accurate. Additions and corrections are welcome from anyone, including the vendors of the tools.

## What belongs here

- Tools that measure or improve how AI engines (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews, Google AI Mode and similar) mention, recommend or cite a brand.
- Tools that check whether AI crawlers can read a website.
- The product must be live, with a public website or repository. No waitlists, no private betas, no agencies or consulting services.

## Rules

1. **One tool per pull request.** Corrections to several entries can share a pull request.
2. **Put it in the right section, in alphabetical order.**
3. **Keep the table format** of the section you are editing. The first cell is `[Name](https://example.com)`.
4. **Describe it in one or two plain sentences that can be checked on the tool's own website.** No superlatives ("the best", "the first", "number one"), no customer results, no prices.
5. **List only the engines the vendor states.** If coverage depends on the plan, say so.
6. **Link to the product's own page**, with no tracking or referral parameters.
7. **Say if you work for the tool** in the pull request description. That is fine; it just needs to be disclosed.

## Review

Pull requests are reviewed within about a week. An entry may be edited for length or tone before it is merged. A tool can be removed if its site goes offline, the product is discontinued, or its description can no longer be verified.

## Checking your change

If you have Node.js installed, run:

```
node scripts/check.mjs
```

It checks that each section is alphabetical, that every first cell is a link, and that no link appears twice.
