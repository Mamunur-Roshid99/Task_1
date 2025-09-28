import React from "react";
import FaqAccordion from "./FaqAccordion";

const faqData = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "What is included in the service?",
    answer:
      "We include strategy, research, writing, editing, and SEO optimization.",
  },
  {
    question: "Can I request revisions?",
    answer: "Yes, we offer 2 rounds of revisions within the first 7 days.",
  },
  {
    question: "Do I own the content?",
    answer: "Yes! You own full rights to the blog content we create.",
  },
];

const Frequently = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="space-y-10">
          {/*  */}
          <div className="text-[##1B1743] text-center dm_sans font-semibold text-2xl lg:text-3xl">
            Frequently Ask Question
          </div>
          {/*  */}
          <div className="grid grid-cols-1 gap-7">
            {faqData.map((item, index) => (
              <FaqAccordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;