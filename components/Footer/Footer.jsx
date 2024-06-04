import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import style from './Footer.module.scss'
import layout from '@/styles/Layout.module.scss'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      id='footer'
      className={classNames([style.footer], [layout.section])}
    >
      <div
        className={classNames(
          [style.footer__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <div className={style.footer__content}>
          <a href='#' title={t('footer.logo')} className={style.footer__logo}>
            {t('footer.logo')}
          </a>
          <p className={style.footer__description}>{t('footer.description')}</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
