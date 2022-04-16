import { useTranslation } from 'next-i18next';
import * as React from 'react'
import Backend from './Backend';
import Database from './Database';
import Design from './Design';
import Devops from './Devops';
import Frontend from './Frontend';

const Skills = () => {
  const { t } = useTranslation('skills')

  return (
    <div id="skills">
      <h1>
        {t('title')}
      </h1>
      <Design/>
      <Frontend/>
      <Backend/>
      <Database/>
      <Devops/>
    </div>
  )
}

export default Skills
