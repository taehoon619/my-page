import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_icon}>
        <div className={styles.footer_iconWrap} title='github'>
          <a href='https://github.com/taehoon619/'><img src='/images/github_icon.png' alt='github'/> </a>  
        </div>
        <div className={styles.footer_iconWrap} title='notion'>
          <a href='https://moored-fear-6c4.notion.site/0e78f9fc7c3b47ee8f4315249bcad766'><img src='/images/notion_icon.png' alt='notion'/></a>
        </div>
      </div>
      <div className={styles.footer_copyright}>© 2023. Lee Tae Hoon. All rights reserved.</div>
    </footer>
  )
}
