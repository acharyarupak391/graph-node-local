### install ganache-cli
```
npm install -g @graphprotocol/graph-cli
```
### run ganache-cli
```
ganache-cli -h 0.0.0.0
```
### run docker container
```
cd docker/ && ./setup.sh && docker-compose up && cd ../
(./setup.sh only for Linux)
```
### deploy the subgraph to local
```
cd subgraph/
yarn && yarn codegen && yarn build
yarn create-local && yarn deploy-local
cd ../
```
### visit graphiql playground
Go to: http://localhost:8000/subgraphs/name/subgraph
