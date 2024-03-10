import Header from "../component/Header";
import Steps from "../component/Steps";
import AudienceSection from "../sections/AudienceSection";
import CreateShareSection from "../sections/CreateShareSection";
import ExpertsAgreeSection from "../sections/ExpertsAgreeSection";
import OneLinkCollectsSection from "../sections/OneLinkCollectsSection";
// import OneLinkCollectsSection from "../sections/OneLinkCollectsSection";
import WhyLoveSection from "../sections/WhyLoveSection";
import YourHomepageSection from "../sections/YourHomepageSection";

function Home() {
  return (
    <>
      <Header />
      <WhyLoveSection />
      <Steps
        step="Step 1"
        title="Connect Your Content"
        text="Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online."
      />

      <YourHomepageSection />
      <Steps
        step="Step 2"
        title="Share Your Homepage"
        text="Share your Wavium homepage link with your followers, and
        we'll handle the rest."
      />

      <OneLinkCollectsSection />
      <Steps
        step="Step 3"
        title="Send Emails & Text Messages"
        text="No more going through a social platform. Reach and engage
        your audience directly over email and text massage."
      />

      <CreateShareSection />
      <ExpertsAgreeSection />
      <AudienceSection />
    </>
  );
}

export default Home;
