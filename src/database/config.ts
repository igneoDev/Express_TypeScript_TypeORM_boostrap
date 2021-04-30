import { createConnection, ConnectionOptions, getConnection } from 'typeorm'
import {
  type, host, username, password, database, migrations, cli,
} from '../../ormconfig'

// Indicador de ambiente de produção ou stage
// const isServer: boolean = NODE_ENV === 'production' || NODE_ENV === 'stage' ? true : false

const connectionConfig: ConnectionOptions = {
  type,
  host,
  username,
  password,
  database,
  migrations,
  cli,
  entities: ['**/models/**.ts'],
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
