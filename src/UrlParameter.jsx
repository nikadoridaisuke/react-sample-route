import { useLocation, useParams } from "react-router";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id}</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
}