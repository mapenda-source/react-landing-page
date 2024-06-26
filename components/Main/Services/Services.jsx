import { ReactComponent as ServImg1 } from '@/images/fonzo4.svg'
import { ReactComponent as ServImg2 } from '@/images/fonzo5.svg'
import { ReactComponent as ServImg3 } from '@/images/fonzo6.svg'
import { ReactComponent as ServImg4 } from '@/images/fonzo7.svg'
import { ReactComponent as ServImg5 } from '@/images/fonzo8.svg'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './Services.module.scss'

function Services() {
  const { t } = useTranslation()

  return (
    <section
      className={classNames(
        [style.services],
        [layout.section],
        [layout.container]
      )}
      id='services'
    >
      <h2 className={[layout.section__title]}>{t('main.services.title')}</h2>
      <div className={classNames([style.services__container], [layout.grid])}>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {t('main.services.servOff1')}
          </h3>
          <ServImg1
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {t('main.services.descOff1')}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {t('main.services.learnMore')}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {t('main.services.servOff2')}
          </h3>
          <ServImg2
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {t('main.services.descOff2')}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {t('main.services.learnMore')}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {t('main.services.servOff3')}
          </h3>
          <ServImg3
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {t('main.services.descOff3')}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {t('main.services.learnMore')}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {t('main.services.servOff4')}
          </h3>
          <ServImg4
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {t('main.services.descOff4')}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {t('main.services.learnMore')}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {t('main.services.servOff5')}
          </h3>
          <ServImg5
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {t('main.services.descOff5')}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {t('main.services.learnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
