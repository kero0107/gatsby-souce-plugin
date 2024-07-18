import type { GatsbyNode } from 'gatsby'
import type { ObjectSchema } from 'gatsby-plugin-utils'

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({
    Joi
}): ObjectSchema => {
    return Joi.object({
        endpoint: Joi.string()
            .uri()
            .required()
            .description("The endpoint of your graphql API")
    })
}