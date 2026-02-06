import React from 'react';
import { FaFileDownload, FaFilePdf, FaFileWord, FaFileImage } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const DownloadCenter = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const documents = [
    {
      name: 'Admission Form 2026-27',
      description: 'Download and fill the admission application form',
      icon: FaFilePdf,
      size: '245 KB',
      type: 'PDF',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      downloadUrl: '#', // Replace with actual file URL
    },
    {
      name: 'School Prospectus',
      description: 'Complete information about our school and programs',
      icon: FaFilePdf,
      size: '1.2 MB',
      type: 'PDF',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      downloadUrl: '#',
    },
    {
      name: 'Fee Structure 2026-27',
      description: 'Detailed fee breakdown for all classes',
      icon: FaFilePdf,
      size: '180 KB',
      type: 'PDF',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      downloadUrl: '#',
    },
    {
      name: 'Documents Required List',
      description: 'List of documents needed for admission',
      icon: FaFileWord,
      size: '95 KB',
      type: 'DOC',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      downloadUrl: '#',
    },
    {
      name: 'TC Format',
      description: 'Transfer Certificate application format',
      icon: FaFilePdf,
      size: '120 KB',
      type: 'PDF',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      downloadUrl: '#',
    },
    {
      name: 'School Calendar 2026-27',
      description: 'Annual academic calendar and holidays',
      icon: FaFileImage,
      size: '650 KB',
      type: 'PNG',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      downloadUrl: '#',
    },
  ];

  const handleDownload = (doc) => {
    // In production, this would download the actual file
    // For now, we'll show an alert
    alert(`Downloading: ${doc.name}\n\nTo enable: Upload your ${doc.type} file to /public/documents/ folder and update downloadUrl in DownloadCenter.jsx`);
    
    // Uncomment below for actual downloads:
    // const link = document.createElement('a');
    // link.href = doc.downloadUrl;
    // link.download = doc.name;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div 
        ref={headerRef}
        className={`transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl font-bold text-primary-800 mb-2">Download Center</h2>
        <p className="text-gray-600 mb-8">
          Download important documents, forms, and information
        </p>
      </div>

      <div 
        ref={cardsRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {documents.map((doc, index) => {
          const BgColorClass = doc.bgColor.replace('dark:bg-red-900/20', '').replace('dark:bg-blue-900/20', '').replace('dark:bg-green-900/20', '').replace('dark:bg-indigo-900/20', '').replace('dark:bg-purple-900/20', '').replace('dark:bg-orange-900/20', '').trim();
          
          return (
            <div
              key={index}
              className={`group relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary-400 duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => handleDownload(doc)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${BgColorClass} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <doc.icon className={`text-3xl ${doc.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                {doc.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {doc.description}
              </p>

              {/* File Info */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="bg-white px-2 py-1 rounded font-medium border border-gray-200">
                  {doc.type}
                </span>
                <span>{doc.size}</span>
              </div>

              {/* Download Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaFileDownload className="text-2xl text-primary-600" />
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 rounded-xl transition-all pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-sm text-gray-700">
          <strong>📌 Note:</strong> All documents are in PDF format unless specified. If you face any issues downloading, please contact us at{' '}
          <a href="tel:+919896941400" className="text-primary-600 font-medium hover:underline">
            +919896941400
          </a>
        </p>
      </div>
    </div>
  );
};

export default DownloadCenter;
