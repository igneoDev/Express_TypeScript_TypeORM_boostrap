import { createConnection, ConnectionOptions, getConnection } from 'typeorm'
import {
  type, host, username, password, database, migrations, cli,
} from '../../ormconfig'

const { NODE_ENV } = process.env

// Indicador de ambiente de produção ou stage
// const isServer: boolean = !!(NODE_ENV === 'production' || NODE_ENV === 'stage')
const isServer: boolean = !!(NODE_ENV === 'production' || NODE_ENV === 'stage')

const connectionConfig: ConnectionOptions = {
  type,
  host,
  username,
  password,
  database,
  migrations: !isServer ? migrations : null,
  cli: !isServer ? cli : null,
  entities: [`**/models/**.${isServer ? 'js' : 'ts'}`],
}

export default async () => {
  try {
    try {
      getConnection()
    } catch (error) {
      await createConnection(connectionConfig)
    }

    console.log('Conexão com banco realizada com sucesso')
  } catch (error) {
    console.log(error)
    console.log('Erro ao criar conexão com banco de dados')
  }
}
