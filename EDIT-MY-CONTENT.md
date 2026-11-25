# Edit my content

You only edit ONE file: `src/projects.js`.

| What                    | Where to put it                         | Then in projects.js            |
|-------------------------|-----------------------------------------|--------------------------------|
| 3 short videos          | `public/videos/reel-1.mp4` (and 2, 3)   | `src:` already points to them  |
| YouTube long-form video | (nothing to upload)                     | paste the ID in `youtubeId`    |
| Before / after videos   | `public/videos/before.mp4`, `after.mp4` | `before:` and `after:`         |
| Your email              | -                                       | `site.email`                   |

Rules
- File names are lowercase and case-sensitive on Netlify.
- YouTube ID = the part after `v=` in `youtube.com/watch?v=AbC123xyz`. The video must be Public or Unlisted.
- Missing file = the card keeps showing "ADD YOUR VIDEO". Nothing breaks.
- Change `duration`, titles and descriptions to match your real work.

Run:  `npm install`  then  `npm run dev`
