import { ProfileCard } from "./assets/composant/ProfileCard"
export const App = () => {
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

  return (
    <div>
      <ProfileCard {users} />
    </div>
  );
};


