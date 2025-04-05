const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
];

const stream = new SitemapStream({ hostname: "https://dna-playstation.vercel.app" });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync("public/sitemap.xml", data.toString())
);
