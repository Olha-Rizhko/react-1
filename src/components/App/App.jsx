import { FaBeer } from "react-icons/fa";

import officers from "../../officers.json";
import OfficerList from "../OfficerList/OfficerList";
import ProfileSection from "../ProfileSection/ProfileSection";
import css from "./App.module.css";

const UserInfo = () => {
  return <p>Це перший пункт</p>;
};

const Points = () => {
  return <div>Це другий пункт</div>;
};

const Levels = () => {
  return (
    <ul>
      <li>Це пункт 3.1</li>
      <li>Це пункт 3.2</li>
      <li>Це пункт 3.3</li>
    </ul>
  );
};

export default function App() {
  // const isModalOpen = true;
  return (
    <div>
      <ProfileSection title="Рейтинг">
        <UserInfo />
      </ProfileSection>
      <ProfileSection title="Що це за очки досвіду та рівні?">
        <Points />
      </ProfileSection>
      <ProfileSection title="Як отримати більше очків досвіду?">
        <Levels />
      </ProfileSection>
      {/* {isModalOpen ? <p>Modal is open</p> : <p>Modal closed</p>}
      <p>{isModalOpen ? "Modal is open" : "Modal closed"}</p> */}

      {/* {isModalOpen && <p>Modal HTML</p>} */}

      {/* <OfficerProfile officer={firstPilot} />
      <OfficerProfile officer={secondPilot} /> */}

      <OfficerList items={officers} />
      <FaBeer size="24" className={css.mySuperIcon} />
    </div>
  );
}
