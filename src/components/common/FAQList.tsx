import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "Does Bizvis require a camera to function?",
    answer: (
      <>
        Yes — for businesses, a camera is essential. Bizvis is built around real-time visual access to physical spaces, meaning that businesses must install and integrate smart cameras or compatible live-streaming setups to participate on the platform. This enables users to view live conditions inside venues like restaurants, gyms, nightclubs, or festivals.
        <br /><br />
        For consumers or users, a camera is <strong>not</strong> required to use the platform. They can access live streams, use the chat features, and interact with venues without needing a personal camera.
      </>
    ),
  },
  {
    question: "Who is Bizvis for?",
    answer: "Bizvis is for both businesses that want to offer live insights into their venues and consumers who want to explore and interact with those venues in real-time.",
  },
  {
    question: "Is my privacy protected on Bizvis?",
    answer: "Yes, Bizvis is designed with privacy in mind. Users are not required to share personal video or data to use the platform.",
  },
  {
    question: "What kind of businesses can use Bizvis?",
    answer: "Any business with a physical location can benefit from Bizvis — including restaurants, cafes, gyms, event spaces, and more.",
  },
];

export default function FAQList() {
  return (
    <section className="max-w-2xl mx-auto px-4 text-white ">
      <h2 className="text-3xl  lg:text-[40px] font-bold text-center mb-12">FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
}
