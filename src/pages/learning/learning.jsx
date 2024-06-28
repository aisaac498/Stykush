import React, { useState } from "react";
import "../../styles/learning.css";
import Footer from "../../components/footer/footer";
import useSlideAnimation from "../../animation/useSlideAnimation";
import HeroSection from "../../components/heroSection/heroSection";
import Categories from "../../components/categories/categories";
import CalligraphyResources from "../../components/calligraphyresources/calligraphyresources";

const beginnerCourses = [
  {
    title: "Calligraphy for complete beginners - how to get started",
    instructor: "Hobby Hoarder",
    description: "Get started with calligraphy using inexpensive tools...",
    imageSrc: "https://img.youtube.com/vi/a7Cg9EdFlxk/default.jpg",
  },
  {
    title: "Handwriting and Calligraphy Basics with Rajiv Surendra",
    instructor: "Rajiv Surendra",
    description: "There was a time when handwriting was a vital skill...",
    imageSrc: "https://img.youtube.com/vi/8ndwyrfL-W8/default.jpg",
  },
  {
    title: 'Basic Calligraphy Strokes (Beginner Calligraphy 101) | The Happy Ever Crafter',
    instructor: 'The Happy Ever Crafter',
    description: 'There are 9 basic strokes that create the letters...',
    imageSrc: 'https://img.youtube.com/vi/nj962-cU2PQ/default.jpg'
  },
  {
      title: 'Calligraphy For Beginners: Basic Strokes',
      instructor: 'Emma Jane Lefebvre',
      description: 'Begin your calligraphy journey with affordable tools...',
      imageSrc: 'https://img.youtube.com/vi/AINrreCfNFI/default.jpg'
    }
];

const intermediateCourses = [
  {
    title: "Writing Calligraphy in a Straight Line | CROOKED CALLIGRAPHY",
    instructor: "Crooked Calligraphy",
    description: "Unlock the secrets of beautiful writing with this beginner's guide to calligraphy!...",
    imageSrc: "https://img.youtube.com/vi/WzqieIwwH_0/default.jpg",
  },
  {
    title: "Calligraphy on Glass | CROOKED CALLIGRAPHY",
    instructor: "Crooked Calligraphy",
    description: "Unlock the art of calligraphy with easy-to-follow tips and techniques in this video!...",
    imageSrc: "https://img.youtube.com/vi/TantutCk6pk/default.jpg",
  },
  {
    title: "Calligraphy on Agate Slices | CROOKED CALLIGRAPHY",
    instructor: "Crooked Calligraphy",
    description: "Unlock the art of beautiful writing with our beginner's guide to calligraphy!...",
    imageSrc: "https://img.youtube.com/vi/oSNtVb_aQk4/default.jpg",
  },
  {
    title: "Flourishing Lesson Sample from Modern Calligraphy 201",
    instructor: "Crooked Calligraphy",
    description: "Unlock the secrets of beautiful writing with our beginner's guide to calligraphy!...",
    imageSrc: "https://img.youtube.com/vi/ABvm6I9YVP0/default.jpg",
  }
];

const expertCourses = [
  {
    title: "Calligraphy Mastery: Expert Tips for Creating Professional Calligraphy Signatures",
    instructor: "Artlogo",
    description: "Discover the art of crafting your own professional signature with our exclusive...",
    imageSrc: "https://img.youtube.com/vi/ADyA-KpiP7Y/default.jpg",
  },
  {
    title: "calligraphy masters - handwriting.",
    instructor: "BaGa Calligraphy",
    description: "Calligraphy with a dip pen Written with a Leonardt IIIEF nib...",
    imageSrc: "https://img.youtube.com/vi/p9wCB95TbW0/default.jpg",
  },
  {
    title: "Calligraphy || Ball point pen || Real legend || handwriting expert|| cursive writing",
    instructor: "CalliWriting",
    description: "Discover essential techniques, affordable tools, and step-by-step tutorials...",
    imageSrc: "https://img.youtube.com/vi/5e5OG51JKCw/default.jpg",
  },
  {
    title: "Mohamed Zakariya: The American master of Islamic calligraphy",
    instructor: "Quartz",
    description: "Discover the art of crafting your own professional signature with our exclusive...",
    imageSrc: "https://img.youtube.com/vi/CxSI0PG6YhY/default.jpg",
  }
];

const Learning = () => {
  useSlideAnimation();
  const [activeCategory, setActiveCategory] = useState("Beginners");

  const renderCourses = (courses) => {
    return courses.map((course) => (
      <div key={course.title} className="course-item">
        <img src={course.imageSrc} alt={course.title} />
        <h3>{course.title}</h3>
        <h4>{course.instructor}</h4>
        <p>{course.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <HeroSection />
      <Categories setActiveCategory={setActiveCategory} />
      <section className="courses">
        <div className="course-list">
          {activeCategory === "Beginners" && renderCourses(beginnerCourses)}
          {activeCategory === "Intermediate" && renderCourses(intermediateCourses)}
          {activeCategory === "Expert" && renderCourses(expertCourses)}
        </div>
        <CalligraphyResources />
      </section>
      <Footer />
    </div>
  );
};

export default Learning;
