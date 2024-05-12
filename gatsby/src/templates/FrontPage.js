import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogPosts from '../components/BlogPosts';

const FrontPage = props => { 
    const { data } = props;
    const { posts } = data;

    return (
 <Layout test="Woow" number={100}>
 <h1>Главная страница</h1>
 <p>Наша главная страница</p>
 <BlogPosts posts={posts.nodes} />
 </Layout>
);
};

export default FrontPage;

export const query = graphql`
  query {
    posts: allSanityPost {
        nodes {
            id
            title
            _updatedAt(formatString: "DD.MM.YYYY")
            body
            categories {
                title
                id
              }
            slug {
                current
            }
            image {
                asset {
                    fluid(maxWidth: 410) {
                        ...GatsbySanityImageFluid
                    }
                   # fixed(width: 700, height: 100) {
                   #    ...GatsbySanityImageFixed
                   #}
                }
            }
        }
    }
  },
`;