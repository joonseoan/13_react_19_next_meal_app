import Link from 'next/link';
import Image from 'next/image';

import classes from './meals-item.module.css';
import { MealItemProps } from '@/app/meals/mealsTypes';

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* 
            now it will not not be imported from `asset` folder.
            Instead, we will be working with meals that are stored in a database.
            Before we use with database, alternatively we can use public folder.

            Image folder need to know underlying `width` and `height` of the image for the output. 
            When we use the local file system like `asset`, the Image folder can recognize the `width` and `height`
            automatically but we need to use image from database which means we can't set that up now.
            So instead we can use `fill` property in the `Image` component for now.
            BTW, The Next.js Image component optimizes images at runtime, not during the build process.

            "
              To use a remote image, the src property should be a URL string.
              Since Next.js does not have access to remote files during the build process,
              you'll need to provide the width, height and optional blurDataURL props manually.

              The width and height attributes are used to infer the correct aspect ratio of image and
              avoid layout shift from the image loading in.
              The width and height do not determine the rendered size of the image file.
            "
          */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}