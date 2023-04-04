import React, { FC } from 'react';
import style from './Mail.module.scss';

interface MailProps {
  href: string,
  description: string,
  children?: React.ReactNode,
  titleColor: string,
  descrColor: string,
  isHeader?: boolean
}

const Mail: FC<MailProps> = ({href, description, titleColor, descrColor, children, isHeader}) => {
  return (
    <div className={isHeader === true ? `${style.block} ${style.blockHeader}` : style.block}>
      {children}
      <div className={style.info}>
        <a href={`mailto:${href}`} className={style.title} style={{color: titleColor}}>{href}</a>
        <div className={style.description} style={{color: descrColor}}>{description}</div>
      </div>
    </div>
  )
}

export default Mail;