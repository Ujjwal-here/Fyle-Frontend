import React, { useEffect, useState } from "react";
import { fetchRepoQuery, pagesQuery } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import UserDetails from "./UserDetails";
import UserRepos from "./UserRepos";
import { Pagination } from "./Pagination";
import { ClipLoader } from "react-spinners";

const Results = ({ username }) => {
  const { data, loading, refetch } = useQuery(fetchRepoQuery, {
    variables: { user: username, after: null },
    notifyOnNetworkStatusChange: true,
  });
  const {
    data: pagesData,
    refetch: refetchPageData,
  } = useQuery(pagesQuery, {
    variables: { user: username, after: null },
  });

  const [pointers, setPointers] = useState([]);

  const getAllPages = async () => {
    if (pagesData) {
      setPointers([
        ...pointers,
        ...pagesData.user?.repositories?.edges?.map((item) => item?.cursor),
      ]);

      if (pagesData?.user?.repositories.pageInfo.hasNextPage) {
        await refetchPageData({
          after: pagesData?.user?.repositories.pageInfo.endCursor,
        });
      }
    }
  };
  // fetch all pointers here
  useEffect(() => {
    getAllPages();
  
  }, [pagesData]);

  useEffect(() => {
    setPointers([]);
  }, [username]);

  console.log(pagesData);
  return (
    <>
      {loading ? (
        <div className="flex justify-center my-60">
          <ClipLoader size={80} color="#FD413C" />
        </div>
      ) : (
        <>
          <UserDetails details={data?.user} />
          <UserRepos repos={data?.user?.repositories} />
        </>
      )}
      {pagesData && (
        <Pagination
          refetch={refetch}
          pageInfo={pagesData?.user?.repositories?.pageInfo}
          totalPages={Math.ceil(pagesData?.user?.repositories?.totalCount / 10)}
          pointers={pointers}
        />
      )}
    </>
  );
};

export default Results;
