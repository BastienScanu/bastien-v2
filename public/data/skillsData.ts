import Skill from '../../src/app/models/Skill'

const skillsData: Skill[] = [
  {
    name: 'design',
    technos: [
      {
        key: 'photoshop',
        name: 'Photoshop',
        value: 70,
      },
      {
        key: 'sketch',
        name: 'Sketch',
        value: 75,
      },
      {
        key: 'figma',
        name: 'Figma',
        value: 80,
      },
    ],
  },
  {
    name: 'front',
    technos: [
      {
        key: 'angular',
        name: 'Angular',
        value: 95,
      },
      {
        key: 'nextjs',
        name: 'Next.js',
        value: 70,
      },
      {
        key: 'react',
        name: 'React',
        value: 80,
      },
      {
        key: 'html',
        name: 'HTML5',
        value: 100,
      },
      {
        key: 'css',
        name: 'CSS3',
        value: 90,
      },
      {
        key: 'sass',
        name: 'Sass',
        value: 90,
      },
    ],
  },
  {
    name: 'back',
    technos: [
      {
        key: 'nodejs',
        name: 'Node.js',
        value: 100,
      },
      {
        key: 'nestjs',
        name: 'NestJS',
        value: 90,
      },
      {
        key: 'python',
        name: 'Python',
        value: 70,
      },
      {
        key: 'spring',
        name: 'Java Spring Boot',
        value: 80,
      },
      {
        key: 'socket',
        name: 'Socket.io',
        value: 70,
      },
      {
        key: 'express',
        name: 'Express.js',
        value: 90,
      },
      {
        key: 'kafka',
        name: 'Apache Kafka',
        value: 70,
      },
    ],
  },
  {
    name: 'database',
    technos: [
      {
        key: 'mongo',
        name: 'MongoDB',
        value: 90,
      },
      {
        key: 'postgre',
        name: 'PostgreSQL',
        value: 80,
      },
      {
        key: 'typeorm',
        name: 'TypeORM',
        value: 80,
      },
      {
        key: 'redis',
        name: 'Redis',
        value: 70,
      },
    ],
  },
  {
    name: 'devops',
    technos: [
      {
        key: 'docker',
        name: 'Docker',
        value: 70,
      },
      {
        key: 'gitlab',
        name: 'Gitlab CI/CD',
        value: 70,
      },
      {
        key: 'jest',
        name: 'Jest',
        value: 70,
      },
      {
        key: 'bash',
        name: 'Bash / SSH',
        value: 70,
      },
    ],
  },
]

export default skillsData
