import fs from 'fs';


// https://gist.github.com/erbenpeter/b5e6a62174e56f4e05bdf81846143540
const data = JSON.parse(fs.readFileSync('imdb_data.json', 'utf-8'));


export const imdb = {
  db: data,
  getNamePage: function(page) {
    return this.db.names.slice(10 * page, 10 * (page+1));
  },
  getTitles: function(knownFor) {
    const titleIds = knownFor.split(',');
    const titles = [];
    for (const titleId of titleIds) {
      const titleDetails = this.db.titles[titleId];
      if (titleDetails !== undefined) {
        titles.push(titleDetails);
      }
    }
    return titles;
  }
}
