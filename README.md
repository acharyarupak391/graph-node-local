### Install ganache-cli & graph-cli
```
npm install -g ganache-cli
npm install -g @graphprotocol/graph-cli
```
### Run ganache-cli
```
ganache-cli -h 0.0.0.0
```
### Run docker container (make sure you have docker installed on your system)
```
cd docker/ && ./setup.sh && docker-compose up && cd ../
(./setup.sh only for Linux)
```
### Deploy the subgraph to local
```
cd subgraph/
yarn && yarn codegen && yarn build
yarn create-local && yarn deploy-local
cd ../
```

### Visit graphiql playground
Go to: http://localhost:8000/subgraphs/name/subgraph
### Query the subgraph endpoint
```
cd query/
yarn
node index.js
```
