// mikro-orm.config.ts
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SqlHighlighter } from "@mikro-orm/sql-highlighter"
import { EntityGenerator } from "@mikro-orm/entity-generator";
import { Migrator } from '@mikro-orm/migrations';

export default defineConfig({
    multipleStatements: true,
    extensions: [EntityGenerator, Migrator],
    discovery: {
        warnWhenNoEntities: false
    },
    entities: ["dist/**/*.entity.js"],
    entitiesTs: ["src/**/*.entity.ts"],
    driver: PostgreSqlDriver,
    dbName: 'my_database',  // Database name
    user: 'db_user',        // Database username
    password: 'db_password',// Database password
    debug: true,            // Set to true in development to see SQL logs
    highlighter: new SqlHighlighter(),
    migrations: {
        path: 'src/migrations/**/*.ts',
    },
    entityGenerator: {
        save: true,
        path: 'src/modules',
        esmImport: true,
        readOnlyPivotTables: true,
        outputPurePivotTables: true,
        bidirectionalRelations: true,
        customBaseEntityName: 'Base',
        useCoreBaseEntity: true,
    }
});