
import { About } from "../_components/about/About";
import { Contact } from "../_components/contact/Contact";
import { WorkExperiences } from "../_components/workExperiences/WorkExperiences";
import { Hero } from "../_components/hero/Hero";

const HomePage: React.FC = () => {

  return (
    <div>
      <Hero />
      <About />
      <WorkExperiences />
      <Contact />
    </div>
  )
}

export default HomePage;










// TODO this is how the HOC in Section can be used
// dynamically and maintaining the props of each component
// import { withSection } from "../_layout/section/Section";
// import { About } from "../_components/about/About";
// import { Contact } from "../_components/contact/Contact";
// import { Experience } from "../_components/experience/Experience";
// import { Hero } from "../_components/hero/Hero";

// const HomePage: React.FC = () => {

//   const componentsWithProps = [
//     { Component: Hero, props: { title: "Welcome" } },
//     { Component: About, props: {} },
//     { Component: Experience, props: {} },
//     { Component: Contact, props: { email: "example@email.com" } },
//   ];

//   return (
//     <div>
//       {componentsWithProps.map((item, index) => {
//         const WrappedComponent = withSection({ Component: item.Component });
//         return <WrappedComponent key={index} {...item.props} />;
//       })}
//     </div>
//   )
// }

// export default HomePage;
