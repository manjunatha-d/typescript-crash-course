/**
 * GraphQL types generation in Polaris UI
 *
 * We use a library called apollo to generate GraphQL types using schema.json.
 * (See `config/scripts/gqlGenerator.ts`).
 * It goes through all the GraphQL documents in `spark-ui` and looks at schema.json
 * to get the type of each field to generate TS types in `src/generated/gql.types.ts`.
 *
 * After adding a new field in an existing .graphql file or a new .graphql file in spark-ui,
 * 1. Run `yarn prebuild` to generate types
 * Note: Sometimes the TS language server in the editors takes some time to pick up the new types.
 *
 * If you're making some changes in the API server that you want to use in the spark-ui
 * 1. Run `make gen-schema` to update the `schema.json` file
 * 2. Add/update .graphql file in spark-ui
 * 2. Run `yarn prebuild` in spark-ui
 */
