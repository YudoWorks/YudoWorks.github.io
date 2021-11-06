import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

const classes = {
  wrapper: 'block mb-6 md:flex',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
