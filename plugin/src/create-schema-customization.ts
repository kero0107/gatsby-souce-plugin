import type { GatsbyNode } from "gatsby";
import { NODE_TYPES } from "./constants";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
    const { createTypes } = actions

    createTypes(`
        type ${NODE_TYPES.Post} implements Node {
            id: ID!
            _id: Int!
            slug: String!
            title: String!
            author: ${NODE_TYPES.Author} @link(by: "name")
            image: ${NODE_TYPES.Post}Image!
        }

        type ${NODE_TYPES.Author} implements Node {
            id: ID!
            _id: Int!
            name: String!
        }

        type ${NODE_TYPES.Post}Image implements Node {
            url: String!
            alt: String!
            width: Int!
            height: Int!
        }
    `)
}