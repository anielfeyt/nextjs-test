import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

type AboutProps = {
  users: User[];
};

const AboutPage = ({ users }: AboutProps) => {
  const [limitedUsers, setLimitdUsers] = useState<User[]>([]);

  useEffect(() => {
    if (users) {
      const limit = users.slice(5);
      setLimitdUsers(limit);
    }
  }, [users]);

  return (
    <div>
      <h1>Here are some of the users</h1>
      {limitedUsers.map((user) => (
        <div key={user.id}>
          <p>
            {user.name}
            <br />
            {user.gender}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AboutPage;

export async function getServerSideProps() {
  const res = await fetch("https://gorest.co.in/public/v2/users");

  const data = await res.json();

  return {
    props: { users: data },
  };
}
