import { useQuery, gql } from '@apollo/client';

const ME = gql`
  query me {
    me {
      id
      name
      userID
    }
  }
`;

export default function App() {
  return (
    <div>
      <h2>Profile</h2>
      <DisplayMe />
    </div>
  );
}

function DisplayMe() {
  const { loading, error, data } = useQuery(ME);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>Name</h2>
      <h3>{data.me.name}</h3>
      <h2>Id</h2>
      <h3>{data.me.id}</h3>
      <h2>UserID</h2>
      <h3>{data.me.userID}</h3>
    </div>
  );
}