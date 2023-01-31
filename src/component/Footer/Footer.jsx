import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_icon}>
        <div className={styles.footer_iconWrap} title='github'>
          <a href='https://github.com/taehoon619/' target='_blank' rel='noopener noreferrer'><img src='/images/github_icon.png' alt='github'/> </a>  
        </div>
        <div className={styles.footer_iconWrap} title='notion'>
          <a href='https://moored-fear-6c4.notion.site/cc6d3171424f424694ad8b68cc216ab8' target='_blank' rel='noopener noreferrer'><img src='/images/notion_icon.png' alt='notion'/></a>
        </div>
      </div>
      <div className={styles.footer_copyright}>© 2023. Lee Tae Hoon. All rights reserved.</div>
    </footer>
  )
}
