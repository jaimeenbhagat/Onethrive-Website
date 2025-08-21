/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  AlertCircle,
  Mail,
  Trophy,
  Target,
  ArrowRight,
} from "lucide-react";
import { quizData } from "../components/CultureQuiz/quizData";
import { getCultureLevel } from "../components/CultureQuiz/getCultureLevel";

const CultureQuiz = () => {
  // State variables for the quiz application
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Backend integration state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [validationErrors, setValidationErrors] = useState({});

  const totalQuestions = quizData.length;
  const allQuestionsAnswered = answeredCount === totalQuestions;

  // Refs for scrolling to questions
  const questionRefs = useRef({});
  const quizContentRef = useRef(null);

  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3001);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Calculate total score and answered count whenever answers change
  useEffect(() => {
    let currentScore = 0;
    let currentAnsweredCount = 0;
    for (const questionId in answers) {
      if (answers[questionId] !== undefined) {
        currentScore += answers[questionId];
        currentAnsweredCount++;
      }
    }
    setTotalScore(currentScore);
    setAnsweredCount(currentAnsweredCount);
  }, [answers]);

  // Effect to scroll to the next unanswered question
  useEffect(() => {
    if (showQuiz && quizContentRef.current) {
      const firstUnansweredQuestion = quizData.find(
        (q) => answers[q.id] === undefined
      );
      if (
        firstUnansweredQuestion &&
        questionRefs.current[firstUnansweredQuestion.id]
      ) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition =
            questionRefs.current[
              firstUnansweredQuestion.id
            ].getBoundingClientRect().top;
          const offsetPosition =
            elementPosition +
            quizContentRef.current.scrollTop -
            quizContentRef.current.getBoundingClientRect().top -
            headerOffset -
            16;

          quizContentRef.current.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      } else if (allQuestionsAnswered && showQuiz) {
        const submitButton = document.getElementById("submit-quiz-button");
        if (submitButton && quizContentRef.current) {
          setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = submitButton.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition +
              quizContentRef.current.scrollTop -
              quizContentRef.current.getBoundingClientRect().top +
              16;

            quizContentRef.current.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    }
  }, [answeredCount, showQuiz, answers, quizData, allQuestionsAnswered]);

  // Function to handle option selection for a question
  const handleOptionSelect = (questionId, score) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: score,
    }));
  };

  // API URL function
  const getApiUrl = () => {
    if (import.meta.env.MODE === "production") {
      return (
        import.meta.env.VITE_API_URL || "https://onethrive-backend.onrender.com"
      );
    } else {
      return import.meta.env.VITE_API_URL || "http://localhost:3001";
    }
  };

  // Validation function for email
  const validateEmail = () => {
    const errors = {};

    // Email validation
    if (!userEmail.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)
    ) {
      errors.email = "Please enter a valid email address";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle email input and start quiz (no backend call here)
  const handleEmailSubmit = () => {
    if (!validateEmail()) {
      return;
    }

    // Just close modal and start quiz - no backend call here
    setShowEmailModal(false);
    setShowQuiz(true);
    setValidationErrors({});
  };

  // Function to handle quiz submission with backend integration (SINGLE API CALL)
  const handleSubmitQuiz = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const cultureResult = getCultureLevel(totalScore);

      // Prepare complete submission data (email + quiz results together)
      const submissionData = {
        email: userEmail,
        quizType: "culture_quiz",
        totalScore: totalScore,
        totalQuestions: totalQuestions,
        maxPossibleScore: totalQuestions * 14,
        answeredCount: answeredCount,
        answers: answers,
        cultureLevel: cultureResult, // Corrected key name
        completedAt: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
      };

      console.log("Submitting complete culture quiz data:", submissionData);

      // Get API URL based on environment
      const API_URL = getApiUrl();
      console.log("Using API URL:", API_URL);

      // SINGLE API CALL to the correct endpoint
      const response = await fetch(`${API_URL}/api/culture-quiz-results`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const result = await response.json();
        console.log("Server response:", result);
        setSubmitStatus("success");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server returned error:", response.status, errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting culture quiz:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setShowQuiz(false);
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  // Function to restart the quiz
  const handleRetakeQuiz = () => {
    setAnswers({});
    setTotalScore(0);
    setAnsweredCount(0);
    setShowResults(false);
    setShowQuiz(false);
    setShowEmailModal(false);
    setUserEmail("");
    setSubmitStatus(null);
    setValidationErrors({});
    setIsSubmitting(false);
    window.scrollTo(0, 0);
  };

  const cultureResult = getCultureLevel(totalScore);
  const progressPercentage = (answeredCount / totalQuestions) * 100;
  const firstUnansweredQuestionId = quizData.find(
    (q) => answers[q.id] === undefined
  )?.id;

  // Function to copy result to clipboard
  const copyResultToClipboard = () => {
    let textToCopy = `My company's Culture Pulse: ${cultureResult.level}!\n\n`;
    textToCopy += `Score: ${totalScore} out of ${
      totalQuestions * 14
    } possible points.\n\n`;
    cultureResult.description.forEach((point) => {
      textToCopy += `- ${point}\n`;
    });
    textToCopy += `\n${cultureResult.cta.replace(
      /\*\*/g,
      ""
    )}\n\nLearn more: [Quiz Link - replace with actual quiz URL]`;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      showToast("Result copied to clipboard!", "success");
    } catch (err) {
      console.error("Failed to copy result:", err);
      showToast("Failed to copy result", "error");
    } finally {
      document.body.removeChild(textArea);
    }
  };

  // Function to show toast notifications
  const showToast = (message, type = "success") => {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.className = `fixed bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg opacity-0 transition-all duration-300 z-50 font-medium text-sm ${
      type === "success" ? "bg-[#00FFAB] text-black" : "bg-red-600 text-white"
    }`;
    document.body.appendChild(messageBox);
    setTimeout(() => {
      messageBox.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      messageBox.style.opacity = "0";
      messageBox.addEventListener("transitionend", () => messageBox.remove());
    }, 2500);
  };

  // Clear validation errors when user starts typing
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors((prev) => ({
        ...prev,
        email: null,
      }));
    }
  };

  const inputClasses = (fieldName) => `
    w-full p-3 rounded-lg bg-black border text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00FFAB] transition-all duration-200 font-medium text-sm
    ${
      validationErrors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-red-400"
        : "border-white/30 focus:border-[#00FFAB]"
    }
  `;

  return (
    <div className="min-h-screen flex mt-12 items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-black"></div>
      <div className="w-full max-w-3xl bg-black rounded-2xl shadow-xl text-white flex flex-col max-h-[85vh] border border-white/20 relative z-10">
        {!showQuiz && !showResults && (
          // Introduction Section
          <section className="text-center py-8 px-6">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Discover Your Company's
                <span className="block text-[#00FFAB] mt-1">Culture Pulse</span>
              </h1>
              <div
                className="w-72 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>

            <p className="text-lg text-white/90 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Uncover the true essence of your workplace culture with our
              comprehensive assessment. Your insights will help create a more
              thriving, innovative environment for everyone.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => setShowEmailModal(true)}
                className="group bg-[#00FFAB] text-black font-bold py-3 px-8 rounded-lg text-base hover:bg-white transition-all duration-200 shadow-lg inline-flex items-center"
              >
                Begin Assessment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              <p className="text-white/70 text-xs font-medium">
                ✓ Anonymous & Confidential ✓ Takes 5-7 minutes ✓ Professional
                Insights
              </p>
            </div>
          </section>
        )}

        {showQuiz && (
          // Quiz Section
          <div className="flex flex-col flex-1 overflow-hidden rounded-2xl">
            {/* Progress Header */}
            <div className="sticky top-0 z-20 bg-black py-4 px-6 border-b border-white/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#00FFAB]/20 rounded-full flex items-center justify-center border border-[#00FFAB]">
                    <Trophy className="w-4 h-4 text-[#00FFAB]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">
                      Culture Assessment
                    </h2>
                    <p className="text-xs text-white/70 font-medium">
                      Question {answeredCount} of {totalQuestions}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#00FFAB]">
                    {Math.round(progressPercentage)}%
                  </div>
                  <p className="text-xs text-white/70">Complete</p>
                </div>
              </div>

              <div className="relative w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-[#00FFAB] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Quiz Questions Content */}
            <div
              ref={quizContentRef}
              className="flex-1 overflow-y-auto p-6 pt-0"
            >
              <div className="space-y-6 mt-6">
                {quizData.map((q, index) => (
                  <div
                    key={q.id}
                    ref={(el) => (questionRefs.current[q.id] = el)}
                    className={`p-5 rounded-lg border transition-all duration-300 ${
                      answers[q.id] !== undefined
                        ? "border-[#00FFAB] bg-[#00FFAB]/5"
                        : q.id === firstUnansweredQuestionId
                        ? "border-[#00FFAB] bg-[#00FFAB]/5"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    {/* Question Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                          answers[q.id] !== undefined
                            ? "bg-[#00FFAB] text-black"
                            : "bg-white/20 text-white border border-white/30"
                        }`}
                      >
                        {answers[q.id] !== undefined ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                          Question {index + 1}
                        </p>
                        {answers[q.id] !== undefined && (
                          <p className="text-xs text-[#00FFAB] font-medium">
                            Completed
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Question Text */}
                    <h3
                      className={`text-lg md:text-xl font-bold mb-5 leading-tight transition-colors duration-200 ${
                        q.id === firstUnansweredQuestionId &&
                        answers[q.id] === undefined
                          ? "text-[#00FFAB]"
                          : "text-white"
                      }`}
                    >
                      {q.question}
                    </h3>

                    {/* Answer Options */}
                    <div className="space-y-3">
                      {q.options.map((option, optionIndex) => (
                        <button
                          key={option.text}
                          onClick={() => handleOptionSelect(q.id, option.score)}
                          className={`group w-full text-left py-3 px-4 rounded-lg border transition-all duration-200 cursor-pointer font-medium text-sm ${
                            answers[q.id] === option.score
                              ? "bg-[#00FFAB]/10 border-[#00FFAB] text-[#00FFAB]"
                              : "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#00FFAB]/50 hover:text-[#00FFAB]"
                          } focus:outline-none focus:ring-2 focus:ring-[#00FFAB] focus:ring-opacity-50`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="leading-relaxed pr-3">
                              {option.text}
                            </span>
                            <div
                              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                answers[q.id] === option.score
                                  ? "border-[#00FFAB] bg-[#00FFAB]"
                                  : "border-white/40 group-hover:border-[#00FFAB]"
                              }`}
                            >
                              {answers[q.id] === option.score && (
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-black rounded-full"></div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Section */}
              <div className="text-center mt-10 p-6 bg-white/5 rounded-lg border border-white/20">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Ready to Discover Your Results?
                  </h3>
                  <p className="text-white/70 font-medium text-sm">
                    Complete your culture assessment journey
                  </p>
                </div>

                <button
                  id="submit-quiz-button"
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered || isSubmitting}
                  className={`group font-bold py-3 px-10 rounded-lg text-base transition-all duration-300 ${
                    !allQuestionsAnswered || isSubmitting
                      ? "bg-white/20 text-white/50 cursor-not-allowed"
                      : "bg-[#00FFAB] hover:bg-white text-black transform hover:-translate-y-0.5 shadow-lg"
                  }`}
                >
                  <span className="flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-black/30 border-t-black rounded-full mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Reveal My Culture Assessment
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </button>

                {!allQuestionsAnswered && (
                  <p className="text-white/50 text-xs mt-3 font-medium">
                    Please answer all {totalQuestions} questions to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {showResults && (
          // Results Section
          <section className="text-center bg-gradient-to-br from-black via-[#0D1F1C] to-black p-8 rounded-2xl border border-[#00FFAB]/30 shadow-2xl flex-1 overflow-y-auto relative">
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-[#00FFAB]/15 border border-[#00FFAB] rounded-lg p-4 flex items-center gap-3 mb-6 animate-fadein">
                <CheckCircle className="text-[#00FFAB] w-5 h-5" />
                <span className="text-[#00FFAB] font-semibold text-sm drop-shadow-lg">
                  Assessment submitted successfully! Thank you for your
                  participation.
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-900/20 border border-red-400 rounded-lg p-4 flex items-center gap-3 mb-6 animate-fadein">
                <AlertCircle className="text-red-400 w-5 h-5" />
                <span className="text-red-400 font-semibold text-sm drop-shadow-lg">
                  Submission failed, but your results are still valid and
                  accurate!
                </span>
              </div>
            )}

            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-sm">
                <span>Your Company</span>
                <span className="block text-[#00FFAB] text-4xl mt-1">
                  Culture Assessment
                </span>
              </h2>
              <div
                className="w-72 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
              <p className="text-3xl md:text-4xl font-extrabold text-[#00FFAB] mb-3 leading-tight drop-shadow-lg">
                {cultureResult.level}
              </p>
              <p className="text-white/75 font-medium text-base max-w-xl mx-auto">
                {cultureResult.headline ||
                  "Here's your unique culture score and insights!"}
              </p>
            </div>

            {/* Score Display - Animated Circular Progress */}
            <div className="mx-auto mb-8 w-36 h-36 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="#333"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="#00FFAB"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={
                      2 *
                      Math.PI *
                      52 *
                      (1 - totalScore / (totalQuestions * 14))
                    }
                    style={{ transition: "stroke-dashoffset 1s" }}
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-extrabold text-[#00FFAB] mb-1 drop-shadow-lg">
                  {Math.round((totalScore / (totalQuestions * 14)) * 100)}%
                </div>
                <div className="text-xs text-white font-semibold uppercase tracking-wide">
                  Score
                </div>
                <div className="text-xs text-white/70 font-medium">
                  {totalScore} / {totalQuestions * 14}
                </div>
              </div>
            </div>

            {/* Result Description - Card Grid */}
            <div className="text-base text-white/90 font-medium max-w-3xl mx-auto mb-8 grid gap-5 md:grid-cols-2">
              {cultureResult.description.map((point, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-tr from-black via-[#00FFAB]/10 to-black rounded-xl border border-[#00FFAB]/20 text-left shadow-md hover:scale-[1.03] transition-transform duration-200"
                >
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mb-8 px-6 py-5 bg-[#00FFAB]/15 rounded-xl border border-[#00FFAB]/30 shadow-lg max-w-2xl mx-auto text-center">
              <p
                className="text-base text-white font-semibold leading-relaxed"
                dangerouslySetInnerHTML={{ __html: cultureResult.cta }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <button
                onClick={handleRetakeQuiz}
                className="bg-black text-white font-semibold py-2 px-7 rounded-lg text-base hover:bg-[#00FFAB]/10 transition-all duration-200 border border-[#00FFAB]/30 hover:border-[#00FFAB] focus:ring-2 focus:ring-[#00FFAB]"
              >
                Retake Assessment
              </button>

              <button
                onClick={copyResultToClipboard}
                className="bg-black text-white font-semibold py-2 px-7 rounded-lg text-base hover:bg-[#00FFAB]/10 transition-all duration-200 border border-[#00FFAB]/30 hover:border-[#00FFAB] focus:ring-2 focus:ring-[#00FFAB]"
              >
                Share Results
              </button>

              <a
                href="https://onethrive.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#00FFAB] text-black font-bold py-3 px-8 rounded-lg text-base inline-flex items-center hover:bg-white transition-all duration-200 shadow-lg border border-[#00FFAB]/50 focus:ring-2 focus:ring-[#00FFAB]"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Transform Your Culture
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </section>
        )}
      </div>

      {/* Email Collection Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-black p-8 rounded-2xl shadow-xl border border-white/20 text-center max-w-md w-full relative">
            <button
              onClick={() => {
                setShowEmailModal(false);
                setValidationErrors({});
              }}
              className="absolute top-4 right-4 text-white/70 hover:text-[#00FFAB] transition-colors duration-200 p-1"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00FFAB]/20 rounded-full mb-4 border border-[#00FFAB]">
                <Mail className="w-6 h-6 text-[#00FFAB]" />
              </div>
              <h2 className="text-2xl font-bold text-[#00FFAB] mb-3">
                Begin Your Culture Journey
              </h2>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Enter your email to start the assessment and receive your
                personalized culture insights.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-left">
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className={inputClasses("email")}
                  value={userEmail}
                  onChange={handleEmailChange}
                  onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                />
                {validationErrors.email && (
                  <p className="text-red-400 text-sm mt-2 font-medium flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {validationErrors.email}
                  </p>
                )}
              </div>

              <button
                onClick={handleEmailSubmit}
                className="group bg-[#00FFAB] text-black font-bold py-3 px-6 rounded-lg text-sm w-full hover:bg-white transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                Start Culture Assessment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              <div className="text-center">
                <p className="text-white/60 text-xs font-medium">
                  ✓ 100% Confidential ✓ No Spam ✓ Professional Insights Only
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CultureQuiz;
