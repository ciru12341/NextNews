import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}-${(Math.random() * 100).toFixed(2)}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const buffereImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(buffereImage), (error) => {
    if (error) {
      throw new Error('Failed to save image');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals (title, summary, instructions, image, slug, creator, creator_email)
    VALUES (
    @title,
    @summary,
    @instructions,
    @image,
    @slug,
    @creator,
    @creator_email)
  `).run(
    meal
  );
}