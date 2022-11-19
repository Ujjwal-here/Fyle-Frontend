import { gql } from "@apollo/client";

export const fetchRepoQuery = gql`
  query GetUserData($user: String!, $after: String) {
    user(login: $user) {
      id
      name
      bio
      location
      avatarUrl
      url
      company
      email
      twitterUsername
      repositories(first: 10, after: $after) {
        totalCount
        pageInfo {
          startCursor
          hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
        }
        nodes {
          name
          description
          isPrivate
          forkCount
          nameWithOwner
          stargazerCount
          languages(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const pagesQuery = gql`
  query GetPagesData($user: String!, $after: String) {
    user(login: $user) {
      id
      name
      bio
      location
      avatarUrl
      url
      company
      email
      twitterUsername
      repositories(first: 100, after: $after) {
        totalCount
        pageInfo {
          startCursor
          hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
        }
      }
    }
  }
`;
