const fs = require('fs');
const report = require('./report.json');

const META_EVENT = process.env.META_EVENT;

const commit = JSON.parse(META_EVENT);
const tests = report.tests;
const stats = report.stats;

const getUserName = function (author) {
  return author.username ? author.username : author.name;
};

const reportWithMeta = {
  username: getUserName(commit.author),
  timestamp: commit.timestamp,
  tests,
  stats,
  commit
};

fs.writeFileSync('report-with-meta.json', JSON.stringify(reportWithMeta));
