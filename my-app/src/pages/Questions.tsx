import  { useState } from 'react';

const Questions = () => {
  // State to manage the active question
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Function to toggle the active question
  const toggleQuestion = (index: number | null) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Define the array of questions and answers
  const questions = [
    {
      title: "How does URL shortening work?",
      answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    {
      title: "Are the shortened links permanent? Will they expire?",
      answer: "Yes, the shortened links are permanent and do not expire. Once created, your shortened URLs will remain accessible indefinitely, providing a reliable and persistent way to share and access your content."
    },
    // Add more questions and answers here as needed
    {
      title: "Is it necessary to create an account to use the URL shortening service?",
      answer: "No, it is not necessary to create an account. Anyone can use the URL shortening service without an account."
    },
    // Add more questions and answers here as needed
    {
      title: "Are there any limitations on the number of URLs I can shorten?",
      answer: "No, there are no limitations on the number of URLs you can shorten. Feel free to use our service to shorten as many URLs as you need, providing a flexible solution for your link management."
    },
    // Add more questions and answers here as needed
    {
      title: "Can I customize the shortened URLs to reflect my brand or content?",
      answer: "Customizing shortened URLs to reflect your brand or content is a feature available exclusively to our registered users. Create an account to enjoy the benefits of personalized and branded short links."
    },
    // Add more questions and answers here as needed
    {
      title: "Can I track the performance of my shortened URLs?",
      answer: "Yes, account holders can track the performance of their shortened URLs from the account dashboard. Our analytics feature provides valuable insights, allowing you to monitor clicks, geographic location, and more for each of your links, enhancing your link management experience."
    },
    // Add more questions and answers here as needed
    {
      title: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer: "Our URL shortening service prioritizes security. Shortened links generated through our platform are designed to be secure and protect against spam or malicious activity. We implement measures to ensure the integrity and safety of your links, providing a trustworthy environment for your URL shortening needs."
    },
    // Add more questions and answers here as needed
    {
      title: "What is a QR code and what can it do?",
      answer:" A QR code, or Quick Response code, is a two-dimensional barcode that can store various types of information. It can encode text, URLs, contact information, and more. QR codes are widely used for quick access to information; users can scan the code with a smartphone camera to open a link, reveal contact details, or perform other actions, making them a versatile and efficient tool for information sharing."
    },
    // Add more questions and answers here as needed
    {
      title: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer: "Yes, we provide an API for seamless integration of our URL shortening service into your applications or websites. This allows you to incorporate our link shortening functionality directly into your projects, enhancing the user experience and extending the capabilities of your applications with ease."
    },

  ];

  return (

      <div>
        <section className="questions"  id="questions">
          <div className="question-title-container">
            <div className="section-title-bar" />
            <h1 className="question-title">FAQs</h1>
          </div>
          <div className="section-center question-center">
            {/* Map through the questions array */}
            {questions.map((question, index) => (
              <article className={`question ${index === activeQuestion ? 'active' : ''}`} key={index}>
                <div className="question-header" onClick={() => toggleQuestion(index)}>
                  <h2 className="question-header-title">{question.title}</h2>
                  <button className="question-btn">
                    {/* Use conditional rendering for the toggle icon */}
                    {index === activeQuestion ? (
                      <i className="fa fa-minus" />
                    ) : (
                      <i className="fa-solid fa-plus fa-lg plus" />
                    )}
                  </button>
                </div>
                {/* Render the answer only if the question is active */}
                {index === activeQuestion && (
                  <p className="question-body">{question.answer}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    
  );
};

export default Questions;
