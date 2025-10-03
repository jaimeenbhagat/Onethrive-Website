/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { CheckCircle, AlertCircle, Calculator, TrendingUp, Users, DollarSign } from "lucide-react";

// Custom Card components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 sm:p-6 ${className}`}>
    {children}
  </div>
);

// Custom Slider component
const Slider = ({ defaultValue, max, step, onValueChange, className = "", ...props }) => {
  const [value, setValue] = useState(defaultValue[0]);
  
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onValueChange([newValue]);
  };
  
  return (
    <div className={`relative ${className}`}>
      <input
        type="range"
        min="1"
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer slider-custom"
        {...props}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>1</span>
        <span className="mr-12">5</span>
        <span>10</span>
      </div>
      <style jsx>{`
        .slider-custom {
          background: linear-gradient(to right, #00FFAB 0%, #00FFAB ${((value-1) / 9) * 50}%, #00FFAB ${((value-1) / 9) * 100}%, #374151 ${((value-1) / 9) * 100}%, #374151 100%);
        }
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #00FFAB;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid #1f2937;
          box-shadow: 0 0 10px rgba(0, 255, 171, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #00FFAB;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid #1f2937;
          box-shadow: 0 0 10px rgba(0, 255, 171, 0.5);
        }
      `}</style>
    </div>
  );
};

// Helper function to format numbers to Indian Rupees
function formatINR(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "₹0";
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

// Configuration Constants for Industry Benchmarks
const DISENGAGEMENT_PRODUCTIVITY_LOSS_FACTOR = 0.34;
const AVG_REPLACEMENT_COST_FACTOR = 1.25;
const WORKING_DAYS_PER_YEAR = 250;
const REVENUE_INCREASE_FACTOR_MIN = 0.02;
const REVENUE_INCREASE_FACTOR_MAX = 0.05;

// Colors for the Pie Chart
const COLORS = ["#ef4444", "#f59e0b", "#00FFAB"];

export default function EngagementCalculatorForm() {
  // Core State Variables for Inputs
  const [numEmployees, setNumEmployees] = useState(100);
  const [avgAnnualSalary, setAvgAnnualSalary] = useState(480000);
  const [employeesWhoLeft, setEmployeesWhoLeft] = useState(10);
  const [engagementScore, setEngagementScore] = useState([6]);
  const [annualRevenue, setAnnualRevenue] = useState(50000000);
  const [avgExtraAbsenteeismDaysPerEmployee, setAvgExtraAbsenteeismDaysPerEmployee] = useState(2);

  // Validation state for calculator inputs
  const [turnoverInputError, setTurnoverInputError] = useState("");

  // UI state for showing results and modal
  const [showResults, setShowResults] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // State for contact form
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Form submission states (copied from contact.jsx)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [validationErrors, setValidationErrors] = useState({});

  // Calculated ROI data state
  const [roiData, setRoiData] = useState({
    totalTurnoverCost: 0,
    totalDisengagementCost: 0,
    totalAbsenteeismCost: 0,
    totalHiddenLoss: 0,
    potentialSavingsMin: 0,
    potentialSavingsMax: 0,
    potentialRevenueIncreaseMin: 0,
    potentialRevenueIncreaseMax: 0,
  });

  // Data for the Pie Chart
  const [pieData, setPieData] = useState([]);

  // Clear status messages after 5 seconds (copied from contact.jsx)
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3001);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Core Calculation Logic Function
  const calculateRoiData = () => {
    const costPerReplacement = avgAnnualSalary * AVG_REPLACEMENT_COST_FACTOR;
    const totalTurnoverCost = employeesWhoLeft * costPerReplacement;
    const disengagementInfluenceFactor = (10 - engagementScore[0]) / 10;
    const avgDailySalary = avgAnnualSalary / WORKING_DAYS_PER_YEAR;
    const productivityLossCost = numEmployees * avgAnnualSalary * disengagementInfluenceFactor * DISENGAGEMENT_PRODUCTIVITY_LOSS_FACTOR;
    const absenteeismCost = numEmployees * avgExtraAbsenteeismDaysPerEmployee * avgDailySalary * disengagementInfluenceFactor;
    const totalDisengagementCost = productivityLossCost + absenteeismCost;
    const totalHiddenLoss = totalTurnoverCost + totalDisengagementCost;

    // Potential Savings (by improving engagement score by 1-2 points)
    const improvedEngagement1Pt = Math.min(10, engagementScore[0] + 1);
    const newDisengagementInfluenceFactor1Pt = (10 - improvedEngagement1Pt) / 10;
    const newProductivityLossCost1Pt = numEmployees * avgAnnualSalary * newDisengagementInfluenceFactor1Pt * DISENGAGEMENT_PRODUCTIVITY_LOSS_FACTOR;
    const newAbsenteeismCost1Pt = numEmployees * avgExtraAbsenteeismDaysPerEmployee * avgDailySalary * newDisengagementInfluenceFactor1Pt;
    const newTotalDisengagementCost1Pt = newProductivityLossCost1Pt + newAbsenteeismCost1Pt;
    const savings1Pt = totalDisengagementCost - newTotalDisengagementCost1Pt;

    const improvedEngagement2Pt = Math.min(10, engagementScore[0] + 2);
    const newDisengagementInfluenceFactor2Pt = (10 - improvedEngagement2Pt) / 10;
    const newProductivityLossCost2Pt = numEmployees * avgAnnualSalary * newDisengagementInfluenceFactor2Pt * DISENGAGEMENT_PRODUCTIVITY_LOSS_FACTOR;
    const newAbsenteeismCost2Pt = numEmployees * avgExtraAbsenteeismDaysPerEmployee * avgDailySalary * newDisengagementInfluenceFactor2Pt;
    const newTotalDisengagementCost2Pt = newProductivityLossCost2Pt + newAbsenteeismCost2Pt;
    const savings2Pt = totalDisengagementCost - newTotalDisengagementCost2Pt;

    // Potential Revenue Increase
    const potentialRevenueIncreaseMin = annualRevenue * REVENUE_INCREASE_FACTOR_MIN * ((engagementScore[0] + 1) / 10);
    const potentialRevenueIncreaseMax = annualRevenue * REVENUE_INCREASE_FACTOR_MAX * ((engagementScore[0] + 2) / 10);

    return {
      totalTurnoverCost,
      totalDisengagementCost,
      totalAbsenteeismCost: absenteeismCost,
      totalHiddenLoss,
      potentialSavingsMin: Math.max(0, savings1Pt),
      potentialSavingsMax: Math.max(0, savings2Pt),
      potentialRevenueIncreaseMin,
      potentialRevenueIncreaseMax,
    };
  };

  // Effect to update ROI data whenever input states change
  useEffect(() => {
    const calculatedData = calculateRoiData();
    setRoiData(calculatedData);
    setPieData([
      { name: "Turnover Cost", value: calculatedData.totalTurnoverCost },
      { name: "Disengagement Cost", value: calculatedData.totalDisengagementCost },
      { name: "Absenteeism Cost", value: calculatedData.totalAbsenteeismCost },
    ]);
  }, [numEmployees, avgAnnualSalary, employeesWhoLeft, engagementScore, avgExtraAbsenteeismDaysPerEmployee, annualRevenue]);

  // Handler for the main "Calculate" button click
  const handleCalculateButtonClick = () => {
    let isValid = true;
    if (employeesWhoLeft > numEmployees) {
      setTurnoverInputError("The number of employees who left cannot be more than your total employees.");
      isValid = false;
    } else {
      setTurnoverInputError("");
    }

    if (isValid) {
      setShowContactModal(true);
    }
  };

  // API URL function (copied from contact.jsx)
  const getApiUrl = () => {
    if (import.meta.env.MODE === 'production') {
      return import.meta.env.VITE_API_URL || 'https://onethrive-backend-n8fc.onrender.com';
    } else {
      return import.meta.env.VITE_API_URL || 'http://localhost:3001';
    }
  };
  

  // Validation function for contact form
  const validateContactForm = () => {
    const errors = {};

    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone number validation
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(phoneNumber.replace(/\s+/g, ''))) {
      errors.phoneNumber = "Please enter a valid phone number (10-15 digits)";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handler for contact form submission (updated with backend integration)
  const handleContactSubmit = async () => {
    if (!validateContactForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data including all calculator inputs and calculated results
      const formData = {
        email,
        phoneNumber,
        numEmployees,
        avgAnnualSalary,
        employeesWhoLeft,
        engagementScore: engagementScore[0],
        annualRevenue,
        avgExtraAbsenteeismDaysPerEmployee,
        calculatedResults: roiData
      };

      console.log("Submitting ROI calculator data:", formData);

      // Get API URL based on environment
      const API_URL = getApiUrl();
      console.log("Using API URL:", API_URL);
      
      const response = await fetch(`${API_URL}/api/roi-calculator`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const result = await response.json();
        console.log("Server response:", result);

        setSubmitStatus("success");
        setShowContactModal(false);
        setShowResults(true);
        setValidationErrors({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server returned error:", response.status, errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting ROI calculator form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear validation errors when user starts typing
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors(prev => ({
        ...prev,
        email: null
      }));
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (validationErrors.phoneNumber) {
      setValidationErrors(prev => ({
        ...prev,
        phoneNumber: null
      }));
    }
  };

  const inputClasses = (fieldName) => `
    w-full p-3 bg-black bg-opacity-40 text-white border rounded-lg focus:ring-2 focus:ring-[#00FFAB] outline-none transition-all duration-300
    ${validationErrors[fieldName] ? 'border-red-500 focus:border-red-500 focus:ring-red-400' : 'border-gray-800'}
  `;

  const getEngagementColor = (score) => {
    if (score <= 3) return "text-red-400";
    if (score <= 6) return "text-yellow-400";
    return "text-[#00FFAB]";
  };

  const getEngagementLabel = (score) => {
    if (score <= 3) return "Low Engagement";
    if (score <= 6) return "Moderate Engagement";
    return "High Engagement";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {!showResults ? (
        <div className="space-y-8 sm:space-y-12">
          {/* Centered Input Form */}
          <div className="flex justify-center">
            <Card className="bg-black border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl max-w-2xl w-full">
              <CardContent className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#00FFAB] mb-2">Enter Your Company Details</h2>
                  <p className="text-white text-sm sm:text-md">All information is kept confidential and secure</p>
                </div>
                
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-900/20 border border-[#00FFAB] rounded-lg p-3 sm:p-4 flex items-start sm:items-center gap-3 animate-fade-in">
                    <CheckCircle className="text-[#00FFAB] w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-[#00FFAB] text-sm sm:text-base">
                      ROI calculation submitted successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-900/20 border border-red-400 rounded-lg p-3 sm:p-4 flex items-start sm:items-center gap-3 animate-fade-in">
                    <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-red-400 text-sm sm:text-base">
                      Failed to submit ROI calculation. Please try again or contact us directly.
                    </span>
                  </div>
                )}
                
                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="numEmployees" className="block text-white text-xs sm:text-sm font-bold mb-2">
                      Total Number of Employees
                    </label>
                    <input
                      type="number"
                      id="numEmployees"
                      className="w-full p-3 sm:p-4 bg-black bg-opacity-60 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent outline-none transition-all duration-300 text-base sm:text-lg font-medium placeholder-gray-500"
                      value={numEmployees}
                      onChange={(e) => setNumEmployees(Number(e.target.value))}
                      min="1"
                      placeholder="e.g., 100"
                    />
                  </div>

                  <div>
                    <label htmlFor="avgAnnualSalary" className="block text-white text-xs sm:text-sm font-bold mb-2">
                      Average Annual Salary (₹)
                    </label>
                    <input
                      type="number"
                      id="avgAnnualSalary"
                      className="w-full p-3 sm:p-4 bg-black bg-opacity-60 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent outline-none transition-all duration-300 text-base sm:text-lg font-medium placeholder-gray-500"
                      value={avgAnnualSalary}
                      onChange={(e) => setAvgAnnualSalary(Number(e.target.value))}
                      min="0"
                      placeholder="e.g., 480000"
                    />
                  </div>

                  <div>
                    <label htmlFor="employeesWhoLeft" className="block text-white text-xs sm:text-sm font-bold mb-2">
                      Employees Who Left Last Year
                    </label>
                    <input
                      type="number"
                      id="employeesWhoLeft"
                      className={`w-full p-3 sm:p-4 bg-black bg-opacity-60 text-white border rounded-xl focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent outline-none transition-all duration-300 text-base sm:text-lg font-medium placeholder-gray-500 ${
                        turnoverInputError ? "border-red-500" : "border-gray-700"
                      }`}
                      value={employeesWhoLeft}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setEmployeesWhoLeft(value);
                        if (value > numEmployees) {
                          setTurnoverInputError("Cannot exceed total employees");
                        } else {
                          setTurnoverInputError("");
                        }
                      }}
                      min="0"
                      max={numEmployees}
                      placeholder="e.g., 10"
                    />
                    {turnoverInputError && (
                      <p className="text-red-400 text-xs sm:text-sm mt-1 font-medium">{turnoverInputError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="avgExtraAbsenteeismDaysPerEmployee" className="block text-white text-xs sm:text-sm font-bold mb-2">
                      Average Absenteeism (days/year)
                    </label>
                    <input
                      type="number"
                      id="avgExtraAbsenteeismDaysPerEmployee"
                      className="w-full p-3 sm:p-4 bg-black bg-opacity-60 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent outline-none transition-all duration-300 text-base sm:text-lg font-medium placeholder-gray-500"
                      value={avgExtraAbsenteeismDaysPerEmployee}
                      onChange={(e) => setAvgExtraAbsenteeismDaysPerEmployee(Number(e.target.value))}
                      min="0"
                      placeholder="e.g., 2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="annualRevenue" className="block text-white text-xs sm:text-sm font-bold mb-2">
                    Total Annual Revenue (₹)
                  </label>
                  <input
                    type="number"
                    id="annualRevenue"
                    className="w-full p-3 sm:p-4 bg-black bg-opacity-60 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent outline-none transition-all duration-300 text-base sm:text-lg font-medium placeholder-gray-500"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    min="0"
                    placeholder="e.g., 50000000"
                  />
                </div>

                {/* Enhanced Engagement Slider */}
                <div className="pt-4">
                  <label htmlFor="engagementScoreSlider" className="block text-white text-xs sm:text-sm font-bold mb-4">
                    Current Employee Engagement Score
                  </label>
                  <div className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl">
                    <Slider
                      defaultValue={engagementScore}
                      max={10}
                      step={1}
                      onValueChange={setEngagementScore}
                      className="w-full"
                      id="engagementScoreSlider"
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 sm:gap-0">
                      <div className="text-center sm:text-left">
                        <div className={`text-2xl sm:text-3xl font-bold ${getEngagementColor(engagementScore[0])}`}>
                          {engagementScore[0]}/10
                        </div>
                        <div className={`text-sm font-medium ${getEngagementColor(engagementScore[0])}`}>
                          {getEngagementLabel(engagementScore[0])}
                        </div>
                      </div>
                      <div className="text-center sm:text-right text-xs sm:text-sm text-gray-400">
                        <div>1-3: Low Engagement</div>
                        <div>4-6: Moderate Engagement</div>
                        <div>7-10: High Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className={`w-full bg-gradient-to-r from-[#00FFAB] to-[#00E69B] text-black py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00FFAB]/20 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#00FFAB]/50 ${
                    turnoverInputError ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleCalculateButtonClick}
                  disabled={!!turnoverInputError}
                >
                  <div className="flex items-center justify-center gap-2 p-1 sm:gap-3">
                    <Calculator className="w-10 h-10 sm:w-6 sm:h-6" />
                    <div className="text-md">Calculate Your Engagement ROI</div>
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        // Split Layout with Results - Responsive
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Input Card */}
          <Card className="bg-black border-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl order-2 xl:order-1">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#00FFAB] mb-4 sm:mb-6 text-center">Your Company Details</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Total Employees:</span>
                  <span className="text-white font-bold text-sm sm:text-base">{numEmployees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Average Annual Salary:</span>
                  <span className="text-white font-bold text-sm sm:text-base">{formatINR(avgAnnualSalary)}</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Annual Revenue:</span>
                  <span className="text-white font-bold text-sm sm:text-base">{formatINR(annualRevenue)}</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Employees Who Left:</span>
                  <span className="text-red-400 font-bold text-sm sm:text-base">{employeesWhoLeft}</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Average Absenteeism:</span>
                  <span className="text-yellow-400 font-bold text-sm sm:text-base">{avgExtraAbsenteeismDaysPerEmployee} days</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                  <span className="text-white font-medium text-sm sm:text-base">Engagement Score:</span>
                  <div className="text-right">
                    <div className={`font-bold text-base sm:text-lg ${getEngagementColor(engagementScore[0])}`}>
                      {engagementScore[0]}/10
                    </div>
                    <div className={`text-xs sm:text-sm ${getEngagementColor(engagementScore[0])}`}>
                      {getEngagementLabel(engagementScore[0])}
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="w-full mt-6 sm:mt-8 bg-[#00FFAB] hover:from-gray-600 hover:to-gray-500 text-black py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => {
                  setShowResults(false);
                  setEmail('');
                  setPhoneNumber('');
                  setSubmitStatus(null);
                  setValidationErrors({});
                }}
              >
                Recalculate ROI
              </button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="bg-black border-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl order-1 xl:order-2">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00FFAB] mb-2">Your Engagement Impact</h2>
                <p className="text-gray-400 text-sm sm:text-base">The financial reality of employee engagement</p>
              </div>
              
              {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-white text-lg sm:text-2xl font-bold">{formatINR(roiData.totalHiddenLoss)}</div>
                  <div className="text-white text-xs sm:text-sm font-bold">Total Hidden Cost</div>
                </div>
                <div className="bg-green-900 bg-opacity-20 border border-[#00FFAB] rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-white text-lg sm:text-2xl font-bold">
                    {formatINR(roiData.potentialSavingsMax)}
                  </div>
                  <div className="text-white text-xs sm:text-sm font-bold">Potential Savings</div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-black bg-opacity-30 rounded-xl p-3 sm:pl-4 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
                    <span className="text-white font-bold text-sm sm:text-base">Annual Disengagement Cost:</span>
                    <span className="text-red-400 font-bold text-base sm:text-lg">{formatINR(roiData.totalDisengagementCost)}</span>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 rounded-xl p-3 sm:pl-4 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
                    <span className="text-white font-bold text-sm sm:text-base">Annual Turnover Cost:</span>
                    <span className="text-[#00FFAB] font-bold text-base sm:text-lg">{formatINR(roiData.totalTurnoverCost)}</span>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 rounded-xl p-3 sm:pl-4 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
                    <div>
                      <div className="text-white font-bold text-sm sm:text-base">Potential Revenue Boost:</div>
                      <div className="text-gray-400 text-xs sm:text-sm">From improved engagement</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-[#00FFAB] font-bold text-base sm:text-lg">
                        {formatINR(roiData.potentialRevenueIncreaseMin)}–{formatINR(roiData.potentialRevenueIncreaseMax)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 rounded-xl p-3 sm:pl-4 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-3">
                    <div>
                      <div className="text-white font-bold text-sm sm:text-base">Annual Savings Potential:</div>
                      <div className="text-gray-400 text-xs sm:text-sm">By improving engagement 1-2 points</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-[#00FFAB] font-bold text-base sm:text-lg">
                        {formatINR(roiData.potentialSavingsMin)}–{formatINR(roiData.potentialSavingsMax)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pie Chart */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center">Cost Breakdown Analysis</h3>
                <div className="bg-black bg-opacity-30 rounded-xl p-3 sm:p-4">
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={35}
                        labelLine={false}
                        animationDuration={1200}
                        animationBegin={0}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Legend */}
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mt-2">
                    {pieData.map((entry, index) => (
                      <div key={entry.name} className="flex items-center justify-center sm:justify-start">
                        <div 
                          className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
                          style={{backgroundColor: COLORS[index]}}
                        ></div>
                        <span className="text-white text-xs sm:text-sm font-medium">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ROI Summary */}
              <div className="mt-6 sm:mt-8 bg-black bg-opacity-50 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-[#00FFAB] mb-2 sm:mb-3 text-center">💡 Key Insights</h4>
                <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <div>• Your organization could save <span className="text-[#00FFAB] font-bold">{formatINR(roiData.potentialSavingsMax)}</span> annually by improving engagement</div>
                  <div>• Engaged employees could boost revenue by <span className="text-[#00FFAB] font-bold">{formatINR(roiData.potentialRevenueIncreaseMax)}</span></div>
                  <div>• Current engagement level is costing you <span className="text-red-400 font-bold">{formatINR(roiData.totalHiddenLoss)}</span> per year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Contact Modal - Mobile Responsive */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-black border border-gray-700 p-4 sm:p-6 lg:p-8 rounded-2xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-[#00FFAB] to-[#00E69B] p-2 sm:p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#00FFAB] mb-2">Get Your Detailed ROI Report</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Enter your contact details to receive your comprehensive engagement analysis</p>
            </div>
            
            {/* Status Messages in Modal */}
            {submitStatus === "success" && (
              <div className="bg-green-900/20 border border-[#00FFAB] rounded-lg p-3 sm:p-4 flex items-start gap-3 animate-fade-in mb-4">
                <CheckCircle className="text-[#00FFAB] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-[#00FFAB] text-xs sm:text-sm">
                  ROI calculation submitted successfully!
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-900/20 border border-red-400 rounded-lg p-3 sm:p-4 flex items-start gap-3 animate-fade-in mb-4">
                <AlertCircle className="text-red-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-red-400 text-xs sm:text-sm">
                  Failed to submit. Please try again.
                </span>
              </div>
            )}
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2 text-xs sm:text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your@company.com"
                  required
                  className={inputClasses('email')}
                />
                {validationErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-white font-medium mb-2 text-xs sm:text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="+91 98765 43210"
                  required
                  className={inputClasses('phoneNumber')}
                />
                {validationErrors.phoneNumber && (
                  <p className="text-red-400 text-xs mt-1">{validationErrors.phoneNumber}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowContactModal(false);
                    setEmail('');
                    setPhoneNumber('');
                    setValidationErrors({});
                    setSubmitStatus(null);
                  }}
                  className="w-full sm:flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleContactSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-gradient-to-r from-[#00FFAB] to-[#00E69B] hover:from-[#00E69B] hover:to-[#00FFAB] text-black py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Get My ROI Report"
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
              🔒 Your information is secure and will only be used to send your ROI report
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out; 
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: #00FFAB;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00E69B;
        }

        /* Mobile touch improvements */
        @media (max-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 28px;
            height: 28px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 28px;
            height: 28px;
          }
        }

        /* Ensure modal doesn't exceed viewport on small screens */
        @media (max-height: 600px) {
          .max-h-\[90vh\] {
            max-height: 90vh;
          }
        }
      `}</style>
    </div>
  );
}