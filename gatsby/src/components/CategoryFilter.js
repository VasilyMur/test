import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import CategoryFilterStyles from "../styles/CategoryFilterStyles";
import { CATEGORY_LABEL_LIST } from '../constants';

const countPostsInCategories = posts => {
    const catCounts = posts.map(post => post.categories)
    .flat()
    .reduce((accum, curVal) => {
        if (!accum[curVal.id]) {
            accum[curVal.id] = {
                ...curVal,
                count: 1,
            };
        } else {
            accum[curVal.id] = {
                ...curVal,
                count: accum[curVal.id].count + 1,
            };
        }
        return accum;
    }, {});

    const sortedCategories = Object.values(catCounts).sort(
        (a,b) => a.count - b.count
    );

    return sortedCategories;
}

const CategoryFilter = () => {
  const { posts } = useStaticQuery(graphql`
    query {
        posts: allSanityPost {
            nodes {
                categories {
                    id
                    title
                }
            }
        }
    }
    `);
    const categoriesWithCounts = countPostsInCategories(posts.nodes);
    return (
    <CategoryFilterStyles>
       <Link to="/">
        <span className="tagTitle">Все</span>
        <span className="tagCount">{posts.nodes.length}</span>
       </Link>
       {categoriesWithCounts.map(category => (
        <Link 
          key={category.id}
          to={`/categories/${category.title}`}
        >
           <span className="tagTitle">
            {CATEGORY_LABEL_LIST[category.title]}
           </span>
           <span className="tagCount">{category.count}
           </span>
          </Link>
       ))}
    </CategoryFilterStyles>
    );
};

export default CategoryFilter;