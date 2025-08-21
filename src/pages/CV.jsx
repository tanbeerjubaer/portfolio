import React from "react";

const CV = () => {
  return (
    <div>
      <div className="border-b border-gray-200 mb-6">
        <h1 className="text-2xl font-bold">CV</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Academic CV - Tanbeer Jubaer</h2>
          <p className="text-sm text-gray-600">Click and drag to navigate through the CV</p>
        </div>
        
        <div className="relative" style={{ height: '80vh' }}>
          <iframe
            src="/portfolio/files/Academic_CV_Oitik.pdf"
            className="w-full h-full border-0"
            title="Tanbeer Jubaer CV"
            style={{ minHeight: '600px' }}
          />
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>💡 <strong>Tip:</strong> If the PDF doesn't load, try refreshing the page.</p>
      </div>
    </div>
  );
};

export default CV;
