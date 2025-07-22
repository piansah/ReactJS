import { ProfileContext } from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";

export default function ProfileApp() {
  return (
    <div>
      <ProfileContext.Provider value="Pian">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
