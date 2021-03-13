import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    category(id: String!): [Category]
  }
  # type Query {
  #   category: [Category]
  # }

  type Category {
    id: String!
    question: String!,
    answers: [String!]
    correctAnswer: String!
    numberOfQuestions: Int!
  }
`;

