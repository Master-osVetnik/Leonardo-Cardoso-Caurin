
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

// ====================================
// DATA: DATABASES
// ====================================

interface DatabaseTypeBaseDTO extends TableItem {
  nickname: string
}

export const DatabaseType: Record<string, DatabaseTypeBaseDTO> = {
  sql: {
    key: 'sql',
    id: 'sql',
    nickname: 'SQL',
  },
  nosql: {
    key: 'nosql',
    id: 'nosql',
    nickname: 'NoSQL',
  }
}

type DatabaseTypeDTO = DatabaseTypeBaseDTO | undefined

interface DatabaseBaseDTO extends TableItem {
  nickname: string
  type: DatabaseTypeDTO
  category: 'relational' | 'document' | 'key-value' | 'graph' | 'columnar'
  description: LocalizedText
  icon?: string
}

export const DATABASES: Record<string, DatabaseBaseDTO> = {
  postgresql: {
    key: 'postgresql',
    id: 'postgresql',
    nickname: 'PostgreSQL',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'RDBMS avançado, robusto e com recursos avançados.',
      'Advanced, robust RDBMS with advanced features.'
    ),
    icon: 'devicon-postgresql-plain colored',
  },
  mysql: {
    key: 'mysql',
    id: 'mysql',
    nickname: 'MySQL',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'RDBMS popular, confiável e de fácil uso.',
      'Popular, reliable and easy-to-use RDBMS.'
    ),
    icon: 'devicon-mysql-plain colored',
  },
  mongodb: {
    key: 'mongodb',
    id: 'mongodb',
    nickname: 'MongoDB',
    type: DatabaseType.nosql,
    category: 'document',
    description: t(
      'Banco de dados orientado a documentos (JSON).',
      'Document-oriented database (JSON).'
    ),
    icon: 'devicon-mongodb-plain colored',
  },
  redis: {
    key: 'redis',
    id: 'redis',
    nickname: 'Redis',
    type: DatabaseType.nosql,
    category: 'key-value',
    description: t(
      'Banco in-memory para cache e filas.',
      'In-memory database for caching and queues.'
    ),
    icon: 'devicon-redis-plain colored',
  },
  sqlite: {
    key: 'sqlite',
    id: 'sqlite',
    nickname: 'SQLite',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'Banco de dados embutido, sem servidor.',
      'Embedded database, serverless.'
    ),
    icon: 'devicon-sqlite-plain colored',
  },
  mariadb: {
    key: 'mariadb',
    id: 'mariadb',
    nickname: 'MariaDB',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'Fork do MySQL com melhorias de performance.',
      'MySQL fork with performance improvements.'
    ),
    icon: 'devicon-mariadb-plain colored',
  },
  cassandra: {
    key: 'cassandra',
    id: 'cassandra',
    nickname: 'Cassandra',
    type: DatabaseType.nosql,
    category: 'columnar',
    description: t(
      'Banco distribuído para grandes volumes de dados.',
      'Distributed database for large data volumes.'
    ),
    icon: 'devicon-cassandra-plain colored',
  },
  neo4j: {
    key: 'neo4j',
    id: 'neo4j',
    nickname: 'Neo4j',
    type: DatabaseType.nosql,
    category: 'graph',
    description: t(
      'Banco de dados de grafos para relacionamentos complexos.',
      'Graph database for complex relationships.'
    ),
    icon: 'devicon-neo4j-plain colored',
  },
  wix: {
    key: 'wix',
    id: 'wix',
    nickname: 'Wix Data',
    type: DatabaseType.nosql,
    category: 'document',
    description: t(
      'Banco de dados orientado a documentos no Wix.',
      'Document-oriented database on Wix.'
    ),
    icon: 'devicon-mongodb-plain colored',
  }
} as const

export type DatabaseDTO = DatabaseBaseDTO | undefined
