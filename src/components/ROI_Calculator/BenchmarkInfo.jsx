import React from 'react';

// Custom Card components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const BenchmarkInfo = () => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <Card className="bg-black border-gray-800 border-2">
          <CardContent className="p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#00FFAB] mb-6 sm:mb-8">Our Approach & Key Benchmarks</h3>
            
            {/* Main Features */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0">⚡</div>
                <p className="text-white text-base sm:text-lg">Uses your company's data for accurate cost estimates.</p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-blue-400 text-xl sm:text-2xl flex-shrink-0">📊</div>
                <p className="text-white text-base sm:text-lg">
                  Calculates costs for <span className="font-bold text-white">employee disengagement</span> and <span className="font-bold text-white">turnover</span>.
                </p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0">💰</div>
                <p className="text-white text-base sm:text-lg">
                  <span className="font-bold text-white">Find clear savings</span> by boosting team engagement.
                </p>
              </div>
            </div>

            {/* ROI Calculation Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">How We Calculate Your ROI:</h4>
              <ul className="space-y-3 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    <span className="font-bold">Disengagement Cost:</span> Estimated from lost productivity and extra absenteeism days.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    <span className="font-bold">Turnover Cost:</span> Calculated by multiplying employees who left by replacement cost.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    <span className="font-bold">Potential Revenue Increase:</span> Projected based on improved engagement impact.
                  </span>
                </li>
              </ul>
            </div>

            {/* Industry Benchmarks Section */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Industry Benchmarks Used:</h4>
              <ul className="space-y-3 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    Productivity loss from disengaged employees: <span className="font-bold text-[#00FFAB]">34% of annual salary</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    Average cost to replace an employee: <span className="font-bold text-[#00FFAB]">125% of annual salary</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-white text-base sm:text-lg">
                    Highly engaged companies see <span className="font-bold text-[#00FFAB]">2-5% higher annual revenue growth</span>.
                  </span>
                </li>
              </ul>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BenchmarkInfo;