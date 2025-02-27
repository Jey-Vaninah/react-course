import { ProfileCard } from "./components/ProfileCard"

const users = [
  {
    avatar: "idk",
    name: "RickaPrincy",
    age: 22,
    job: "Développeur mobile",
  },
  {
    avatar: "idk",
    name: "Jenifère Vaninah",
    age: 21,
    job: "Développeur web",
  },
  {
    avatar: "idk",
    name: "Nomena Fitahiana",
    age: 22,
    job: "Backend",
  },
];

export const App = () => {
  return (
    <div>
      {users.map(user => <ProfileCard name={user.name} job={user.job} avatar={user.avatar} age={user.age} />)}
    </div>
  );
};


