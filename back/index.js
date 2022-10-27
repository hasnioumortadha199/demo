const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql
  type Pc {
    id:String
    title: String
    discription: String
    image:String
    tags:[String]
  }
  
  type Query {
    pcs: [Pc]
  }
`;
const pcs = [
  {
    id: "1",
    title: "HP 212",
    discription: "500ssd",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeXNynxVivssH6IUUGVKqSPSHDim23bEDqQ&usqp=CAU",
    tags: ["new", "2022", "hp+"],
  },
  {
    id: "2",
    title: "Dell",
    discription: "500ssd",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHSBGDB2z_bYU_Nes4e2IOa2KC8r-jIgpZA&usqp=CAU",
    tags: ["new", "2020", "dell+"],
  },
];

const resolvers = {
  Query: {
    pcs: () => pcs,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server ready at ${url}`);
  } catch (e) {}
}

main();
