import React from 'react';
import EngagementROICalculator from '../components/ROI_Calculator/EngagementROICalculator';
import BenchmarkInfo from '../components/ROI_Calculator/BenchmarkInfo';
import { CheckCircle, AlertCircle, Calculator, TrendingUp, Users, DollarSign } from "lucide-react";


const ROICalculator = () => {
  return (
    <div className="min-h-screen mt-10 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-white mb-6">
            Employee Engagement ROI Calculator
          </h1>
          <div
            className="w-72 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <p className="text-white text-md font-medium max-w-3xl mx-auto mt-4">
          Discover the hidden costs of employee disengagement and unlock your organization's true potential. <br />
          Our advanced calculator reveals how much money you're losing to turnover, reduced productivity, 
          and absenteeism while showing the incredible ROI of investing in employee engagement.
          </p>
          
          {/* Centered Feature Cards Section */}
          <div className="flex justify-center items-center inset-0 pointer-events-none m-10">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl inset-0 pointer-events-auto">
              <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-gray-800">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#00FFAB]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Calculate Hidden Costs</h3>
                <p className="text-white">Uncover the true financial impact of employee disengagement on your bottom line</p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-gray-800">
                <div className="flex justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-[#00FFAB]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Potential Savings</h3>
                <p className="text-white">See how much you could save by improving engagement by just 1-2 points</p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-gray-800">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-[#00FFAB]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Revenue Impact</h3>
                <p className="text-white">Discover how engaged employees directly contribute to increased revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Component */}
        <EngagementROICalculator />

        {/* Benchmark Info Component */}
        <BenchmarkInfo />
      </div>
    </div>
  );
};

export default ROICalculator;